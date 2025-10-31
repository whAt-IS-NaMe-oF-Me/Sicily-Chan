// ==UserScript==
// @name         Sicly Chan
// @namespace    http://tampermonkey.net/
// @version      2025-10-30
// @description  try to take over the world!
// @author       You
// @match        https://oj.turingedu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soj.ac
// @grant        none
// ==/UserScript==

var head = document.getElementsByTagName('head')[0];
var csslink = document.createElement('link');
csslink.href = 'https://what-is-name-of-me.github.io/Sicily-Chan/self/style.css';
csslink.rel = 'stylesheet';
csslink.type = 'text/css';
head.appendChild(csslink);

var scriptlink = document.createElement('script');
scriptlink.src = 'https://what-is-name-of-me.github.io/Sicily-Chan/cdnjs/jquery-ui/1.14.1/jquery-ui.min.js';
scriptlink.type = 'text/javascript';
head.appendChild(scriptlink);

var addUrlParam = function (url, key, val) {
  var newParam = encodeURIComponent(key) + '=' + encodeURIComponent(val);

  url = url.split('#')[0];
  var twoPart = url.split('?'), params = {};
  var tmp = twoPart[1] ? twoPart[1].split('&') : [];
  for (var i in tmp) {
    var a = tmp[i].split('=');
    params[a[0]] = a[1];
  }

  params[key] = val;

  url = twoPart[0] + '?';
  for (var key2 in params) {
    url += encodeURIComponent(key2) + '=' + encodeURIComponent(params[key2]) + '&';
  }

  url = url.substring(0, url.length - 1);

  return url;
};

$(function () {
  $(document).on('click', 'a[href-post]', function (e) {
    e.preventDefault();

    var form = document.createElement('form');
    form.style.display = 'none';
    form.method = 'post';
    form.action = $(this).attr('href-post');
    form.target = '_self';

    document.body.appendChild(form);
    form.submit();
  });

  $("body").append(`
      <div id="sicily_chan">
          <div id="talkbox">
              <div id="boxtop"></div>
              <div id="boxcnt">
                  <div>自定义内容：</div>
                  <div style="text-align: center; ">参考这样换行！</div>
              </div>
              <div id="boxbottom"></div>
          </div>
          <div id="sicilychan_body">
              <div id="face" class="face1"></div>
          </div>
      </div>
  `);

  $("#sicily_chan").draggable();

  var p;
  (p = () => new Promise((resolve) => {
      setTimeout(() => {
          $("#face").removeClass("face1").addClass("face2");
          resolve();
      }, 2000 + Math.random() * 2000);
  }).then(() => new Promise((resolve) => {
      setTimeout(() => {
          $("#face").removeClass("face2").addClass("face3");
          resolve();
      }, 100);
  })).then(() => new Promise((resolve) => {
      setTimeout(() => {
          $("#face").removeClass("face3").addClass("face1");
          resolve();
      }, 100);
  }).then(p)))();

});



