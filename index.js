


for(var i=0;i<7;i++)
{
    var drum=document.querySelectorAll(".btn");
    drum[i].addEventListener("click", function()
    {
        Makesound(this.innerHTML);
        animation(this.innerHTML);
    })
}

document.addEventListener("keypress", function(event)
{
    Makesound(event.key);
    animation(event.key);
})


 function Makesound (element)
{
    switch (element){
        case "w":
            var aud= new Audio("crash.mp3");
            aud.play();
            break;
        case "a":
            var aud= new Audio("kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud= new Audio("snare.mp3");
            aud.play();
            break;
        case "d":
            var aud= new Audio("tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud= new Audio("tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud= new Audio("tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud= new Audio("tom-4.mp3");
            aud.play();
            break;
    }
}

function animation(box){
    var a = document.querySelector("." + box);
    
    a.classList.add("pressed");

    setTimeout( function() {
        a.classList.remove("pressed");
    }, 200 )
}