setTimeout(() => {
  document.getElementsByClassName('spinning-icon')[0].style.display = 'none';
  document.getElementsByClassName('page')[0].style.display = 'block';
}, 500);

let lightmode = document.querySelector('#light')
let darkMode = document.querySelector('#dark')
document.getElementsByClassName('spinning-')[0].style.display = 'none';



darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  document.getElementsByClassName('spinning-i')[0].style.display = 'none';
  document.getElementsByClassName('spinning-')[0].style.display = 'block';
})



lightmode.addEventListener('click', () => {
  document.body.classList.toggle('light')
  document.getElementsByClassName('spinning-i')[0].style.display = 'block';
  document.getElementsByClassName('spinning-')[0].style.display = 'none';
})

const element = document.getElementById('yourElementId');

element.addEventListener('mouseover', function(event) {
  element.style.backgroundColor = 'background: linear-gradient(180deg, #AFE6EB 0%, #36BECB 100%);  ';
});

element.addEventListener('mouseout', function(event) {
  element.style.backgroundColor = 'initial'; 

});
