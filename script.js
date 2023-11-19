//   mistake :⚠️ written const instead of var 
// mistake : ⚠️ fetch( , )  -- ye postman se aata hai 
 var Batton = document.getElementById("btn");
 var textGenerator = document.getElementById("jokes");
 Batton.addEventListener("click" , ()=>{
    // console.log(" i am happy  ")
    // textGenerator.innerHTML = " changes ";
    // var URL = ` https://icanhazdadjoke.com/`;
    fetch('https://icanhazdadjoke.com/' , 
     {
        headers: {
            'Accept': 'application/json'
          }
     }
    
    
    )
    .then(Response => Response.json())
    .then(data=>{
        // console.log(data.joke)
        textGenerator.innerHTML = ` ${data.joke} `;
    })
 })