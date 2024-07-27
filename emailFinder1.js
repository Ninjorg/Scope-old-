const http = require('https');

const options = {
	method: 'GET',
	hostname: 'email-finder4.p.rapidapi.com',
	port: null,
	path: '/find-emails?name=Ronit%20Parikh&email_domain=gmail.com&min_similarity=0',
	headers: {
		'x-rapidapi-key': 'c753760241msh4aafaa1fda97f81p1b0a40jsnf163a2a6b34f',
		'x-rapidapi-host': 'email-finder4.p.rapidapi.com'
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
