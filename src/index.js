$(document).ready(function(){
	// console.log("hi");

	// Start Back to Top

	// $(".btn-backtotops").hide();
	// $(window).scroll(function(){
	// 	let getscrolltop = $(this).scrollTop();
	// 	// console.log(getscrolltop);

	// 	if(getscrolltop >= 370){
	// 		$(".btn-backtotops").fadeIn(1000);
	// 	}else{
	// 		$(".btn-backtotops").fadeOut(1000);
	// 	}
	// });

	// End Back to Top

	// Start Header

	// start nav

	// bugger section

	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs")
	})

	$("#light-slider").lightSlider();

	$(".category-slider").slick({
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		speed: 300,
		cssEase: 'linear',
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	});

	// for nav
	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 200){
			$(".navbar").addClass("navmenus")
		}else{
			$(".navbar").removeClass("navmenus")
		}
	})

	// End nav

	// End Header



	// });


	// Start Adv 

	// $(window).scroll(function(){

	// 	let getscrolltop = $(this).scrollTop();
	// 	// console.log(getscrolltop);


	// 	if(getscrolltop >= 900){
	// 		$(".advimages").addClass("fromlefts");
	// 		$(".advtexts").addClass("fromrights");
	// 	}else{
	// 		$(".advimages").removeClass("fromlefts");
	// 		$(".advtexts").removeClass("fromrights");	
	// 	}

	// });

	// End Adv

	// Start Footer Section

	// const getyear = $("#getyear");
	// const getfullyear =new Date().getUTCFullYear();
	// getyear.text(getfullyear)

	// End Footer Section

	

});