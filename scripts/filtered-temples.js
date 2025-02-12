document.addEventListener("DOMContentLoaded", () => {
    const templeGallery = document.querySelector("#temple-gallery");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const lastModifiedElement = document.querySelector("#last-modified");
  
    // Temple Data
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888-05-21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015-06-07",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020-05-02",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974-11-19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986-01-10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983-12-02",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Atlanta Georgia",
            location: "Atlanta, Georgia",
            dedicated: "1983-06-01",
            area: 34500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
        },
        {
            templeName: "Bountiful Utah",
            location: "Bountiful, Utah",
            dedicated: "1995-01-08",
            area: 104000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
        }
    ];
  
    // Function to display temples
    function displayTemples(filteredTemples) {
        templeGallery.innerHTML = ""; // Clear current content
  
        filteredTemples.forEach(temple => {
            const figure = document.createElement("figure");
            figure.classList.add("temple-card");
  
            // Temple Info (Above Image)
            const infoContainer = document.createElement("div");
            infoContainer.classList.add("temple-info");
            infoContainer.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sq ft</p>
            `;
  
            // Temple Image
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy"; // Lazy loading
  
            // Append elements to figure
            figure.appendChild(infoContainer); // Info goes on top
            figure.appendChild(img); // Image below info
            templeGallery.appendChild(figure);
        });
    }
  
    // Initial display (all temples)
    displayTemples(temples);
  
    // Function to filter temples
    function filterTemples(filter) {
        let filteredList = [];
  
        switch (filter) {
            case "old":
                filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "new":
                filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "large":
                filteredList = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filteredList = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredList = temples; // Show all if no filter
                break;
        }
  
        displayTemples(filteredList);
    }
  
    // Event Listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            filterTemples(filter);
        });
    });
  
    // Update last modified date
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
  });
  

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
    

    document.addEventListener("DOMContentLoaded", () => {
        const templeGallery = document.querySelector("#temple-gallery");
        const filterLinks = document.querySelectorAll(".nav-menu a");
        const lastModifiedElement = document.querySelector("#last-modified");
    
        // Temple Data
        const temples = [
            { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
            { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
            { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
            { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
            { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
            { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
            { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
            { templeName: "Atlanta Georgia", location: "Atlanta, Georgia", dedicated: "1983-06-01", area: 34500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg" },
            { templeName: "Bountiful Utah", location: "Bountiful, Utah", dedicated: "1995-01-08", area: 104000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg" }
        ];
    
        // Function to display temples
        function displayTemples(filteredTemples) {
            templeGallery.innerHTML = ""; // Clear current content
    
            filteredTemples.forEach(temple => {
                const figure = document.createElement("figure");
                figure.classList.add("temple-card");
    
                const infoContainer = document.createElement("div");
                infoContainer.classList.add("temple-info");
                infoContainer.innerHTML = `
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Size:</strong> ${temple.area} sq ft</p>
                `;
    
                const img = document.createElement("img");
                img.src = temple.imageUrl;
                img.alt = temple.templeName;
                img.loading = "lazy"; // Lazy loading
    
                figure.appendChild(infoContainer);
                figure.appendChild(img);
                templeGallery.appendChild(figure);
            });
        }
    
        // Function to filter temples
        function filterTemples(filter) {
            let filteredList = [];
    
            switch (filter) {
                case "old":
                    filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                    break;
                case "new":
                    filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                    break;
                case "large":
                    filteredList = temples.filter(t => t.area > 90000);
                    break;
                case "small":
                    filteredList = temples.filter(t => t.area < 10000);
                    break;
                default:
                    filteredList = temples; // Show all if "Home" is clicked
                    break;
            }
    
            displayTemples(filteredList);
        }
    
        // Event Listeners for navigation menu links
        filterLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent page refresh
                const filter = link.getAttribute("data-filter");
                filterTemples(filter);
            });
        });
    
        // Initial display (show all temples on page load)
        displayTemples(temples);
    
        // Update last modified date
        if (lastModifiedElement) {
            lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
        }
    });
    