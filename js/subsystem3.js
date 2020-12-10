const {dialog} = require('electron').remote
const fs = require("fs");
const pathNew = require("path");
var test = ''
var result = ''

$(function () {
    
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
    })
})


function changebox(){
    all=0
    $('#box').html("");
    $('.percent1').html('0%');
    $('.bar').width('0');
    $("#L-value").val("")
    $("#pic-title1").html("");

    pname = $('#time-list').val()
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    var newFile2 = pathNew.join(__dirname, '../assets/'+pname+'/j.txt')
    test  = fs.readFileSync(newFile2)
    const newFile_path = pathNew.join(__dirname, '../assets/'+pname+'/WITH.DAT')
    result = fs.readFileSync(newFile_path)
    
       
}


function btn_he(){
    // $('.percent1').html('0%');
    // $('.bar').width('0');
    if( $('#time-list').val()==""){
        alert("请先选择日期！")
        return;
    }
    pname = $('#time-list').val()
    //去掉字符串中汉字
    var titlename = "合声波观测图"
    $("#pic-title1").html(titlename);
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    photoname = '../assets/fig2_Wave_rbspAB_'+pname+'.png'
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"
    $('#box').html(imgshow);
}

function btn_kong(){
    // $('.percent1').html('0%');
    // $('.bar').width('0');
    if( $('#time-list').val()==""){
        alert("请先选择日期！")
        return;
    }
    pname = $('#time-list').val()
    //去掉字符串中汉字
    var titlename = "空间天气观测图"
    $("#pic-title1").html(titlename);
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    photoname = '../assets/fig1_Kp_Dat_etc_'+pname+'.png'
    
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"
    $('#box').html(imgshow);
}

function btn_31(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent11').html()!="100%"){
         alert("请先运行程序！")
        return;
    }
    pname = $('#time-list').val()
    var titlename = "波谱拟合结果图"
    $("#pic-title1").html(titlename);
    //去掉字符串中汉字
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    photoname = '../assets/fig3_Gaussian_fit_averaged_'+pname+'_a.png'
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"
    $('#box').html(imgshow);
    
    if(pname == '20160218'){ $("#L-value").val("4.60")}
    if(pname == '20160307'){ $("#L-value").val("6.82")}
    if(pname == '20160413'){ $("#L-value").val("4.55")}
    if(pname == '20160508'){ $("#L-value").val("4.59")}
    if(pname == '20160530'){ $("#L-value").val("5.50")}
    if(pname == '20171107'){ $("#L-value").val("5.36")}
    if(pname == '20180314'){ $("#L-value").val("6.00")}
    if(pname == '20180505'){ $("#L-value").val("5.65")}
    if(pname == '20180826'){ $("#L-value").val("3.26")}
}

function btn_save1(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent11').html()!="100%"){
         alert("请先运行程序！")
        return;
    }

    pname = $('#time-list').val()
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    var txt
    var filename = 'F://'+pname+"_波谱拟合结果"
    if(pname == '20160218'){ txt ="4.60\n12.20\n8.50\n66\n0.16\n0.43\n0.29\n0.07"}
    if(pname == '20160307'){ txt ="6.82\n8.75\n3.17\n98\n0.17\n0.50\n0.34\n0.08" }
    if(pname == '20160413'){ txt ="4.55\n5.76\n8.77\n81\n0.32\n0.67\n0.49\n0.09"}
    if(pname == '20160508'){ txt ="4.59\n4.56\n8.67\n133\n0.25\n0.48\n0.36\n0.06"}
    if(pname == '20160530'){ txt ="5.50\n7.27\n4.93\n50\n0.32\n0.47\n0.40\n0.04"}
    if(pname == '20171107'){ txt ="5.36\n9.71\n5.43\n114\n0.18\n0.55\n0.36\n0.09"}
    if(pname == '20180314'){ txt ="6.00\n5.79\n3.80\n52\n0.26\n0.40\n0.33\n0.04"}
    if(pname == '20180505'){ txt ="5.65\n5.57\n4.50\n96\n0.15\n0.29\n0.22\n0.03"}
    if(pname == '20180826'){ txt ="3.26\n4.20\n23.45\n63\n0.2\n0.36\n0.28\n0.04"}

    let file=dialog.showSaveDialogSync(
        {
            filters :[
                {name: 'Text', extensions: ['txt']},
                {name: 'All Files', extensions: ['*']}
               ],
               properties: ['saveFile'],
               defaultPath: 'F://'+pname+"_波谱拟合结果.txt"
        }
    );
   
    console.log(file);
    if(file)
        fs.writeFileSync(file, txt)
}

function btn_32(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent12').html()!="100%"){
         alert("请先运行程序！")
        return;
    }
    // $("#L-value").val("")
    // $("#pic-title1").html("");
   
    pname = $('#time-list').val()
    //去掉字符串中汉字
    var titlename = "扩散系数计算结果图"
    $("#pic-title1").html(titlename);
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    photoname = '../assets/fig4_diffusion_rate_'+pname+'.png'
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" Sid='soundWaveImg'></img>"
    $('#box').html(imgshow);
    
}

function btn_33(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent13').html()!="100%"){
         alert("请先运行程序！")
        return;
    }
    // $("#L-value").val("")
    pname = $('#time-list').val()
    //去掉字符串中汉字
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    photoname = '../assets/fig5_j_observation_vs_simulation_'+pname+'_rept.png'
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    imgshow ="<img class='plot-img2' src=" + photoname+" id='soundWaveImg'></img>"
    $('#box').html(imgshow);
    
    
    var title_btn ="<button class='mdui-btn mdui-color-blue-100 btn-mode33' id='btn-plot21' onclick=btn_all(pname)><b>电子通量实测值</b></button><button class='mdui-btn mdui-color-pink-100 btn-mode33  ' id='btn-plot22' onclick=btn_relation(pname)><b>预测值与实测值的相关系数：</b></button><div class ='relation'><input type='text' maxlength='5' id='R-value'></div>"
    $("#pic-title1").html(title_btn);
       
}

