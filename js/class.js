/*
* @Author: hp
* @Date:   2018-08-24 11:30:36
* @Last Modified by:   hp
* @Last Modified time: 2018-08-24 11:31:24
*/

'use strict';
 var index=0;
        var length=$('.lo li').length;
        function next_pic(){
            index++;
            if(index>length){
                index=0;
                $('.box').css('left',index*(-540)+'px');
                index=1;  
            } 
            if(index==length){
                    index=0;
                $('.lo li').eq(index).attr('class','current').siblings().removeAttr('class');
                }
                $('.lo li').eq(index).attr('class','current').siblings().removeAttr('class');
            $('.box').animate({'left':-540*index+'px'})
            }
            function autoplay(){
            setInterval(function(){
                next_pic();
                },2000)
            }
            autoplay();
            $('ul li').click(function() {
                $(this).children('p').addClass('underline');
                $(this).siblings('li').children('p').removeClass('underline');
                $('body>div').eq( $(this).index()).show().siblings('div').hide();
            });
            $('ul li').eq(1).click(function() {
                var index=0;
                var lengths=$('.los li').length;
                setInterval(function(){
                index++;
                if(index>lengths){
                    index=0;
                    $('.boxs').css('left',index*(-540)+'px');
                    index=1;  
                } 
                if(index==lengths){
                        index=0;
                    $('.los li').eq(index).attr('class','current').siblings().removeAttr('class');
                    }
                    $('.los li').eq(index).attr('class','current').siblings().removeAttr('class');                  
                $('.boxs').animate({'left':-540*index+'px'})
                },2000)
                });
             $('ul li').eq(0).click(function(event) {
                 autoplay();
             });