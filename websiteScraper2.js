const http = require('https');

const options = {
	method: 'GET',
	hostname: 'website-contacts-scraper.p.rapidapi.com',
	port: null,
	path: '/scrape-contacts?query=google.com&match_email_domain=false&external_matching=true',
	headers: {
		'x-rapidapi-key': 'your-key',
		'x-rapidapi-host': 'website-contacts-scraper.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
