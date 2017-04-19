var CallController = (function(){
	var instance;
	var callBol = true;
	var callNum="";
	var listNum=0;
	var numberListW = ["410px","160px","-100px","-355px","-605px","-860px"];
	var numberListN = [[111111111,"AAAA"],[22222222,"BBBBB"],[333333333,"CCCC"],[4444444,"DDDD"],[5555555,"EEEE"],[6666666,"FFFF"]]
	function init(){
		var call = {};
		var callTip = $("#callTip");
		var tipTitle = callTip.find(".tipTitle");
		var callBox = $(".callBox");
		var numberList = $(".numberList");
		var callBtn = $(".callBtn img")
		var numberCall = $("#numberCall");
		var listCall = $("#listCall");
		call.tip = function(){
			callTip.on("click",function(){
				callClear()
				if(callBol){
					tipTitle.animate({"left":"50%"});
					tipTitle.eq(0).hide();
					tipTitle.eq(1).show();
					$("#numberCall").fadeOut();
					listCall.fadeIn();
					
				}else{
					tipTitle.animate({"left":"0%"});
					tipTitle.eq(1).hide();
					tipTitle.eq(0).show();
					listCall.fadeOut();
					$("#numberCall").fadeIn();
				}
				callBol = !callBol;
			});
		}
		call.headMove = function(){
			var callBkNum=0;
			var callBkSoure = $at.PictureSoure("assets/img/callBk/S3_00",0,38);
			setInterval(function(){
				callBkNum++
				callBkNum == 38?callBkNum=0:callBkNum=callBkNum;
				$at.CanvasMove(callBkSoure[callBkNum],440,440,"callBk",440,440);
			},100)
		}
		call.play = function(callNum){
			callBtn.eq(1).fadeOut();
			callBtn.eq(0).fadeIn();
			callBox.find(".selected").find("img").eq(0).fadeOut();
			callBox.find("h2").show();
			var src = chooseHead(parseInt(callNum%6)+1);
			callBox.find(".selected").find("img").eq(1).attr({"src":src})
			$("#callBk").fadeIn();
		}
		call.stop = function(){
			callBtn.eq(0).fadeOut();
			callBtn.eq(1).fadeIn();
			callBox.find(".selected").find("img").eq(0).fadeIn();
			$("#callBk").fadeOut();
			callBox.find("h2").hide();
		}
		call.changeNumber = function(str){
			callBox.find("h4").html(str);
		}
		call.eventInt = function(){
			numberList.on("click","li",function(){
				var texts = $(this).text()
				if(texts!="" && texts){
					callNum+=texts;
				}else if(callNum!="" || callNum){
					var btnId = $(this).attr("id");
					if(btnId == "callBtn"){
						call.play(callNum);
					}else if(btnId == "deleteBtn"){
						callNum = callNum.substring(0,callNum.length-1);
					}
				}
				call.changeNumber(callNum); 
			})
			numberCall.on("click",".play",function(){
				if(callNum!="" || callNum){
					call.play(callNum);
				}
			})
			numberCall.on("click",".stop",function(){
				call.stop();
			})
			numberUser();
			initList();
		}
		function chooseHead(num){
			var src = "assets/img/call/head"+num+".png"
			return src;
		}
		function callClear(){
			callNum="";
			call.changeNumber(""); 
			callBtn.eq(0).fadeOut();
			callBtn.eq(1).fadeIn();
			callBox.find(".selected").find("img").eq(0).fadeIn();
			$("#callBk").fadeOut();
			callBox.find("h2").hide();
			listCall.find(".play").fadeIn();
			listCall.find(".stop").fadeOut();
			listCall.find(".headList .selected").find("img").eq(0).fadeIn();
		}
		function numberUser(){
			var hammer = new Hammer(document.getElementById("numberBk"));
			hammer.on("swiperight", function (e) {
				listNum--;
				listNum<0?listNum=numberListW.length-1:listNum=listNum;
				userComplete(listNum);
			})
			hammer.on("swipeleft", function (e) {
				listNum++;
				listNum>numberListW.length-1?listNum=0:listNum=listNum;
				userComplete(listNum);
			})
			listCall.on("click",".play",function(){
				var callNum2 = listCall.find("h4").text();
				if(callNum2!="" || callNum2){
					listCall.find(".play").fadeOut();
					listCall.find(".stop").fadeIn();
					listCall.find(".headList .selected").find("img").eq(0).fadeOut();
					call.play(callNum2);
				}
			})
			listCall.on("click",".stop",function(){
				listCall.find(".play").fadeIn();
				listCall.find(".stop").fadeOut();
				listCall.find(".headList .selected").find("img").eq(0).fadeIn();
				call.stop();
			})
			$(".userList").on("click","li",function(){
				var index = $(".userList li").index($(this));
				userComplete(index)
			})
			function userComplete(listNum){
				listCall.find(".headList").animate({"left":numberListW[listNum]});
				listCall.find(".headList .headBox").removeClass("selected");
				listCall.find(".headList .headBox").eq(listNum).addClass("selected");
				listCall.find(".userList ul li").removeClass("selected");
				listCall.find(".userList ul li").eq(listNum).addClass("selected");
				listCall.find("h4").html(numberListN[listNum][0]);
				listCall.find("h3").html(numberListN[listNum][1]);
				listCall.find(".play").fadeIn();
				listCall.find(".stop").fadeOut();
				listCall.find(".headList").find("img").show();
				call.stop();
			}
			userComplete(0)
		}
		function initList(){
			var str="";
			for (var i=0;i<numberListN.length;i++) {
				str+='<li><img src="assets/img/call/head'+(i+1)+'.png"/>'
				str+='<h5>'+numberListN[i][1]+'</h2>'		
				str+='<h6>'+numberListN[i][0]+'</h6><span>&gt;</span></li>'										
			}
			listCall.find(".userList ul").html(str);
		}
		return call;
	}
	return function(){
		if(!instance){
			instance = init()
		}
		return instance;
	}
})()
