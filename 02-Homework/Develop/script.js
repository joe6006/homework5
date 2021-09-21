
//jquery to help page load
$(document).ready(function () {
    
    //moment js
    var time;
    var text;
    $("#current").text(moment().format("dddd, MMM Do YY, h:mm:ss a"));
    
        $(".savebtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        
        var time = $(this).parent().attr("id");

        console.log(this);

        localStorage.setItem(text, time);

     })

    
    
     
})
