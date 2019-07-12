const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/niiapa/niiapa.github.io'
    },
    () => {
        console.log('Deploy Complete!');
    }
);