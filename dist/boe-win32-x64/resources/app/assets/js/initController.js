$(function(){var e=[$("#home"),$("#music"),$("#location"),$("#data"),$("#form"),$("#call")],n=["SUN","MON","TUE","WED","THU","FRI","SAT"];!function(){var e=$("#timeInfo"),t=$("#escBtn"),o=$("#setScreen"),i=new Date,a=i.getMonth()+1;a=a<=9?"0"+a:a;var l=i.getDate();l=l<=9?"0"+l:l;var r=i.getDay(),c="2017-"+a+"-"+l;e.find("#dayTime").html(c),e.find("#week").html(n[r]),t.on("click",function(){o.fadeIn(),o.find("img").eq(0).fadeIn()}),o.on("click",function(){o.fadeOut(),o.find("img").fadeOut()})}();var t=new HomeController;t.carMove(),t.carBkMove();var o=new MusicController;o.tip(),o.ListInit(),o.domEvent();var i=new FmController;i.initList(),i.domEvent(),(new SafaController).tip();var a=new DataController;a.tip();var l=new CallController;l.tip(),l.headMove(),l.eventInt(),$("#homeBtn").on("click",function(){$("#escBtn").show(),$("#homeBtn").hide(),t.show(),$at.PageAnimate($("#home")),$("#menu li").removeClass("selected")}),$("#homeBtn").trigger("click"),$("#menu").on("click","li",function(){$("#escBtn").hide(),$("#homeBtn").show();var n=$("#menu li").index($(this));$at.PageAnimate(e[n+1]),$("#menu li").removeClass("selected"),$(this).addClass("selected"),2==n&&a.page1Show()})});
//# sourceMappingURL=maps/initController.js.map
