// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge } = require('electron')

console.log('preload.js loaded')

contextBridge.exposeInMainWorld('api', {
    ping: () => 'preload works'
})