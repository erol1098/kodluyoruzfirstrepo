"use strict";

const textbox = document.querySelector("#input");
const addBtn = document.querySelector("#btn");
const list = document.querySelector(".to-do-list");
const done = document.querySelector(".done");
const listItem = document.querySelector(".list-item");
const del = document.querySelectorAll(".delete");

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const target = e.target;
    const parent = target.parentElement;
    parent.remove();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("text")) {
    const target = e.target;
    const parent = target.parentElement;
    target.classList.toggle("display-text");
    parent.classList.toggle("display-row");
    parent.button.style.color = "black";
  }
});

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (textbox.value === "" || textbox.value.trim() === "") {
    console.warn("warning");
  } else {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
  <button class="done">✓</button><p class="text">${textbox.value}</p>
  <button class="delete">✕</button>`;
    list.appendChild(listItem);
    textbox.value = "";
    listItem.classList.add("list-item");
  }
});
