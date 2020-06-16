var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'jo-malone',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
    newSessionForEachState: true, //this forces screener to run a brand new sauce labs session for each screenshot
    diffOptions: {
        structure: true
    },
    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
        {
            //This page has dynamic elements that only appear when they are scrolled into view
            url: 'https://wwwtmp.jomalone.co.uk/product/25969/14207/home/red-roses-home-candle?size=200g',
            name: 'Structure diff option',
        },

    ],
    //What are all of the browsers that we want to test against
    browsers: [
        {
            browserName: 'chrome'
        }
    ]
};