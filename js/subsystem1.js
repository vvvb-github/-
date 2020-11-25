$(function () {
   
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
    })
   
    setYM()
    $("#btn-starA").attr("disabled",true);
    $("#dataenter").html(" ")
    $("#dataenter2").html(" ")
    // var UTIF = require('UTIF')
    
    // UTIF.replaceIMG()
})

function soundWavePlot(){
    console.log($("#dataenter").html())
    if( $("#dataenter").html()==" "){
        alert("请等待数据加载完成！")
        return;
    }
    $("#btn-starA").attr("disabled",false);
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

function setYM(){
     // 年份列表
     var yearNow = new Date().getFullYear();
    //  var yearSel = $YearSelector.attr("rel");
     $("#YYYY2").append("<option value='2019'>2019</option>");
     console.log(yearNow)
     for (var i = yearNow-2; i >= 2012; i--) {
        //   var sed = yearSel==i?"selected":"";
          var yearStr = "<option value=\"" + i + "\">"+i+"</option>";
          $("#YYYY2").append(yearStr);
          console.log("ddd")
     }
      // 月份列表
      function BuildMonth2() {
        $("#MM2").html("");
        var year = parseInt($("#YYYY2").val());
        var monthcount =12
        var monlow = 1
        if(year == 2019){monthcount =7}
        if(year == 2012){monlow = 9}
        // var monthSel = $MonthSelector.attr("rel");
        console.log(year)
        for (var i = monlow; i <= monthcount; i++) {
            // var sed = monthSel==i?"selected":"";
            var monthStr = "<option value=\"" + i + "\">"+i+"</option>";
            $("#MM2").append(monthStr);
        }
      }
      BuildMonth2();

      $("#YYYY2").change(function () {
        BuildMonth2();
     });
}


function electronicsPlot(){
    if( $("#dataenter2").html()==" "){
        alert("请等待数据加载完成！")
        return;
    }
    let res_y = parseInt($("#YYYY2").find("option:selected").text());
    let res_m = parseInt($("#MM2").find("option:selected").text());

    photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"

    $("#box").html(imgshow)
        // new Rotate().init("soundWaveImg").RotateWheel();
    var titlename = res_y+"年"+res_m+"月高能电子观测图"
    $("#pic-title").html(titlename);
    
    // else{
    //     $("#box").html("<h3 id='data-miss'>数据缺失</h3>");
    // }
}

function starA(){
    var res1 = parseInt($("#YYYY").find("option:selected").text());
    var res2 = parseInt($("#MM").find("option:selected").text());
    var res3 = parseInt($("#DD").find("option:selected").text());

    if(res2<10){ res2 = "0"+res2;}
    if(res3<10){ res3 = "0"+res3;}
    
    photoname = '../assets/20120908-20190708/Wave_rbspAB_'+res1+res2+res3+'.jpg'
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"

    $('#box').html(imgshow);
    // var UTIF = require('UTIF')
    // UTIF.replaceIMG()
    new Rotate().init("starA").RotateWheel();
    var titlename = res1+"年"+res2+"月"+res3+"日 Van Allen Probes-A星&B星合声波观测图"
    $("#pic-title").html(titlename);
}


// function starB(){
//     var res1 = $("#YYYY").find("option:selected").text();
//     var res2 = $("#MM").find("option:selected").text();
//     var res3 = $("#DD").find("option:selected").text();
    
//     // console.log(res1)
//     // console.log(res2)
//     // console.log(res3)
//     if(res1=="2012" && res2=="9" && res3=="2"){
//         $("#box").html("<img class='plot-img2' src='../assets/SVD_20120902_b.jpg' id='soundWaveImg'></img>")
//         new Rotate().init("soundWaveImg").RotateWheel();
//         $("#pic-title").html("2012年9月2日 Van Allen Probes-B星合声波观测图");
//     }
//     else{
//         $("#box").html("<h3>数据缺失</h3>");B
//     }
// }


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
            var obj = document.getElementById("box");
            let delta = (e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1));
            // console.log(this.el.offsetWidth)
            // console.log(this.el.offsetHeight)
            // console.log(obj.offsetWidth)
            // console.log(obj.offsetHeight)
                if (delta > 0) {//放大
                    // 向上滚
                
                    if(this.el.offsetWidth < obj.offsetWidth && this.el.offsetHeight < obj.offsetHeight){
                    let oWidth = this.el.offsetWidth;//取得图片的实际宽度
                    let oHeight = this.el.offsetHeight; //取得图片的实际高度
    
                    this.el.style.width = (oWidth + 10) + "px"
                    this.el.style.height = (oHeight + 10 / oWidth * oHeight) + "px"
                    }
                } else if (delta < 0) {//缩小
                    //向下滚
                    let oWidth = this.el.offsetWidth; //取得图片的实际宽度
                    let oHeight = this.el.offsetHeight; //取得图片的实际高度
                    if (this.el.offsetWidth > 100 || this.el.offsetHeight > 75) {//判断如果图片缩小到原图大小就停止缩小(100和75分别为原图的宽高)
    
                        this.el.style.width = oWidth - 10 + "px"
                        this.el.style.height = oHeight - 10 / oWidth * oHeight + "px"
                    }
                }
            }
    }


}

