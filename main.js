// console.log('Hello!!!!!!!');

//YOU WANT ALL YOUR SELECTOR AT TOP!!!!!!!
const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event)=> {
//   console.log(`YOU CLICKED ${event.target.id}!`);
//   // console.log(event);
//   // console.log(event.altKey); // you can select anything from the event list
// })

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
    // innerHTML -> Go inside of this div and enter this part.
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }

}

button.addEventListener('click', whatIsTheId);

// TARGET 'other-btn' and on click, run whatIsTheId
const button2 = document.querySelector('#other-btn');
button2.addEventListener('click', whatIsTheId);
