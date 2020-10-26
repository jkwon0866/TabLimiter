let limit = 15;
//listens for updates to max tabs allowed
browser.runtime.onMessage.addListener((message)=>{
	limit = parseInt(message.maxCount);
});

