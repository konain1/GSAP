

let tl = gsap.timeline()

tl.from('nav h2',{
    y:-30,
    duration:0.1,
    delay:0.4,
    opacity:0,
   
})
tl.from('nav h4 ',{
    y:-30,
    duration:0.3,
    opacity:0,
    stagger:0.2,
   
})
tl.from('nav button',{
    y:-30,
    duration:0.7,
    opacity:0,
    stagger:0.2,
    ease: "elastic.out(1,0.2)",
})

tl.from('.leftCenter h1',{
    x:-60,
    duration:0.3,
    opacity:0,
    stagger:0.2,
})
tl.from('.leftCenter p,.leftCenter button',{
    x:-60,
    duration:0.3,
    opacity:0,
    stagger:0.2,
})
tl.from('.rightCenter img',{
    x:60,
    duration:0.3,
    opacity:0,
    stagger:0.2,
},"-=1")

tl.from('.brands img',{
    x:60,
    duration:0.3,
    opacity:0,
    stagger:0.2,
})


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 40%",
        end:"top 0%",
        
        markers:true,
        scrub:2
    }
})

tl2.from('.services',{
    x:-50,
    duration:0.3,
    opacity:0
   
})

tl2.from('.elem.line1.left',{
    x:"-120%",
    duration:0.3,

},"line1")

tl2.from('.elem.line1.right',{
    x:"120%",
    duration:0.3,
    
},"line1")


tl2.from('.elem.line2.right',{
    x:"120%",
    duration:0.3,
    
},"line2")

tl2.from('.elem.line2.left',{
    x:"-120%",
    duration:0.3,
    
},"line2")