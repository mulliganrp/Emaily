// keys.js -- figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}


googleClientID: '166645623056-paqnot043ktj6f6d2339jhlq562e0256.apps.googleusercontent.com',
googleClientSecret: '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',
mongoURI: 'mongodb+srv://mulliganrp:2PRWiXN8qRtpTmiz@cluster0.4wlroue.mongodb.net/emailyprod?retryWrites=true&w=majority'