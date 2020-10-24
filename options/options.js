let controller = document.getElementById("maxTabs");
controller.addEventListener("change",()=>{
	browser.runtime.sendMessage({
		maxCount : controller.value.toString()
	});
});
