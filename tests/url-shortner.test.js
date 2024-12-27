const UrlShortener = require('../src/url-shortner');

describe('UrlShortener', () => {
    let shortener;

    beforeEach(() => {
        shortener = new UrlShortener();
    });

    // Test for shorten()
    it('should generate a short URL for a given long URL', () => {
        const longUrl = 'https://example.com/some/long/path';
        const shortUrl = shortener.shorten(longUrl);
        expect(shortUrl).toMatch(/^http:\/\/short.ly\/[a-zA-Z0-9]{6}$/);
    });

    // Test for expand()
    it('should retrieve the original URL for a given short URL', () => {
        const longUrl = 'https://example.com/some/long/path';
        const shortUrl = shortener.shorten(longUrl);
        const retrievedUrl = shortener.expand(shortUrl);
        expect(retrievedUrl).toBe(longUrl);
    });

    // Test to handle non-existent or invalid URL
    it('should handle non-existent short URLs gracefully', () => {
        const shortener = new UrlShortener();
        const shortUrl = 'http://short.ly/invalid';
        const retrievedUrl = shortener.expand(shortUrl);
        expect(retrievedUrl).toBeNull();
    });

    // Test for unique short URLs
    it('should generate unique short URLs for different long URLs', () => {
        const longUrl1 = 'https://example.com/path1';
        const longUrl2 = 'https://example.com/path2';
        const shortUrl1 = shortener.shorten(longUrl1);
        const shortUrl2 = shortener.shorten(longUrl2);
        expect(shortUrl1).not.toBe(shortUrl2);
    });
});