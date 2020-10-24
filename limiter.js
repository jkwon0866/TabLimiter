let count = 0;
let limit = 15;
browser.tabs.query({}).then((tabArray)=>{
	count = tabArray.length;
	browser.notifications.create({
		"type": "basic",
		"title":"tab number",
		"message": count.toString()
	});
});
let overflowed = false;
//have the background listen for tab creation event.
browser.tabs.onCreated.addListener((tab)=>{
	if(count < limit){
		count += 1;
	}
	else{
		browser.tabs.remove(tab.id);
		overflowed = true;
	}
	browser.notifications.create({
		"type": "basic",
		"title":"tab number",
		"message": count.toString()
	});
});

browser.tabs.onRemoved.addListener((tab)=>{
	if(overflowed){
		overflowed = false;
		return;
	}
	if(count > 0){
		count -= 1;
	}
	browser.notifications.create({
		"type": "basic",
		"title":"tab number",
		"message": count.toString()
	});
});
