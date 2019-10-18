

$(".card").click(function(){
  this.classList.toggle("is-flipped");
})



$(".yoga").hover(function(){
  $(this).fadeOut(50).fadeIn(50);
});



$(".fas1").click(function(){
  $(".p2").css("color", "black");
});

$(".fas2").click(function(){
  $(".p3").css("color", "black");
});

$(".fas3").click(function(){
  $(".p4").css("color", "black");
});

$(".fas4").click(function(){
  $(".p5").css("color", "black");
});


$(".gallery1").click(function () {

  $(this).addClass("trans");
  $(".galleryzoom").removeClass("visibility");
});


$(".galleryzoom").click(function () {

  $(this).addClass("visibility");
  $(".gallery1").removeClass("trans");
});







