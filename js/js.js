$(document).ready(function(){
	$("li.a img").on("click", function(){
		$(".hero-image img").prop("src", "assets/product-large-a.jpg");
		$(".tile-list .active").removeClass("active");
		$("li.a").addClass("active");
	});
	$("li.b img").on("click", function(){
		$(".hero-image img").prop("src", "assets/product-large-b.jpg");
		$(".tile-list .active").removeClass("active");
		$("li.b").addClass("active");
	});
	$("li.c img").on("click", function(){
		$(".hero-image img").prop("src", "assets/product-large-c.jpg");
		$(".tile-list .active").removeClass("active");
		$("li.c").addClass("active");
	});
	$("li.d img").on("click", function(){
		$(".hero-image img").prop("src", "assets/product-large-d.jpg");
		$(".tile-list .active").removeClass("active");
		$("li.d").addClass("active");
	});
	$(".accordion-toggle:first").css("border", "none");

  $('.accordion-toggle').on("click", function(){
		$(this).next().slideToggle('fast');

    if ($(this).text() == "EXPANDED") {
    	$(this).text("COLLAPSED").removeClass("exp").addClass("clp");
    } else {
    	$(this).text("EXPANDED").removeClass("clp").addClass("exp");
    }

  });

  $(".cart-button").on("click", function(){
  	$(".cart-button").after("<p class='confirmation'>Added to cart!");
		$(".confirmation").fadeOut(1500);
  });
});