let container = document.querySelector('.container');


async function getDataStart() {
  container.innerHTML = '';  

  let input = document.querySelector('.in');
  const res = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bca0e558eae8c01ae51cbeb13f04b438"); 
  const data = await res.json();

  for (let i = 0; i < data.results.length; i++) {
    const card = document.createElement('article');
    card.classList.add('card');
    container.append(card);

    const img = document.createElement('img');
    img.classList.add('poster');
    img.alt = 'something went wrong';
    card.append(img);
    img.src = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + data.results[i].poster_path;

    const info = document.createElement('div');
    const name = document.createElement('div')
    const overView = document.createElement('div');
    const h = document.createElement('h3');
    const p = document.createElement('p');
    info.append(name);
    name.classList.add('names');
    name.innerHTML = data.results[i].title;

    card.append(info);
    info.classList.add('info');
    
    overView.classList.add('overview');
    overView.append(h);
    overView.append(p);
    card.append(overView);
    p.innerHTML = data.results[i].overview;
    h.innerHTML = "Overview";
  

    const score = document.createElement('span')
    info.append(score);
    score.innerHTML = data.results[i].vote_average;
    if (data.results[i].vote_average >= 8) score.classList.add('green');
    if (data.results[i].vote_average < 8) score.classList.add('orange');
    if (data.results[i].vote_average <= 5) score.classList.add('red');
  }
  
  console.log(data);
  console.log(data.results[0].overview);
   
}

getDataStart();



async function getData() {
  container.innerHTML = '';  

  container.innerHTML = '';  

  let input = document.querySelector('.in');
  const res = await fetch("https://api.themoviedb.org/3/search/movie?query=" + input.value + "&api_key=bca0e558eae8c01ae51cbeb13f04b438"); 
  const data = await res.json();

  for (let i = 0; i < data.results.length; i++) {
    const card = document.createElement('article');
    card.classList.add('card');
    container.append(card);

    const img = document.createElement('img');
    img.classList.add('poster');
    img.alt = 'something went wrong';
    card.append(img);
    img.src = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + data.results[i].poster_path;

    const info = document.createElement('div');
    const name = document.createElement('div')
    const overView = document.createElement('div');
    const h = document.createElement('h3');
    const p = document.createElement('p');
    info.append(name);
    name.classList.add('names');
    name.innerHTML = data.results[i].title;

    card.append(info);
    info.classList.add('info');
    
    overView.classList.add('overview');
    overView.append(h);
    overView.append(p);
    card.append(overView);
    p.innerHTML = data.results[i].overview;
    h.innerHTML = "Overview";
  

    const score = document.createElement('span')
    info.append(score);
    score.innerHTML = data.results[i].vote_average;
    if (data.results[i].vote_average >= 8) score.classList.add('green');
    if (data.results[i].vote_average < 8) score.classList.add('orange');
    if (data.results[i].vote_average <= 5) score.classList.add('red');
  }
  
  console.log(data);
  console.log(data.results[0].overview);
   
}




document.getElementById('b1').onclick = getData;

