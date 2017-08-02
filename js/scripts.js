console.log("hell0");

//$('#aeiton-logo-head').

var offx = 0;

$('#aeiton-logo-head').mousemove(function(event) {
  //  var containerWidth = $(this).width();
   // var percent = (+event.pageX) / offset;
    var offX = Math.round(event.offsetX);
    var totalWidth = Math.round($(this).width());
    
    // Happens because of margin I think
    // TODO: fix this issue
    if (offX < 0) {
        offX = 0;
    }
    
    // get the mouse offset
    var perc = Math.round((offX / totalWidth) * 100);
    console.log("offx: " + offX + "\nWidth: " + totalWidth + "\nperc: " + perc);
    
   // var ns = "http://www.w3.org/2000/svg";
    
    
    $('#stop0')
        .attr("offset", perc + '%')
        .css({
        "transition": ".3s ease-out", 
        "stop-color": "#fff",  
    });
    
    $('#stop1')
        .attr("offset",perc + '%')
        .css({
        "transition": ".3s ease-out", 
        "stop-color": "#ff1500",  
    });
});

$('#logo-container').hover(function onMouseOver() {
   
}, function onMouseOut() {
    $("#stop0")
    .attr("offset", '0%')
        .css({
        "transition": ".3s ease-out", 
        "stop-color": "#ff00b1",  
    });
    $("#stop1")
        .attr("offset", '60%')
        .css({
        "transition": ".3s ease-out",
        "stop-color": "#ff1500",
    });
    $("#stop3")
        .attr("offset", '86%')
        .css({
        "transition": ".3s ease-out",
        "stop-color": "#0a0a0a",
    });
});