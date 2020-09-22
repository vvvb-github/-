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
})