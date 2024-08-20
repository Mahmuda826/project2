window.onscroll = ()=>
{
    //alert("scrolled");
}

window.addEventListener("scroll", function() {
   // console.log("scroll dowm")
})


let scoller = 0;
window.addEventListener("scroll", function(){
    let newScoller = window.scrollYdown || document.documentElement.scrollTop
    if( newScoller> scoller)
    {
        console.log("scroll down");
    }
    else{
        console.log("scroll up");
    }
    scoller = newScoller;
    
})