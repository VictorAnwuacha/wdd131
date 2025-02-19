document.addEventListener("DOMContentLoaded", () => {
    const events = [
        { 
            name: "Vibe Fest", 
            date: "2025-05-01", 
            location: "New York, NY", 
            description: "A massive music festival featuring top artists.", 
            link: "https://www.ticketmaster.com/vibe-fest",
            image: "vibe-fest.jpg"
        },
        { 
            name: "Groove Festival", 
            date: "2025-06-20", 
            location: "Los Angeles, CA", 
            description: "An electronic dance music festival.", 
            link: "https://www.ticketmaster.com/groove-festival",
            image: "groove-festival.jpg"
        },
        { 
            name: "Rock The Beach", 
            date: "2025-07-15", 
            location: "Miami Beach, FL", 
            description: "Rock music on the beach with live bands.", 
            link: "https://www.ticketmaster.com/rock-the-beach",
            image: "rock-the-beach.jpg"
        }
    ];

    const eventListContainer = document.getElementById("event-list");
    const cityFilter = document.getElementById("city-filter");
    const genreFilter = document.getElementById("genre-filter");

    // Load previous filter settings
    cityFilter.value = localStorage.getItem("selectedCity") || "all";
    genreFilter.value = localStorage.getItem("selectedGenre") || "all";

    // Function to display events dynamically
    function displayEvents(events) {
        eventListContainer.innerHTML = ''; // Clear previous events
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
            `;
            eventCard.addEventListener("click", () => openEventModal(event));
            eventListContainer.appendChild(eventCard);
        });
    }

    // Open modal with event details
    function openEventModal(event) {
        const eventModal = document.createElement("div");
        eventModal.classList.add("event-modal");
        eventModal.innerHTML = `
            <div class="event-modal-content">
                <span class="close-btn">&times;</span>
                <h2>${event.name}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.link}" target="_blank">More Info</a>
                <img src="${event.image}" alt="Image of ${event.name}" loading="lazy">
            </div>
        `;
        document.body.appendChild(eventModal);
        
        // Close the modal when clicking the close button
        eventModal.querySelector(".close-btn").addEventListener("click", () => eventModal.remove());

        // Close modal when clicking outside the content
        eventModal.addEventListener("click", (e) => {
            if (e.target === eventModal) {
                eventModal.remove();
            }
        });
    }

    // Function to filter events
    function filterEvents() {
        const selectedCity = cityFilter.value.toLowerCase();
        const selectedGenre = genreFilter.value.toLowerCase();

        localStorage.setItem("selectedCity", selectedCity);
        localStorage.setItem("selectedGenre", selectedGenre);

        const filteredEvents = events.filter(event => {
            const matchesCity = selectedCity === "all" || event.location.toLowerCase().includes(selectedCity);
            const matchesGenre = selectedGenre === "all" || event.name.toLowerCase().includes(selectedGenre);
            return matchesCity && matchesGenre;
        });

        displayEvents(filteredEvents);
    }

    // Apply filter when selection changes
    cityFilter.addEventListener("change", filterEvents);
    genreFilter.addEventListener("change", filterEvents);

    // Display events initially
    displayEvents(events);

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

  

