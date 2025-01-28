// // temples.js
// document.addEventListener("DOMContentLoaded", () => {
//     const yearSpan = document.getElementById("year");
//     const modifiedSpan = document.getElementById("last-modified");
//     const hamburger = document.getElementById("hamburger");
//     const nav = document.querySelector("nav");

//     yearSpan.textContent = new Date().getFullYear();
//     modifiedSpan.textContent = document.lastModified;

//     hamburger.addEventListener("click", () => {
//         nav.classList.toggle("visible");
//     });
// });

// // temples.js
// document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");

//     // Toggle menu visibility on hamburger click
//     hamburger.addEventListener("click", () => {
//         navMenu.classList.toggle("visible");
//         hamburger.textContent = navMenu.classList.contains("visible") ? "✖" : "☰"; // Toggle icon
//     });
// });


// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// hamburger.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
//     // Toggle between ☰ and X for the button
//     hamburger.textContent = navMenu.classList.contains('active') ? 'X' : '☰';
// });


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Toggle between ☰ and X for the button
    hamburger.textContent = navMenu.classList.contains('active') ? 'X' : '☰';
});


document.addEventListener("DOMContentLoaded", () => {
    // Select elements for output
    const full = document.querySelector("#full");
    const worldfull = document.querySelector("#world-full");
    const short = document.querySelector("#short");
    const medium = document.querySelector("#medium");
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");
    const dayofweek = document.querySelector("#dayofweek");
    const lastModified = document.lastModified;
  
    // Use the date object
    const today = new Date();
  
    if (full) {
      full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
      }).format(today)}</span>`;
    }
  
    if (worldfull) {
      worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full",
      }).format(today)}</span>`;
    }
  
    if (short) {
      short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
      }).format(today)}</span>`;
    }
  
    if (medium) {
      medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(today)}</span>`;
    }
  
    if (year) {
      year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
    }
  
    if (month) {
      month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
    }
  
    if (day) {
      day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
    }
  
    if (dayofweek) {
      dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;
    }
  
    const modifiedElement = document.querySelector("#last-modified");
    if (modifiedElement) {
      modifiedElement.innerHTML = `This page was last modified on: <span class="highlight">${lastModified}</span>`;
    }
  });
  