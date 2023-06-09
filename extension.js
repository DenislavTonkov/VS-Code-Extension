// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios');

// const xmlParser = require('fast-xml-parser');
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const res = await axios.get("https://blog.webdevsimplified.com/rss.xml");
	const parser = new XMLParser();
	const articles = parser.parse(res.data).rss.channel.item.map
	(article => {
		return {
			label: article.title,
			detail: article.description,
			link: article.link,
		}
	})

	console.log(articles)
	
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chatgpt-search-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		'chatgpt-search-extension.searchWdSBlogExample', 
		async function () {
			// article waits until someone picks something from the menu and then returns
			// it as a result!
			const article = await vscode.window.showQuickPick(articles, {
				matchOnDetail: true,
			})

			if (article == null) return

			vscode.env.openExternal(article.link)
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
