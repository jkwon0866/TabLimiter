let limit = 7;
let limiter_on = true;
//listens for updates to max tabs allowed
browser.runtime.onMessage.addListener((message)=>{
	limit = parseInt(message.limit_);
	limiter_on = message.limiter_on_;
	if(limiter_on){
		browser.tabs.query({}).then((tabArray)=>{
			count = tabArray.length;
		});
	}
});

