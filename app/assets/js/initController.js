$(function(){
	var menu = [$("#home"),$("#music"),$("#location"),$("#data"),$("#form"),$("#call")];
	var homeController = new HomeController;
	var musicController = new MusicController();
	musicController.tip();
	musicController.ListInit();
	var musicBtn = $("#musicController");
	musicBtn.find(".play").on("click",function(){
		$(this).hide();
		musicBtn.find(".pause").show()
		musicController.play();
	})
	musicBtn.find(".pause").on("click",function(){
		$(this).hide();
		$(".musicRound").removeClass("musicRoundAnimate").addClass("musicRoundAnimate")
		musicBtn.find(".play").show()
		musicController.pause();
	})
	musicBtn.find(".pre").on("click",function(){
		musicController.pre();
	})
	musicBtn.find(".next").on("click",function(){
		musicController.next();
	})
	var safaController = new SafaController;
	safaController.tip();
	var dataController = new DataController;
	dataController.tip();
	homeController.carMove();
	homeController.carBkMove();
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
})
