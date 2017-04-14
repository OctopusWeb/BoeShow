var $at = {};
$at.ButtonHover = function(dom){
	
}
$at.CanvasMove = function(image,width,height,id){
	var canvas = document.getElementById(id)
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    context.clearRect(0,0,width,height);
    context.drawImage(image,0,0);
}
$at.PictureSoure = function(pubUrl,start,stop){
	var arr = [];
	var len = stop-start;
	for (var i=0;i<len;i++) {
		var image=new Image();
		image.src = pubUrl+i+".png";
		arr.push(image);
	}
	return arr;
}
$at.NumberAnimate = function(start,stop,onComplete){
	var num = start;
	var len = stop-start;
	var time = 1000/len;
	var numberInter = setInterval(function(){
		num++;
		if(num == stop){
			clearInterval(numberInter);
		}
		onComplete(num);
	},time)
}
$at.PageAnimate = function(showDom){
	$(".page").not(showDom).animate({"left":"-1080px","opacity":"0"})
	showDom.animate({"left":"0","opacity":"1"});
}
