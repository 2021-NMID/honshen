var int;
var a = 0;
// Vue.filter('filter',function (msg) {
//     return msg+'嘿嘿'
// })
function timehandler() {
    if(a<500) a = a + 5;
    $(".audio-bar-face").css("width", a + "px");
    $(".audio-bar-button").css("margin-left", a + "px");
}
var app = new Vue({
    el: "#all",
    delimiters: ["[[","]]"],
    data: {
        searchname: "",
        musiclist: [],
        musicurl: "",
        musicpicurl: "../static/images/zjl.jpg",
        show:false
    },
    methods: {
        searchmusic: function () {
            this.show=true;
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.searchname,{
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            })
                .then(function (response) {
                        that.musiclist = response.data.result.songs;
                    }, function (err) {
                        console.log(err);
                    }
                );
        },
        playmusic: function (musicid) {
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicid,{
                headers: {
                    'Access-Control-Allow-Origin':'*'
                }
            })
                .then(function (response) {
                        that.musicurl = response.data.data[0].url;
                    }, function (err) {
                        console.log(err);
                    }
                );
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicid,{
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            })
                .then(function (response) {
                        that.musicpicurl = response.data.songs[0].al.picUrl;
                    }, function (err) {
                        console.log(err);
                    }
                );
            setTimeout(function () {
                that.show=false;
                if(typeof (int)!= "undefined") {
                    clearInterval(int);
                    a=0;
                }
                var time = document.getElementsByClassName("audiobar")[0].duration;
                var timesec=(time/100)*1000;
                $(document).ready(function () {
                    int=setInterval(timehandler,timesec);
                });
            }, 500)
        },
    }
});