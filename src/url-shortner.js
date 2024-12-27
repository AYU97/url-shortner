class UrlShortener {
    constructor() {
        this.urlMap = new Map();
    }

    /**
     * Shortens a given long URL.
     * @param {string} longUrl - The URL to shorten.
     * @returns {string} - The shortened URL.
    */
    shorten(longUrl) {
        const shortId = Math.random().toString(36).substring(2, 8);
        const shortUrl = `http://short.ly/${shortId}`;
        if (!this.urlMap.has(shortUrl)) {
            this.urlMap.set(shortUrl, longUrl);
        }
        return shortUrl;
    }

    /**
     * Expands a shortened URL to its original URL.
     * @param {string} shortUrl - The shortened URL.
     * @returns {string|null} - The original URL or null if not found.
    */
    expand(shortUrl) {
        return this.urlMap.get(shortUrl) || null;
    }
}

module.exports = UrlShortener;