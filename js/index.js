function fadeImgTransition(newImgPath){
    $("#pfp").fadeTo(1000,0.30, function() {
        $("#pfp").attr("src",newImgPath);
    }).fadeTo(500,1)
}

document.addEventListener('DOMContentLoaded',function(){
    
    /**
     * Element Variables
     */
    //Images
    var profilePic = $("#pfp");

    //Divs
    var mainHeadDiv = $("#mainHead"); 

    var swenDiv = $("#swenDiv");
    var wdevDiv = $("#wdevDiv");
    var musDiv = $("#musDiv");

    //Links
    var swenLink = $("#swenLink");
    var wdevLink = $("#webDevLink");
    var musLink = $("#musLink");

    //Delay Values
    var timeoutDelay = 1000;
    var divAnimDuration = 1000;
    var fadeDuration = 250;

    //Animiation Type
    var divAnimationType = 'fold';

    //Fade ins on landing--------------
    mainHeadDiv.fadeTo(2000,1);
    //---------------------------------
 
    /**
     * SWEN Click
     */
    $("#swenLink").click(function(){

        wdevLink.fadeTo(fadeDuration,0.5);
        musLink.fadeTo(fadeDuration,0.5);

        fadeImgTransition("./images/Kieran_potato.jpg");

        wdevDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        musDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        setTimeout(function(){
            swenLink.fadeTo(250,1);
            swenDiv.show(divAnimationType, {direction: 'right'}, divAnimDuration);
        },timeoutDelay)
    })

    /**
     * Web Dev Click
     */
    $("#webDevLink").click(function(){

        swenLink.fadeTo(fadeDuration,0.5);
        musLink.fadeTo(fadeDuration,0.5);

        fadeImgTransition("./images/Kieran_dev.jpg");
        
        swenDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        musDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        setTimeout(function(){
            wdevLink.fadeTo(fadeDuration,1);
            wdevDiv.show(divAnimationType, {direction: 'right'}, divAnimDuration);
        },timeoutDelay)
    })

    /**
     * Music Click
     */
    $("#musLink").click(function(){

        swenLink.fadeTo(fadeDuration,0.5);
        wdevLink.fadeTo(fadeDuration,0.5);
        
        fadeImgTransition("./images/Kieran_music.jpg");
        
        swenDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        wdevDiv.hide(divAnimationType, {direction: 'left'}, divAnimDuration);
        setTimeout(function(){
            musLink.fadeTo(fadeDuration,1);
            musDiv.show(divAnimationType, {direction: 'right'}, divAnimDuration);
        },timeoutDelay)
    })
    
})

