const UrlShortener = require('../src/url-shortner');

describe('UrlShortener', () => {
    it('should generate a short URL for a given long URL', () => {
        const shortener = new UrlShortener();
        const longUrl = 'https://example.com/some/long/path';
        const shortUrl = shortener.shorten(longUrl);
        expect(shortUrl).toMatch(/^http:\/\/short.ly\/[a-zA-Z0-9]{6}$/);
    });
});