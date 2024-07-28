/**
 * -------------------------------------------------------
 * Updates the class name of all child elements of a specified parent element.
 * The class name is set to the value provided in elementCSS.
 * Use: updateSiblings('parentID', 'newCSSClass')
 * -------------------------------------------------------
 * Parameters:
 *     ParentID  - The ID of the parent element whose child elements' class names will be updated (String).
 *     elementCSS - The new CSS class name to assign to each child element (String).
 * -------------------------------------------------------
 */
function updateSiblings(ParentID, elementCSS) {
  let siblings = document.getElementById(ParentID).childNodes;
  console.log(siblings);
  siblings.forEach((item) => {
    item.className = elementCSS;
  });
}

/**
 * -------------------------------------------------------
 * Sets a cookie with a specified name, value, and expiration date.
 * Use: setCookie('cookieName', 'cookieValue', 7)
 * -------------------------------------------------------
 * Parameters:
 *     cname  - The name of the cookie to set (String).
 *     cvalue - The value to assign to the cookie (String).
 *     exdays - The number of days until the cookie expires (Number).
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * -------------------------------------------------------
 * Retrieves the value of a specified cookie.
 * Use: let cookieValue = getCookie('cookieName')
 * -------------------------------------------------------
 * Parameters:
 *     cname - The name of the cookie whose value is to be retrieved (String).
 * -------------------------------------------------------
 * Returns:
 *     The value of the specified cookie if it exists (String).
 *     An empty string if the cookie does not exist.
 * -------------------------------------------------------
 */
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 * -------------------------------------------------------
 * Sets a cookie to indicate that the user has consented to cookies.
 * Calls removeCookieMessageBox() to remove the cookie consent message box.
 * Use: acceptCookies()
 * -------------------------------------------------------
 * Parameters:
 *     None
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function acceptCookies() {
  setCookie("userConsent", "userConsent", 10);
  removeCookieMessageBox();
}

/**
 * -------------------------------------------------------
 * Removes the cookie consent message box from the DOM.
 * Use: removeCookieMessageBox()
 * -------------------------------------------------------
 * Parameters:
 *     None
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function removeCookieMessageBox() {
  document.getElementById("cookieMessageBox").remove();
}

/**
 * -------------------------------------------------------
 * Toggles between two specified themes and sets a cookie to remember the selected theme.
 * Use: toggle('light', 'dark')
 * -------------------------------------------------------
 * Parameters:
 *     theme1 - The first theme (String).
 *     theme2 - The second theme (String).
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function toggle(theme1, theme2) {
  const newTheme =
    document.querySelector("html").getAttribute("data-theme") === theme1
      ? theme2
      : theme1;
  document.querySelector("html").setAttribute("data-theme", newTheme);
  setCookie("theme", newTheme, 2);
}

/**
 * -------------------------------------------------------
 * Adds a theme change button to the document and applies the saved theme from the cookie.
 * The button allows users to toggle between themes.
 * Use: addThemeChange()
 * -------------------------------------------------------
 * Parameters:
 *     None
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function addThemeChange() {
  let themeChanger = document.createElement("div");
  //theme button
  themeChanger.innerHTML = `<div class="fixed bottom-0 right-0 z-[100] py-3 px-5">
                              <div class="form-control">
                                  <label class="label cursor-pointer">
                                      <input type="checkbox" id="themeChanger" class="toggle" checked="checked" />
                                  </label>
                              </div>    
                          </div>`;
  document.body.appendChild(themeChanger);

  let theme = getCookie("theme");
  if (theme != "") {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
}

/**
 * -------------------------------------------------------
 * Adds a specified number of image elements to the 'cards' container element.
 * Use: jacks(20)
 * -------------------------------------------------------
 * Parameters:
 *     numberOfJacks - The number of image elements to add (Number).
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function jacks(numberOfJacks) {
  let jacksContainer = document.getElementById("cards");

  for (i = 0; i < numberOfJacks; i++) {
    let img = new Image();
    img.src = "https://jayd719.github.io/assets/images/jacks/jack1.jpeg";
    img.id = "jack-one";
    img.className = "absolute rounded-lg w-32";
    // img.className = `jack-image${Math.floor(Math.random() * 3) + 1}`;
    img.style.left = `${10 + Math.floor(Math.random() * 80)}%`;
    img.style.top = `${125 + Math.floor(Math.random() * 50)}%`;

    let degree = Math.floor(Math.random() * 100);
    if (i % 2 == 0) {
      img.style.transform = `rotate(-${degree}deg)`;
    } else {
      img.style.transform = `rotate(${degree}deg)`;
    }
    jacksContainer.appendChild(img);
  }
}

/**
 * -------------------------------------------------------
 * Moves the image elements with ID 'jack-one' by changing their top position.
 * Use: moveJacks()
 * -------------------------------------------------------
 * Parameters:
 *     None
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function moveJacks() {
  let jacks = document.querySelectorAll("#jack-one");
  for (j = 0; j < jacks.length; j++) {
    jacks[j].style.transitionDuration = `${
      Math.floor(Math.random() * 10) + 4
    }s`;
    jacks[j].style.top = "-200%";
  }
}


