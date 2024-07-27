const http = require('https');

const options = {
	method: 'POST',
	hostname: 'email-finder12.p.rapidapi.com',
	port: null,
	path: '/enrich/',
	headers: {
		'x-rapidapi-key': 'c753760241msh4aafaa1fda97f81p1b0a40jsnf163a2a6b34f',
		'x-rapidapi-host': 'email-finder12.p.rapidapi.com',
		'Content-Type': 'application/json'
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

req.write(JSON.stringify({
  first_name: 'Support',
  last_name: 'Prospectjet',
  company_domain: 'prospectjet.com'
}));
req.end();
