const ipc = require('electron').ipcRenderer

$(function () {

    $('#menu-index').click(()=>{
        window.location.href = 'index.html'
    })

    $('#menu-help').click(()=>{
        ipc.send('Help')
    })
})