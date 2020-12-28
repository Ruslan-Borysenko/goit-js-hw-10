//variables
const body = document.querySelector('body');
let input = document.querySelector('#theme-switch-toggle');
const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

// functions
const saveStorage = () => {
  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', theme.dark);
    themeSwitch();
    return;
  }
  if (localStorage.getItem('theme') === theme.dark) {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme.light);
    themeSwitch();
    return;
  }
  if (localStorage.getItem('theme') === theme.light) {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', theme.dark);
    themeSwitch();
    return;
  }
};

const themeSwitch = () => {
  console.log(body.classList.length);

  if (body.classList.length === 0) {
    body.classList.toggle(theme.dark);
    return;
  }
  if (localStorage.getItem('theme') === theme.light) {
    body.classList.toggle(theme.dark);
    body.classList.toggle(theme.light);
    return;
  }
  if (localStorage.getItem('theme') === theme.dark) {
    body.classList.toggle(theme.light);
    body.classList.toggle(theme.dark);
    return;
  }
};

// event listeners
input.addEventListener('click', saveStorage);

// reload page
let reloaded = () => {
  if (localStorage.getItem('theme') === theme.dark) {
    input.checked = true;
    themeSwitch();
  }
};

window.onload = () => {
  let loaded = sessionStorage.getItem('loaded');
  if (loaded) {
    reloaded();
  } else {
    sessionStorage.setItem('loaded', true);
  }
};
