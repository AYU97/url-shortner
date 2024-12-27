class UrlShortener {
    constructor() {
        this.urlMap = new Map();
    }

    shorten(longUrl) {
        const shortId = Math.random().toString(36).substring(2, 8);
        const shortUrl = `http://short.ly/${shortId}`;
        if (!this.urlMap.has(shortUrl)) {
            this.urlMap.set(shortUrl, longUrl);
        }
        return shortUrl;
    }

    expand(shortUrl) {
        return this.urlMap.get(shortUrl) || null;
    }
}

module.exports = UrlShortener;