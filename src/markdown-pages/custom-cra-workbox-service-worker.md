---
path: "/blog/custom-cra-workbox-service-worker"
date: "2020-05-07"
title: "Custom Worbox Service Worker for Create React App (CRA)"
tags: javascript, typescript, node, cra
---

>This tutorial was written as of `"react-scripts": "^3.4.1"`.

As we all know, `create-react-app` makes starting development on a react project fairly easy. 
It's a great starting point to get your app up and running, however, sometimes when you need that extra bit of functionality that's not provided out the box, you can find that it can be quite a mess to figure out. Particularly for my case, where I needed to have my own custom workbox setup for a project.

Short of ejecting your app (don't do it if you don't know what you're doing), there's few other options to extend webpack functionality such as:
- [react-app-rewired](https://github.com/timarney/react-app-rewired) (which stopped supporting CRA past version 2.~ of `react-scripts`)
- [craco](https://github.com/gsoft-inc/craco) (kindly like `react-app-rewired` with support for 3.~ support for `react-scripts`)


I tried both of these tools, `react-app-rewired` for over a year, and `craco` for a short period when I finally wanted to update my project dependencies from `react-scripts` v1.something... (Yes... it was that old). 
And for most of my issues, the above tools solved my problem.

_At this point I'd say check the above tools out to see if they provide the functionality you're looking for before proceeding any further. No need to reinvent the wheel if you musn't._

I found I needed more functionality from my workbox than what the above tools plugins provided. Particularly, I wanted to implement `backgroundSync` which essentially provides a way to queue up failed requests and retry them (even in the background) when connectivity is restored.

>I will not be covering `backgroundSync` in this post, but it's fairly easy to implement after this setup.

## Concept
It's hard to hook into `create-react-app`'s workbox setup solely through configuration. Instead, what we will implement is a set of scripts to replace the generated service worker `create-react-app` provides with our very own one 😈


## Setup
In your terminal at the root of your project, install the `workbox-cli` dependency (as a dev dependency).

npm: `npm install -D workbox-cli`

yarn: `yarn add --dev workbox-cli`

What this does is enable us to use a set of commands provided by the dependecy to generate our service worker script [[read more](https://developers.google.com/web/tools/workbox/modules/workbox-cli)]

Next we're going to prep our scripts in our `package.json` which will handle building our own service-worker, and removing the generated one.

In your `package.json` file, add the following scripts:
```
"build-sw": "workbox injectManifest workbox.config.js",
"clean-cra-sw": "rm -f build/precache-manifest.*.js && rm -f build/service-worker.js",
"replace-sw": "npm run build-sw && npm run clean-cra-sw"
```

`build-sw`: Builds our service worker (with `workbox-cli`) based on config we will define later in `workbox.config.js`

`clean-cra-sw`: A unix based script to remove (`rm`) forcefully (`-f`) the precache-manifest files (which we won't need because our custom service worker will handle injecting it _`injectManifest`_), and the generated service worker

`replace-sw`: An npm script to run first the `build-sw` script and then the `clean-cra-sw` script


Finally, what we want to do is append our replacement script, `replace-sw`, to our existing build script.
In your `package.json` file, add the following to the end of your build script (without the ...):
`build`: `...&& npm run replace-sw`


## Workbox Configuration
In the root of your application, (where your `package.json` lives (not inside your `src` directory)), create a `workbox.config.js` file.
This will hold the basic configuration for workbox.

In the file, add the following lines of code:
```
module.exports = {
	swSrc: 'src/sw-custom.js',
	swDest: 'build/sw.js',
	globDirectory: 'build',
	globPatterns: [
		"**/*.{js,css,html,png,svg}"
	],
};
 ```

 This basically sets our source file for extra workbox setup for `workbox-cli` to work with, a destination directory where our generated service-worker (called `sw.js`) will live, and some other basic setup info.

 The default generated service worker is usually called `service-worker.js|ts` and lives in the build directory. To this effect, the `serviceWorker.js` file that registers or unregisters our service worker (provided by default by `create-react-app`) references this file.

 Seeing as we would want our own service worker that we build to be used in the registration/unregistration process, we need to make a tiny tweak the the `serviceWorker.js` file provided to us.

 In the file, find the following line: 
 ```
 const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
 ```
 and replace the last part to refer to our to-be-built service worker: 
 ```
 const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
 ```

 Now when you call the `register()` method of the `serviceWorker.js|ts` file, our service worker will be utilized.


 ## Custom Service Worker
 The final bit to glue everything together is the missing `sw-custom.js` file referenced in our `workbox.config.js`.
 In this file we will define an injection point for our manifest, and any other workbox modules we want to utilize (like caching or `backgroundSync`) will go in here.

 Inside your `src` directory, create a `sw-custom.js` file and fill it with the following:
 ```
if ('function' === typeof importScripts) {
	importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

	// Workbox loaded
	if (workbox) {
		if (self && self.location && self.location.hostname === 'localhost') {
			console.log('Localhost detected. Running Workbox in debug mode!');
			workbox.setConfig({ debug: true });
		}

		// We have access to all the workbox modules here so 
        // we can configure our service worker how we want

		// Manifest injection point
		workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

        /**
         * BEYOND THIS POINT, MOST OF THIS CONFIG IS UP TO YOU...
         * YOU CAN CUSTOMIZE YOUR WORKBOX SERVICE-WORKER HOWEVER YOU WANT
        **/

		// https://github.com/GoogleChrome/workbox/issues/2095
		const handler = workbox.precaching.createHandlerBoundToURL('/index.html');
		const navigationRoute = new workbox.routing.NavigationRoute(handler, {
			denylist: [/^\/__/, /\/[^\/]+.[^\/]+$/]
		});
		workbox.routing.registerRoute(navigationRoute);

		// Cache Images
		workbox.routing.registerRoute(
			new RegExp('regExForUrlForImagesHere'),
			new workbox.strategies.CacheFirst({
				cacheName: 'images'
			})
		);

		// JS, CSS caching
		workbox.routing.registerRoute(
			/\.(?:js|css)$/,
			new workbox.strategies.StaleWhileRevalidate({
				cacheName: 'static-resources'
			})
		);

		// Offline Google Analytics (if you want it)
		workbox.googleAnalytics.initialize();

        // You can fit other workbox modules and configure them how you want...
	} else {
		console.error(' Workbox could not be loaded. No offline support.');
	}
}
 ```

The code above glues together everything. We import the workbox script and as such, can utilize any sub-modules workbox provides to setup our perfect service worker.

>If you're working with typescript, modify your `tsconfig.json` to exclude any files that start with sw:
>```
>"include": [
> 	"src",
>     ...
>],
>"exclude": ["src/sw*"]
>```

And that's it. We're done! Our very own custom workbox service worker.
Thanks for following along.


References:
- https://developers.google.com/web/tools/workbox/modules/workbox-cli
- https://medium.com/@chinmaya.cp/custom-service-worker-in-cra-create-react-app-3b401d24b875


If you have any questions, feel free to hit me up on [Twitter](https://twitter.com/niiapa).