// Code for the progress circle
window.onload = () => {
  setTimeout(affixCircleBelowTOC, 0);
};
function affixCircleBelowTOC() {
  document
    .querySelector("main > div > div > div:nth-child(2)")
    .append(document.querySelector("#percent"));
  document.querySelector("#percent").style.display = null;
}
