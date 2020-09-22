const ipc = require('electron').ipcRenderer

$(function () {

    $('#menu-index').click(()=>{
        window.location.href = 'index.html'
    })

    $('#menu-help').click(()=>{
        ipc.send('Help')
    })

    $('#close').click(()=>{
        ipc.send('Exit')
    })

    $('#minimize').click(()=>{
        ipc.send('Min')
    })
})