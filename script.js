// window.onload = function() {
  const container2 = document.getElementsByClassName('container2')[0];
const container3 = document.getElementsByClassName('container3')[0];

const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');

let i = 0;

xIcon.addEventListener('click', () => {
  typeNote();
})

checkIcon.addEventListener('click', () => {
  createNote();
})


function typeNote() {
  container3.classList.toggle('display-block');
}

function createNote() {
  const noteText = document.getElementById('note-text').value;

  const node0 = document.createElement('div');
  const node1 = document.createElement('h1');

  node1.innerHTML = noteText;

  node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)');

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', () => {
    node0.style.transform = 'scale(1.1)';
  });

  node0.addEventListener('mouseleave', () => {
    node0.style.transform = 'scale(1)';
  });

  node0.addEventListener('dbclick', () => {
    node0.remove();
  });

  document.getElementById('note-text').value = '';

}

function margin() {
  const randomMargin = ['-5px', '1px', '10px', '15px', '20px'];
  return randomMargin[Math.floor(Math.random() * randomMargin.length)];  
}

function rotate() {
  const randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
  return randomRotate[Math.floor(Math.random() * randomRotate.length)];  
}

function color() {
  const randomColor = ['#f0f4c3', '#e8f5e9', '#fff9c4', '#d7ccc8', '#80deea', '#d1c4e9', '#ffcdd2'];
  if(i > randomColor.length - 1) {
    i = 0;
  }
  console.log(i);
  return randomColor[i++];
}
// }

