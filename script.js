// -----------------------------
// Auto-fetch GitHub Projects
// -----------------------------
const username = "Pro00126";
const projectsContainer = document.getElementById("projects");

fetch(`https://api.github.com/users/${Pro00126}/repos`)
  .then(response => response.json())
  .then(data => {
    projectsContainer.innerHTML = "";

    data.slice(0, 6).forEach(repo => {
      const projectCard = document.createElement("div");
      projectCard.className = "card";

      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;

      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(() => {
    projectsContainer.innerHTML = "Unable to load projects.";
  });

// -----------------------------
// Contact Form (EmailJS)
// -----------------------------
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this,
    "YOUR_PUBLIC_KEY"
  ).then(
    () => {
      alert("Message sent successfully!");
      this.reset();
    },
    () => {
      alert("Failed to send message. Try again.");
    }
  );
});