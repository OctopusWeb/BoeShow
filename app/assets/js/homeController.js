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
			$at.CanvasMove(carSoure[carNum],1200,600);
		},100);
		hammer.on("pan", function (e) {
			carNum = parseInt(e.deltaX/3);
			carNum>=72?carNum=carNum%72:carNum=carNum;
			carNum<0?carNum=71+carNum%72:carNum=carNum;
			$at.CanvasMove(carSoure[carNum],1200,600);
	   });
	}
	function show(){
		$at.NumberAnimate(0,100,homeInterver);
		function homeInterver(num){ 
			var interior1 = parseInt(num*0.25);
			interior.eq(0).html(interior1+"℃");
			var interior2 = parseInt(num*0.28);
			interior.eq(1).html(interior2+"℃");
			
			var proBarnum1 = parseInt(num*3.53)
			var proBarnum2 = parseInt(num*0.24)
			var proBarnum3 = parseInt(num*1.13)
			var proBarwid1 = parseInt(num*0.53)
			var proBarwid2 = parseInt(num*0.84)
			var proBarwid3 = parseInt(num*0.13)
			proBar.eq(0).find("p").html(proBarnum1);
			proBar.eq(1).find("p").html(proBarnum2);
			proBar.eq(2).find("p").html(proBarnum3);
			proBar.eq(0).find(".bar").width(proBarwid1+"%");
			proBar.eq(1).find(".bar").width(proBarwid2+"%");
			proBar.eq(2).find(".bar").width(proBarwid3+"%");
			
			var carPowernum = parseInt(num*0.82);
			var carPowerwid = parseInt(num*4*0.82)
			carPower.find("span").html(carPowernum+"%");
			carPower.find(".powerBar2").width(carPowerwid+"px");
		}
//		$at.NumberAnimate(123,242,"",proNum1);
//		function proBar1(str){
//			var self = proBar.eq(0);
//			self.find("p").html(str);
//			self.find("bar").width()
//		}
	}
	function hide(){
		console.log("hide");
	}
	function init(){
		var home={};
		home.carMove = carMove;
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
