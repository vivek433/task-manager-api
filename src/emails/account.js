const mailgun = require("mailgun-js");
const DOMAIN = 'https://api.mailgun.net/v3/sandbox9361d4ea383e473eadf0a3e07b326f9c.mailgun.org'
const api_key='c4d90a31fa9e3672351270e100322345-02fa25a3-cd6a6123'
const mg = mailgun({apiKey:api_key , domain: DOMAIN});
const data = {
	from: DOMAIN,
	to: 'vp444625@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
    console.log(error)
});