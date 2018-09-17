var index
$(".cq_li").hover(function() {
    index = $(this).index()-1
    console.log(index)
    $(".cq_pic").eq(index).stop().fadeIn(600)
}, function (){
    $(".cq_pic").eq(index).stop().fadeOut(600)
})

var indexr

$(".cq_li_r").hover(function() {
    indexr = $(this).index()-2
    console.log(indexr)
    $(".cq_pic").eq(indexr).stop().fadeIn(600)
}, function (){
    $(".cq_pic").eq(indexr).stop().fadeOut(600)
})
$(window).scroll(function(){
    if($(window).scrollTop>$(window).height+300+'px'){
        $(".action").show(600)
    }else {
        $(".action").hide(600)
    }
})


//____________________________go back
$('.gotop').click(function(){
    //$('html,body').scrollTop("0px")
    $('html,body').animate({'scrollTop' : '0px'},1000)
})