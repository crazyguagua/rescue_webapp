import config from '../../config'

let hasLoad = false

export function loadAMap(){
   
    if(hasLoad){
        console.log('hasloaded')
        return new Promise((resolve,reject)=>{
            resolve()
        })
    }
    let loadScript=document.createElement('script')
    loadScript.setAttribute("type","text/javascript")
    const loadUrl = 'https://webapi.amap.com/maps?v=1.4.0&callback=initAMap&key='+(process.env.NODE_ENV=='production'?config.build.amapMapKey:config.dev.amapMapKey)
    loadScript.setAttribute('src',loadUrl)
    document.getElementsByTagName("head")[0].appendChild(loadScript)
    return new Promise((resolve,reject)=>{
        window.initAMap=()=>{
            hasLoad = true
            resolve()
        }
        loadScript.onload=function(){
            loadScript.onload=null;
        }
        loadScript.onerror=()=>{
            reject() //加载失败
        }
    })
    

     

}

export function loadAMapUI(){
    let loadUrl ='https://webapi.amap.com/ui/1.0/main.js?v=1.0.11'
    let loadScript=document.createElement('script')
    loadScript.setAttribute("type","text/javascript")
    loadScript.setAttribute('src',loadUrl)
    document.getElementsByTagName("head")[0].appendChild(loadScript);
    return new Promise((resolve,reject)=>{
        loadScript.onload=function(){
            loadScript.onload=null;
            resolve()
        }
        loadScript.onerror=()=>{
            reject() //加载失败
        }
    })
}