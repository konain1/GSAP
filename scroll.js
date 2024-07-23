gsap.from('#page1 #box',{
    y:30,
    scale:0,
    rotate:350,
    duration:0.5,
    delay:0.5,
    scrollTrigger:'#page1 #box'
})

gsap.from('#page2 h3',{

    opacity:0,
    x:500,
    duration:1,
    scrollTrigger:{
        trigger:'#page2 h3',
        markers:true,
        scroller:'body',
       
        scrub:2
    }
})

gsap.from('#page2 h4',{

    opacity:0,
    x:-500,
    duration:1,
    scrollTrigger:{
        trigger:'#page2 h4',
        markers:true,
        scroller:'body',
        
        scrub:2
    }
})
gsap.from('#page3 #box',{
     y:30,
    scale:0,
    rotate:350,
    duration:0.5,
    scrollTrigger:{
        trigger:'#page3 h3',
        markers:true,
        scroller:"body",
        start:"top 60%"
    }
})