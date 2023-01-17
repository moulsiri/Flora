let media=window.matchMedia("(max-width: 500px)")

// LOCOMOTIVE SETUP 
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true }
});
// Scroll Trigger SETUP 
gsap.registerPlugin(ScrollTrigger);
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    // follwoing line is not required to work pinning on touch screen
  
    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
  });


  
// TimeLine for Magical Things connect line 
let Mconnect=gsap.timeline({
    scrollTrigger:{
        trigger:"#mcnct",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        // markers:true,
        // end:"top 40%"
        // scrub:true
      },
      
  })
Mconnect.to("#mcnct h4",{
    onStart:function(){
        $(function () {
    $('#mcnct h4').textillate({ in: { effect: 'fadeInUp' } });
        });
    },
    opacity:1

})
.to(".cnctTxt",{
  opacity:1,
  fontFamily:"Sunshower Dreams",
  onStart:function(){
      $(function () {
  $('.cnctTxt').textillate({ in: { effect: 'fadeInUp' } });
});
  },
 

})
.to("#mcnct svg path",{
  strokeDashoffset:0
},"+=1")

//TimeLine for Magical Things page
let Mthings=gsap.timeline({
  scrollTrigger:{
    trigger:"#mtxt",
    scroller:"#main",
    start:"top 40%"
  }
})
Mthings.to(".mgtxt",{
  onStart:function(){
    $(function () {
$('.mgtxt').textillate({ in: { effect: 'fadeInUp' } });
});
},
  opacity:1,
  stagger:.2
})
.to("#mcirtxt h3",{
  opacity:1,
  onStart:function(){
    $(function(){
      $('#mcirtxt h3').textillate({in:{effect:'swing'}})
    })
  }
},"+=1")
.to("#mimgov",{
  left:-1000
})
.to("#mimg img",{
   opacity:.6
})

// For change in media 
if(media.matches){
  gsap.to("#mcirtxt",{
    scrollTrigger:{
      trigger:"#mtxt",
      scroller:"#main",
      start:"top 40%"
    },
    width:70,
    height:70,
    delay:1
  })
}
else{
  gsap.to("#mcirtxt",{
    scrollTrigger:{
      trigger:"#mtxt",
      scroller:"#main",
      start:"top 40%"
    },
    width:100,
    height:100,
    delay:1
  })
}

// Time Line for footer of Magical Things section 
let Mfooter=gsap.timeline({
  scrollTrigger:{
    trigger:"#mfooter",
    scroller:"#main",
    start:"top 80%"
  }
})

function mFooterAnime(timeLineName,w){
  timeLineName.to("#mfooter",{
    opacity:1,
    width:w
  
  })
  .to(".mftxt h4",{
    onStart:function(){
      $(function(){
        $('.mftxt h4').textillate({in:{effect:'fadeInLeft'}})
        $('.mftxt:last-child h4').textillate({in:{effect:'fadeInRight'}})
      })
    },
    opacity:1
  
  })
  .to(".mftxt p",{
    onStart:function(){
      $(function(){
        $('.mftxt p').textillate({in:{effect:'swing'}})
      })
    },
    opacity:1
  })
}
if(media.matches){
mFooterAnime(Mfooter,300);
}
else{
  mFooterAnime(Mfooter,1200);

}


// Time line for ProductShow vala section 
let ProShow=gsap.timeline({
  scrollTrigger:{
    trigger:"#proShow",
    scroller:"#main",
    start:"top 20%"
  }
})

ProShow.to("#proShow h1",{
  opacity:1,
  onStart:function(){
    $(function () {
$('#proShow h1').textillate({ in: { effect: 'fadeInUp' } });
});
}

})
.to(".ovPelm",{
  top:-1000,
  // stagger:.4
},"+=.5")
.to(".pelm",{
  backgroundSize:120
})
.to("#sliderBtn",{
  opacity:1,
  y:-20
})


