const challenges = [
  { title: 'Counter', link: 'counter' },
  { title: 'Guess the number', link: 'guess-the-number' },
  { title: 'Telephone formatter', link: 'telephone-formatter' },
  { title: 'Light & Dark mode', link: 'light-dark-mode' },
  { title: 'Toast Popup', link: 'toast-popup' },
  { title: 'CSS Shapes', link: 'css-shapes' },
  { title: 'Password Strength', link: 'password-strength' },
  { title: 'Star Rating', link: 'star-rating' },
  { title: 'Pixel Art', link: 'pixel-art' },
  { title: 'Color Spotter', link: 'color-spotter' },
  { title: 'Todo List', link: 'todo-list' },
  { title: 'Transfer List', link: 'transfer-list' },
  { title: 'Tic-Tac-Toe', link: 'tic-tac-toe' },
  { title: 'Chess board', link: 'chess-board' },
  { title: 'Skeleton Loader', link: '#' },
  { title: 'Chips Input', link: 'chips-input' },
  { title: 'Analog Clock', link: 'analog-clock', isNew: true },
  { title: 'Calculator', link: '#' },
  { title: 'Navigation Bar', link: '#' },
  { title: 'Typing Speed Test', link: 'typing-speed-test', isNew: true },
  { title: 'Countdown Timer', link: 'count-down-timer' },
  { title: 'OTP Input', link: '#' },
  { title: 'Area Selector', link: 'area-selector' },
  { title: 'Carousel', link: 'carousel' },
  { title: 'Paginator', link: 'paginator' },
  { title: 'Four in a Line', link: 'four-in-a-line', isNew: true },
  { title: 'Comment box', link: 'comment-box' },
  { title: 'JSON Creator', link: 'json-creator' },
  { title: 'Array methods', link: 'array-methods' },
  { title: 'Progress Bar', link: 'progress-bar' },
  { title: 'Stepper', link: '#' },
  { title: 'Accordion', link: '#' },
  { title: 'Autocomplete', link: '#' },
  { title: 'Dialog Popup', link: '#' },
  { title: 'Sort Table', link: '#' },
  { title: 'Calendar', link: '#' },
  { title: 'Emoji Editor', link: '#' },
  { title: 'Infinite Scroll', link: '#' },
  { title: 'Memory tiles', link: '#' },
];

const createAnchorElement = obj => {
  const div = document.createElement('div');
  const a = document.createElement('a');
  a.textContent = obj.title;
  a.href = `./src/mc/${obj.link}/`;

  if (obj.link === '#') {
    a.classList.add('disabled');
    a.title = 'To be developed';
    a.href = '#';
  }

  if (obj.isNew) {
    const newTag = document.createElement('span');
    newTag.textContent = 'New';
    newTag.classList.add('new');
    div.appendChild(newTag);
  }

  div.appendChild(a);
  return div;
};

const challengeGridEl = document.getElementById('challengeGrid');
challenges.map(createAnchorElement).forEach(el => challengeGridEl.appendChild(el));