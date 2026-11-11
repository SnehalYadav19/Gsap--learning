window.addEventListener("wheel",function(dets ){
    if(dets.deltaY>0){
        console.log("seedha scrolling")
    }

    else{
        console.log("Rreverse Scrolling")
    }
})

gsap.to(".marque",{
    transform:'translateX(-100%)',
    ease:"none",
    repeat:-1,

    duration:2
})