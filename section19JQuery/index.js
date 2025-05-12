$("h1").addClass("big-title");
$("button");

//$("img").attr("src");

$(document).keypress(function(event){
    $("h1").text(event.key);
})

/*$("h1").before("<button>NEW</button>");

$("h1").after("<button>NEW</button>");

$("h1").append("<button>NEW</button>");

$("h1").prepend("<button>NEW</button>");

*/

$("button").on("click", function(){
    $("h2").toggle();
    $("h1").animate();    
})

$("button").on("click", function(){
$("h1").slideToggle();   
})

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
