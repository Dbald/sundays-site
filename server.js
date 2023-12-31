const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': 'cookieName=cookieValue; SameSite=Lax',
        // For SameSite=None, ensure you also use Secure
        'Set-Cookie': 'anotherCookie=anotherValue; SameSite=None; Secure',
    });
    res.end('Cookies set');
}).listen(3000);