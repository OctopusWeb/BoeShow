var SafaController=function(){function a(){var a={},i=!0;return a.tip=function(){$("#safaTip").on("click",function(){i?($("#safa2").fadeIn(),$("#safa1").fadeOut(),$("#xsp").fadeOut(),$("#safaTip .tipTitle").animate({left:"50%"}),$("#safaTip .tipTitle").eq(0).hide(),$("#safaTip .tipTitle").eq(1).show()):($("#safa2").fadeOut(),$("#safa1").fadeIn(),$("#xsp").fadeIn(),$("#safaTip .tipTitle").animate({left:"0%"}),$("#safaTip .tipTitle").eq(1).hide(),$("#safaTip .tipTitle").eq(0).show()),i=!i})},a}var i;return function(){return i||(i=a()),i}}();
//# sourceMappingURL=maps/safaController.js.map
