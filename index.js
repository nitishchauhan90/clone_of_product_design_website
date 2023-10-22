const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),   //to make website smooth scroll
    smooth: true
});

function cursorchapta(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        // clearTimeout(timeout)
        xscale =gsap.utils.clamp(.8, 1.2, dets.clientX- xprev);
        yscale =gsap.utils.clamp(.8, 1.2, dets.clientY- yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        circlemousefollower(xscale,yscale);
        
    });
}
cursorchapta()
function circlemousefollower(xscale,yscale){    // to make circle move with cursor
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale}) `
    });
}
circlemousefollower()
let area1=document.querySelector("#elem1")
let area2=document.querySelector("#elem2")
let area3=document.querySelector("#elem3")
let image1=document.querySelector("#img1")
let image2=document.querySelector("#img2")
let image3=document.querySelector("#img3")

area1.addEventListener("mousemove",function(dets){
    image1.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img1.style.display="block"
})
area2.addEventListener("mousemove",function(dets){
    image2.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img2.style.display="block"
})
area3.addEventListener("mousemove",function(dets){
    image3.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img3.style.display="block"
})
area1.addEventListener("mouseleave",function(dets){
    image1.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img1.style.display="none"
})
area2.addEventListener("mouseleave",function(dets){
    image2.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img2.style.display="none"
})
area3.addEventListener("mouseleave",function(dets){
    image3.style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    img3.style.display="none"
})
gsap.from("#nav",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.5  //ek ek kerke lane ke liye
})

var tl=gsap.timeline()
tl.from("#head1",{
    y:200,
    duration:1,
    opacity:0
})
tl.from("#doside",{
    y:200,
    duration:1,
    opacity:0
})
tl.from("#chotu",{
    y:100,
    duration:.6,
    opacity:0
})
var kl=gsap.timeline()
kl.from("#side1",{
    y:-40,
    duration:.6,
    opacity:0
})
kl.from("#side2",{
    y:-40,
    duration:.6,
    opacity:0
})
