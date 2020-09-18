$(function () {
    $('.back-button').click(()=>{
        window.location.href = 'subpage.html'
  
    })
})

$(function () {
    $('#btn-plot').click(()=>{
      $('#box').html("<img class='plot-img' src='../assets/plot.jpg'></img>");
    })
})

$(function () {
    $('#btn-flash').click(()=>{
        $('#box').html("<img class='plot-img' src='../assets/flash.jpg'></img>");
    })
})
