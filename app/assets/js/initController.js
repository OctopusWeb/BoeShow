$(function(){
	var menu = [$("#home"),$("#music"),$("#location"),$("#data"),$("#form"),$("#call")];
	var homeController = new HomeController;
	var safaController = new SafaController;
	safaController.tip();
	var dataController = new DataController;
	dataController.tip(); 
	
	$("#homeBtn").on("click",function(){
		$("#escBtn").show();
		$("#homeBtn").hide();
		homeController.carMove();
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
