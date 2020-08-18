let time = 0;

let count = setInterval(add_second, 1000);

const counter = document.querySelector('#counter');

let num_likes = 0;


function add_second(){
  counter.innerText = time;
  time += 1;
}

function minus_second(){
  counter.innerText = time;
  time -= 1;
}

function like(){
  let count = counter.innerText
  
  if( document.querySelector(`#liked-${count}`)){
    num_likes += 1
    document.querySelector(`#liked-${count}`).innerText = `${count} has been liked ${num_likes} times`;
  }
  else{
    num_likes = 1
    let node = document.createElement("Li");
    node.setAttribute("id", `liked-${count}`)
    let newContent = document.createTextNode(`${count} has been liked 1 time`);
    node.appendChild(newContent)
    document.querySelector('.likes').appendChild(node)
  }
}


function pause(){
  let pause = document.querySelector('#pause')
  let minus = document.querySelector('#minus');
  let plus = document.querySelector('#plus');
  let heart = document.querySelector('#heart');
  let submit = document.querySelector('#submit');
  minus.disabled = !minus.disabled;
  plus.disabled = !plus.disabled;
  heart.disabled = !heart.disabled;
  submit.disabled = !submit.disabled;
  if (pause.innerText == 'pause'){
     let stop_count = clearInterval(count);
    pause.innerText = 'resume'
  }
  else{
    count = setInterval(add_second, 1000);
    pause.innerText = 'pause';
  }
}

document.querySelector('#plus').addEventListener('click', function(event){
  add_second()
});

document.querySelector('#minus').addEventListener('click', function(event){
  minus_second()
});
  
document.querySelector('#heart').addEventListener('click', function(event){
  like()
});

document.querySelector('#pause').addEventListener('click', function(event){
  pause()
});





