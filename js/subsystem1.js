$(function () {
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
    })
    $('#btn-plot22').click(()=>{
        $('.box').html("<img class='plot-img' src='../assets/2_raypath-d-eta-XY.jpg'></img>")
    })
    $('#btn-plot23').click(()=>{
        $('.box').html("<img class='plot-img' src='../assets/2_3Draypath.jpg'></img>")
    })

    // 播放图片
    // $('#btn-plot').click(()=>{
    //     $('#box').html("<img class='plot-img' src='../assets/plot.jpg'></img>");
    // })

    // $('#btn-flash').click(()=>{
    //     $('#box').html("<video id='video' class='plot-img' autoplay loop src='../assets/flash.mp4' type='video/mp4'></video> ");  
    //     document.getElementById("video").playbackRate=5;
    // })

    $('.run-btn').click(()=>{
       bar();
    })
    //切换子窗口的时候，重置
    document.getElementById('tab1').addEventListener('show.mdui.tab', function () {
        $('.percent').html('0%');
        $('.bar').width('0');
        $('.box').html("");
        $(".mode2-out").hide();
        });
    document.getElementById('tab2').addEventListener('show.mdui.tab', function () {
        $('.percent').html('0%');
        $('.bar').width('0');
        $('.box').html("");
        $(".mode2-out").hide();
        });
    document.getElementById('tab3').addEventListener('show.mdui.tab', function () {
        $('.percent').html('0%');
        $('.bar').width('0');
        $('.box').html("");
        $(".mode2-out").hide();
        });
    document.getElementById('tab4').addEventListener('show.mdui.tab', function () {
        $('.percent').html('0%');
        $('.bar').width('0');
        $('.box').html("");
        $(".mode2-out").hide();
        });


    $("#btn-plot22").attr("disabled",true);
    $("#btn-plot23").attr("disabled",true);
        // $("#btn-plot22").attr("disabled",true);
        // $("#btn-plot21").attr("disabled","disabled");
})


function disable(){
    var n2 = $("#param21").find("option:selected").val();
    if(n2 == "5"){
        $("#btn-plot22").attr("disabled",false);
        $("#btn-plot23").attr("disabled",false);
}
    else{$("#btn-plot22").attr("disabled",true);
    $("#btn-plot23").attr("disabled",true);}
}

function selectonchange(){
    $('.percent').html('0%');
    $('.bar').width('0');
    $(".mode2-out").hide();
    $('.box').html("");
}



function plot4(){
    if( $('.percent').html()=="0%"){
        alert("请先运行程序！")
        return;
    }
    var Kp4 = $("#param41").find("option:selected").val();
    if(Kp4 == "1"){$('.box').html("<img class='plot-img' src='../assets/4模块1.jpg' id='img41'></img>"); new Rotate().init("img41").RotateWheel() }
    if(Kp4 == "2"){$('.box').html("<img class='plot-img' src='../assets/4模块2.jpg' id='img42'></img>"); new Rotate().init("img42").RotateWheel()}
    if(Kp4 == "3"){$('.box').html("<img class='plot-img' src='../assets/4模块3.jpg' id='img43'></img>"); new Rotate().init("img43").RotateWheel()}
    if(Kp4 == "4"){$('.box').html("<img class='plot-img' src='../assets/4模块.jpg' id='img44'></img>"); new Rotate().init("img44").RotateWheel()}
    
}

function plot3(){
    if( $('.percent').html()=="0%"){
        alert("请先运行程序！")
        return;
    }
    var f3 = $("#param31").find("option:selected").val();
    if(f3 == "1"){$('.box').html("<img class='plot-img' src='../assets/3模块1.jpg' id='img31'></img>"); new Rotate().init("img31").RotateWheel() }
    if(f3 == "2"){$('.box').html("<img class='plot-img' src='../assets/3模块2.jpg' id='img32'></img>"); new Rotate().init("img32").RotateWheel()}
    if(f3 == "3"){$('.box').html("<img class='plot-img' src='../assets/3模块3.jpg' id='img33'></img>"); new Rotate().init("img33").RotateWheel()}
    if(f3 == "4"){$('.box').html("<img class='plot-img' src='../assets/3模块4.jpg' id='img34'></img>"); new Rotate().init("img34").RotateWheel()}
    if(f3 == "5"){$('.box').html("<img class='plot-img' src='../assets/3模块.jpg' id='img35'></img>"); new Rotate().init("img35").RotateWheel()}
    
}
function show_plot(){
    $(".mode2-out").show();
}


