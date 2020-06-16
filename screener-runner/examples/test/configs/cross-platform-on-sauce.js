var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'ultimate-qa',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
    newSessionForEachState: true, //this forces screener to run a brand new sauce labs session for each screenshot

    //FINE TUNING THE AUTOMATION
    //This will hide the footer that is snapping to multiple snapshots
    hide: '#menu-footer-menu,.swp_social_panel',
    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
        {
          //This page has dynamic elements that only appear when they are scrolled into view
          //so we run a script to preload those elements
            // There is also a footer that will snap to several pages
          url: 'https://ultimateqa.com/selenium-webdriver-java-course/',
          name: 'Selenium webdriver course landing page',
          steps: new Steps()
          .executeScript('window.scrollTo(0,document.body.scrollHeight)')
          .wait(4000)
          .snapshot('Loaded')
          .end()
        }
    ]
};