// Constants
const MAX_LEVEL = 23;

document.onkeydown = function(e) {
  // Debugging
  // console.log("Key pressed:", e.key);

  // Do not do anything if we have any modifier keys pressed down
  if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
    return;
  }

  // Do not do anything if we have the search box focused
  const searchInputElements = document.getElementsByClassName("DocSearch-Input");
  for (const searchInputElement of searchInputElements) {
    if (document.activeElement === searchInputElement) {
      return;
    }
  }

  if (e.key === "Enter") {
    const buttons = document.getElementsByClassName("button--secondary button--lg");
    if (buttons.length >= 1) {
      buttons[0].click();
    }
  } else if (e.key === "ArrowLeft") {
    const buttons = document.getElementsByClassName("pagination-nav__link");
    if (buttons.length >= 1) {
      buttons[0].click();
    }
  } else if (e.key === "ArrowRight") {
    const buttons = document.getElementsByClassName("pagination-nav__link");
    if (buttons.length >= 2) {
      buttons[1].click();
    } else if (buttons.length >= 1) {
      buttons[0].click();
    }
  } else if (e.key === "l") {
    const levelString = window.prompt("Enter the level that you want to go to:");
    if (levelString === null || levelString === "") {
      return;
    }

    const level = parseIntSafe(levelString);
    if (Number.isNaN(level)) {
      return;
    }

    if (level < 1 || level > MAX_LEVEL) {
      return;
    }

    window.location = `/docs/level-${level}`;
  }
}

// parseIntSafe is a more reliable version of parseInt
// By default, "parseInt('1a')" will return "1", which is unexpected
// This returns either an integer or NaN
function parseIntSafe(input) {
  // Remove all leading and trailing whitespace
  let trimmedInput = input.trim();

  const isNegativeNumber = trimmedInput.startsWith("-");
  if (isNegativeNumber) {
    // Remove the leading minus sign before we match the regular expression
    trimmedInput = trimmedInput.substring(1);
  }

  if (/^\d+$/.exec(trimmedInput) === null) {
    // "\d" matches any digit (same as "[0-9]")
    return NaN;
  }

  if (isNegativeNumber) {
    // Add the leading minus sign back
    trimmedInput = `-${trimmedInput}`;
  }

  return parseInt(trimmedInput, 10);
}
