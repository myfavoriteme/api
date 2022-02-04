async function getData() {
    const res = await fetch('https://api.icndb.com/jokes/random');
    const data = await res.json();
    console.log(data);
    out.innerHTML = data.value.joke; 
}

const out = document.querySelector('.out');




document.getElementById('b1').onclick = getData;

