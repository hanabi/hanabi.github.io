document.onkeydown = function(e) {
  if (e.ctrlKey && e.key == 'k'){
    e.preventDefault();
    document.getElementById('search_input_react').focus();
  }
}
