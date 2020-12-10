const ipc = require('electron').ipcRenderer

$(function () {
    
    
    $('#menu-index').click(()=>{
        window.location.href = 'index.html'
    })

    $('#mode1-index').click(()=>{
        window.location.href = 'subsystem1.html'
    })


    $('#mode2-index').click(()=>{
        window.location.href = 'subsystem2.html'
    })

    $('#mode3-index').click(()=>{
        window.location.href = 'subsystem3.html'
    })


    $('#menu-help').click(()=>{
        ipc.send('Help')
    })

    // $('#menu-help').click(()=>{
    //     window.location.href='help.html'
    //     })

    $('#close').click(()=>{
        ipc.send('Exit')
    })

    $('#minimize').click(()=>{
        ipc.send('Min')
    })

    $('#maxbt').click(()=>{
        ipc.send("Max")
    })
})