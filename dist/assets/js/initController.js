$(function(){var e=[$("#home"),$("#music"),$("#location"),$("#data"),$("#form"),$("#call")],n=["SUN","MON","TUE","WED","THU","FRI","SAT"];!function(){function e(){o.find("img").fadeOut();var e=parseInt(2.99*Math.random());o.find("img").eq(e).fadeIn()}var t,a=$("#timeInfo"),i=$("#escBtn"),o=$("#setScreen"),l=new Date,r=l.getMonth()+1;r=r<=9?"0"+r:r;var c=l.getDate();c=c<=9?"0"+c:c;var m=l.getDay(),d="2017-"+r+"-"+c;a.find("#dayTime").html(d),a.find("#week").html(n[m]),i.on("click",function(){o.fadeIn(),o.find("img").eq(1).fadeIn(),t=setInterval(e,5e3)}),o.on("click",function(){o.fadeOut(),o.find("img").fadeOut(),clearInterval(t)})}();var t=new HomeController;t.carMove(),t.carBkMove();var a=new MusicController;a.tip(),a.ListInit(),a.domEvent();var i=new FmController;i.initList(),i.domEvent(),(new SafaController).tip();var o=new DataController;o.tip(),(new CallController).tip(),$("#homeBtn").on("click",function(){$("#escBtn").show(),$("#homeBtn").hide(),t.show(),$at.PageAnimate($("#home")),$("#menu li").removeClass("selected")}),$("#homeBtn").trigger("click"),$("#menu").on("click","li",function(){$("#escBtn").hide(),$("#homeBtn").show();var n=$("#menu li").index($(this));$at.PageAnimate(e[n+1]),$("#menu li").removeClass("selected"),$(this).addClass("selected"),2==n&&o.page1Show()})});
//# sourceMappingURL=maps/initController.js.map
