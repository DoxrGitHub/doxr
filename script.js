// card recommended size ratio is 346:245

let iE = document.createElement("i");
iE.className = "fa-solid fa-lightbulb fa-4x";
iE.id = "theme";
document.body.insertBefore(iE, document.body.firstChild);

console.log('hello, onlooker! welcome to the dark side of the internet :D')

const randomPhrases = [
 '[DOXR_PORTFOLIO] Hey! I\'m doxr!',
 '[DOXR_PORTFOLIO] Hey, my name is doxr.',
 `[DOXR_PORTFOLIO] What's up, I'm doxr.`,
 `[DOXR_PORTFOLIO] Hey there, I'm doxr.`,
 `[DOXR_PORTFOLIO] Hello! I'm doxr, and I like programming.`,
 '[DOXR_PORTFOLIO] Hi! I\'m doxr, a programmer.',
 '[DOXR_PORTFOLIO] Hey. I\'m doxr, and I like programming.',
 '[DOXR_PORTFOLIO] Welcome! I\'m doxr, and I code for fun.',
 '[DOXR_PORTFOLIO] Hi, I\'m doxr, and I like to program.',
 '[DOXR_PORTFOLIO] Hey, I\'m doxr.'
]

window.onload = function() {
 let selected = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
 console.log(selected);

 const ss = selected + '';
 const keys = ss.split('');
 console.log(keys);
 let i = 0;
 function typeChar() {
 if (i < keys.length) {
   document.getElementById('heytype').innerHTML += keys[i];
   i++;
   setTimeout(typeChar, 20);
 } else {
   typeChar2();
 }
 }
 typeChar();

 let bio = ``
 let stuff = bio.split('')
 let j = 0;
  function typeChar2() {
    console.log('yo')
  }
};

let dm = false;
let anime = false;
let ls_theme = localStorage.getItem('theme');
if (ls_theme === 'dark') {
  document.getElementById('theme_css').href = 'colors-dark.css';
  dm = true;
} else {
  document.getElementById('theme_css').href = 'colors-light.css';
}
document.getElementById('theme').addEventListener('click', function() {
 if (anime) {
  return;
 }
 dm = !dm;
 if(dm) {
  document.getElementById('theme_css').href = 'colors-dark.css';
   localStorage.setItem('theme', 'dark');
 } else {
  document.getElementById('theme_css').href = 'colors-light.css';
   localStorage.setItem('theme', 'light');
 }
});
document.getElementById('theme').style.cursor = 'pointer';
document.getElementById('theme').addEventListener('click', function() {
 this.classList.add('bounce');
 anime = true;
 this.style.cursor = 'not-allowed';

 setTimeout(() => {
  this.classList.remove('bounce');
  anime = false;
   this.style.cursor = 'pointer';
 }, 2000);
});