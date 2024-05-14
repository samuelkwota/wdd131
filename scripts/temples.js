// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Array of Temple Objects
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },

      {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "11 January 2004",
        area: 115242,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
      },
      {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "16 February 2020",
        area: 105242,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
      },

      {
        templeName: "Toronto Ontario Canada",
        location: "Ontario , Canada",
        dedicated: "25 August 1990",
        area: 172242,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-817787-wallpaper.jpg"
      },
    // Add more temple objects here...
  ];
  
  // Function to generate temple card HTML
  function generateTempleCard(temple) {
    return `
      <div class="temple-card">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} square feet</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </div>
    `;
  }
  
  // Function to display filtered temples
  function displayFilteredTemples(filteredTemples) {
    const templesContainer = document.getElementById("temples-container");
    templesContainer.innerHTML = "";
  
    filteredTemples.forEach(temple => {
      const templeCardHTML = generateTempleCard(temple);
      templesContainer.innerHTML += templeCardHTML;
    });
  }
  
  // Event listeners for navigation menu items
  document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
      const dedicatedYear = Number(temple.dedicated.split(", ")[0]);
      return dedicatedYear < 1900;
    });
    displayFilteredTemples(oldTemples);
  });
  
  document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
      const dedicatedYear = Number(temple.dedicated.split(", ")[0]);
      return dedicatedYear > 2000;
    });
    displayFilteredTemples(newTemples);
  });
  
  document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayFilteredTemples(largeTemples);
  });
  
  document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayFilteredTemples(smallTemples);
  });
  
  document.getElementById("home").addEventListener("click", () => {
    displayFilteredTemples(temples);
  });
  
  // Initial display of all temples
  displayFilteredTemples(temples);