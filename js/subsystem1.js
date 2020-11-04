$(function () {
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
    })

   
    $("#btn-starA").attr("disabled",true);
    $("#btn-starB").attr("disabled",true);
})

function soundWavePlot(){
    if( $("#dataenter").html()==" "){
        alert("请等待数据加载完成！")
        return;
    }
    $("#btn-starA").attr("disabled",false);
    $("#btn-starB").attr("disabled",false);
}

function submitbtn(){
    $("#box").html(" ")
    $("#dataenter2").html(" ")
    $("#pic-title").html(" ")
    $("#dataenter").html("数据加载完成！")
}

function submitbtn2(){
    $("#box").html(" ")
    $("#dataenter").html(" ")
    $("#pic-title").html(" ")
    $("#dataenter2").html("数据加载完成！")
}


function changeform(){
    $("#dataenter").html(" ")
    $("#dataenter2").html(" ")
    $("#pic-title").html(" ")
    $("#btn-starA").attr("disabled",true);
    $("#btn-starB").attr("disabled",true);
    $("#box").html(" ")
}


function electronicsPlot(){
    if( $("#dataenter2").html()==" "){
        alert("请等待数据加载完成！")
        return;
    }
    let res_y = $("#YYYY2").find("option:selected").text();
    let res_m = $("#MM2").find("option:selected").text();
    if(res_y == "2013" && res_m == "5"){
        $("#box").html("<img class='plot-img2' src='../assets/soundWave_201305.jpg' id='soundWaveImg'></img>")
        new Rotate().init("soundWaveImg").RotateWheel();
        $("#pic-title").html("2013年5月高能电子观测图");
    }
    else{
        $("#box").html("<h3>没有数据</h3>");
    }
}

function starA(){
    var res1 = $("#YYYY").find("option:selected").text();
    var res2 = $("#MM").find("option:selected").text();
    var res3 = $("#DD").find("option:selected").text();
    
    console.log(res1)
    console.log(res2)
    console.log(res3)
    if(res1=="2012" && res2=="9" && res3=="2"){
        $('#box').html("<img class='plot-img2' src='../assets/SVD_20120902_a.jpg' id='starA'></img>");
        new Rotate().init("starA").RotateWheel();
        $("#pic-title").html("2012年9月2日 STEREO-A星合声波观测图");
    }
    else{
        $("#box").html("<h3>没有数据</h3>");
    }
}


function starB(){
    var res1 = $("#YYYY").find("option:selected").text();
    var res2 = $("#MM").find("option:selected").text();
    var res3 = $("#DD").find("option:selected").text();
    
    console.log(res1)
    console.log(res2)
    console.log(res3)
    if(res1=="2012" && res2=="9" && res3=="2"){
        $("#box").html("<img class='plot-img2' src='../assets/soundWave_201305.jpg' id='soundWaveImg'></img>")
        new Rotate().init("soundWaveImg").RotateWheel();
        $("#pic-title").html("2012年9月2日 STEREO-B星合声波观测图");
    }
    else{
        $("#box").html("<h3>没有图片</h3>");B
    }
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

