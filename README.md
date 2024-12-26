# URL Shortener

A simple project demonstrating TDD principles for building a URL Shortener in Node.js.

## Features

- Shortens long URLs.

## Installation

1. Clone the repository.
2. Run `npm install`.
3. Run tests using `npm test`.

### Git Commit Workflow

1. **Initial project setup with Jest.**
   - Added `package.json`, `.gitignore`.

2. **Wrote a failing test for shorten() method.**
   - Added `jest.config.js` and updated the `package.json` to handle `npm test`
   - Added the `shorten()` test in `tests/urlShortener.test.js`.

3. **Implemented shorten() to pass the test.**
   - Hardcoded return value in `shorten()` method.