// For offer
$('#offer').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

// For product
$('#product').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

// For review
$('#reviews').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

// Footer accordein
$(document).ready(function() {	
	$( ".widget h2" ).click(
		function() {
			$(this).parent().toggleClass('active');
		}
	);	  	
});