document.addEventListener('DOMContentLoaded',function(){
    
    /**
     * Element Variables
     */
    //Divs
    var mainHeadDiv = $("#mainHead"); 

    var swenDiv = $("#swenDiv");
    var wdevDiv = $("#wdevDiv");
    var musDiv = $("#musDiv");

    //Links
    var swenLink = $("#swenLink");
    var wdevLink = $("#webDevLink");
    var musLink = $("#musLink");

    //Fade ins on landing
    mainHeadDiv.fadeIn(2000);
    $("#contactInfo").fadeIn(6000)

    /**
     * SWEN Click
     */
    $("#swenLink").click(function(){
        wdevDiv.fadeOut(1000);
        musDiv.fadeOut(1000);
        setTimeout(function(){
            swenDiv.fadeIn(1000);
        },1000)
    })

    /**
     * Web Dev Click
     */
    $("#webDevLink").click(function(){
        swenDiv.fadeOut(1000);
        musDiv.fadeOut(1000);
        setTimeout(function(){
            wdevDiv.fadeIn(1000);
        },1000)
    })

    /**
     * Music Click
     */
    $("#musLink").click(function(){
        swenDiv.fadeOut(1000);
        wdevDiv.fadeOut(1000);
        setTimeout(function(){
            musDiv.fadeIn(1000);
        },1000)
    })
    
})

