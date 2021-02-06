document.onkeydown = function(e) {
  if (e.ctrlKey && e.key == 'k'){
    e.preventDefault();
    // We use .click() instead of .focus() because it does not initialize the search properly
    document.getElementById('search_input_react').click();
  }
}
