var SafaController = (function(){
	var instance;
	function init(){
		var safa={};
		var tipBol = true;
		safa.tip = function(){
			$("#safaTip").on("click",function(){
				if(tipBol){
					$("#safa2").fadeIn();
					$("#safa1").fadeOut();
					$("#safaTip .tipTitle").animate({"left":"50%"})
					$("#safaTip .tipTitle").eq(0).hide();
					$("#safaTip .tipTitle").eq(1).show();
				}else{
					$("#safa2").fadeOut();
					$("#safa1").fadeIn();
					$("#safaTip .tipTitle").animate({"left":"0%"});
					$("#safaTip .tipTitle").eq(1).hide();
					$("#safaTip .tipTitle").eq(0).show();
				}
				tipBol = !tipBol;
			})
			
		}
		return safa;
	}
	return function(){
		if(!instance){
			instance = init()
		}
		return instance;
	}
})()
