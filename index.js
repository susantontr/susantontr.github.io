

$(".card").click(function(){
  this.classList.toggle("is-flipped");
})



$(".yoga").hover(function(){
  $(this).fadeOut(50).fadeIn(50);
});



$(".fas1").hover(function(){
  $(this).css("color", "#202040");
});
$(".fas1").click(function(){
  $(".p2").css("color", "black");
});

$(".fas2").hover(function(){
  $(this).css("color", "#204969");
});
$(".fas2").click(function(){
  $(".p3").css("color", "black");
});

$(".fas3").hover(function(){
  $(this).css("color", "#00bdaa");
});
$(".fas3").click(function(){
  $(".p4").css("color", "black");
});

$(".fas4").hover(function(){
  $(this).css("color", "#347474");
});
$(".fas4").click(function(){
  $(".p5").css("color", "black");
});






