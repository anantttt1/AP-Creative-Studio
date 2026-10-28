
/*
  CLIENT PORTFOLIO SETTINGS
  Replace the sample details with your client's information.
*/

const portfolio = {
  name: "Your Name",
  role: "Developer & Creative Thinker",
  location: "Your City, Country",
  email: "your.email@example.com",

  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    leetcode: "https://leetcode.com/u/yourusername/"
  },

  githubHandle: "@yourusername",

  leetcode: {
    solved: "000",
    easy: "000",
    medium: "000",
    hard: "000",
    streak: "0 day streak"
  },

  projects: {
    1: "#",
    2: "#",
    3: "#"
  },

  certificates: {
    1: "./assets/certificates/certificate-1.pdf",
    2: "./assets/certificates/certificate-2.pdf",
    3: "./assets/certificates/certificate-3.pdf"
  }
};

// Update the portfolio details
document.querySelectorAll("[data-name]").forEach(el => {
  el.textContent = portfolio.name;
});

document.querySelectorAll("[data-role]").forEach(el => {
  el.textContent = portfolio.role;
});

document.querySelectorAll("[data-location]").forEach(el => {
  el.textContent = portfolio.location;
});

document.querySelectorAll("[data-stat]").forEach(el => {
  const key = el.dataset.stat;

  if (portfolio.leetcode[key] !== undefined) {
    el.textContent = portfolio.leetcode[key];
  }
});

document.querySelectorAll("[data-handle='github']").forEach(el => {
  el.textContent = portfolio.githubHandle;
});

// Connect profile links
document.querySelectorAll("[data-link]").forEach(el => {
  const key = el.dataset.link;

  if (key === "email") {
    el.href = `mailto:${portfolio.email}`;
  } else if (portfolio.links[key]) {
    el.href = portfolio.links[key];
  }
});

// Connect project links
document.querySelectorAll("[data-project-link]").forEach(el => {
  const key = el.dataset.projectLink;
  el.href = portfolio.projects[key] || "#";
});

// Connect certificate links
document.querySelectorAll("[data-certificate-link]").forEach(el => {
  const key = el.dataset.certificateLink;
  el.href = portfolio.certificates[key] || "#";
});

// Create illustrative activity tracker squares
const activityGrid = document.getElementById("activity-grid");

if (activityGrid) {
  for (let i = 0; i < 91; i++) {
    const cell = document.createElement("span");
    const seed = (i * 17 + i * i * 3) % 11;

    const level =
      seed < 4 ? 0 :
      seed < 6 ? 1 :
      seed < 8 ? 2 :
      seed < 10 ? 3 : 4;

    cell.className = "activity-cell";

    if (level > 0) {
      cell.classList.add(`level-${level}`);
    }

    cell.title = "Illustrative placeholder activity";
    activityGrid.appendChild(cell);
  }
}

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatic copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
