var CallController=function(){function n(){var n={},t=$("#callTip"),i=t.find(".tipTitle");return n.tip=function(){t.on("click",function(){e?(i.animate({left:"50%"}),i.eq(0).hide(),i.eq(1).show()):(i.animate({left:"0%"}),i.eq(1).hide(),i.eq(0).show()),e=!e})},n}var t,e=!0;return function(){return t||(t=n()),t}}();
//# sourceMappingURL=maps/callController.js.map
