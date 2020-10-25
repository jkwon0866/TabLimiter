let limiter_on = true;

browser.browserAction.onClicked.addListener(()=>{
	/*
	browser.notifications.create({
	    "type": "basic",
	    "title": "browser action clicked",
	    "message": "You clicked the browser button!"
	});
	*/
	limiter_on = !limiter_on;	
	/*
	browser.management.setEnabled(browser.runtime.id,limiter_on);
	.then(
	browser.notifications.create({
	    "type": "basic",
	    "title": "browser action succeeded",
	    "message": limiter_on.toString()
	})).catch(
	browser.notifications.create({
	    "type": "basic",
	    "title": "browser action failed",
	    "message": limiter_on.toString()
	}));
	*/
});
