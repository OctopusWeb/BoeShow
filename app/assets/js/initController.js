$(function(){
	var menu = [$("#home"),$("#music"),$("#location"),$("#data"),$("#form"),$("#call")];
	var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
	topInit();
	
	
	var homeController = new HomeController;
	homeController.carMove();
	homeController.carBkMove();
	
	var musicController = new MusicController();
	musicController.tip();
	musicController.ListInit();
	musicController.domEvent();
	
	var fmController = new FmController();
	fmController.initList();
	fmController.domEvent();
	
	var safaController = new SafaController;
	safaController.tip();
	
	var dataController = new DataController;
	dataController.tip();
	
	$("#homeBtn").on("click",function(){
		$("#escBtn").show();
		$("#homeBtn").hide();
		homeController.show();
		$at.PageAnimate($("#home"));
		$("#menu li").removeClass("selected");
	})
	$("#homeBtn").trigger("click");
	$("#menu").on("click","li",function(){
		$("#escBtn").hide();
		$("#homeBtn").show();
		var index = $("#menu li").index($(this));
		$at.PageAnimate(menu[index+1]);
		$("#menu li").removeClass("selected");
		$(this).addClass("selected");
		if(index == 2){
			dataController.page1Show();
		}
	})
	function topInit(){
		var screenInter;
		var timeInfo = $("#timeInfo");
		var escBtn = $("#escBtn");
		var setScreen = $("#setScreen");
		var date = new Date();
		var m = date.getMonth()+1;
		m<=9?m="0"+m:m=m;
		var d = date.getDate();
		d<=9?d="0"+d:d=d;
		var w = date.getDay();
		var today = "2017-"+m+"-"+d;
		timeInfo.find("#dayTime").html(today);
		timeInfo.find("#week").html(week[w]);
		escBtn.on("click",function(){
			setScreen.fadeIn();
			setScreen.find("img").eq(1).fadeIn();
			screenInter = setInterval(screenFun,5000);
		})
		setScreen.on("click",function(){
			setScreen.fadeOut();
			setScreen.find("img").fadeOut();
			clearInterval(screenInter);
		})
		function screenFun(){
			setScreen.find("img").fadeOut();
			var index = parseInt(Math.random()*2);
			setScreen.find("img").eq(index).fadeIn();
		}
	}
})
