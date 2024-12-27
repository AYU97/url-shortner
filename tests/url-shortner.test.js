const UrlShortener = require('../src/url-shortner');

describe('UrlShortener', () => {
    let shortener;

    beforeEach(() => {
        shortener = new UrlShortener();
    });

    it('should generate a short URL for a given long URL', () => {
        const longUrl = 'https://example.com/some/long/path';
        const shortUrl = shortener.shorten(longUrl);
        expect(shortUrl).toMatch(/^http:\/\/short.ly\/[a-zA-Z0-9]{6}$/);
    });

    it('should retrieve the original URL for a given short URL', () => {
        const longUrl = 'https://example.com/some/long/path';
        const shortUrl = shortener.shorten(longUrl);
        const retrievedUrl = shortener.expand(shortUrl);
        expect(retrievedUrl).toBe(longUrl);
    });

    it('should handle non-existent short URLs gracefully', () => {
        const shortener = new UrlShortener();
        const shortUrl = 'http://short.ly/invalid';
        const retrievedUrl = shortener.expand(shortUrl);
        expect(retrievedUrl).toBeNull();
    });
});