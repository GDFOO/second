/*
* @Author: hp
* @Date:   2018-08-24 10:56:25
* @Last Modified by:   hp
* @Last Modified time: 2018-08-24 10:56:41
*/

'use strict';
 var index=0;
           var d=1;
           function next_pic(){
            if(d==1){
                index++;
            }else{
                index--;
            }
           if(index>3){
               index=3; 
               d=0; 
           } 
           if(index==-1){
            d=1;
            index=1;
           }
           shows();
           $('.box').animate({'top':-230*index+'px'})
           }
           function shows(){
             if(index==4){
                   index=3;
               $('.change li').eq(index).attr('class','bgcolor')
               $('.change li').eq(index).siblings().removeAttr('class');
   
               }
               $('.change li').eq(index).attr('class','bgcolor')
               $('.change li').eq(index).siblings().removeAttr('class');
               
           }
           var timer;
           function autoplay(){
               timer=setInterval(function(){
               next_pic();
               },3000)
           }
           autoplay();
           $('.change li').hover(function() {
            $(this).attr('class','bgcolor');
               $(this).siblings().removeAttr('class');
               var num=$(this).index();
               index=num;
               clearInterval(timer);
               $('.box').css('top',index*(-230)+'px')
           }, function() {
              autoplay()
           });