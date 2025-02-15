document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    const products = [
        { id: "fc-1888", name: "Flux Capacitor" },
        { id: "fc-2050", name: "Power Laces" },
        { id: "fs-1987", name: "Time Circuits" },
        { id: "ac-2000", name: "Low Voltage Reactor" },
        { id: "jj-1969", name: "Warp Equalizer" }
    ];

    // Populate dropdown
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
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
  