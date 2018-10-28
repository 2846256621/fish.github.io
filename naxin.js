//实现中心四张图片加载时陆续出现，点击图片，div变大，出现文字，同时整个背景的颜色发生变化
var body = document.getElementById('body');
var imgs = document.getElementsByClassName('img');
var turn = document.getElementsByClassName('turn');
var title = document.getElementById("title");
var time = 0,index = 0;
var tell = document.getElementById("tell");
var p =document.getElementsByClassName("p");
var say = document.getElementById("say");
var point = document.getElementById("point");
window.onload = function () {
    turn[0].style.animation = 'turn1 1.5s 1 ease';
    turn[1].style.animation = 'turn2 1.5s 1 ease';
    turn[2].style.animation = 'turn3 1.5s 1 ease';
    turn[3].style.animation = 'turn4 1.5s 1 ease';
    setTimeout(function(){
        turn[0].style.animation = '';
        turn[1].style.animation = '';
        turn[2].style.animation = '';
        turn[3].style.animation = '';
    },1500);
    point.style.animation = 'point 2s 1 ease';
    say.style.animation = 'say 2s 1 ease';
};
//题目的出现
function text() {
    var str = "前端进阶庄园";
    var str2 ="来到“庄园”和我们一起成长吧。通过自己的努力，每天收获满满的能量哦，是不是超有成就感呢。" +
        "等你长成一棵”大树，你就是传说中的大佬了哦，你也可以做出炫酷的动画，吸人眼球的页面，" +
        "当然也可以给你的天马行空的思想一个很好的展示空间哦。快来加入我们吧，期待见到每个拥有小思想的小阔爱哦ヽ(￣▽￣)ﾉ。";
    title.innerText = str.substring(0,index++);
    tell.innerText = str2.substring(0,index++);
}
setInterval(text, 100);

function change(event) {
    x = event.target;
    if(x.id === "one"){
        turn[0].style.width = '870px';
        turn[0].style.height = '360px';
        turn[0].style.zIndex = '1';
        turn[0].style.backgroundColor = '#999c96';
        p[0].style.display = 'block';
        p[0].style.right = '0';
        imgs[1].style.opacity = '0';
        turn[1].style.display = 'none';
    }
    else if(x.id !== "one"){
        turn[0].style.width = '430px';
        turn[0].style.height = '350px';
        p[0].style.display = 'none';
        body.style.backgroundColor ='';
        imgs[1].style.opacity = '1';
        turn[1].style.display = 'block';
    }
    if(x.id === "two"){
        turn[1].style.width = '870px';
        turn[1].style.height = '360px';
        turn[1].style.zIndex = '1';
        turn[1].style.backgroundColor = '#999c96';
        turn[1].style.left='0'; //第二个向左移动
        p[1].style.display = 'block';
        p[1].style.left = '0';
        imgs[1].style.left = '50%';   //将第二个div中图片右移
    }
    else if(x.id !== "two"){
        turn[1].style.width = '430px';
        turn[1].style.height = '350px';
        turn[1].style.left = "50%";//第二个div和框复原
        p[1].style.display = 'none';
        imgs[1].style.left = '0';
    }

    if(x.id === "three"){
        turn[2].style.width = '870px';
        turn[2].style.height = '360px';
        turn[2].style.zIndex = '1';
        turn[2].style.backgroundColor = '#999c96';
        p[2].style.display = 'block';
        p[2].style.right = '0';
        imgs[3].style.opacity = '0';
        turn[3].style.display ='none';
    }
    else if(x.id !== "three"){
        turn[2].style.width = '430px';
        turn[2].style.height = '350px';
        p[2].style.display = 'none';
        imgs[3].style.opacity = '1';
        turn[3].style.display ='block';
    }

    if(x.id === "four"){
        turn[3].style.width = '870px';
        turn[3].style.height = '360px';
        turn[3].style.left='0'; //第四个向左移动
        turn[3].style.zIndex = '1';
        turn[3].style.backgroundColor ='#999c96';
        p[3].style.display = 'block';
        p[3].style.left = '0';
        imgs[3].style.left = '50%';   //将第四个div中图片右移
    }
    else if(x.id !== "four"){
        turn[3].style.width = '430px';
        turn[3].style.height = '350px';
        turn[3].style.left='50%'; //第四个div复原位置
        imgs[3].style.left = '0'; //图片也复原位置
        p[3].style.display = 'none';
    }
}
