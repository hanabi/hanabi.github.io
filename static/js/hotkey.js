document.onkeydown = function(e) {
  // Ctrl + K should focus the search bar, emulating the Algolia search UI
  if (e.ctrlKey && e.key == 'k'){
    // We have to click before focusing because otherwise it does not initialize properly
    const search = document.getElementById('search_input_react');
    search.click();
    search.focus();

    // By default, using Ctrl + K in Chrome will open the location bar, so disable this
    e.preventDefault();
  }
}
