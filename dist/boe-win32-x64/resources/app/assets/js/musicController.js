var MusicController=function(){function n(){function n(n){a=0;var i=p[n];l.html(i[0]),d.html(i[1]),f.find(".bar").width("0%"),f.find("p").html("00:00:00"),r.find(".head").attr({src:"assets/img/music/head"+(n+1)+".png"}),f.find("span").html("00:03:00"),u.find("li").removeClass("selected"),u.find("li").eq(n).addClass("selected")}function i(n){n>=180&&v.pause();var i=n%60,e=(n-i)/60,t="";t=i<10?"0"+i:i;var s="00:0"+e+":"+t;f.find(".bar").width(n/1.8+"%"),f.find("p").html(s)}function h(){var n=0,i=$at.PictureSoure("assets/img/musicCanvas/s2_00",49,98);clearInterval(t),t=setInterval(function(){n++,n=49==n?0:n,$at.CanvasMove(i[n],1080,570,"musicBk",870,400)},50)}function g(){var n=new Hammer(document.getElementById("event"));n.on("swipeleft",function(n){$("#music1Box").stop().animate({left:"-1080px"}),$(".roundBk").removeClass("selected"),$(".roundBk").eq(1).addClass("selected")}),n.on("swiperight",function(n){$("#music1Box").stop().animate({left:"0px"}),$(".roundBk").removeClass("selected"),$(".roundBk").eq(0).addClass("selected")})}var v={};return v.tip=function(){o.on("click",function(){s?(m.eq(0).fadeOut(),m.eq(1).fadeIn(),o.find(".tipTitle").eq(1).show(),o.find(".tipTitle").eq(0).hide(),o.find(".tipTitle").animate({left:"50%"})):(m.eq(0).fadeIn(),m.eq(1).fadeOut(),o.find(".tipTitle").eq(0).show(),o.find(".tipTitle").eq(1).hide(),o.find(".tipTitle").animate({left:"0%"})),s=!s})},v.ListInit=function(){for(var i="",e=0;e<p.length;e++)i+="<li>",i+='<img src="assets/img/music/head'+(e+1)+'.png" />',i+="<span>"+p[e][0]+"<strong>/"+p[e][1]+"</strong></span>",i+='<img src="assets/img/music/musicRight.png" class="musicRight"/></li>';i=i+i+i,u.html(i),u.on("click","li",function(){var i=u.find("li").index($(this));c=parseInt(i)%5,n(c)}),n(0),h(),g()},v.play=function(){function n(){a++,i(a)}$(".musicImg").eq(1).removeClass("musicPause"),clearInterval(e),e=setInterval(n,1e3)},v.pause=function(){$(".musicImg").eq(1).addClass("musicPause"),clearInterval(e)},v.pre=function(){c--,c<0&&(c=p.length-1),n(c)},v.next=function(){c++,c>p.length-1&&(c=0),n(c)},v.domEvent=function(){var n=$("#musicController");n.find(".play").on("click",function(){$(this).hide(),n.find(".pause").show(),v.play()}),n.find(".pause").on("click",function(){$(this).hide(),$(".musicRound").removeClass("musicRoundAnimate").addClass("musicRoundAnimate"),n.find(".play").show(),v.pause()}),n.find(".pre").on("click",function(){v.pre()}),n.find(".next").on("click",function(){v.next()})},v}var i,e,t,s=!0,a=0,c=0,o=$("#musicTip"),u=$("#musicList ul"),l=$("#musicName"),d=$("#musicUser"),r=$("#music1Box"),f=$("#musicInfo"),m=$(".music"),p=[["Cooing And Wooing","Dave"],["Xiang Yu’slast Song","Alice"],["Song of The Great Wind","Anastasia"],["Ndomit Able Soul","Bertha"],["Written While Taking","Angela"]];return function(){return i||(i=n()),i}}();
//# sourceMappingURL=maps/musicController.js.map
