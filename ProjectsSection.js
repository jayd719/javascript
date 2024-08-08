/**
 * Creates a new message box div element.
 * @returns {HTMLDivElement} - The created message box element.
 */
function getMessageBox() {
  let messageBox = document.createElement("div");
  return messageBox;
}

/**
 * Generates a random color string based on the given placement.
 * @param {string} placement - The placement identifier for the color.
 * @returns {string} - A string representing a randomly chosen color and shade.
 */
function getColor(placement) {
  const base = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "indigo",
    "orange",
    "lime",
    "teal",
    "cyan",
    "sky",
  ];
  const shades = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  return `${placement}-${base[getRandomNumber(base.length)]}-${
    shades[getRandomNumber(shades.length)]
  }`;
}

/**
 * Generates a random number between 0 and the specified upper limit.
 * @param {number} upperLimit - The upper limit for the random number.
 * @returns {number} - A random number between 0 and upperLimit.
 */
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

/**
 * Determines the CSS translate class based on the breakpoint and index.
 * @param {number} breakPoint - The breakpoint to compare against.
 * @param {number} i - The index to use for calculation.
 * @returns {string} - The CSS class for translation.
 */
function getTranslateOnPosition(breakPoint, i) {
  let unitsDigit = breakPoint;
  return unitsDigit > breakPoint
    ? "translate-x-[-200px]"
    : "translate-x-[00px] translate-y-[0px]";
}

/**
 * Creates and appends project tabs to the main container.
 * @param {number} Tabs - The number of tabs to create.
 * @returns {Array} - An array of created project elements.
 */
function createTabs(Tabs) {
  let mainContainer = document.getElementById("projectsContainer");
  let TABs = [];

  for (let i = 1; i <= Tabs; i++) {
    let project = document.createElement("div");
    project.id = i;
    project.className = `h-20 text-center hover:scale-[1.1] hover:shadow-xl hover:${getColor(
      "bg"
    )} hover:rounded group transition duration-200 flex justify-center items-center p-2`;

    let projectInformation = document.createElement("div");
    projectInformation.className = `hidden transition duration-1000 group-hover:flex ${getTranslateOnPosition(
      6,
      i
    )} transition duration-400`;

    let text = document.createElement("h1");
    text.innerText = "";
    text.className = "text-7xl [text-shadow:_3px_4px_3px_rgb(130_100_2_/_60%)]";

    project.appendChild(projectInformation);
    projectInformation.appendChild(text);
    mainContainer.appendChild(project);
    TABs.push(project);
  }

  return TABs;
}

let divHoverCounter = 0;
let skillsCounter = 0;
const TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta in eveniet accusantium blanditiis commodi architecto! Omnis, cum rem dicta eaque quidem, doloribus illum quaerat iusto vel tenetur provident ad.";
const words = TEXT.split(" ");
const MessageTextTiles = [
  28, 29, 30, 31, 32, 40, 41, 42, 43, 44, 52, 53, 54, 55, 56, 64, 65, 66, 67,
  68, 76, 77, 78, 79, 80, 88, 89, 90, 91, 92, 100, 101, 102, 103, 104,
];
const IMAGES = [
  "https://www.svgrepo.com/show/452091/python.svg",
  "https://www.svgrepo.com/show/452045/js.svg",
  "https://www.svgrepo.com/show/452054/linux.svg",
  "https://www.svgrepo.com/show/448266/aws.svg",
];

/**
 * Adds event listeners to project elements to display text or images on hover.
 * @param {Array} projects - An array of project elements.
 */
function IntroTextTiles(projects) {
  projects.forEach((project) => {
    project.addEventListener("mouseenter", function () {
      if (!MessageTextTiles.includes(parseInt(project.id))) {
        project.children[0].children[0].innerText = words[divHoverCounter];
        project.children[0].children[0].style.transform="scale(1.2)"
        divHoverCounter++;
        if (divHoverCounter >= words.length) {
          divHoverCounter = 0;
        }
      } else {
        project.className =
          "group hover:bg-base-100 flex justify-center p-2 items-center rounded-xl hover:shadow-xl hover:bg-white hover:shadow-base-300 transition duration-500";
        project.children[0].innerHTML = `<div><img class="w-24 scale[2.2]" src="${IMAGES[skillsCounter]}" alt=""><div>`;
        skillsCounter++;
        if (skillsCounter >= IMAGES.length) {
          skillsCounter = 0;
        }
      }
    });
  });
}
