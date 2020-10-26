//listens for changes to max count value
let controller = document.getElementById("maxTabs");
let enabler = document.getElementById("on_off");
browser.notifications.create({
    "type": "basic",
    "title": "Time for cake!",
    "message": "yum"
  });
browser.notifications.create({
    "type": "basic",
    "title": "Time for cake!",
    "message": "double yum"
  });
controller.value = limit.toString();
enabler.value = last_button_state.toString();
controller.addEventListener("change",()=>{
        //upon change, sends the new value to background scripts to update limit
        browser.runtime.sendMessage({
                maxCount : controller.value.toString()
        });
});
enabler.addEventListener("click",()=>{
	if(enabler.value == "on"){
		enabler.value = "off";
		last_button_state = "off";
		limiter_on = true;
	}
	else{
		enabler.value = "on";
		last_button_state = "on";
		limiter_on = false;
	}
});
