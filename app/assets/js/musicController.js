var MusicController = (function(){
	var instance;
	var musicBol = true;
	var num=0;
	var selectIndex=0;
	var playInter;
	var musicBox2;
	var musicTip = $("#musicTip");
	var musicList = $("#musicList ul");
	var musicName = $("#musicName");
	var musicUser = $("#musicUser");
	var music1Box = $("#music1Box");
	var musicPlayInfo = $("#musicInfo");
	var musicPage = $(".music");
	
	
	var musicInfo = [["AAAAAAAAA","aaaaaa"],["BBBBBBBBB","bbbbbbbb"],["CCCCCCCCC","cccccccc"],["DDDDDDDD","ddddddd"],["EEEEEEEE","eeeeeee"]]
	function init(){
		var music = {};
		music.tip = function(){
			musicTip.on("click",function(){
				if(musicBol){
					musicPage.eq(0).fadeOut();
					musicPage.eq(1).fadeIn();
					musicTip.find(".tipTitle").eq(1).show();
					musicTip.find(".tipTitle").eq(0).hide();
					musicTip.find(".tipTitle").animate({"left":"50%"});
				}else{
					musicPage.eq(0).fadeIn();
					musicPage.eq(1).fadeOut();
					musicTip.find(".tipTitle").eq(0).show();
					musicTip.find(".tipTitle").eq(1).hide();
					musicTip.find(".tipTitle").animate({"left":"0%"});
				}
				musicBol = !musicBol;
			})
		}
		music.ListInit = function(){
			var str='';
			for (var i=0;i<musicInfo.length;i++) {
				str += '<li><p>0'+(i+1)+'</p>'
				str += '<img src="assets/img/music/head'+(i+1)+'.png" />'
				str += '<span>'+musicInfo[i][0]+'<strong>/'+musicInfo[i][1]+'</strong></span>'
				str += '<img src="assets/img/music/musicRight.png" class="musicRight"/></li>'
				
			}
			musicList.html(str);
			musicList.on("click","li",function(){
				var index = musicList.find("li").index($(this));
				selectIndex = (parseInt(index))%5;
				changeMusic(selectIndex);
			})
			changeMusic(0);
			initCanvas();
			boxEvent()
		}
		music.play = function(){
			$(".musicImg").eq(1).removeClass("musicPause");
			clearInterval(playInter);
			playInter = setInterval(playEvent,1000);
			function playEvent(){
				num++
				changeBar(num);
			}
		}
		music.pause = function(){
			$(".musicImg").eq(1).addClass("musicPause");
			clearInterval(playInter);
		}
		music.pre = function(){
			selectIndex--;
			if(selectIndex<0){
				selectIndex=musicInfo.length-1;
			}
			changeMusic(selectIndex);
		}
		music.next = function(){
			selectIndex++;
			if(selectIndex>musicInfo.length-1){
				selectIndex=0
			}
			changeMusic(selectIndex);
		}
		music.domEvent = function(){
			var musicBtn = $("#musicController");
			musicBtn.find(".play").on("click",function(){
				$(this).hide();
				musicBtn.find(".pause").show()
				music.play();
			})
			musicBtn.find(".pause").on("click",function(){
				$(this).hide();
				$(".musicRound").removeClass("musicRoundAnimate").addClass("musicRoundAnimate")
				musicBtn.find(".play").show()
				music.pause();
			})
			musicBtn.find(".pre").on("click",function(){
				music.pre();
			})
			musicBtn.find(".next").on("click",function(){
				music.next();
			})
		}
		function changeMusic(index){
			num=0;
			var playInfo = musicInfo[index];
			musicName.html(playInfo[0]);
			musicUser.html(playInfo[1]);
			musicPlayInfo.find(".bar").width("0%");
			musicPlayInfo.find("p").html("00:00:00");
			music1Box.find(".head").attr({"src":"assets/img/music/head"+(index+1)+".png"});
//				var randomTime = "00:0"+parseInt(Math.random()*5)+":0"+parseInt(Math.random()*9)
			musicPlayInfo.find("span").html("00:03:00"); 
			musicList.find("li").removeClass("selected");
			musicList.find("li").eq(index).addClass("selected");
			
		}
		function changeBar(num){
			if(num >= 180){
				music.pause();
			}
			var seconds = num%60;
			var minute = (num-seconds)/60;
			var sec="";
			seconds<10?sec = "0"+seconds:sec = seconds;
			var time = "00:0"+minute+":"+sec;
			musicPlayInfo.find(".bar").width((num/1.8)+"%");
			musicPlayInfo.find("p").html(time);
		}
		function initCanvas(){
			var musicBkNum=0;
			var musicBkSoure = $at.PictureSoure("assets/img/musicCanvas/s2_00",49,98); 
			clearInterval(musicBox2);
			musicBox2 = setInterval(function(){
				musicBkNum++
				musicBkNum == 49?musicBkNum=0:musicBkNum=musicBkNum;
				$at.CanvasMove(musicBkSoure[musicBkNum],1080,570,"musicBk",870,400);
			},50)
		}
		function boxEvent(){
			var hammer = new Hammer(document.getElementById("event"));
			hammer.on("swipeleft", function (e) {
				$("#music1Box").stop().animate({"left":"-1080px"})
				$(".roundBk").removeClass("selected")
				$(".roundBk").eq(1).addClass("selected")
			})
			hammer.on("swiperight", function (e) {
				$("#music1Box").stop().animate({"left":"0px"})
				$(".roundBk").removeClass("selected")
				$(".roundBk").eq(0).addClass("selected")
			})
		}
		return music;
	}
	return function(){
		if(!instance){
			instance = init();
		}
		return instance;
	}
})()
