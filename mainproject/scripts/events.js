document.addEventListener("DOMContentLoaded", () => {
    const eventContainer = document.getElementById("events-container");
    const cityFilter = document.getElementById("city-filter");
    const genreFilter = document.getElementById("genre-filter");
    
    const events = [
        { title: "Rock Fest", city: "New York", genre: "Rock", date: "2025-03-10" },
        { title: "Jazz Night", city: "Chicago", genre: "Jazz", date: "2025-04-05" },
        { title: "EDM Bash", city: "Los Angeles", genre: "EDM", date: "2025-05-15" },
        { title: "Country Vibes", city: "Nashville", genre: "Country", date: "2025-06-20" }
    ];

    function populateFilters() {
        const cities = [...new Set(events.map(event => event.city))];
        const genres = [...new Set(events.map(event => event.genre))];

        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });

        genres.forEach(genre => {
            const option = document.createElement("option");
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    }

    function renderEvents(filteredEvents) {
        eventContainer.innerHTML = "";
        
        if (filteredEvents.length === 0) {
            eventContainer.innerHTML = "<p>No events found.</p>";
            return;
        }

        filteredEvents.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>City:</strong> ${event.city}</p>
                <p><strong>Genre:</strong> ${event.genre}</p>
                <p><strong>Date:</strong> ${event.date}</p>
            `;
            eventContainer.appendChild(eventCard);
        });
    }

    function filterEvents() {
        const selectedCity = cityFilter.value;
        const selectedGenre = genreFilter.value;

        const filteredEvents = events.filter(event => 
            (selectedCity === "all" || event.city === selectedCity) &&
            (selectedGenre === "all" || event.genre === selectedGenre)
        );

        renderEvents(filteredEvents);
    }

    cityFilter.addEventListener("change", filterEvents);
    genreFilter.addEventListener("change", filterEvents);

    populateFilters();
    renderEvents(events);
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
  