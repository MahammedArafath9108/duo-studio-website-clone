function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 1 + "px"
    crsr.style.top = dets.y + 1 + "px"
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")

tl.to(".page1 h2",{
    x:75,
},"anim")

tl.to(".page1 video",{
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -80%",
        end: "top -120%",
        scrub: 3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -340%",
        end: "top -370%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor: "#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "300px"
        crsr.style.borderRadius = "0px"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.width = "15px"
        crsr.style.height = "15px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})

var temp = document.querySelectorAll("img,video")
temp.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.height = "25px"
        crsr.style.width = "80px"
        crsr.style.borderRadius = "25px"
    }) 
    elem.addEventListener("mouseleave",function(){
        crsr.style.height = "15px"
        crsr.style.width = "15px"
        crsr.style.borderRadius = "50%"
    })
})