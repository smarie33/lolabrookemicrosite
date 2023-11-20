const STARTHERE = 'middle 80%';
const ENDHERE = 'botom 20%';


jQuery(document).ready(function ($) {
  $("#lola-brooke-newsletter-signup-us-arista").on("submit", function (e) {
    // Prevent default browser actions on form submission.
    e.preventDefault();
    // Get all the form user submitted data and get it ready to be sent.
    var data = $(this).serialize();
    // POST all the data to the SMF submission endpoint URL.
    $.ajax({
      type: "POST",
      url: "https://subs.sonymusicfans.com/submit",
      dataType: "json",
      data: data,
      xhrFields: {
        withCredentials: false
      },
      success: function (data) {
        // Do things on successful submission.
        $('#newsletter-modal #thankyou').removeClass('close-this');
        $('#newsletter-modal form').addClass('close-this');
      },
      error: function (err) {
        // Do things when submission has an error.
        alert("An error has occured!");
      }
    });
  });

  $('#slideshow').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });

});


$(window).scroll(function(){
  var w = $(window).scrollTop();
  var e = "-" + w/7 + "px";

  $('.parallaxbg').css({
    top : e
  });   
})

// window.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   event.returnValue = '';
//   document.querySelector('#newsletter-modal').classList.remove('close-this');
//   document.querySelector('body').classList.add('modal-is-showing');
// });

document.querySelector('#newslettermodalopen').addEventListener('click',(event) => {
    event.preventDefault();
    document.querySelector('#newsletter-modal').classList.remove('close-this');
    document.querySelector('body').classList.add('modal-is-showing');
})

document.querySelector('#closemodal').addEventListener('click',(event) => {
  event.preventDefault();
  document.querySelector('#newsletter-modal').classList.add('close-this');
  document.querySelector('body').classList.remove('modal-is-showing');
  document.querySelector('form #field_email_address').value = '';
  document.querySelector('#newsletter-modal #thankyou').classList.add('close-this');
  document.querySelector('#newsletter-modal form').classList.remove('close-this');
})

// window.onload = (event) => {
//   let socmeds = gsap.timeline();
//   socmeds
//   .to('.insta',{duration: .5,scale: 1.3})
//   .to('.insta',{duration: .5,scale: 1})
// }

// const socmeds = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.insta',
//       start: "top top",
//       scrub: false
//     }
//   });
// tl.add('sceneOne')
//   .to('.box', {
//         y: 150,
//         x:150,
//         duration: 1
//   })
//   .add("sceneTwo")
//   .call(() => console.log("call!")) // <-- here's the call
//   .to('.box',  {
//         rotate: 180,
//         duration: 1
//   });

let tt1 = new TimelineMax({
  repeat: -1
});

tt1.to("#tickertape1", 20, {
  backgroundPosition: "-2099.64px 50%",
  ease: Linear.easeNone
});

let tt2 = new TimelineMax({
  repeat: -1
});

tt2.to("#tickertape2", 20, {
  backgroundPosition: "-2099.64px 50%",
  ease: Linear.easeNone
});

let tt3 = new TimelineMax({
  repeat: -1
});

tt3.to("#tickertape3", 20, {
  backgroundPosition: "-1864.28px 50%",
  ease: Linear.easeNone
});

let tt4 = new TimelineMax({
  repeat: -1
});

tt4.to("#tickertape4", 20, {
  backgroundPosition: "-2230.71px 50%",
  ease: Linear.easeNone
});

let tt5 = new TimelineMax({
  repeat: -1
});

tt5.to("#tickertape5", 20, {
  backgroundPosition: "-2764.28px 50%",
  ease: Linear.easeNone
});

gsap.registerPlugin(ScrollTrigger);

