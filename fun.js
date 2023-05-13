const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();
	const pager = await page.goto('https://my.sa.ucsb.edu/gold/Home.aspx');
	const title = await page.title();
	console.log(title);
	if(pager.url(pager).indexOf("Login") !== -1) {
		console.log("bitch log in");
	}
	else {
		console.log("ayy you logged in");
	}
	//const result = await page.$('.row session div.col-lg-days col-lg-push-instructor col-md-push-instructor col-lg-push-0 col-sm-days col-sm-push-3 col-xs-2 div.visible-xs');
	//console.log(result);
	await browser.close();
})();

