const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let xScale=1,yScale=1,xPre=0,yPre=0,timeOut;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
function mousePointer(){
    window.addEventListener("mousemove",(dets)=>{
        // console.log(dets)
        clearTimeout(timeOut);
        let xDiff=clamp(dets.clientX-xPre,0.8,1.2);
        let yDiff=clamp(dets.clientY-yPre,0.8,1.2);
        document.getElementById("mousePointer").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xDiff},${yDiff})`
        yPre=dets.clientY;
        xPre=dets.clientX;
        // console.log(xDiff,yDiff)
         timeOut =setTimeout(()=>{
            document.getElementById("mousePointer").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`

        },100)
    })
}
mousePointer()