$(document).ready(function() {
	$("html").backstretch([
		"static/img/bg1.jpg",
    	"static/img/bg2.jpg",
   		"static/img/bg3.jpg"    
	], {duration: 0, fade: 450});

	setTimeout(function() { 
		$("html").backstretch("pause");
	}, 1350);
        
    var moveLinks = function() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        if (height/width< .58) {
            $("#links").css({
                "left": "27.3%",
                "top": "50%",
                "margin-left": 0,
                "margin-top": width/24,
                "height": width/8.7,
                "width": width/11.6
            });
        }
        else {
            $("#links").css({
                "left": "49.7%",
                "top": "57%",
                "margin-left": -height/2.58,
                "margin-top": 0,
                "height": height/5.1,
                "width": height/6.6
            });
        }
    }

    $(window).resize(moveLinks).ready(moveLinks);
});

