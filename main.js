const { app, BrowserWindow, Menu ,screen} = require('electron')
const ipc = require('electron').ipcMain

let win

function createWindow () {
    let size = screen.getPrimaryDisplay().workAreaSize
    let width = parseInt(size.width *0.8 )
    let height = parseInt(size.height * 0.8)
    // 创建浏览器窗口
    win = new BrowserWindow({
        width: 1080,
        height: 680,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        frame: false
    })

    // 并且为你的应用加载index.html
    win.loadFile('html/index.html')

    // 打开开发者工具
    win.webContents.openDevTools()
}

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipc.on('Help', ()=>{
    let help = new BrowserWindow({
        width: 800,
        height: 450,
        frame: true,
        fullscreen: false,
        resizable: false,
    })

    help.loadFile('html/help.html');
    help.on('close',()=>{
        help = null
    })
})

ipc.on('Exit', ()=>{
    app.quit()
})

ipc.on('Min', ()=>{
    win.minimize()
})

// 修改菜单栏
Menu.setApplicationMenu(null)
// Menu.setApplicationMenu(Menu.buildFromTemplate([
//     {
//         label: '首页',
//         click() {
//             win.loadFile('html/index.html')
//         },
//     },{
//         label: '帮助',
//         click: function () {
//             let help = new BrowserWindow({
//                 width: 800,
//                 height: 450,
//                 frame: true,
//                 fullscreen: false,
//                 resizable: false,
//             })
//
//             help.loadFile('html/help.html');
//             help.on('close',()=>{
//                 help = null
//             })
//             // Menu.setApplicationMenu(null)
//         }
//     }
// ]))
