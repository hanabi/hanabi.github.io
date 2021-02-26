document.onkeydown = function(e) {
  // Debugging
  // console.log('Key pressed:', e.key);

  if (e.key === 'Enter') {
    const buttons = document.getElementsByClassName('button--secondary button--lg');
    if (buttons.length >= 1) {
      buttons[0].click();
    }
  } else if (e.key === 'ArrowLeft') {
    const buttons = document.getElementsByClassName('pagination-nav__link');
    if (buttons.length >= 1) {
      buttons[0].click();
    }
  } else if (e.key === 'ArrowRight') {
    const buttons = document.getElementsByClassName('pagination-nav__link');
    if (buttons.length >= 2) {
      buttons[1].click();
    } else if (buttons.length >= 1) {
      buttons[0].click();
    }
  }
}
