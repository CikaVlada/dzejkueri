$(document).ready(() => {
  console.log('init');
  var messages = [{
    id: 1,
    read: true,
    body: "message1"
  }, {
    id: 2,
    read: false,
    body: "message2"
  }, {
    id: 3,
    read: false,
    body: "message3"
  }];
});

$(document).ready(function () {
    $('ul.list-group').css('font-weight', 'bold');
});


$(".form-control").keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		var messageBox = $(".form-control").val();
		$("body > div > div.row > div:nth-child(1) > ul").append('<li class="list-group-item added">'+messageBox+'</li>');
		$("body > div > div.row > div:nth-child(2) > ul").append('<li class="list-group-item added">'+messageBox+'</li>');
var count = $(".list-group").children().length;
   var counter = $(".read").length;
   $("span.badge.badge-secondary").text(count-counter);
		}
 
});
$("body > div > div.row > div:nth-child(1) > ul > li").hover(function(){
   $(this).css("font-weight", "normal");
   $(this).addClass("read");
   var count = $(".list-group").children().length;
   var counter = $(".read").length;
   console.log(counter);

$("span.badge.badge-secondary").text(count-counter);

    });
	
$("body > div > div.row > div:nth-child(2) > ul ").hover(function(){
   $(this).css("font-weight", "normal");
   $(this).children().addClass("read");
   var count = $(".list-group").children().length;
   var counter = $(".read").length;
   	
$("span.badge.badge-secondary").text(count-counter);
	 });