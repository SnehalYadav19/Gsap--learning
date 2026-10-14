// gsap.from("h1",{
//     color:"red",
//     opacity:0,
//     duration:2,
//     delay:1,
//     y:20,
//     stagger:0.3
// })


// gsap.to("#box1",{
//     x:300,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue" ,
//     borderRadius:"50%",
//     scale:0.5,
//     // repeat:-1,
//     // yoyo:true
// })

// gsap.to("#box2",{
//     x:200,
//     y:100,
//     duration:3,
//     delay:3,
// })


//Timelines Gsap



// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:520,
//     rotate:360,
//    duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:520,
//     rotate:360,
//    duration:1.5,
//     delay:1
// })

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.53,
    delay:0.52
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.52,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})