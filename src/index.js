
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  // mouse is on top of 'title'
  handleMouseEnter: function () {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },

  // mouse leaves 'title'
  handleMouseLeave: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },

  // when the window is resized
  handleWindowResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },

  // on right click
  handleContextMenu: function () {
    title.style.color = colors[3];
    title.innerText = "That was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
document.addEventListener("contextmenu", superEventHandler.handleContextMenu);
