$(document).on("mouseenter", '.flip', function(){
   $(this).find('.card').toggleClass('flipped');
});

$(document).on("mouseleave", '.flip', function(){
   $(this).find('.card').toggleClass('flipped');
});

$(document).on("click", '.flip', function(){
   window.location.replace("http://"+$(this).attr("id")+"-sklady.rhcloud.com")
});


