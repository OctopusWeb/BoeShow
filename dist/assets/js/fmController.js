var FmController=function(){function n(){function n(n){$("#fmBox h2").html(l[n][1]),$(".fmBtn").css({width:l[n][2]}),o.find("ul li").removeClass("selected"),o.find("ul").find("li").eq(n).addClass("selected")}var i={},o=$("#fmList"),t=$("#fmBox"),e=0,l=[["Lounge Radio",89.8,"5.3%"],["Radio Eksen",92.2,"26%"],["Radio Alaturca",92.4,"27.7%"],["FG Radio",92.6,"31.2%"],["Power FM",93.8,"39.8%"],["Serxy Chair ",94.6,"46.7%"],["Stay Close",96.4,"62.1%"],["Reptile",98.2,"77.7%"],["No Waves",99.4,"88%"],["Rreeman Town",99.8,"91.6%"]];return i.initList=function(){for(var i="",t=0;t<l.length;t++)i+="<li>",i+="<span>"+l[t][0]+"</span>",i+="<h3>"+l[t][1]+"</h3></li>";o.find("ul").html(i),o.find("ul").on("click","li",function(){var i=o.find("ul").find("li").index($(this));e=parseInt(i),n(e)}),n(0)},i.play=function(){t.find(".musicRound2").removeClass("musicPause")},i.stop=function(){t.find(".musicRound2").addClass("musicPause")},i.domEvent=function(){var o=$("#fmControler");o.find(".play").on("click",function(){o.find(".play").hide(),o.find(".stop").show(),i.play()}),o.find(".stop").on("click",function(){o.find(".stop").hide(),o.find(".play").show(),i.stop()}),o.find(".pre").on("click",function(){e--,e<0&&(e=l.length-1),n(e)}),o.find(".next").on("click",function(){e++,e>l.length-1&&(e=0),n(e)})},i}var i;return function(){return i||(i=n()),i}}();
//# sourceMappingURL=maps/fmController.js.map
