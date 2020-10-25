//global variables in scope of webextension scripts
let count = 0;
let limit = 15;
let overflowed = false;

//set count to number of tabs
browser.tabs.query({}).then((tabArray)=>{
	count = tabArray.length;
});
//have the background listen for tab creation event.
browser.tabs.onCreated.addListener((tab)=>{
	if(!limiter_on) return;
	if(count < limit){
		count += 1;
	}
	else{
		browser.tabs.remove(tab.id);
		overflowed = true;
	}
});

//have the background listen for tab removal event (excluding automatic removal)
browser.tabs.onRemoved.addListener((tab)=>{
	if(!limiter_on) return;
	if(overflowed){
		overflowed = false;
		return;
	}
	if(count > 0){
		count -= 1;
	}
});
