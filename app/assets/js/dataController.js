var DataController = (function(){
	var instance;
	var dataBol = true;
	var dataTip = $("#dataTip");
	var dataTitle = dataTip.find(".tipTitle");
	var dataPage = $(".data");
	
	var data1Ul = dataPage.eq(0).find("ul li");
	var data2Ul = dataPage.eq(1).find("ul li");
	var dataList = $(".dataList");
	var dataInfo = $(".dataInfo");
	function init(){
		var obj={};
		obj.page1Show = function(){
			$at.NumberAnimate(0,100,function(num){
				obj.part1Animate(num);
				obj.part2Animate(num,[1.8,0.12,0.54,0.8]);
				
			});
		}
		obj.page2Show = function(){
			$at.NumberAnimate(0,100,function(num){
				obj.part3Animate(num);
				obj.part4Animate(num,[0.01,0.05,0.03,0.03,0.06,0.01,0.01,0.1]);
			});	
		}
		obj.part1Animate = function(num){
			var str1 = parseInt(num*0.06)+":"+parseInt(num*0.35)+"<strong>PM</strong>"
			data1Ul.eq(0).find("p").html(str1);
			var str2 = parseInt(num*12)+"<strong>KM</strong>"
			data1Ul.eq(1).find("p").html(str2);
			var str3 = parseInt(num*0.12)+":"+parseInt(num*0.54)+":"+parseInt(num*0.1)+"<strong>H</strong>"
			data1Ul.eq(2).find("p").html(str3);
			var str4 = parseInt(num*0.06)+":"+parseInt(num*0.35)+"<strong>PM</strong>"
			data1Ul.eq(3).find("p").html(str4);
			var str5 = parseInt(num*0.10)+"<strong>L/KM</strong>"
			data1Ul.eq(4).find("p").html(str5);
			var str6 = parseInt(num*12)+"<strong>TIMES</strong>"
			data1Ul.eq(5).find("p").html(str6);
			var str7 = parseInt(num*0.04)+"<strong>TIMES</strong>"
			data1Ul.eq(6).find("p").html(str7);
		}
		obj.part2Animate = function(num,arr){
			var str1 = parseInt(num*arr[0])+"<strong>KM</strong>"
			dataList.eq(0).find("p").eq(0).html(str1);
			var str2 = parseInt(num*arr[1])+":"+parseInt(num*arr[2])+"<strong>H</strong>"
			dataList.eq(0).find("p").eq(1).html(str2);
			var str3 = parseInt(num*arr[3])+"<strong>KM/H</strong>"
			dataList.eq(0).find("p").eq(2).html(str3);
		}
		obj.part3Animate = function(num){
			var str = "<strong>TIMES</strong>"
			var str1 = parseInt(num*0.12)+str
			data2Ul.eq(0).find("p").html(str1);
			var str2 = parseInt(num*0.36)+str
			data2Ul.eq(1).find("p").html(str2);
			var str3 = parseInt(num*0.06)+str
			data2Ul.eq(2).find("p").html(str3);
			var str4 = parseInt(num*0.11)+str
			data2Ul.eq(3).find("p").html(str4);
			var str5 = parseInt(num*0.16)+str
			data2Ul.eq(4).find("p").html(str5);
			var str6 = parseInt(num*0.16)+str
			data2Ul.eq(5).find("p").html(str6);
			var str7 = parseInt(num*0.66)+str
			data2Ul.eq(6).find("p").html(str7);
			var str7 = parseInt(num*0.16)+str
			data2Ul.eq(7).find("p").html(str7);
		}
		obj.part4Animate = function(num,arr){
			var str = "<strong>TIMES</strong>"
			var list = dataList.eq(1);
			var str1 = parseInt(num*arr[0])+str
			list.find("p").eq(0).html(str1);
			var str2 = parseInt(num*arr[1])+str
			list.find("p").eq(1).html(str2);
			var str3 = parseInt(num*arr[2])+str
			list.find("p").eq(2).html(str3);
			var str4 = parseInt(num*arr[3])+str
			list.find("p").eq(3).html(str4);
			var str5 = parseInt(num*arr[4])+str
			list.find("p").eq(4).html(str5);
			var str6 = parseInt(num*arr[5])+str
			list.find("p").eq(5).html(str6);
			var str7 = parseInt(num*arr[6])+str
			list.find("p").eq(6).html(str7);
			var str8 = parseInt(num*arr[7])+str
			list.find("p").eq(7).html(str8);
		}
		obj.tip = function(){
			dataTip.on("click",function(){
				if(dataBol){
					obj.page2Show()
					dataPage.eq(1).fadeIn();
					dataPage.eq(0).fadeOut();
					dataTitle.animate({"left":"50%"});
					dataTitle.eq(0).hide();
					dataTitle.eq(1).show();
				}else{
					obj.page1Show();
					dataPage.eq(1).fadeOut();
					dataPage.eq(0).fadeIn();
					dataTitle.animate({"left":"0%"});
					dataTitle.eq(1).hide();
					dataTitle.eq(0).show();
				}
				dataBol = !dataBol;
			});
			dataInfo.eq(0).on("click","div",function(){
				var arr = [
					[1.8,0.12,0.54,0.8],
					[3.6,0.24,0.08,1.6],
					[7.2,0.48,0.16,3.2]
				]
				dataInfo.eq(0).find("div").removeClass("selected");
				$(this).addClass("selected");
				var index = dataInfo.eq(0).find("div").index($(this));
				$at.NumberAnimate(0,100,function(num){
					obj.part2Animate(num,arr[index]);
					
				});
			})
			dataInfo.eq(1).on("click","div",function(){
				var arr = [
					[0.01,0.05,0.03,0.03,0.06,0.01,0.01,0.1],
					[0.02,0.1,0.06,0.06,0.12,0.02,0.02,0.2],
					[0.04,0.2,0.18,0.16,0.24,0.04,0.04,0.4]
				]

				dataInfo.eq(1).find("div").removeClass("selected");
				$(this).addClass("selected");
				var index = dataInfo.eq(1).find("div").index($(this));
				$at.NumberAnimate(0,100,function(num){
					obj.part4Animate(num,arr[index]);
					
				});
			})
			
		}
		return obj;
	}
	return function(){
		if(!instance){
			instance = init();
		}
		return instance;
	}
})()
