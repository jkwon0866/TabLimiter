//global variables in scope of webextension scripts
let count = 0;
let overflowed = false;


//set count to number of tabs
browser.tabs.query({}).then((tabArray)=>{
	count = tabArray.length;
});
//have the background listen for tab creation event.
browser.tabs.onCreated.addListener((tab)=>{
	if(limiter_on){
		/*
		browser.notifications.create({ "type": "basic",
		    "title": "Limiter_on status",
		    "message": limiter_on.toString()
		  });
		  */
		if(count < limit){
		browser.notifications.create({ "type": "basic",
		    "title": "Increasing!",
		    "message": count.toString()
		  });
			count += 1;
		}
		else{
			browser.tabs.remove(tab.id);
			overflowed = true;
		}
	}
});

//have the background listen for tab removal event (excluding automatic removal)
browser.tabs.onRemoved.addListener((tab)=>{
	if(overflowed){
		overflowed = false;
		return;
	}
	if(count > 0){
		count -= 1;
	browser.notifications.create({ "type": "basic",
	    "title": "Decreasing!",
	    "message": count.toString()
	  });
	}
});
