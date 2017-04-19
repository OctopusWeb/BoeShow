var CallController = (function(){
	var instance;
	var callBol = true;
	function init(){
		var call = {};
		var callTip = $("#callTip");
		var tipTitle = callTip.find(".tipTitle");
		call.tip = function(){
			callTip.on("click",function(){
				if(callBol){
					tipTitle.animate({"left":"50%"});
					tipTitle.eq(0).hide();
					tipTitle.eq(1).show();
				}else{
					tipTitle.animate({"left":"0%"});
					tipTitle.eq(1).hide();
					tipTitle.eq(0).show();
				}
				callBol = !callBol;
			});
		}
		return call;
	}
	return function(){
		if(!instance){
			instance = init()
		}
		return instance;
	}
})()
