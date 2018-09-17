/*
* @Author: hp
* @Date:   2018-08-24 10:07:35
* @Last Modified by:   hp
* @Last Modified time: 2018-08-24 10:09:27
*/

'use strict';
     $('.one>li').hover(function() {
          $(this).addClass('current');
          $(this).children().addClass('color');
     }, function() {
       $(this).removeClass('current');
       $(this).children().removeClass('color');
       $('.one>li').eq(0).addClass('current');
       $('.one>li').eq(0).children().addClass('color');
     });
