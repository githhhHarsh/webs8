
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    // mobile: {
    //   smooth: true,
    //   inertia: 0.8,
    //   getDirection: true,
    //   breakpoint:0,
    // },
});

document.querySelector("#right p").addEventListener("click",function(){
    alert("sorry! its just a demo button");
})

let tl=gsap.timeline()

tl.from("#loader h2",{
  y:-20,
  opacity:0,
  delay:0.6,
  duration:1.5,
  stagger:0.4
})
tl.to("#loader h2",{
  y:-70,
  opacity:0,
  duration:1,
  stagger:0.2
})
tl.to("#loader",{
  opacity:0,
})
tl.to("#loader",{
  opacity:0,
  display:"none"
})
