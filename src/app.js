/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateExcuse = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoIndx = Math.floor(Math.random() * who.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndx] +
      " " +
      action[actionIndx] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };

  let excuse = document.getElementById("excuse");
  let generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", function() {
    excuse.textContent = generateExcuse();
  });
};