function plot2(){
    if( $('.percent').html()=="0%"){
        alert("请先运行程序！")
        return;
    }
    var n2 = $("#param21").find("option:selected").val();
    if(n2 == "1"){$('.box').html("<img class='plot-img' src='../assets/2模块1.jpg' id='img21'></img>"); new Rotate().init("img21").RotateWheel() }
    if(n2 == "2"){$('.box').html("<img class='plot-img' src='../assets/2模块2.jpg' id='img22'></img>"); new Rotate().init("img22").RotateWheel()}
    if(n2 == "3"){$('.box').html("<img class='plot-img' src='../assets/2模块3.jpg' id='img23'></img>"); new Rotate().init("img23").RotateWheel()}
    if(n2 == "4"){$('.box').html("<img class='plot-img' src='../assets/2模块4.jpg' id='img24'></img>"); new Rotate().init("img24").RotateWheel()}
    if(n2 == "5"){$('.box').html("<img class='plot-img' src='../assets/2模块.jpg' id='img25'></img>"); new Rotate().init("img25").RotateWheel()}
    
}


function plot1(){
    if( $('.percent').html()=="0%"){
        alert("请先运行程序！")
        return;
    }
    var C1 = $("#param11").find("option:selected").val();
    var kp = $("#param12").find("option:selected").val();

    if(C1 == "1" && kp =="2"){$('.box').html("<img class='plot-img' src='../assets/kp21.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel() }
    if(C1 == "2" && kp =="2"){$('.box').html("<img class='plot-img' src='../assets/kp22.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "3" && kp =="2"){$('.box').html("<img class='plot-img' src='../assets/kp23.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "4" && kp =="2"){$('.box').html("<img class='plot-img' src='../assets/kp24.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "5" && kp =="2"){$('.box').html("<img class='plot-img' src='../assets/kp2.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    
    if(C1 == "1" && kp =="4"){$('.box').html("<img class='plot-img' src='../assets/kp41.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel() }
    if(C1 == "2" && kp =="4"){$('.box').html("<img class='plot-img' src='../assets/kp42.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "3" && kp =="4"){$('.box').html("<img class='plot-img' src='../assets/kp43.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "4" && kp =="4"){$('.box').html("<img class='plot-img' src='../assets/kp44.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "5" && kp =="4"){$('.box').html("<img class='plot-img' src='../assets/kp4.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}

    if(C1 == "1" && kp =="6"){$('.box').html("<img class='plot-img' src='../assets/kp61.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel() }
    if(C1 == "2" && kp =="6"){$('.box').html("<img class='plot-img' src='../assets/kp62.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "3" && kp =="6"){$('.box').html("<img class='plot-img' src='../assets/kp63.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "4" && kp =="6"){$('.box').html("<img class='plot-img' src='../assets/kp64.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
    if(C1 == "5" && kp =="6"){$('.box').html("<img class='plot-img' src='../assets/kp6.jpg' id='img'></img>"); new Rotate().init("img").RotateWheel()}
}


//实现上下滚轮缩放图片
class Rotate {
    constructor() {
        this.el = null;
    }

    init(cls) {
        this.el = document.getElementById(cls)
        return this
    }

    RotateWheel() {

        document.onwheel = (e) => {
            let delta = (e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1))

            if (delta > 0) {//放大
                // 向上滚
                let oWidth = this.el.offsetWidth;//取得图片的实际宽度
                let oHeight = this.el.offsetHeight; //取得图片的实际高度

                this.el.style.width = (oWidth + 50) + "px"
                this.el.style.height = (oHeight + 50 / oWidth * oHeight) + "px"

            } else if (delta < 0) {//缩小
                //向下滚
                let oWidth = this.el.offsetWidth; //取得图片的实际宽度
                let oHeight = this.el.offsetHeight; //取得图片的实际高度
                if (this.el.offsetWidth > 100 || this.el.offsetHeight > 75) {//判断如果图片缩小到原图大小就停止缩小(100和75分别为原图的宽高)

                    this.el.style.width = oWidth - 50 + "px"
                    this.el.style.height = oHeight - 50 / oWidth * oHeight + "px"
                }
            }
        }
    }


}




// function bigimg(obj){
//     var zoom = parseInt(obj.style.zoom,10)||100;
//     zoom += event.wheelDelta / 12;
//     if(zoom > 0 )
//     obj.style.zoom=zoom+'%';
//     return false;
// }
function bar(){
    $('.percent').html('0%');
    $('.bar').width('0');
    let progress = 0;

    let timer = setInterval(()=>{
        progress += Math.floor(Math.random()*3);
        if(progress >= 100) {
            progress = 100;
            $('.percent').html(String(progress)+'%');
            $('.bar').width(String(progress) + '%');
            clearInterval(timer);
            // calculateOver();
        }
        $('.percent').html(String(progress)+'%');
        $('.bar').width(String(progress) + '%');
    }, 10);
}


// function calculateOver() {
//     let filename = $('[name="file-input"]')[0].files[0].name;
//     alert(filename);
// }
