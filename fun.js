const puppeteer = require('puppeteer');
const url = require('url');

(async () => {
	const browser = await puppeteer.launch({ headless: "new" });
	page = await browser.newPage();
	await page.goto('https://my.sa.ucsb.edu/gold/Home.aspx');
	pager = new URL('https://my.sa.ucsb.edu/gold/Home.aspx');
	const title = await page.title();
	console.log(title);
	if(page.url(page).indexOf("Login") !== -1) {
		console.log("bitch log in");
		//const loginPopup = window.open(pager.url(pager), 'login', 'width=400,height=300');

		// Wait for the window to finish loading
		//loginPopup.addEventListener('load', () => {
		// Find the username and password input fields
		//	const usernameField = loginPopup.document.querySelector('#pageContent_userNameText');
		//	const passwordField = loginPopup.document.querySelector('#pageContent_passwordText');

		// Set the values of the input fields
		const usernameField = await page.$('#pageContent_userNameText');
		if (usernameField) {
			// Found the username field
			await usernameField.type('username');
		} else {
			// Could not find the username field
			console.log('Could not find the username field');
		}

		const passwordField = await page.$('#pageContent_passwordText');
		if (passwordField) {
			// Found the password field
			await passwordField.type('password');
		} else {
			// Could not find the password field
			console.log('Could not find the password field');
		}


		//await usernameField.type('bsaiju');
		//await passwordField.type('Bravosierra240!');


		// Find and click the login button
		//const loginButton = await page.$('#pageContent_loginButton');
		await page.click('#pageContent_loginButton');
		await page.waitForTimeout(5000);

		//title = await page.title();
		const stuff = await page.url();
		console.log(stuff);
		console.log("woahhhhhh");
	} else {
		console.log("ayy you logged in");
	}
	//const result = await page.$('.row session div.col-lg-days col-lg-push-instructor col-md-push-instructor col-lg-push-0 col-sm-days col-sm-push-3 col-xs-2 div.visible-xs');
	//console.log(result);
	await browser.close();
})();

