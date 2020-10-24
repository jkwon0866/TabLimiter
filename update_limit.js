browser.notifications.create({
	"type":"basic",
	"title":"maxTab",
	"message": "update_limit.js has started"
});
browser.runtime.onMessage.addListener((message)=>{
	limit = parseInt(message.maxCount);
	browser.notifications.create({
                "type":"basic",
                "title":"maxTab",
                "message": message.maxCount
        });
});

