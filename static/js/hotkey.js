const WEBPAGE_NAME = "H-Group Conventions";
const FIRST_DOC_PAGE_TITLE = "About";
const LAST_DOC_PAGE_TITLE = "Convention Attribution";
const MAX_LEVEL = 25;

const KEY_MAP = new Map([
  ["ArrowLeft", navigateBackwards],
  ["ArrowRight", navigateForwards],
  ["l", goToSpecificLevel],
]);

main();

function main() {
  document.addEventListener("keydown", (event) => {
    // Do not do anything if we have any modifier keys pressed down.
    if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
      return;
    }

    // Do not do anything if we have the search box focused.
    if (isSearchBarFocused()) {
      return;
    }

    const keyFunction = KEY_MAP.get(event.key);
    if (keyFunction !== undefined) {
      keyFunction();
    }
  });
}

/** @returns {boolean} */
function isSearchBarFocused() {
  // eslint-disable-next-line unicorn/prefer-spread
  const searchInputElements = Array.from(
    document.querySelectorAll(".DocSearch-Input"),
  );
  return (
    document.activeElement !== null &&
    searchInputElements.includes(document.activeElement)
  );
}

function navigateBackwards() {
  if (isOnLandingPage()) {
    return;
  }

  if (isOnFirstDocPage()) {
    clickOnNavBarTitle();
    return;
  }

  clickFirstNavButton();
}

function navigateForwards() {
  if (isOnLandingPage()) {
    clickOnFirstLandingPageButton();
    return;
  }

  if (isOnFirstDocPage()) {
    clickFirstNavButton();
    return;
  }

  if (isOnLastDocPage()) {
    return;
  }

  clickSecondNavButton();
}

function goToSpecificLevel() {
  // eslint-disable-next-line no-alert
  const levelString = window.prompt("Enter the level that you want to go to:");
  if (levelString === null || levelString === "") {
    return;
  }

  const level = parseIntSafe(levelString);
  if (level === undefined) {
    // eslint-disable-next-line no-alert
    window.alert(`"${levelString}" is not a number.`);
    return;
  }

  if (level < 1 || level > MAX_LEVEL) {
    // eslint-disable-next-line no-alert
    window.alert(
      `Level ${level} is not a valid level; levels must be between 1 and ${MAX_LEVEL}.`,
    );
    return;
  }

  window.location.href = `/level-${level}`;
}

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

function clickOnNavBarTitle() {
  const navBarTitles = document.querySelectorAll(".navbar__title");
  const navBarTitle = navBarTitles[0];
  if (navBarTitle !== undefined && navBarTitle instanceof HTMLElement) {
    navBarTitle.click();
  }
}

function clickOnFirstLandingPageButton() {
  const largeButtons = document.querySelectorAll(".button--lg");
  const largeButton = largeButtons[0];
  if (largeButton !== undefined && largeButton instanceof HTMLElement) {
    largeButton.click();
  }
}

function clickFirstNavButton() {
  clickNavButton(0);
}

function clickSecondNavButton() {
  clickNavButton(1);
}

/** @param {number} i */
function clickNavButton(i) {
  const navButtonsCollection = document.querySelectorAll(".pagination-nav");
  const navButtons = navButtonsCollection[0];
  if (navButtons === undefined) {
    return;
  }

  const buttonDiv = navButtons.children[i];
  if (buttonDiv === undefined) {
    return;
  }

  const buttonLink = buttonDiv.children[0];
  if (buttonLink !== undefined && buttonLink instanceof HTMLElement) {
    buttonLink.click();
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
 *
 * @param {string} string The string to convert to a number.
 */
function parseIntSafe(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  const trimmedString = string.trim();

  // If the string does not entirely consist of numbers, return undefined.
  if (/^-?\d+$/.exec(trimmedString) === null) {
    return undefined;
  }

  const number = Number.parseInt(trimmedString, 10);
  return Number.isNaN(number) ? undefined : number;
}
