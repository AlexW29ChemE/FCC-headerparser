const btn = document.getElementById('send-request-btn')

const ipEle = document.getElementById('ip-address')
const languageEle = document.getElementById('language')
const softwareEle = document.getElementById('software')
const errorEle = document.getElementById('error-text')
const statusEle = document.getElementById('status-text')

function setDisplayValues(data={}){
    ipEle.innerText=data.ipaddress||""
    languageEle.innerText=data.language||""
    softwareEle.innerText=data.software||""
}

btn.addEventListener('click',()=>{
statusEle.innerText = "...retrieving data"
    fetch('./api/whoami').then((res)=>{
        statusEle.innerText = ""
        if(res.status===200){
            res.json().then((body)=>{
                console.log(body)
                setDisplayValues(body)
            })
        }else{
        statusEle.innerText = ""
        errorEle.innerText=err?.message||'An Error Occured'
        setDisplayValues()
        }
    }).catch((err)=>{
        statusEle.innerText = ""
        errorEle.innerText=err?.message||'An Error Occured'
        setDisplayValues()
    })
})