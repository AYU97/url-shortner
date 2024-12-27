# URL Shortener

A simple project demonstrating TDD principles for building a URL Shortener in Node.js.

## Features

- Shortens long URLs.
- Expands shortened URLs back to their original.

## Installation

1. Clone the repository.
2. Run `npm install`.
3. Run tests using `npm test`.

### Git Commit Workflow

1. **Initial project setup with Jest.**
   - Added `package.json`, `.gitignore`.

2. **Wrote a failing test for shorten() method.**
   - Added `jest.config.js` and updated the `package.json` to handle `npm test`
   - Added the `shorten()` test in `tests/url-shortener.test.js`.

3. **Implemented shorten() to pass the test.**
   - Hardcoded return value in `shorten()` method.

4. **Wrote a failing test for expand() method.**
   - Added the `expand()` test in `tests/url-shortener.test.js`.

5. **Implemented expand() to pass the test and updated the shorten() to be dyanmic.**
   - Added a `Map` to store and retrieve URLs.
   - Updated the `shorten()` to be dynamic.