if(window.innerWidth > 768){
  gsap.to('.lola-left',{
    scrollTrigger: {
      trigger: '.lola-left',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    xPercent: "-25"
  })

  gsap.to('.lola-right',{
    scrollTrigger: {
      trigger: '.lola-right',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    xPercent: "25"
  })

  gsap.to('.lola-lyrics',{
    scrollTrigger: {
      trigger: '.lola-lyrics',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.3,
    yPercent: "-10"
  })
}else{
  gsap.to('.lola-left',{
    scrollTrigger: {
      trigger: '.lola-left',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    yPercent: "-15"
  })

  gsap.to('.lola-right',{
    scrollTrigger: {
      trigger: '.lola-right',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    yPercent: "15"
  })

  gsap.to('.lola-lyrics',{
    scrollTrigger: {
      trigger: '.lola-lyrics',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.1,
    yPercent: "2"
  })
}

gsap.to('#lyrics',{
  scrollTrigger: {
    trigger: '#lyrics',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  repeat: 2, 
  yoyo: true,
  rotation: 20
})

gsap.to('#intronote',{
  scrollTrigger: {
    trigger: '#intronote',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  scale: .8,
})

gsap.to('.polaroid2',{
  scrollTrigger: {
    trigger: '.polaroid2',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  yPercent: "-25"
})

gsap.to('.alligator',{
  scrollTrigger: {
    trigger: '.alligator',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 30
})

gsap.to('.lolapol',{
  scrollTrigger: {
    trigger: '.lolapol',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  scale: 1.1
})

gsap.to('.iamlyrics',{
  scrollTrigger: {
    trigger: '.iamlyrics',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  scale: 1.1
})

if(window.innerWidth > 768){
  gsap.to('.lolasoundwave',{
    scrollTrigger: {
      trigger: '.lolasoundwave',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    xPercent: -30
  })
}else{
  gsap.to('.lolasoundwave',{
    scrollTrigger: {
      trigger: '.lolasoundwave',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    xPercent: -3
  })
}

gsap.to('.burst',{
  scrollTrigger: {
    trigger: '.burst',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 360
})

gsap.to('.cutoputwbluetape',{
  scrollTrigger: {
    trigger: '.cutoputwbluetape',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  scale: 1
})

if(window.innerWidth <= 768){
  gsap.to('#playredtv',{
    scrollTrigger: {
      trigger: '#playredtv',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.5
  })

  gsap.to('#playme',{
    scrollTrigger: {
      trigger: '#playme',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.5
  })
}

gsap.to('.burstred',{
  scrollTrigger: {
    trigger: '.burstred',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: -360
})

gsap.to('.lolapink',{
  scrollTrigger: {
    trigger: '.lolapink',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  yPercent: "20"
})

gsap.to('.meagain',{
  scrollTrigger: {
    trigger: '.meagain',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  yPercent: "-20"
})

gsap.to('#lyriccollage',{
  scrollTrigger: {
    trigger: '#lyriccollage',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  yPercent: "-20"
})

if(window.innerWidth > 768){
  gsap.to('.goldsticker',{
    scrollTrigger: {
      trigger: '.goldsticker',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.6
  })
}else{
  gsap.to('.goldsticker',{
    scrollTrigger: {
      trigger: '.goldsticker',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.6,
    xPercent: "20",
    yPercent: "-27"
  })
}

gsap.to('.manphoto',{
  scrollTrigger: {
    trigger: '.manphoto',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 15
})

if(window.innerWidth > 768){
  gsap.to('.badasslyrics',{
    scrollTrigger: {
      trigger: '.badasslyrics',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    xPercent: "-90"
  })
}else{
  gsap.to('.badasslyrics',{
  scrollTrigger: {
    trigger: '.badasslyrics',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  xPercent: "-20"
})
}

if(window.innerWidth <= 768){
  gsap.to('.playpitstopbtn',{
    scrollTrigger: {
      trigger: '.playpitstopbtn',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.2
  })
  gsap.to('.playyoubtn',{
    scrollTrigger: {
      trigger: '.playyoubtn',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 1.5
  })
}

gsap.to('.vacantpic',{
  scrollTrigger: {
    trigger: '.vacantpic',
    start: 'top 80%',
    end: ENDHERE,
    scrub: true
  },
  yPercent: "-30"
})

gsap.to('.vacantlyrics1',{
  scrollTrigger: {
    trigger: '.vacantlyrics1',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 8
})

gsap.to('.vacantlyrics2',{
  scrollTrigger: {
    trigger: '.vacantlyrics2',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 8
})

gsap.to('.vacantcutout',{
  scrollTrigger: {
    trigger: '.vacantcutout',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  scale: 1
})

gsap.to('.swoopsecond',{
  scrollTrigger: {
    trigger: '.swoopsecond',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 0,
  xPercent: "-18"
})

gsap.to('.swoopthird',{
  scrollTrigger: {
    trigger: '.swoopthird',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 7,
  xPercent: "-30"
})

gsap.to('.gb1',{
  scrollTrigger: {
    trigger: '.gb1',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: 10,
})

gsap.to('.gb2',{
  scrollTrigger: {
    trigger: '.gb2',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: -9,
  yPercent: "-3"
})

gsap.to('#sublyrics',{
  scrollTrigger: {
    trigger: '#sublyrics',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  yPercent: "5"
})

gsap.to('.gblyrics3',{
  scrollTrigger: {
    trigger: '.gblyrics3',
    start: STARTHERE,
    end: ENDHERE,
    scrub: true
  },
  rotation: -9
})

if(window.innerWidth <= 768){
  gsap.to('#disrespectplaybtn',{
    scrollTrigger: {
      trigger: '#disrespectplaybtn',
      start: STARTHERE,
      end: ENDHERE,
      scrub: true
    },
    scale: 2
  })
}



//smooth scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  //console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)