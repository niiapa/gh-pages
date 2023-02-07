const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/niiapa/niiapa.github.io'
    },
    (err) => {
        if(err) {
            console.error('❌ Failed to deploy\n', err);
        } else {
            console.log('✅ Deploy Complete!');
        }
    }
);