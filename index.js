 
 var noOfButtons=document.querySelectorAll(".drum").length;  //.drum is used insted of button because if an
 //other  button is added in the html but doesn't need these prop it will also get these prop so using classname is more accurate
 for(var i=0;i<noOfButtons;i++)
 {
 document.querySelectorAll(".drum")[i].addEventListener("click",clickme);

 }
 function clickme()
 {
    var buttonIn=this.innerHTML;
    keypressing(buttonIn)
    animation(buttonIn)
 }
/*
function clickme()
{
    var buttonIn=this.innerHTML;    
      switch(buttonIn)
      {
            case "w":
            var a=new Audio("sounds/tom-1.mp3")
            a.play();
            break;

            case "a":
            var a=new Audio("sounds/tom-2.mp3")
            a.play();
            break;

            case "s":
            var a=new Audio("sounds/tom-3.mp3")
            a.play();
            break;

            case "d":
            var a=new Audio("sounds/tom-4.mp3")
            a.play();
            break;

            case "j":
            var a=new Audio("sounds/snare.mp3")
            a.play();
            break;

            case "k":
            var a=new Audio("sounds/crash.mp3")
            a.play();
            break;

            case "l":
            var a=new Audio("sounds/kick-bass.mp3")
            a.play();
            break;

     default:
        alert("hi")
      }
    //var n=(this.style.color="blue");
    //var audio=new Audio("sounds/tom-1.mp3")
    //audio.play();
}
*/



document.addEventListener("keypress" , function(event)
{
        keypressing  (event.key)
        animation(event.key)
      
});


function keypressing(key)
{
    switch(key)
      {
            case "w":
            var a=new Audio("sounds/tom-1.mp3")
            a.play();
            break;

            case "a":
            var a=new Audio("sounds/tom-2.mp3")
            a.play();
            break;

            case "s":
            var a=new Audio("sounds/tom-3.mp3")
            a.play();
            break;

            case "d":
            var a=new Audio("sounds/tom-4.mp3")
            a.play();
            break;

            case "j":
            var a=new Audio("sounds/snare.mp3")
            a.play();
            break;

            case "k":
            var a=new Audio("sounds/crash.mp3")
            a.play();
            break;

            case "l":
            var a=new Audio("sounds/kick-bass.mp3")
            a.play();
            break;

     default:
        alert("hi")
      }
}
function animation(curr)
{
         var obj=document.querySelector("."+curr)//coz total element needs to be selected not just w whole w with button must be selected
         obj.classList.add("pressed")

         setTimeout(function() {
            obj.classList.remove("pressed")
         }, 100);
         
}
/*
document.querySelectorAll("button")[0].addEventListener("click",function()
{
    alert("igot clicked")
})
*/