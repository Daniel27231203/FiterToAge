const nameInp = document.querySelector(".createName");
const ageInp = document.querySelector(".createAge");
const addBtn = document.querySelector(".createData");
const box = document.querySelector(".box");
const workersList = document.querySelector(".workersList");
const allINp = document.querySelectorAll("input");

function getYears(year) {
  let getYear = new Date();
  let res = String(getYear).split(" ")[3];
  return +res - +year;
}

addList();
addWorkers();

addBtn.addEventListener("click", () => {
  getList();
});

function getList() {
  let obj = {
    name: nameInp.value,
    age: ageInp.value,
  };
  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.push(obj);
  localStorage.setItem("list", JSON.stringify(local));

  for (let i of allINp) {
    i.value = "";
  }
  addList();
  addWorkers();
}

function addList() {
  box.innerHTML = "";

  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.forEach((el, idx) => {
    const boxInBox = document.createElement("div");
    const h3 = document.createElement("h2");
    const h2 = document.createElement("h2");
    const a = document.createElement("h3");
    const b = document.createElement("h3");

    boxInBox.classList = "boxInBox";
    b.classList = "red";

    h3.innerHTML = el.name;
    h2.innerHTML = getYears(el.age);
    a.innerText = "-вы прошли!";
    b.innerText = "-вы не прошли!";

    if (getYears(el.age) > 18 && getYears(el.age) < 40) {
      box.appendChild(boxInBox);
      boxInBox.appendChild(h3);
      boxInBox.appendChild(a);
    } else {
      box.appendChild(boxInBox);
      boxInBox.appendChild(h3);
      boxInBox.appendChild(b);
    }
  });
}

function addWorkers() {
  workersList.innerHTML = "";
  const local = JSON.parse(localStorage.getItem("list")) || [];
  local.forEach((el, idx) => {
    const boxInList = document.createElement("div");
    const h3 = document.createElement("h2");
    const h2 = document.createElement("h2");
    const agePerson = document.createElement("h3");
    const delBtn = document.createElement("button");

    boxInList.classList = "boxInList";

    h3.innerHTML = el.name;
    h2.innerHTML = getYears(el.age);
    agePerson.innerText = "-years Old";
    delBtn.innerText = "x";

    delBtn.addEventListener("click", () => {
      const local = JSON.parse(localStorage.getItem("list")) || [];
      local.splice(idx, 1);
      localStorage.setItem("list", JSON.stringify(local));
      addWorkers();
    });

    if (getYears(el.age) > 18 && getYears(el.age) < 40) {
      workersList.appendChild(boxInList);
      boxInList.appendChild(h3);
      boxInList.appendChild(h2);
      boxInList.appendChild(agePerson);
      boxInList.append(delBtn);
    }
  });
}
