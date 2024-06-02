document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simple form validation
      if (name && email && message) {
          // Save to localStorage
          localStorage.setItem("contactName", name);
          localStorage.setItem("contactEmail", email);
          localStorage.setItem("contactMessage", message);
          alert("Thank you for your message!");
          form.reset();
      } else {
          alert("Please fill out all fields.");
      }
  });

  // Example dynamic content
  const trip1 = document.getElementById("trip1");
  trip1.addEventListener("click", () => {
      alert("Beginner's Delight: A gentle ride perfect for first-timers.");
  });
});