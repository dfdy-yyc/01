// ==UserScript==
// @name         bilibili 倍速
// @license MIT
// @version      0.4.1
// @description  按钮倍速
// @author       dfdy-yyc
// @match           https://www.bilibili.com/video/*
// @match           https://www.bilibili.com/list/*
// @match           https://www.bilibili.com/bangumi/play/*
// @match           https://www.bilibili.com/cheese/play/*
// @match           https://www.bilibili.com/festival/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @namespace https://greasyfork.org/users/1276921
// @downloadURL https://update.greasyfork.org/scripts/490330/bilibili%20%E5%80%8D%E9%80%9F.user.js
// @updateURL https://update.greasyfork.org/scripts/490330/bilibili%20%E5%80%8D%E9%80%9F.meta.js
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
        parentElement1.insertAdjacentHTML('afterbegin', '<li class="bpx-player-ctrl-playbackrate-menu-item" data-value="4.0">4.0x</li>');
    }

}, 100); // 每隔100毫秒执行一次搜索

    };})();




