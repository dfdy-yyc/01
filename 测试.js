// ==UserScript==
// @name         bilibil 倍速

// @version      0.3
// @description  按钮倍速
// @author       dfdy-yyc
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('123')
    window.onload=function() {
var intervalId = setInterval(function() {
    var parentElement = document.querySelector('.bpx-player-ctrl-playbackrate-menu');

    if (parentElement) {
        clearInterval(intervalId); // 如果找到元素，停止定时器
        console.log("找到元素:", parentElement);

        // 在这里编写需要执行的代码
         var parentElement1 = document.getElementsByClassName('bpx-player-ctrl-playbackrate-menu')[0]
        parentElement1.insertAdjacentHTML('afterbegin', '<li class="bpx-player-ctrl-playbackrate-menu-item" data-value="3.0">3.0x</li>');
    }

}, 100); // 每隔100毫秒执行一次搜索

    };})();




