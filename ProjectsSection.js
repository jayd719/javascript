function getMessageBox() {
  let messageBox = document.createElement("div");
  return messageBox;
}

function getColor(placement) {
  let base = [
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
  let shades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

  return `${placement}-${base[getRandomNumber(base.length)]}-${
    shades[getRandomNumber(shades.length)]
  }`;
  console.log(getRandomNumber(base.length));
  console.log(getRandomNumber(shades.length));
}

function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function getTranslateOnPosition(breakPoint, i) {
  let tensDigit = Math.floor(i / 10);
  let unitsDigit = breakPoint;
  if (unitsDigit > breakPoint) {
    return "translate-x-[-200px]";
  } else {
    return "translate-x-[00px] translate-y-[50px] ";
  }
}

function createTabs(Tabs) {
  let mainContainer = document.getElementById("projectsContainer");
  //row
  let TABs = [];
  for (i = 1; i <= Tabs; i++) {
    let project = document.createElement("div");
    project.id = i;
    project.className = `h-20  text-center hover:scale-[1.1] hover:shadow-xl hover:${getColor(
      "bg"
    )}
       hover:rounded group transition duration-200
      `;
    let projectInformatio = document.createElement("div");
    projectInformatio.className = `hidden  transition duration-1000 group-hover:flex ${getTranslateOnPosition(
      6,
      i
    )}`;
    let text = document.createElement("h1");
    text.innerText = "";
    project.appendChild(projectInformatio);
    text.className = "text-7xl [text-shadow:_3px_4px_3px_rgb(130_100_2_/_60%)]";
    projectInformatio.appendChild(text);
    mainContainer.appendChild(project);
    TABs.push(project);
  }
  return TABs;
}

let divHoverCounter = 0;
const TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit soluta in eveniet accusantium blanditiis commodi architecto! Omnis, cum rem dicta eaque quidem, doloribus illum quaerat iusto vel tenetur provident ad.";
const words = TEXT.split(" ");

const MessageTextTiles = [
  "28", 29, 30, 31, 32, 40, 41, 42, 43, 44, 52, 53, 54, 55, 56, 64, 65, 66, 67,
  68, 76, 77, 78, 79, 80, 88, 89, 90, 91, 92, 100, 101, 102, 103, 104,
];

function IntroTextTiles(projects) {
  projects.forEach((project) => {
    project.addEventListener("mouseenter", function () {
      
      if (! MessageTextTiles.includes(parseInt(project.id))) {
        project.children[0].children[0].innerText = words[divHoverCounter];
        console.log(project.id);
        divHoverCounter++;
        if (divHoverCounter > words.length) {
          divHoverCounter = 0;
        }
      }
    });
  });
}
