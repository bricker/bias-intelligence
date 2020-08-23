/* globals chrome */

function setIcon() {
  chrome.browserAction.setIcon({ path: 'images/enabled-16.png' });
}

function main() {
  setIcon();

  chrome.browserAction.onClicked.addListener(() => {
  });
}

main();
