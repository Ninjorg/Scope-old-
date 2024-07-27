const http = require('https');

const options = {
	method: 'GET',
	hostname: 'website-social-scraper-api.p.rapidapi.com',
	port: null,
	path: '/contacts?website=https%3A%2F%2Fwww.autodesk.com%2Fblogs%2Fwater%2F2024%2F01%2F10%2Fwill-the-world-run-out-of-water%2F%23%3A~%3Atext%3DSo%252C%2520will%2520the%2520world%2520run%2Cit%2520will%2520require%2520some%2520work.',
	headers: {
		'x-rapidapi-key': 'your-key',
		'x-rapidapi-host': 'website-social-scraper-api.p.rapidapi.com'
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
