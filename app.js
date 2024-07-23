
gsap.to('.box',{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:'blue',
    repeat:-1,
    yoyo:true
})

gsap.from('.box2',{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:'green',
    repeat:-1,
    yoyo:true
})

// gsap.from('h1',{
//     y:30,
//     opacity:0,
//     duration:1.5,
//     stagger:-1

// })

let tl = gsap.timeline()

tl.from('h2',{
    y:-20,
    duration:0.5,
    delay:0.5,
    opacity:0
})

tl.from('.list h4',{
    y:-20,
    duration:0.5,
    
    opacity:0,
    stagger:0.3
})
tl.from('h1',{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.3,
    scale:0.2

})

