var DataController=function(){function t(){var t={};return t.page1Show=function(){$at.NumberAnimate(0,100,function(n){t.part1Animate(n),t.part2Animate(n,[1.8,.12,.54,.8])})},t.page2Show=function(){$at.NumberAnimate(0,100,function(n){t.part3Animate(n),t.part4Animate(n,[.01,.05,.03,.03,.06,.01,.01,.1])})},t.part1Animate=function(t){var n=parseInt(.06*t)+":"+parseInt(.35*t)+"<strong>PM</strong>";p.eq(0).find("p").html(n);var e=parseInt(12*t)+"<strong>KM</strong>";p.eq(1).find("p").html(e);var a=parseInt(.12*t)+":"+parseInt(.54*t)+":"+parseInt(.1*t)+"<strong>H</strong>";p.eq(2).find("p").html(a);var r=parseInt(.06*t)+":"+parseInt(.35*t)+"<strong>PM</strong>";p.eq(3).find("p").html(r);var i=parseInt(.1*t)+"<strong>L/KM</strong>";p.eq(4).find("p").html(i);var s=parseInt(12*t)+"<strong>TIMES</strong>";p.eq(5).find("p").html(s);var d=parseInt(.04*t)+"<strong>TIMES</strong>";p.eq(6).find("p").html(d)},t.part2Animate=function(t,n){var e=parseInt(t*n[0])+"<strong>KM</strong>";d.eq(0).find("p").eq(0).html(e);var a=parseInt(t*n[1])+":"+parseInt(t*n[2])+"<strong>H</strong>";d.eq(0).find("p").eq(1).html(a);var r=parseInt(t*n[3])+"<strong>KM/H</strong>";d.eq(0).find("p").eq(2).html(r)},t.part3Animate=function(t){var n="<strong>TIMES</strong>",e=parseInt(.12*t)+n;s.eq(0).find("p").html(e);var a=parseInt(.36*t)+n;s.eq(1).find("p").html(a);var r=parseInt(.06*t)+n;s.eq(2).find("p").html(r);var i=parseInt(.11*t)+n;s.eq(3).find("p").html(i);var p=parseInt(.16*t)+n;s.eq(4).find("p").html(p);var d=parseInt(.16*t)+n;s.eq(5).find("p").html(d);var f=parseInt(.66*t)+n;s.eq(6).find("p").html(f);var f=parseInt(.16*t)+n;s.eq(7).find("p").html(f)},t.part4Animate=function(t,n){var e="<strong>TIMES</strong>",a=d.eq(1),r=parseInt(t*n[0])+e;a.find("p").eq(0).html(r);var i=parseInt(t*n[1])+e;a.find("p").eq(1).html(i);var p=parseInt(t*n[2])+e;a.find("p").eq(2).html(p);var s=parseInt(t*n[3])+e;a.find("p").eq(3).html(s);var f=parseInt(t*n[4])+e;a.find("p").eq(4).html(f);var o=parseInt(t*n[5])+e;a.find("p").eq(5).html(o);var m=parseInt(t*n[6])+e;a.find("p").eq(6).html(m);var l=parseInt(t*n[7])+e;a.find("p").eq(7).html(l)},t.tip=function(){a.on("click",function(){e?(t.page2Show(),i.eq(1).fadeIn(),i.eq(0).fadeOut(),r.animate({left:"50%"}),r.eq(0).hide(),r.eq(1).show()):(t.page1Show(),i.eq(1).fadeOut(),i.eq(0).fadeIn(),r.animate({left:"0%"}),r.eq(1).hide(),r.eq(0).show()),e=!e}),f.eq(0).on("click","div",function(){var n=[[1.8,.12,.54,.8],[3.6,.24,.08,1.6],[7.2,.48,.16,3.2]];f.eq(0).find("div").removeClass("selected"),$(this).addClass("selected");var e=f.eq(0).find("div").index($(this));$at.NumberAnimate(0,100,function(a){t.part2Animate(a,n[e])})}),f.eq(1).on("click","div",function(){var n=[[.01,.05,.03,.03,.06,.01,.01,.1],[.02,.1,.06,.06,.12,.02,.02,.2],[.04,.2,.18,.16,.24,.04,.04,.4]];f.eq(1).find("div").removeClass("selected"),$(this).addClass("selected");var e=f.eq(1).find("div").index($(this));$at.NumberAnimate(0,100,function(a){t.part4Animate(a,n[e])})})},t}var n,e=!0,a=$("#dataTip"),r=a.find(".tipTitle"),i=$(".data"),p=i.eq(0).find("ul li"),s=i.eq(1).find("ul li"),d=$(".dataList"),f=$(".dataInfo");return function(){return n||(n=t()),n}}();
//# sourceMappingURL=maps/dataController.js.map