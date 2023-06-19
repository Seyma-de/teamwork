let avengers = ["Iron Man", "Captain America", "Black Widow", "Hulk"];
console.log(avengers.splice(2, 1, "Thor", "Hawkeye"));
/* ------------------------------------ ! ----------------------------------- */
let fullStack = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};

for (let i = 0; i < fullStack.languages.length; i++) {
  let language = fullStack.languages[i];
  console.log(language);
}
/* ------------------------------------ 1 ----------------------------------- */
let fullStack1 = {
  languages: ["JavaScript", "React", "HTML"],
  jira: true,
  gitHub: true,
  difficulty: 8,
};

let keys = Object.keys(fullStack1);
console.log(keys);
