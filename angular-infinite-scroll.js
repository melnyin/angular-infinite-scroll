angular.module("igScroll",[]).directive("igScroll",["$window",function(l){return{restrict:"A",link:function(o,t,e){var i,r=!1,n=o.$eval(e.igScroll),c=function(){i=parseInt(l.getComputedStyle(t[0],null).getPropertyValue("height").replace(/px/,""))-l.innerHeight-(e.igScrollDist?e.igScrollDist:50)};(e.igScrollRoot?document.querySelector(e.igScrollRoot):l).onscroll=function(){i||c(),i<(this.pageYOffset||this.scrollTop)&&(r||(r=!0,n?n(function(){r=!1,c()}):null))}}}}]);