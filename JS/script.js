$(document).ready(function(){

var btn = $("#backtop");
	$(document).on("scroll", function(){
        
		if
      ($(document).scrollTop() > 10){
          $("#nav_bar").addClass("fixed_nav");
          btn.addClass("show");
		}
		else
		{
            $("#nav_bar").removeClass("fixed_nav");
            btn.removeClass("show");
        }
    });
    btn.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},'1000')

    });
    })