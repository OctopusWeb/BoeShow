var CallController=function(){function e(){function e(e){return"assets/img/call/head"+e+".png"}function n(){i="",c.changeNumber(""),p.eq(0).fadeOut(),p.eq(1).fadeIn(),r.find(".selected").find("img").eq(0).fadeIn(),$("#callBk").fadeOut(),r.find("h2").hide(),g.find(".play").fadeIn(),g.find(".stop").fadeOut(),g.find(".headList .selected").find("img").eq(0).fadeIn()}function l(){function e(e){g.find(".headList").animate({left:d[e]}),g.find(".headList .headBox").removeClass("selected"),g.find(".headList .headBox").eq(e).addClass("selected"),g.find(".userList ul li").removeClass("selected"),g.find(".userList ul li").eq(e).addClass("selected"),g.find("h4").html(f[e][0]),g.find("h3").html(f[e][1]),g.find(".play").fadeIn(),g.find(".stop").fadeOut(),g.find(".headList").find("img").show(),c.stop()}var n=new Hammer(document.getElementById("numberBk"));n.on("swiperight",function(n){a--,a=a<0?d.length-1:a,e(a)}),n.on("swipeleft",function(n){a++,a=a>d.length-1?0:a,e(a)}),g.on("click",".play",function(){var e=g.find("h4").text();(""!=e||e)&&(g.find(".play").fadeOut(),g.find(".stop").fadeIn(),g.find(".headList .selected").find("img").eq(0).fadeOut(),c.play(e))}),g.on("click",".stop",function(){g.find(".play").fadeIn(),g.find(".stop").fadeOut(),g.find(".headList .selected").find("img").eq(0).fadeIn(),c.stop()}),$(".userList").on("click","li",function(){e($(".userList li").index($(this)))}),e(0)}function s(){for(var e="",n=0;n<f.length;n++)e+='<li><img src="assets/img/call/head'+(n+1)+'.png"/>',e+="<h5>"+f[n][1]+"</h2>",e+="<h6>"+f[n][0]+"</h6><span>&gt;</span></li>";g.find(".userList ul").html(e)}var c={},u=$("#callTip"),o=u.find(".tipTitle"),r=$(".callBox"),h=$(".numberList"),p=$(".callBtn img"),m=$("#numberCall"),g=$("#listCall");return c.tip=function(){u.on("click",function(){n(),t?(o.animate({left:"50%"}),o.eq(0).hide(),o.eq(1).show(),$("#numberCall").fadeOut(),g.fadeIn()):(o.animate({left:"0%"}),o.eq(1).hide(),o.eq(0).show(),g.fadeOut(),$("#numberCall").fadeIn()),t=!t})},c.headMove=function(){var e=0,n=$at.PictureSoure("assets/img/callBk/S3_00",0,38);setInterval(function(){e++,e=38==e?0:e,$at.CanvasMove(n[e],440,440,"callBk",440,440)},100)},c.play=function(n){p.eq(1).fadeOut(),p.eq(0).fadeIn(),r.find(".selected").find("img").eq(0).fadeOut(),r.find("h2").show();var t=e(parseInt(n%6)+1);r.find(".selected").find("img").eq(1).attr({src:t}),$("#callBk").fadeIn()},c.stop=function(){p.eq(0).fadeOut(),p.eq(1).fadeIn(),r.find(".selected").find("img").eq(0).fadeIn(),$("#callBk").fadeOut(),r.find("h2").hide()},c.changeNumber=function(e){r.find("h4").html(e)},c.eventInt=function(){h.on("click","li",function(){var e=$(this).text();if(""!=e&&e)i+=e;else if(""!=i||i){var n=$(this).attr("id");"callBtn"==n?c.play(i):"deleteBtn"==n&&(i=i.substring(0,i.length-1))}c.changeNumber(i)}),m.on("click",".play",function(){(""!=i||i)&&c.play(i)}),m.on("click",".stop",function(){c.stop()}),l(),s()},c}var n,t=!0,i="",a=0,d=["410px","160px","-100px","-355px","-605px","-860px"],f=[[111111111,"AAAA"],[22222222,"BBBBB"],[333333333,"CCCC"],[4444444,"DDDD"],[5555555,"EEEE"],[6666666,"FFFF"]];return function(){return n||(n=e()),n}}();
//# sourceMappingURL=maps/callController.js.map
