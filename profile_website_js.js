var cWidth=$(".container").width();
console.log("width of container: "+cWidth);
var sWidth=$(".section3").width();
console.log("width of section: "+sWidth);

var cMargin=(sWidth-cWidth)/2;
$(".container").css("margin-right", cMargin);
$(".container").css("margin-left", cMargin);


var navheight=0;

$(document).ready(function(){
	//screen resolution.
var height=$(window).height();
var width=$(window).width();
console.log("Height: "+height+", width: "+width);
var menuwidth=$(".menu").width();
var signaturewidth=$(".signature").width();
var x=(width-signaturewidth)/2;
var m=(width-menuwidth)/2;

if(width<=1000-17){
	$(".signature").css("margin-left", x);
	$(".menu").css("margin-left", m);
}
else{
	var sigheight=$(".signature").height();
	var menuheight=$(".menu").height();
	var deltaheight=(sigheight-menuheight)/2;
	$(".menu").css("margin-top", deltaheight);
	var delta=width-signaturewidth-menuwidth-17;
		console.log("Delta: "+delta);
		$(".signature").css("margin-left", 5);
		$(".signature").css("margin-right", delta);
}


$('.toTop').click(function(){
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
		return false;    //this is imp since it prevents the page from being reloaded.
	});


//length and width of the div.
var divheight=$(".intro-text").height();
var divwidth=$(".intro-text").width();
console.log("length: "+divheight+", width: "+divwidth);

//these points are the exact middle of the screen.
var midheight=height/2;
var midwidth=width/2;

//these dimensions are imp.
var postop=midheight-(divheight/2);  
var posleft=midwidth-(divwidth/2);

$(".intro-text").css('top', postop);
$(".intro-text").css('left', posleft);

$(".navigation").css("margin-top", "30px");
var navOffSet=$(".navigation").offset().top;
console.log("navoffset: "+navOffSet);



$(window).scroll(function(){
	// $("footer").css("display", "block");
	$(".toTop").css("display", "block");

	var scrollPos=$(window).scrollTop();  //only runs once when the page is loaded.
	console.log("scroll from top: "+scrollPos);
	$(".navigation").wrap('<div class="nav-placeholder"></div>');
	$(".nav-placeholder").height($(".navigation").outerHeight());
	navheight= $(".nav-placeholder").height();
	console.log("height of nav menu: "+$(".nav-placeholder").height());


	if(scrollPos==0){
		$(".navigation").css("margin-top", "30px");
		// $("footer").css("display", "none");
		$(".toTop").css("display", "none");
	}
	if(scrollPos >= navOffSet){
		$(".navigation").addClass("fixed");
		$(".navigation").css("margin-top", "0px");
			
	}
	else{
		$(".navigation").removeClass("fixed");
	}
});
});



function smoothscroll(x){
var target=$(x).attr('href');
var strip=target.slice(1);  //shaves off of the # sign from the href.
var anchor=$("."+strip);

$('html, body').animate({
scrollTop: anchor.offset().top-navheight    

}, '2000');
}


//this is to properly align the menu and the signature at the top in the exact middle.
//more effective way of aligning divs instead of using CSS.
var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
       console.log("Screen width: "+width);
   }

   var menuwidth=$(".menu").width();
   var signaturewidth=$(".signature").width();
   var x=(width-signaturewidth)/2;
   var m=(width-menuwidth)/2;
   if(width<=1000-17){
	$(".signature").css("margin-left", x);
	$(".menu").css("margin-left", m);
	} 
	else{
		var sigheight=$(".signature").height();
		var menuheight=$(".menu").height();
		var deltaheight=(sigheight-menuheight)/2;
		$(".menu").css("margin-top", deltaheight);
		var delta=width-signaturewidth-menuwidth-17;
		console.log("Delta: "+delta);
		$(".signature").css("margin-left", 5);
		$(".signature").css("margin-right", delta);
	}
});