// Time line for footer section 
let footer=gsap.timeline({
  scrollTrigger:{
    trigger:"footer",
    scroller:"#main",
    start:"top 40%"
  }
})
footer.to("#ftxt1 p",{
  opacity:1,
  onStart:function(){
    $(function () {
      $('#ftxt1 p').textillate({ in: { effect: 'fadeInUp' } });
      });
  }
})
.to("#ftxt1 h3",{
  opacity:1,
  onStart:function(){
    $(function () {
      $('#ftxt1 h3').textillate({ in: { effect: 'fadeInUp' } });
      });
  }
})
.to("#ftxt p",{
  opacity:1,
  onStart:function(){
    $(function () {
      $('#ftxt p').textillate({ in: { effect: 'fadeInUp' } });
      });
  }
})
.to("#fmail h2",{
  opacity:1,
  onStart:function(){
    $(function () {
      $('#fmail h2').textillate({ in: { effect: 'fadeInUp' } });
      });
  }
})
//  for media change 
if(media.matches){
  gsap.to("#fmail input",{
    scrollTrigger:{
      trigger:"footer",
      scroller:"#main",
      start:"top 40%"
    },
    width:200,
    opacity:1,
    delay:3

  })
  // gsap.to("#fmail input::placeholder",{
  //   scrollTrigger:{
  //     trigger:"footer",
  //     scroller:"#main",
  //     start:"top 40%"
  //   },
  //   onStart:function(){
  //     $(function(){
  //       $('#fmail input::placeholder').textillate({in:{effect:'swing'}})
  //     })
  //   },
  //   opacity:1,


  // })
}
else{
  gsap.to("#fmail input",{
    scrollTrigger:{
      trigger:"footer",
      scroller:"#main",
      start:"top 40%"
    },
    width:300,
    opacity:1,
    delay:3

  })
  // gsap.to("#fmail input::placeholder",{
  //   scrollTrigger:{
  //     trigger:"footer",
  //     scroller:"#main",
  //     start:"top 40%"
  //   },
  //   onStart:function(){
  //     $(function(){
  //       $('#fmail input::placeholder').textillate({in:{effect:'swing'}})
  //     })
  //   },
  //   delay:6,


  // })
}
// Full NavBar 
let fnbtn=document.querySelector("#nicons i:last-child");
let fncls=document.querySelector("#fnav>i");
fnbtn.style.cursor="pointer";
fnbtn.addEventListener("click",function(){
document.querySelector("#fnav").style.top="0";
})
fncls.addEventListener("click",function(){
  document.querySelector("#fnav").style.top="-100%";
  })


// ProductShowcase Pics Gallery scrollbar 
let elm=document.querySelectorAll(".pelm");
document.querySelector("#slider").style.width=elm[0].getBoundingClientRect().width*elm.length+"px";
// console.log(elm[0].getBoundingClientRect().width*elm.length+elm[0].getBoundingClientRect().right*elm.length);
let curr=document.querySelector("#slider").getBoundingClientRect().x;
document.querySelector("#gallery").addEventListener("scroll",function(){
  let newPosi=document.querySelector("#slider").getBoundingClientRect().x;
  let diff=newPosi-curr;
  let speed=diff*(0.4);
  elm.forEach(function(x){
    x.style.transform=`skewX(${speed}deg)`;
  })
  curr=newPosi;
})


// Full Screen Navbar Animation 
let imgSrc=["https://images.unsplash.com/photo-1613800172017-6b2b3787fdb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80","https://images.unsplash.com/photo-1616887749458-1b5fcd9f483a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80","https://images.unsplash.com/photo-1494337095615-b5f370aad75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","https://images.unsplash.com/photo-1494336850228-54adc1dd87ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]
let Cards=document.querySelectorAll(".link");
Cards.forEach(elm =>{
 elm.addEventListener("mousemove",function(dets){
   this.children[1].style.opacity=1;
   this.children[1].style.transform=`translate(${dets.clientX-200}px,-${dets.clientY/4}px) rotate(${dets.clientX/20}deg)`;
   document.querySelector("#case").style.backgroundImage=`url(${imgSrc[this.dataset.index]})`;
 })
elm.addEventListener("mouseout",function(dets){
  elm.children[1].style.opacity=0;
})
  
  
})

// Horizontal Scroll on click of a button in gallery 
let scrollBtn=document.querySelector("#sliderBtn");
scrollBtn.addEventListener("click",function(){
 document.querySelector("#gallery").scrollLeft+=10;
})


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
