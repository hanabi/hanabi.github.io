// Constants
const WEBPAGE_NAME = "The H-Group Conventions";
const FIRST_DOC_PAGE_TITLE = "About";
const LAST_DOC_PAGE_TITLE = "Convention Attribution";
const MAX_LEVEL = 25;

// Variables
const keyMap = new Map();

document.addEventListener("keydown", (e) => {
  // Do not do anything if we have any modifier keys pressed down.
  if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
    return;
  }

  // Do not do anything if we have the search box focused.
  const searchInputElements = document.querySelectorAll(".DocSearch-Input");
  for (const searchInputElement of searchInputElements) {
    if (document.activeElement === searchInputElement) {
      return;
    }
  }

  const keyFunction = keyMap.get(e.key);
  if (keyFunction !== undefined) {
    keyFunction();
  }
});

// Navigate backwards.
keyMap.set("ArrowLeft", () => {
  if (isOnLandingPage()) {
    return;
  }

  if (isOnFirstDocPage()) {
    // Click on the nav bar title.
    const navBarTitle = document.querySelectorAll(".navbar__title");
    if (navBarTitle.length > 0) {
      navBarTitle[0].click();
      return;
    }
  }

  // Click on the left-most button.
  const buttons = document.querySelectorAll(".pagination-nav__link");
  if (buttons.length > 0) {
    buttons[0].click();
  }
});

// Navigate forwards.
keyMap.set("ArrowRight", () => {
  if (isOnLandingPage()) {
    clickOnFirstLargeButton();
    return;
  }

  if (isOnLastDocPage()) {
    return;
  }

  // Otherwise, assume that we are on a doc page.
  const buttons = document.querySelectorAll(".pagination-nav__link");
  if (buttons.length >= 2) {
    buttons[1].click();
  } else if (buttons.length > 0) {
    buttons[0].click();
  }
});

// Go to a specific level.
keyMap.set("l", () => {
  // eslint-disable-next-line no-alert
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
});

function isOnLandingPage() {
  const titles = document.querySelectorAll(".hero__title");
  return titles.length > 0;
}

function isOnFirstDocPage() {
  return document.title === `${FIRST_DOC_PAGE_TITLE} | ${WEBPAGE_NAME}`;
}

function isOnLastDocPage() {
  return document.title === `${LAST_DOC_PAGE_TITLE} | ${WEBPAGE_NAME}`;
}

function clickOnFirstLargeButton() {
  const largeButtons = document.querySelectorAll(".button--lg");
  if (largeButtons.length > 0) {
    largeButtons[0].click();
  }
}

/**
 * `parseIntSafe` is a more reliable version of `parseInt`. By default, "parseInt('1a')" will return
 * "1", which is unexpected This returns either an integer or NaN.
 */
function parseIntSafe(input) {
  // Remove all leading and trailing whitespace.
  let trimmedInput = input.trim();

  const isNegativeNumber = trimmedInput.startsWith("-");
  if (isNegativeNumber) {
    // Remove the leading minus sign before we match the regular expression.
    trimmedInput = trimmedInput.slice(1);
  }

  if (/^\d+$/.exec(trimmedInput) === null) {
    // "\d" matches any digit (same as "[0-9]").
    return Number.NaN;
  }

  if (isNegativeNumber) {
    // Add the leading minus sign back.
    trimmedInput = `-${trimmedInput}`;
  }

  return Number.parseInt(trimmedInput, 10);
}
