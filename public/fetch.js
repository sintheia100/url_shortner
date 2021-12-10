


var inputBtn = document.querySelector('#btn')
var inputUrl = document.querySelector('#url-input')
var form = document.querySelector('#form')
var link = document.querySelector('#link')
form.addEventListener('submit', (e)=> {
    e.preventDefault()
    fetch(`http://localhost:5500/api/new/${inputUrl.value}`, {
    mode:'cors',
    'Access-Control-Allow-Origin': '*'
    }).then((data)=> {
    
    return data.json()
    }).then(result => {
    console.log(result)
    inputUrl.textContent=''
    inputUrl.value=''
    let anchor = `<a target="_blank" href=/api/get/${result.shortUrl}>[url]/api/get/${result.shortUrl}</a>`
    link.innerHTML = anchor
})

})

