document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default email submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulate form submission (Replace with AJAX for real handling)
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
    });
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
  
