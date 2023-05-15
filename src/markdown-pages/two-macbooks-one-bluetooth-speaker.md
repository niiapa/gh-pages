---
path: "/blog/two-macbooks-one-bluetooth-speaker"
date: "2023-05-15"
title: "Two MacBooks, One Bluetooth Speaker"
tags: code, bash, bluetooth, blueutil, sleepwatcher, macos, homebrew, spotify
---

## Problem
I have 2 MacBooks and one Bluetooth speaker in my current desk setup, and it has been the bane of my existence since I resumed working from home.
I use only 1 MacBook at a time, and I switch between them depending on what I'm working on. The speaker can connect to both MacBooks at the same time, but, 
and it's a big BUTT, I can't use Spotify on either machine if both are connected. 
It's a weird issue with Spotify allowing you to control music with multiple devices so if I press "play" on one MacBook, the other MacBook will pause the music because 
it is also trying to play.

And I'm not gonna remember to close Spotify and/or disconnect the speaker every time I switch between laptops, so... I did the developer thing and
had the AI write me a script that I spent the next day rewriting because it didn't work on the first, or second, or third try 😂. 
Plot twist, I had to do some manual research (sources linked below).

> This tutorial was written as of `sleepwatcher` version 2.2.1

#### Tip:
`$` means run the command in your terminal (without the dollar sign)

## Synopsis
It's a simple script that uses two packages, `blueutil` and `sleepwatcher`.

#### [blueutil](https://github.com/toy/blueutil) 
- Tool that allows you to control Bluetooth on macOS
- Can view devices, connect, disconnect, etc.


#### [sleepwatcher](https://www.bernhard-baehr.de/)
- Tool that allows you to run scripts on sleep/wake events on macOS


## Solution
- Install Homebrew if you don't have it already 

    https://brew.sh/


- Install `blueutil` and `sleepwatcher` using homebrew
    ```bash
    $ brew install blueutil sleepwatcher
    ```

- Get the MAC address of your bluetooth device. It should be in the format (XX-XX-XX-XX-XX-XX)
    ```bash
    $ blueutil --paired
    ```

- Create a `./sleep` file in your HOME directory (`cd ~`) and fill in the following to disconnect your bluetooth device
    ```shell
    #!/bin/bash 
    DEVICE_ADDRESS="XX-XX-XX-XX-XX-XX"
    blueutil --disconnect $DEVICE_ADDRESS
    ```

- Create a `./wakeup` file in your HOME directory (`cd ~`) and fill in the following to connect your bluetooth device
    ```shell
    #!/bin/bash
    # Sleep for 10 seconds before attempting connection
    sleep 10
    DEVICE_ADDRESS="XX-XX-XX-XX-XX-XX"
    blueutil --connect $DEVICE_ADDRESS
    ```

- Make the files executable
    ```bash
    $ cd ~
    $ chmod +x .sleep .wakeup
    ```

- Symlink the sample plist file (which already lists `.sleep` and `.wakeup` in the HOME directory, so no need to configure manually), to the `~/Library/LaunchAgents` directory to install the system agent
    ```bash
    $ ln -sfv /opt/homebrew/Cellar/sleepwatcher/2.2.1/homebrew.mxcl.sleepwatcher.plist ~/Library/LaunchAgents/
    ```

- Load the configuration with launchd
    ```bash
    $ sudo launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/homebrew.mxcl.sleepwatcher.plist
    ```

And voila, you're done! 🎉



#### Sources:
- https://www.kodiakskorner.com/log/258

If you have any questions, feel free to hit me up on [Twitter](https://twitter.com/niiapa).