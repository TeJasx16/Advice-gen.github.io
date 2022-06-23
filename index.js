let aid = document.getElementById('aid');
let atext = document.getElementById('atext');
const url = "https://api.adviceslip.com/advice"

const nextadv  =  () =>{
     

    fetch(url)
    .then((res) =>{
        return res.json();
        
    })
    .then(data =>{
        // let adi=data
        aid.innerText = data.slip.id;
        atext.innerText = data.slip.advice;
    })

}