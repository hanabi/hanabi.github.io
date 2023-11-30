// Constants
const WEBPAGE_NAME = "H-Group Conventions";
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
  if (level === undefined) {
    return;
  }

  if (level < 1 || level > MAX_LEVEL) {
    return;
  }

  window.location = `/level-${level}`;
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
 * This is a more reliable version of `Number.parseInt`:
 *
 * - `undefined` is returned instead of `Number.NaN`, which is helpful in conjunction with
 *   TypeScript type narrowing patterns.
 * - Strings that are a mixture of numbers and letters will result in undefined instead of the part
 *   of the string that is the number. (e.g. "1a" --> undefined instead of "1a" --> 1)
 * - Non-strings will result in undefined instead of being coerced to a number.
 *
 * If you have to use a radix other than 10, use the vanilla `Number.parseInt` function instead,
 * because this function ensures that the string contains no letters.
 */
export function parseIntSafe(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  const trimmedString = string.trim();

  // If the string does not entirely consist of numbers, return undefined.
  if (INTEGER_REGEX.exec(trimmedString) === null) {
    return undefined;
  }

  const number = Number.parseInt(trimmedString, 10);
  return Number.isNaN(number) ? undefined : number;
}