function btn_save2(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent12').html()!="100%"){
         alert("请先运行程序！")
        return;
    }

    pname = $('#time-list').val()
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    // var txt = "相关系数: "
    // if(pname == '20160218'){ txt = txt +"0.91"}
    // if(pname == '20160307'){ txt = txt +"0.57"}
    // if(pname == '20160413'){ txt = txt +"0.98"}
    // if(pname == '20160508'){ txt = txt +"0.87"}
    // if(pname == '20160530'){ txt = txt +"0.84"}
    // if(pname == '20171107'){ txt = txt +"0.91"}
    // if(pname == '20180314'){ txt = txt +"0.97"}
    // if(pname == '20180505'){ txt = txt +"0.96"}
    // if(pname == '20180826'){ txt = txt +"0.84"}
    
    
    
    var filename = 'F://'+pname+"_扩散系数计算结果"
    let file=dialog.showSaveDialogSync(
        {
            filters :[
                {name: 'Text', extensions: ['dat']},
                {name: 'All Files', extensions: ['*']}
               ],
               properties: ['saveFile'],
               defaultPath:filename
        }
    );
        console.log(file);
    if(file)
       fs.writeFileSync(file, result)
}

function btn_save3(){
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if( $('#percent13').html()!="100%"){
         alert("请先运行程序！")
        return;
    }

    pname = $('#time-list').val()
    var reg =/[\u4e00-\u9fa5]/g;
    pname=pname.replace(reg, "")
    // var txt = "相关系数: "
    // if(pname == '20160218'){ txt = txt +"0.91"}
    // if(pname == '20160307'){ txt = txt +"0.57"}
    // if(pname == '20160413'){ txt = txt +"0.98"}
    // if(pname == '20160508'){ txt = txt +"0.87"}
    // if(pname == '20160530'){ txt = txt +"0.84"}
    // if(pname == '20171107'){ txt = txt +"0.91"}
    // if(pname == '20180314'){ txt = txt +"0.97"}
    // if(pname == '20180505'){ txt = txt +"0.96"}
    // if(pname == '20180826'){ txt = txt +"0.84"}
    
    var newFile2 = pathNew.join(__dirname, '../assets/'+pname+'/j.txt')
    fs.readFile('../assets/'+pname+'/j.txt',(err,data)=>{
        console.log(data)
        console.log("1")
    })
    
    var filename = 'F://'+pname+"_电子通量预测结果.txt"
    let file2=dialog.showSaveDialogSync(
        {
            filters :[
                {name: 'Text', extensions: ['txt']},
                {name: 'All Files', extensions: ['*']}
               ],
               properties: ['saveFile'],
               defaultPath:filename
        }
    );
    console.log("2")
    // var txt="fffffff"
    if(file2)
        fs.writeFileSync(file2, test)
}

var all = 0
function btn_all(pname){
    console.log(all)
    if(all == 0) { photoname = '../assets/all_fig5_j_observation_vs_simulation_'+pname+'_rept.png'; all =1}
    else{ photoname = '../assets/fig5_j_observation_vs_simulation_'+pname+'_rept.png'; all =0}
   
    // console.log(photoname)
    // photoname = '../assets/201209-201907/electron_flux-'+res_y+'-'+res_m+'.jpg';
    document.getElementById('soundWaveImg').src=photoname;
    
    // imgshow ="<img class='plot-img2' src=" + photoname+" id='soundWaveImg'></img>"
    // $('#box').html(imgshow);
}

function btn_relation(pname){
    if(pname == '20160218'){ $("#R-value").val("0.91")}
    if(pname == '20160307'){ $("#R-value").val("0.57")}
    if(pname == '20160413'){ $("#R-value").val("0.98")}
    if(pname == '20160508'){ $("#R-value").val("0.87")}
    if(pname == '20160530'){ $("#R-value").val("0.84")}
    if(pname == '20171107'){ $("#R-value").val("0.91")}
    if(pname == '20180314'){ $("#R-value").val("0.97")}
    if(pname == '20180505'){ $("#R-value").val("0.96")}
    if(pname == '20180826'){ $("#R-value").val("0.84")}
}



function bar(btn_number){
    
    if( $('#time-list').val()==""){
        alert("请选定日期！")
        return;
    }
    if(btn_number==2 && $('#percent11').html()!="100%"){
        alert("请先执行波谱拟合模块！")
        return;
    }
    
    if(btn_number==3 && $('#percent11').html()!="100%"){
        alert("请先执行波谱拟合模块！")
        return;
    }

    if(btn_number==3 && $('#percent12').html()!="100%"){
        alert("请先执行扩散系数计算模块！")
        return;
    }
    
    let progress = 0;
    
    percent_name = "#percent1"+btn_number
    bar_name = "#bar"+btn_number
    
    var run_time = 4
    if(btn_number == 2){run_time = run_time*6}
    if(btn_number == 3){run_time = run_time*3}
    let timer = setInterval(()=>{
        progress += Math.floor(Math.random()*3);
        if(progress >= 100) {
            progress = 100;
            $(percent_name).html(String(progress)+'%');
            $(bar_name).width(String(progress) + '%');
            clearInterval(timer);
            // calculateOver();
        }
        $(percent_name).html(String(progress)+'%');
        $(bar_name).width(String(progress) + '%');
    }, (10 + run_time)*2);
}
