var FmController = (function(){
	var instance;
	function init(){
		var fm = {};
		var fmUl = $("#fmList");
		var fmBox = $("#fmBox");
		var fmIndex=0;
		var fmList = [
			["AAAAAAAAA",89.8,"5.3%"],
			["BBBBBBBBB",92.2,"26%"],
			["CCCCCCCCC",92.4,"27.7%"],
			["DDDDDDDDD",92.6,"31.2%"],
			["EEEEEEEEE",93.8,"39.8%"],
			["FFFFFFFFF",94.6,"46.7%"],
			["HHHHHHHHH",96.4,"62.1%"],
			["JJJJJJJJJ",98.2,"77.7%"],
			["QQQQQQQQQ",99.4,"88%"],
			["EEEEEEEEE",99.8,"91.6%"]
		]
		fm.initList = function(){
			var str=""
			for (var i=0;i<fmList.length;i++) {
				str+='<li><p>0'+i+'</p>'
				str+='<span>'+fmList[i][0]+'</span>'
				str+='<h3>'+fmList[i][1]+'</h3></li>'			
			}
			fmUl.find("ul").html(str);
			fmUl.find("ul").on("click","li",function(){
				var index = fmUl.find("ul").find("li").index($(this));
				fmIndex = parseInt(index)
				chooseFm(fmIndex);
			})
			chooseFm(0);
		}
		fm.play = function(){
			fmBox.find(".musicRound2").removeClass("musicPause");
		}
		fm.stop = function(){
			fmBox.find(".musicRound2").addClass("musicPause")
		}
		fm.domEvent = function(){
			var fmBtn = $("#fmControler");
			fmBtn.find(".play").on("click",function(){
				fmBtn.find(".play").hide()
				fmBtn.find(".stop").show()
				fm.play();
			})
			fmBtn.find(".stop").on("click",function(){
				fmBtn.find(".stop").hide()
				fmBtn.find(".play").show()
				fm.stop();
			})
			fmBtn.find(".pre").on("click",function(){
				fmIndex--;
				if(fmIndex<0){
					fmIndex=fmList.length-1;
				}
				chooseFm(fmIndex)
			})
			fmBtn.find(".next").on("click",function(){
				fmIndex++;
				if(fmIndex>fmList.length-1){
					fmIndex=00;
				}
				chooseFm(fmIndex)
			})
		}
		function chooseFm(index){
			$("#fmBox h2").html(fmList[index][1]);
			$(".fmBtn").css({"width":fmList[index][2]});
			fmUl.find("ul li").removeClass("selected");
			fmUl.find("ul").find("li").eq(index).addClass("selected");
		}
		return fm;
	}
	return function(){
		if(!instance){
			instance = init()
		}
		return instance;
	}
})()
