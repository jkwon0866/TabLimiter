//listens for changes to max count value
let controller = document.getElementById("maxTabs");
let enabler = document.getElementById("on_off");


//started when document is loaded
document.addEventListener("DOMContentLoaded",()=>{
	/*
	browser.notifications.create({
	    "type": "basic",
	    "title": "Changed controller value!",
	    "message": "heyo"
	  });
	  */
	browser.storage.local.get("maxtabs")
	.then((result)=>{
		if(result.maxtabs == undefined){
			controller.value = "12";
		}
		else{
			controller.value = result.maxtabs;
		}
	});
	browser.storage.local.get("onoff")
	.then((result)=>{
		if(result.onoff == undefined){
			enabler.value = "on";
		}
		else{
			enabler.value = result.onoff;
			browser.runtime.sendMessage({
				limit_ : controller.value,
				limiter_on_ : enabler.value == "on"
			});
		}
	});
});
controller.addEventListener("change",()=>{
        //upon change, sends the new value to background scripts to update limit
        browser.runtime.sendMessage({
                limit_ : controller.value,
		limiter_on_ : enabler.value == "on"
        });
	/*
	browser.notifications.create({
	    "type": "basic",
	    "title": "Changed controller value!",
	    "message": controller.value
	  });
	  */
	browser.storage.local.set({
		maxtabs : controller.value
	});
});
enabler.addEventListener("click",()=>{
	if(enabler.value == "on"){
		enabler.value = "off";
		browser.storage.local.set({onoff: "off"});
		browser.runtime.sendMessage({
			limit_ : controller.value,
			limiter_on_ : false
		});
	}
	else{
		enabler.value = "on";
		browser.storage.local.set({onoff: "on"});
		browser.runtime.sendMessage({
			limit_ : controller.value,
			limiter_on_ : true
		});
	}
});
