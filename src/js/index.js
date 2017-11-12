const $toggleTriggers = document.querySelectorAll('.js-class-toggler');

const classToggler = (e) => {
  if (e.target.getAttribute('data-prevent') === 'default') {
    e.preventDefault();
  }

  if (e.target.getAttribute('data-self')) {
    e.target.classList.toggle(e.target.getAttribute('data-self'));
  }

  const $toggleTargets = document.querySelectorAll(e.target.getAttribute('data-target'));

  if ($toggleTargets) {
    for (let i = 0; i < $toggleTargets.length; i += 1) {
      $toggleTargets[i].classList.toggle(e.target.getAttribute('data-class'));
    }
  }
};

if ($toggleTriggers) {
  for (let i = 0; i < $toggleTriggers.length; i += 1) {
    $toggleTriggers[i].addEventListener('click', classToggler);
  }
}
