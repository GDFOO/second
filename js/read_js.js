

var index
$('.classify>ul>li').hover(function(){
    index = $(this).index()
    $(this).stop().addClass("bg")
    //------------------------
    $(".classify_detail>ul").eq(index).stop().show()

},function(){
    $('.classify >ul>li').eq(index).stop().removeClass('bg')

    //------------------------
    $(".classify_detail>ul").eq(index).stop().hide()
})

$('.classify>ol li').hover(function(){
    index = $(this).index()
    $(this).stop().addClass("bg")
    $('.classify>ul>li').eq(0).removeClass('bg')
    $('.classify>ul>li').eq(0).removeClass('plu')
    //------------------------
    $(".classify_detail>ul").eq(index +5).stop().show()
    console.log(index)
},function(){
    $('.classify>ol li').eq(index).stop().removeClass('bg')
    //------------------------
    $(".classify_detail>ul").eq(index+5).stop().hide()
})




$('.classify').mouseleave(function(){
    $('.classify>ul>li').eq(0).addClass('bg')
    $('.classify>ul>li').eq(0).addClass('plu')
})
$('.classify>ul>li').eq(0).mouseleave(function(){
    $('.classify>ul>li').eq(0).removeClass('plu')

})
//-----------------------footer

var index_footer
$(".cq_li").hover(function() {
    index_footer = $(this).index()-1
    console.log(index)
    $(".cq_pic").eq(index_footer).stop().fadeIn(600)
}, function (){
    $(".cq_pic").eq(index_footer).stop().fadeOut(600)
})

var indexr

$(".cq_li_r").hover(function() {
    indexr = $(this).index()-2
    console.log(indexr)
    $(".cq_pic").eq(indexr).stop().fadeIn(600)
}, function (){
    $(".cq_pic").eq(indexr).stop().fadeOut(600)
})
