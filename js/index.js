document.addEventListener('DOMContentLoaded',function(){

    //Fade ins on landing
    var mainHeadDiv = $("#mainHead"); 
    mainHeadDiv.fadeIn(2000);
    $("#contactInfo").fadeIn(6000)

    /**
     * SWEN Click
     */
    $("#swenLink").click(function(){
        console.log("Clicked Swen");
        mainHeadDiv.fadeOut(1000);
        setTimeout(function(){
            $("#subContainers").fadeIn(1000);
            $("#swenDiv").fadeIn(1000);
        },1000)
    })

    /**
     * Web Dev Click
     */
    $("#webDevLink").click(function(){
        console.log("Clicked Web Dev");
        mainHeadDiv.fadeOut(1000);
        setTimeout(function(){
            $("#subContainers").fadeIn(1000);
            $("#wdevDiv").fadeIn(1000);
        },1000)
    })

    /**
     * Music Click
     */
    $("#musLink").click(function(){
        console.log("Clicked Music");
        mainHeadDiv.fadeOut(1000);
        setTimeout(function(){
            $("#subContainers").fadeIn(1000);
            $("#musDiv").fadeIn(1000);
        },1000)
    })


    /**
     * Back Button
     */
    $(".toHome").click(function(){
        console.log("Back clicked");
        $("#subContainers").fadeOut(1000);
        $("#swenDiv").fadeOut(1000);
        $("#wdevDiv").fadeOut(1000);
        $("#musDiv").fadeOut(1000);
        setTimeout(function(){
            mainHeadDiv.fadeIn(1000);
        },1000);
        
    })
    
})

