

$(document).ready(function(){

	var $navmenuLink = $(".nav-menu");

	//will smooth scroll to the page when nav-menu links are clicked
	$navmenuLink.find("a").click(function(){
	  var pageId = $(this).attr("href");
	  //scrolls from the top based on the pageid offset
	  $("body, html").animate({scrollTop: $(pageId).offset().top - 85}, "slow");
	  //return false to stop browser from following the link
	  return false;
	});

	var $pages = $("section");
	var $header = $("header");
	var header_height = $header.height();

	//print stuff to the h1 logo
	// var display = $(".logo");

	$(window).scroll(function(){
		var scrollPos = $(this).scrollTop();

		//iterates each page and runs this function
		$pages.each(function(){
			//top = how far it is to the top from current page
			var top = $(this).offset().top - header_height;
			//bottom of current page
			var bottom = top + $(this).height();
			var windowHeight = scrollPos + $(window).height();

			//adds an active class on the page your currently on
			if(scrollPos >= top && scrollPos <= (bottom - 10)){
				$header.find("a").removeClass("active");
				$pages.removeClass("active");

				$(this).addClass("active");
				$header.find('.nav-menu a[href="#' + $(this).attr('id') + '"]').addClass('active');

				
			}
			//since the last page isn't as high as the other pages, I had to make a quick fix
			else if(windowHeight == $(document).height()){
				$navmenuLink.find('a[href="#page3"]').removeClass('active');
				$navmenuLink.find('a[href="#page4"]').addClass('active');		
			}
		});

		//Changes color of header and text based on position of scroll
		if(scrollPos >= 600){
			$header.addClass("scrollDisplay");
			$header.find("a").css( {color: "#000" } ); //header.find for better perfomance
			$header.find(".active").css( {"border-color": "#000"} );
		}
		else if(scrollPos < 600){
			$header.removeClass("scrollDisplay");
			$header.find("a").css( {color: "#fff" } );
			$header.find(".active").css( {"border-color": "#fff"} );
		}

	});
		
});