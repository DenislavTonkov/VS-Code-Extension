# VS Code Extension Sample

This is a sample project that demonstrates how to create a Visual Studio Code extension that helps a user navigate an example website through VS Code. The extension allows the user to search for specific webpages on the website and open them in a new window.

## How to use

- Clone or download this repository and open it in VS Code.
- Press F5 to run the extension in a new VS Code window.
- In the new window, press Ctrl+Shift+P to open the command palette and type "searchWdSBlogExample" to run the command.
- Enter a keyword to search for webpages on the example website and press Enter.
- A list of matching webpages will appear in a quick pick menu. Select one to open it in a new window.

## Features

- The extension uses the [axios](https://github.com/axios/axios) library to make HTTP requests to the example website and parse the HTML response.
- The extension uses the [cheerio](https://github.com/cheeriojs/cheerio) library to extract the titles and URLs of the webpages from the HTML response.
- The extension uses the [open](https://github.com/sindresorhus/open) library to open the selected webpage in a new window.
