var screenerConfig = require('./cross-platform-on-sauce');

//What are all of the browsers that we want to test against
//If you would like to run on Edge or Safari, you need to have a Sauce Labs account

screenerConfig.browsers = [
    {
        browserName: 'safari',
        version: '11.1'
    }
];
screenerConfig.resolutions = [
    {
        deviceName: 'iPhone X'
    },
    {
        deviceName: 'iPhone 8 Plus'
    },
    {
        deviceName: 'iPhone 8'
    },
    {
        deviceName: 'Nexus 10'
    },
    {
        deviceName: 'Galaxy S8'
    }
];
screenerConfig.sauce = {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    maxConcurrent: 100, // optional available concurrency you have from Sauce Labs
    //extendedDebugging: true, // optional
    //tunnelIdentifier: 'MyTunnel01' // optional
};

module.exports = screenerConfig;