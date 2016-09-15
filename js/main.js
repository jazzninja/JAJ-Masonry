function cycleImages() {
  var $active = $('.image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImages2() {
  var $active = $('.about-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.about-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImages3() {
  var $active = $('.contact-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.contact-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImages4() {
  var $active = $('.sourcing-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.sourcing-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImages5() {
  var $active = $('.installation-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.installation-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImages6() {
  var $active = $('.consulting-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.consulting-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesHighSt() {
  var $active = $('.highst-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.highst-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesBackBayHotel() {
  var $active = $('.backbayhotel-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.backbayhotel-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesBatteryWharf() {
  var $active = $('.batterywharf-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.batterywharf-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesCentralArtery() {
  var $active = $('.centralarteryairintake-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.centralarteryairintake-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesFoxwoods() {
  var $active = $('.foxwoods-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.foxwoods-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesHarvardBusinessSchool() {
  var $active = $('.harvardbusinessschool-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.harvardbusinessschool-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesHarvardLawSchool() {
  var $active = $('.harvardlawschool-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.harvardlawschool-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesMarloweHotel() {
  var $active = $('.marlowehotel-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.marlowehotel-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesMbtaAshmontStation() {
  var $active = $('.mbtaashmontstation-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.mbtaashmontstation-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesSouthStation() {
  var $active = $('.southstation-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.southstation-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesSummerStSeaWall() {
  var $active = $('.summerstseawall-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.summerstseawall-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesTfGreenAirport() {
  var $active = $('.tfgreenairport-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.tfgreenairport-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}

function cycleImagesWwiiMemorial() {
  var $active = $('.wwiimemorial-image.active'); //get the active tab
  var $next = $active.next().length > 0 ? $active.next() : $('.wwiimemorial-image:first'); 
  //check next length if not present just get the first .image div
  //fade out the top image and remove active class from it in callback
  $active.animate({ 
    opacity:'0'
  },400,function(){
    $active.removeClass('active')
    $next.animate({ 
      opacity:'1'
    },400,function(){ 
      $next.addClass('active');
    }) 
  });
}


$(document).ready(function(){

    // run every 7s
    setInterval('cycleImages(), cycleImages2(), cycleImages3(), cycleImages4(), cycleImages5(), cycleImages6(), cycleImagesHighSt(), cycleImagesBackBayHotel(), cycleImagesBatteryWharf(), cycleImagesCentralArtery(), cycleImagesHarvardBusinessSchool(), cycleImagesHarvardLawSchool(), cycleImagesMarloweHotel(), cycleImagesMbtaAshmontStation(), cycleImagesSouthStation(), cycleImagesSummerStSeaWall(), cycleImagesTfGreenAirport(), cycleImagesWwiiMemorial()', 7000);

    $(".about-button, .home-button, .contact-button, .sourcing-button, .consulting-button, .installation-button, .portfolio-button").on("click", function(){
        if($(this).hasClass("about-button")) {
            $(".about-container").addClass("display-flex");
        } else {
            $(".about-container").removeClass("display-flex");
        }

        if($(this).hasClass("home-button")) {
            window.location=window.location;
            $(".homepage-container").show();
        } else {
            $(".homepage-container").hide();
        }

        if($(this).hasClass("contact-button")) {
            $(".contact-container").addClass("display-flex");
        } else {
            $(".contact-container").removeClass("display-flex");
        }

        if($(this).hasClass("portfolio-button")) {
            $(".portfolio-container").addClass("display-flex");
        } else {
            $(".portfolio-container").removeClass("display-flex");
        }

        if($(this).hasClass("sourcing-button")) {
            $(".services-sourcing-container").addClass("display-flex");
        } else {
            $(".services-sourcing-container").removeClass("display-flex");
        }

        if($(this).hasClass("consulting-button")) {
            $(".services-consulting-container").addClass("display-flex");
        } else {
            $(".services-consulting-container").removeClass("display-flex");
        }

        if($(this).hasClass("installation-button")) {
            $(".services-installation-container").addClass("display-flex");
        } else {
            $(".services-installation-container").removeClass("display-flex");
        }

    });

    $(".alt-home-button, .alt-about-button, .alt-sourcing-button, .alt-consulting-button, .alt-installation-button, .alt-portfolio-button, .alt-contact-button").on("click", function() {
        
        if($(this).hasClass("alt-home-button")) {
            window.location=window.location;
            $(".homepage-container").show();
        } else {
            $(".homepage-container").hide();
        }

        if($(this).hasClass("alt-about-button")) {
            $(".about-container").addClass("display-flex");
        } else {
            $(".about-container").removeClass("display-flex");
        }

        if($(this).hasClass("alt-contact-button")) {
            $(".contact-container").addClass("display-flex");
        } else {
            $(".contact-container").removeClass("display-flex");
        }

        if($(this).hasClass("alt-sourcing-button")) {
            $(".services-sourcing-container").addClass("display-flex");
        } else {
            $(".services-sourcing-container").removeClass("display-flex");
        }

        if($(this).hasClass("alt-consulting-button")) {
            $(".services-consulting-container").addClass("display-flex");
        } else {
            $(".services-consulting-container").removeClass("display-flex");
        }

        if($(this).hasClass("alt-installation-button")) {
            $(".services-installation-container").addClass("display-flex");
        } else {
            $(".services-installation-container").removeClass("display-flex");
        }

        if($(this).hasClass("alt-portfolio-button")) {
            $(".portfolio-container").addClass("display-flex");
        } else {
            $(".portfolio-container").removeClass("display-flex");
        }
        
    });

    $(".main-sourcing-button, .main-consulting-button, .main-installation-button").on("click", function() {
    	if($(this).hasClass("alt-home-button")) {
            window.location=window.location;
            $(".homepage-container").show();
        } else {
            $(".homepage-container").hide();
        }
    	if($(this).hasClass("main-sourcing-button")) {
            $(".services-sourcing-container").addClass("display-flex");
        } else {
            $(".services-sourcing-container").removeClass("display-flex");
        }
        if($(this).hasClass("main-consulting-button")) {
            $(".services-consulting-container").addClass("display-flex");
        } else {
            $(".services-consulting-container").removeClass("display-flex");
        }

        if($(this).hasClass("main-installation-button")) {
            $(".services-installation-container").addClass("display-flex");
        } else {
            $(".services-installation-container").removeClass("display-flex");
        }
    });

    $(".highst-button, .backbay-button, .batterywharf-button, .centralarteryairintake-button, .foxwoods-button, .harvardbusinessschool-button, .harvardlawschool-button, .marlowehotel-button, .mbtaashmontstation-button, .southstation-button, .summerstreetseawall-button, .tfgreenairport-button, .wwiimemorial-button").on("click", function() {

        if($(this).hasClass("highst-button")) {
            $(".portfolio-fader-99highst").show();
        } else {
            $(".portfolio-fader-99highst").hide();
        }

        if($(this).hasClass("backbay-button")) {
            $(".portfolio-fader-backbayhotel").addClass("display-flex");
        } else {
            $(".portfolio-fader-backbayhotel").removeClass("display-flex");
        }

        if($(this).hasClass("batterywharf-button")) {
            $(".portfolio-fader-batterywharf").addClass("display-flex");
        } else {
            $(".portfolio-fader-batterywharf").removeClass("display-flex");
        }

        if($(this).hasClass("centralarteryairintake-button")) {
            $(".portfolio-fader-centralarteryairintake").addClass("display-flex");
        } else {
            $(".portfolio-fader-centralarteryairintake").removeClass("display-flex");
        }

        if($(this).hasClass("foxwoods-button")) {
            $(".portfolio-fader-foxwoods").addClass("display-flex");
        } else {
            $(".portfolio-fader-foxwoods").removeClass("display-flex");
        }

        if($(this).hasClass("harvardbusinessschool-button")) {
            $(".portfolio-fader-harvardbusinessschool").addClass("display-flex");
        } else {
            $(".portfolio-fader-harvardbusinessschool").removeClass("display-flex");
        }

        if($(this).hasClass("harvardlawschool-button")) {
            $(".portfolio-fader-harvardlawschool").addClass("display-flex");
        } else {
            $(".portfolio-fader-harvardlawschool").removeClass("display-flex");
        }

        if($(this).hasClass("marlowehotel-button")) {
            $(".portfolio-fader-marlowehotel").addClass("display-flex");
        } else {
            $(".portfolio-fader-marlowehotel").removeClass("display-flex");
        }

        if($(this).hasClass("mbtaashmontstation-button")) {
            $(".portfolio-fader-mbtaashmontstation").addClass("display-flex");
        } else {
            $(".portfolio-fader-mbtaashmontstation").removeClass("display-flex");
        }

        if($(this).hasClass("summerstreetseawall-button")) {
            $(".portfolio-fader-summerstseawall").addClass("display-flex");
        } else {
            $(".portfolio-fader-summerstseawall").removeClass("display-flex");
        }

        if($(this).hasClass("tfgreenairport-button")) {
            $(".portfolio-fader-tfgreenairport").addClass("display-flex");
        } else {
            $(".portfolio-fader-tfgreenairport").removeClass("display-flex");
        }

        if($(this).hasClass("wwiimemorial-button")) {
            $(".portfolio-fader-wwiimemorial").addClass("display-flex");
        } else {
            $(".portfolio-fader-wwiimemorial").removeClass("display-flex");
        }

        if($(this).hasClass("southstation-button")) {
            $(".portfolio-fader-southstation").addClass("display-flex");
        } else {
            $(".portfolio-fader-southstation").removeClass("display-flex");
        }
    });

    //test test test//<!--test test test tes-->

    $(".highst-button, .backbay-button, .batterywharf-button, .centralarteryairintake-button, .foxwoods-button, .harvardbusinessschool-button, .harvardlawschool-button, .marlowehotel-button, .mbtaashmontstation-button, .southstation-button, .summerstreetseawall-button, .tfgreenairport-button, .wwiimemorial-button").on("click", function(){
        if($(this).hasClass("highst-button")) {
            $(".highst-button .portfolio-dot").addClass("active");
        } else {
            $(".highst-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("backbay-button")) {
            $(".backbay-button .portfolio-dot").addClass("active");
        } else {
            $(".backbay-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("batterywharf-button")) {
            $(".batterywharf-button .portfolio-dot").addClass("active");
        } else {
            $(".batterywharf-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("centralarteryairintake-button")) {
            $(".centralarteryairintake-button .portfolio-dot").addClass("active");
        } else {
            $(".centralarteryairintake-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("foxwoods-button")) {
            $(".foxwoods-button .portfolio-dot").addClass("active");
        } else {
            $(".foxwoods-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("harvardbusinessschool-button")) {
            $(".harvardbusinessschool-button .portfolio-dot").addClass("active");
        } else {
            $(".harvardbusinessschool-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("harvardlawschool-button")) {
            $(".harvardlawschool-button .portfolio-dot").addClass("active");
        } else {
            $(".harvardlawschool-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("marlowehotel-button")) {
            $(".marlowehotel-button .portfolio-dot").addClass("active");
        } else {
            $(".marlowehotel-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("mbtaashmontstation-button")) {
            $(".mbtaashmontstation-button .portfolio-dot").addClass("active");
        } else {
            $(".mbtaashmontstation-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("southstation-button")) {
            $(".southstation-button .portfolio-dot").addClass("active");
        } else {
            $(".southstation-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("summerstreetseawall-button")) {
            $(".summerstreetseawall-button .portfolio-dot").addClass("active");
        } else {
            $(".summerstreetseawall-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("tfgreenairport-button")) {
            $(".tfgreenairport-button .portfolio-dot").addClass("active");
        } else {
            $(".tfgreenairport-button .portfolio-dot").removeClass("active");
        }
        if($(this).hasClass("wwiimemorial-button")) {
            $(".wwiimemorial-button .portfolio-dot").addClass("active");
        } else {
            $(".wwiimemorial-button .portfolio-dot").removeClass("active");
        }
    })

    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.one").on("click", function(){
    	if($(this).hasClass("one")) {
    	  	$(".dots.one").toggleClass('dot-active');
    	  	$(".dots.two, .three, .four, .five, .six, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.two").on("click", function(){
    	if($(this).hasClass("two")) {
    	  	$(".dots.two").toggleClass('dot-active');
    	  	$(".dots.one, .three, .four, .five, .six, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.three").on("click", function(){
    	if($(this).hasClass("three")) {
    	  	$(".dots.three").toggleClass('dot-active');
    	  	$(".dots.one, .two, .four, .five, .six, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.four").on("click", function(){
    	if($(this).hasClass("four")) {
    	  	$(".dots.four").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .five, .six, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.five").on("click", function(){
    	if($(this).hasClass("five")) {
    	  	$(".dots.five").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .four, .six, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.six").on("click", function(){
    	if($(this).hasClass("six")) {
    	  	$(".dots.six").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .four, .five, .seven, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.seven").on("click", function(){
    	if($(this).hasClass("seven")) {
    	  	$(".dots.seven").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .four, .five, .six, .eight, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.eight").on("click", function(){
    	if($(this).hasClass("eight")) {
    	  	$(".dots.eight").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .four, .five, .six, .seven, .nine").removeClass('dot-active');
        }
        refresh();
    });
    $(".fader, .about-fader, .sourcing-fader, .consulting-fader, .installation-fader, .portfolio-fader-99highst, .portfolio-fader-backbayhotel, .portfolio-fader-batterywharf, portfolio-fader-centralarteryairintake, .portfolio-fader-foxwoods, .portfolio-fader-harvardbusinessschool, .portfolio-fader-harvardlawschool, .portfolio-fader-marlowehotel, .portfolio-fader-mbtaashmontstation, .portfolio-fader-southstation, .portfolio-fader-summerstseawall, .portfolio-fader-tfgreenairport, .portfolio-fader-wwiimemorial, .contact-fader, .dots.nine").on("click", function(){
    	if($(this).hasClass("nine")) {
    	  	$(".dots.nine").toggleClass('dot-active');
    	  	$(".dots.one, .two, .three, .four, .five, .six, .seven, .eight").removeClass('dot-active');
        }
        refresh();
    });


});