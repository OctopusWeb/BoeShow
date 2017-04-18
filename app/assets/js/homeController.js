var HomeController = (function(){
	var instance;
	var interior = $("#carNum p");
	var proBar = $(".proBar");
	var carPower = $("#carPower");
	function carMove(){
		var carNum=0;
		var carSoure = $at.PictureSoure("assets/img/car/s_00",0,72);
		var hammer = new Hammer(document.getElementById("carPic"));
		setTimeout(function(){
			$at.CanvasMove(carSoure[carNum],1080,600,"carCanvas");
		},500);
		hammer.on("pan", function (e) {
			carNum = parseInt(e.deltaX/3);
			carNum>=72?carNum=carNum%72:carNum=carNum;
			carNum<0?carNum=71+carNum%72:carNum=carNum;
			$at.CanvasMove(carSoure[carNum],1080,600,"carCanvas");
	  }); 
	}
	function carBkMove(){
		var carBkNum=0;
		var carBkSoure = $at.PictureSoure("assets/img/carBk/s_00",0,50);
		setInterval(function(){
			carBkNum++
			carBkNum == 50?carBkNum=0:carBkNum=carBkNum;
			$at.CanvasMove(carBkSoure[carBkNum],1080,300,"carBkCanvas");
		},100)
	}
	function show(){
		hide();
		$at.NumberAnimate(0,100,homeInterver);
		proBar.eq(0).find(".bar").animate({width:53+"%"},1000);
		proBar.eq(1).find(".bar").animate({width:87+"%"},1000);
		proBar.eq(2).find(".bar").animate({width:22+"%"},1000);
		carPower.find(".powerBar2").animate({width:282+"px"},1000);
		function homeInterver(num){ 
			var interior1 = parseInt(num*0.25);
			interior.eq(0).html(interior1+"℃");
			var interior2 = parseInt(num*0.28);
			interior.eq(1).html(interior2+"℃");
			
			var proBarnum1 = parseInt(num*3.53)
			var proBarnum2 = parseInt(num*0.24)
			var proBarnum3 = parseInt(num*1.13)
			proBar.eq(0).find("p").html(proBarnum1);
			proBar.eq(1).find("p").html(proBarnum2);
			proBar.eq(2).find("p").html(proBarnum3);
			
			var carPowerwid = parseInt(num*0.82)
			carPower.find("span").html(carPowerwid+"%");
		}
	}
	
	function hide(){
		proBar.find(".bar").eq(0).width(0);
		proBar.find(".bar").eq(1).width(0);
		proBar.find(".bar").eq(2).width(0);
		interior.eq(0).html(0+"℃");
		interior.eq(1).html(0+"℃");
		proBar.eq(0).find("p").html(0);
		proBar.eq(1).find("p").html(0);
		proBar.eq(2).find("p").html(0);
		carPower.find("span").html(0+"%");
		carPower.find(".powerBar2").width(0+"%");
	}
	function init(){
		var home={};
		home.carMove = carMove;
		home.carBkMove = carBkMove;
		home.show = show;
		home.hide = hide;
		return home;
	}
	return function(){
		if(!instance){
			instance = init();
		}
		return instance;
	}
})();
