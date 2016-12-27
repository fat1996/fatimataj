//screen resolution.
var height;
var width;

var offsettop;  //how much we've scrolled from the top of the document.

//length and width of the div.
var divheight;
var divwidth;

//these points are the exact middle of the screen.
var midheight;
var midwidth;

//these dimensions are v.imp. These determine the top and left coordinates of the div.
//left coordinate is fine, but you have to add how much you've scrolled from the top to the top variable.
var postop;  
var posleft;


function closeWindow(x){
	var descDiv="."+$(x).attr('name');
	console.log("name of desc div: "+descDiv);
	$(descDiv).css("display", "none");
}




// var cWidth=$(".container").width();
// //console.log("width of container: "+cWidth);
// var sWidth=$(".section").width();
// //console.log("width of section: "+sWidth);

// var cMargin=(sWidth-cWidth)/2;
// $(".container").css("margin-right", cMargin);
// $(".container").css("margin-left", cMargin);


function showdiv(x){
	var name=$(x).attr('class');
	var desc="."+name+"Desc";
	console.log("name of div: "+desc);

offsettop=$(document).scrollTop();
console.log("scroll from top: "+offsettop);

//screen resolution.
height=$(window).height();
width=$(window).width();
console.log("Height: "+height+", width: "+width);

//length and width of the div.
divheight=$(desc).height();
divwidth=$(desc).width();
//console.log("length: "+divheight+", width: "+divwidth);

//these points are the exact middle of the screen.
midheight=height/2;
midwidth=width/2;
console.log("exact middle of the center: midwidth: "+midwidth+", midheight: "+midheight);

//these dimensions are imp.
postop=midheight-(divheight/2);  
posleft=midwidth-(divwidth/2);

	//console.log("CLICK EVENT: postop: "+postop+", posleft: "+posleft);
	
	$(desc).css("display", "block");
	$(desc).css("z-index", "10");
	$(desc).css("top", postop+offsettop);
	$(desc).css("left", posleft);
}



