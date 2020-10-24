//listens for changes to max count value
let controller = document.getElementById("maxTabs");
controller.addEventListener("change",()=>{
	//upon change, sends the new value to background scripts to update limit
	browser.runtime.sendMessage({
		maxCount : controller.value.toString()
	});
});
