const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokebtn');



// const generateJokes = () =>{

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     } 

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         joke.innerHTML= data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     });
// }


const generateJokes = async () =>{

    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    } 

    try{
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await (res).json();
        joke.innerHTML= data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
}



jokeBtn.addEventListener('click',generateJokes);
generateJokes();
