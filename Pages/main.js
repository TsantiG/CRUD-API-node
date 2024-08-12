async function consulta(){
    const result = await fetch('http://localhost:8000')
    const data = await result.json()
    console.log(data)
    // .catch(err => console.log(err))
    return data;
}



// async function consulta2() {
    const body = document.body;
    const dataSection = document.createElement('section');
    (async () => {
        const data = await consulta();
        dataSection.innerHTML = `${Object.keys(data)} : ${Object.values(data)}`;
    })();

    // data.classList.add('result')
    body.appendChild(dataSection);

// }
// (()=> {
//     consulta2()
// })