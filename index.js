document.getElementById("mytext").style.color = "blue";
function addElem(one, two, three, four, five) {
  var newDiv = document.createElement("div");
  let randomId = guidGenerator();
  randomId = `childDiv_${randomId}`;
  newDiv.id = randomId;
  newDiv.className = "childDiv";

  let color = Math.floor(Math.random() * 16777215).toString(16);
  color = `#${color}`;
  newDiv.style.background = color; //Apn chahe to apne acc color as a param bhi de skte hai

  document.body.appendChild(newDiv);
  let para1 = document.createElement("p");
  para1.innerHTML = one;
  para1.className = "lefttop";
  let para2 = document.createElement("p");
  para2.innerHTML = two;
  para2.className = "righttop";
  let para3 = document.createElement("p");
  para3.innerHTML = three;
  para3.className = "bottomleft";
  let para4 = document.createElement("p");
  para4.innerHTML = four;
  para4.className = "bottomright";
  let para5 = document.createElement("p");
  para5.innerHTML = five;
  para5.className = "center";

  document.getElementById(randomId).appendChild(para1);
  document.getElementById(randomId).appendChild(para2);
  document.getElementById(randomId).appendChild(para3);
  document.getElementById(randomId).appendChild(para4);
  document.getElementById(randomId).appendChild(para5);
}

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

console.log(guidGenerator());

const obj = {
  one: {
    name: "one",
    skill: "mst",
    country: "Ind",
    height: 5,
    weight: 10,
  },
  do: {
    name: "do",
    skill: "mst",
    country: "avg",
    height: 43,
    weight: 20,
  },
  teen: {
    name: "teen",
    skill: "nrml",
    country: "AUS",
    height: 4,
    weight: 30,
  },
  char: {
    name: "Char",
    skill: "oky",
    country: "ENG",
    height: 4,
    weight: 30,
  },
};

for (const itm in obj) {
  addElem(
    obj[itm].name,
    obj[itm].skill,
    obj[itm].country,
    obj[itm].height,
    obj[itm].weight
  );
}
