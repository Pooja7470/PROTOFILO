//  locomotive scrollTriger

function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });






    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
init();


//   gsap animation

var tl = gsap.timeline();
tl.from(".nav-left h1", {
    duration: 3,
    y: 300,
    color: 'red',

    opacity: 0,
    stagger: .3,
    ease: "bounce",
    ScrollTrigger: {
        trigger: '.nav-left',
        scroller: '#main',
        markers: true,

        start: 'top 40%',
        end: 'top 30%',
        scrub: true

    }
})

gsap.from(".heading h2", {
    duration: 3,
    x: 300,
    color: 'green',

    opacity: 0,
    stagger: .3,
    ease: "bounce",
    
},'-=2')

tl.from(".heading h3", {
    duration: 3,
    y: -300,
    color: 'green',

    opacity: 0,
    stagger: .3,
    ease: "linear",
    
},'-=4')

tl.from(".heading button", {
    duration: 3,
    rotate:360,
    x: -300,
    color: 'orange',
    fontSize:30,
    opacity: 0,
    stagger: .3,
    ease: "linear",
    
},'-=5')


tl.from(".nav-right li", {
    duration: 3,
    y: -300,
    color: 'green',

    opacity: 0,
    stagger: .3,
    ease: "linear",
    
},'-=6')

gsap.from('.bg3',{
    opacity:0,
    y:20,
    height:250,
    width:350,
    scrollTrigger:{
        trigger:'.bg3',
        scroller:'#main',
        start:'top 60%',
        end:'top 40%',
        scrub:true
    }
})

gsap.from('.bg',{
    opacity:0,
    x:-100,
    y:-20,
    height:250,
    width:350,
    scrollTrigger:{
        trigger:'.bg',
        scroller:'#main',
        start:'top 60%',
        end:'top 40%',
        scrub:true
    }
})
gsap.from('.bg2',{
    opacity:0,
    
    scale:.5,
    color:'orange',
    fontSize:'40px',
    height:250,
    width:350,
    scrollTrigger:{
        trigger:'.bg2',
        scroller:'#main',
        start:'top 60%',
        end:'top 40%',
        scrub:true
    }
})
gsap.from('footer h6',{
    opacity:0,
    y:-80,
    height:250,
    color:'red',
    scrollTrigger:{
        trigger:'footer h6',
        scroller:'#main',
        start:'top 60%',
        end:'top 40%',
        scrub:true
    }
})
gsap.from('footer h4',{
    opacity:0,
    fontSize:20,
    color:'red',
    x:-20,
    scrollTrigger:{
        trigger:'footer h4',
        scroller:'#main',
        start:'top 90%',
        end:'top 40%',
        scrub:true
    }
})
gsap.from('.image1 img',{
    opacity:0,
    fontSize:20,
    color:'red',
    scale:1.8,
    stagger:2,
    scrollTrigger:{
        trigger:'.image1 img',
        scroller:'#main',
        start:'top 90%',
        end:'top 40%',
        scrub:true
    }
})

     DOM 

var work =document.querySelector(".work")
var page= document.querySelector("footer")

work.addEventListener('click',{


})   
