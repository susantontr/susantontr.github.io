
//flip the card in the main page
$(".card").click(function(){
  this.classList.toggle("is-flipped");
})

//hide and seek effect in Introduction part
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

//twickle effect in the Gallery
$(".yoga").hover(function(){
  $(this).fadeOut(50).fadeIn(50);
});

//zoom in picture in Gallery
$(".yoga").click(function () {
  var zoomedImgSrc = $(this).attr("src");
  $(".zoomedimg").attr("src", zoomedImgSrc);
  $(".gallery1").addClass("trans");
  $(".galleryzoom").removeClass("visibility");
});

$(".galleryzoom").click(function () {
  $(this).addClass("visibility");
  $(".gallery1").removeClass("trans");
});













