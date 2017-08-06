console.log("hell0");

// Default MouseX Offset
var offx = 0;
// Default Percentage Offset
var perc = 0;


function draw() {
    $('#stop0')
            .attr("offset", perc + '%')
            .css({
                
                "stop-color": "#fff"
            });
    
        $('#stop1')
            .attr("offset", perc + '%')
            .css({
               
                "stop-color": "#ff1500"
            });
}

function reducePercentage() {
    perc -= 1;
    draw(perc);
}

function rewindAnimation() {
    if(perc > 0) {
        reducePercentage()
        console.log(perc + "%");
        setTimeout(rewindAnimation(), 5000);
    }
}


function setWhiteStopColor() {
    $('#stop0, #stop1, #stop3')
        .css({
            "transition": ".3s ease-in",
            "stop-color": "#fff"
        });
}

function setDefaultState() {
    $("#stop0")
        .attr("offset", '0%')
        .css({
            "transition": ".5s ease",
            "stop-color": "#ff00b1"
        });
    $("#stop1")
        .attr("offset", '60%')
        .css({
            "transition": ".5s ease",
            "stop-color": "#ff1500"
        });
    $("#stop3")
        .attr("offset", '86%')
        .css({
            "transition": ".5s ease",
            "stop-color": "#0a0a0a"
        });
}

$('#aeiton-logo-head').mousemove(function (event) {
    // get the mouse offset in X-direction and total width of container
    var offX = Math.round(event.offsetX);
    var totalWidth = Math.round($(this).width());
    
    // Happens because of default material.css margin I guess?
    // TODO: fix this issue
    if (offX < 0) {
        offX = 0;
    }
    
    // calculate offset percentage 
    perc = Math.round((offX / totalWidth) * 100);
    
    console.log(perc + '%');
    
    // animate svg if true offset present
    if (perc > 0 && perc <= 100) {
        console.log("true")
        $('#stop0')
            .attr("offset", perc + '%')
            .css({
                "transition": ".2s ease",
                "stop-color": "#fff"
            });
    
        $('#stop1')
            .attr("offset", perc + '%')
            .css({
                "transition": ".2s ease",
                "stop-color": "#ff1500"
            });
    } 
     else {
         // MouseX = 0 or less
     setDefaultState();
     }
    
});


$('#logo-container').hover(function onMouseOver() {
  // setWhiteStopColor();
}, function onMouseOut() {
    // TODO: fix the rewind animation
    // 0 is tricky to occur
    if (perc > 0 && perc <= 100) {
      //  console.log("percent not 0");
       // Rewind animation
      //  rewindAnimation();
        
    } 
   // console.log("onmouseout");
    // mouse moved with rewind motion i.e mouseX = 0
    setDefaultState();
    
   
});

