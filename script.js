gsap.from("h1",{
    color:"red",
    opacity:0,
    duration:2,
    delay:1,
    y:20,
    stagger:0.3
})


gsap.to("#box1",{
    x:300,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue" ,
    borderRadius:"50%",
    scale:0.5,
    repeat:-1,
    yoyo:true
})

gsap.to("#box2",{
    x:200,
    y:100,
    duration:3,
    delay:0,
})
