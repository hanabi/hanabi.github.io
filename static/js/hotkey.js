const search = document.getElementById('search_input_react');

// In order for the search box to initialize, we have to manually click it
document.addEventListener('DOMContentLoaded', function() {
  search.click();
});

document.onkeydown = function(e) {
  // Ctrl + K should focus the search bar, emulating the Algolia search UI
  if (e.ctrlKey && e.key == 'k'){
    search.focus();

    // By default, using Ctrl + K in Chrome will open the location bar, so disable this
    e.preventDefault();
  }
}
