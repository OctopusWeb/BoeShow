var FmController=function(){function n(){function n(n){$("#fmBox h2").html(l[n][1]),$(".fmBtn").css({width:l[n][2]}),t.find("ul li").removeClass("selected"),t.find("ul").find("li").eq(n).addClass("selected")}var i={},t=$("#fmList"),o=$("#fmBox"),f=0,l=[["AAAAAAAAA",89.8,"5.3%"],["BBBBBBBBB",92.2,"26%"],["CCCCCCCCC",92.4,"27.7%"],["DDDDDDDDD",92.6,"31.2%"],["EEEEEEEEE",93.8,"39.8%"],["FFFFFFFFF",94.6,"46.7%"],["HHHHHHHHH",96.4,"62.1%"],["JJJJJJJJJ",98.2,"77.7%"],["QQQQQQQQQ",99.4,"88%"],["EEEEEEEEE",99.8,"91.6%"]];return i.initList=function(){for(var i="",o=0;o<l.length;o++)i+="<li><p>0"+o+"</p>",i+="<span>"+l[o][0]+"</span>",i+="<h3>"+l[o][1]+"</h3></li>";t.find("ul").html(i),t.find("ul").on("click","li",function(){var i=t.find("ul").find("li").index($(this));f=parseInt(i),n(f)}),n(0)},i.play=function(){o.find(".musicRound2").removeClass("musicPause")},i.stop=function(){o.find(".musicRound2").addClass("musicPause")},i.domEvent=function(){var t=$("#fmControler");t.find(".play").on("click",function(){t.find(".play").hide(),t.find(".stop").show(),i.play()}),t.find(".stop").on("click",function(){t.find(".stop").hide(),t.find(".play").show(),i.stop()}),t.find(".pre").on("click",function(){f--,f<0&&(f=l.length-1),n(f)}),t.find(".next").on("click",function(){f++,f>l.length-1&&(f=0),n(f)})},i}var i;return function(){return i||(i=n()),i}}();
//# sourceMappingURL=maps/fmController.js.map
