$(function () {
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
    })

    $('#btn-plot').click(()=>{
        $('#box').html("<img class='plot-img' src='../assets/plot.jpg'></img>");
    })

    $('#btn-flash').click(()=>{
        $('#box').html("<video id='video' class='plot-img' autoplay loop src='../assets/flash.mp4' type='video/mp4'></video> ");  
        document.getElementById("video").playbackRate=5;
    })

    $('#run-btn').click(()=>{
        $('#percent').html('0%');
        $('#bar').width('0');
        let progress = 0;

        let timer = setInterval(()=>{
            progress += Math.floor(Math.random()*3);
            if(progress >= 100) {
                progress = 100;
                $('#percent').html(String(progress)+'%');
                $('#bar').width(String(progress) + '%');
                clearInterval(timer);
                calculateOver();
            }
            $('#percent').html(String(progress)+'%');
            $('#bar').width(String(progress) + '%');
        }, 30);
    })
})

function calculateOver() {
    let filename = $('#file-input')[0].files[0].name;
    alert(filename);
}
