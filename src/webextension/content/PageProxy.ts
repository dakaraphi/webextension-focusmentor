// import * as WebExtensions from '../../node_modules/webextension-common/src/WebExtensions'
import * as WebExtensions from 'webextension-common'

const log = WebExtensions.makeLogger('PageProxy')
log.log("loaded");

WebExtensions.subscribeMessages('toolbar.event', (a,b)=>{
    log.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.subscribeMessages('popup.event', (a,b)=>{
    log.log('page include received: ', a, b)
    console.log('page include received: ', a, b)
    return 'reply from PageProxy'
})

WebExtensions.sendMessageExtensionPages({event:'page.event', content:'message from PageProxy'}).then(reply=>log.log(reply))


WebExtensions.keyChordEventListener([WebExtensions.KeySpecial.Shift, WebExtensions.KeySpecial.Enter], ()=>log.log('all keys down'))

WebExtensions.keySequenceEventListener([WebExtensions.KeySpecial.Shift, WebExtensions.KeySpecial.Control], ()=>log.log('sequence'))
WebExtensions.keySequenceEventListener(['c', 'h', 'a', 'd'], ()=>log.log('easter egg'))