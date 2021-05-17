var signin = {
    template: '#signin'
};
var signup = {
    template: "#signup"
};
var routerObj = new VueRouter({
    routes: [
        {path: '/', component: signin},
        {path: '/signin', component: signin},
        {path: '/signup', component: signup},
    ]
});
new Vue({
    el: "#change",
    router: routerObj,
    mounted() {
        init();
    },
    watch:{
        '$route.path':function () {
                setTimeout(init,500);
        }
    }
});

function init() {
    var box = document.getElementsByClassName("login_button")[0];
    var card = document.getElementsByClassName("card")[0];
    var circle = document.getElementsByClassName("circle")[0];
    var login_input = document.getElementsByClassName("login_input")[0];
    var blur = document.getElementsByClassName("blur")[0];
    var h1 = document.getElementsByClassName("h1")[0];
    var login_text = document.getElementsByClassName("login_text")[0];
    timehandler();
    var mytime = setInterval(function(){timehandler()}, 1000);
    function timehandler() {
        var d = new Date();
        hour = d.getHours();
        min = d.getMinutes();
        hour = hour > 9 ? hour : '0' + hour;
        min = min > 9 ? min : '0' + min;
        h1.innerHTML = hour + ':' + min;
    }
    box.onmouseenter = function (event) {
        span = document.createElement('span');
        span.classList.add('circle_in');
        span.style.left = event.offsetX + "px";
        span.style.top = event.offsetY + "px";
        box.insertBefore(span, login_text);
    };
    box.onmouseleave = function (event) {
        box.removeChild(span);
        span = document.createElement('span');
        span.classList.add('circle_out');
        span.style.left = event.offsetX + "px";
        span.style.top = event.offsetY + "px";
        box.insertBefore(span, login_text);
    };
    login_input.onfocus = function (event) {
        $(".card").css({
            "backdrop-filter":"blur(10px)",
            "boxShadow":"6px 6px 30px rgba(0, 0, 0, 0.5)"
        });
        this.setAttribute("placeholder", "")
    };
    login_input.onblur = function () {
         $(".card").css({
            "backdrop-filter":"blur(3px)",
            "boxShadow":"5px 5px 30px rgba(0, 0, 0, 0.3)"
        });
        this.setAttribute("placeholder", "请输入密码")
    };
    circle.onmouseenter = function () {
        card.style.transform = "rotate3d(1,1,0,10deg)";
    };
    circle.onmouseleave = function () {
        card.style.transform = "rotate3d(1,1,0,0deg)";
    };
    login_input.focus();
}
