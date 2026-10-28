// Customize this object to create a portfolio for each client.
const PORTFOLIO = {
  name: "Alex Morgan",
  role: "Developer & Creative Thinker",
  location: "Your City, Country",
  email: "hello@example.com",
  leetcodeUsername: "",
  summary: "I'm Alex — a curious developer and creative thinker turning ideas into useful, thoughtful digital experiences.",
  aboutLead: "I like to understand the why, enjoy the how, and keep improving what I make.",
  aboutBody: "Use this space to share your background, interests, learning journey and the kind of work you hope to do next. The best portfolios sound like a real person, not a résumé generator.",
  facts: ["Curiosity-led learning", "Thoughtful development", "Practical problem solving"],
  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "LeetCode", url: "https://leetcode.com/" }
  ],
  skills: [
    { category: "DEVELOPMENT", items: ["HTML", "CSS", "JavaScript", "Responsive UI"] },
    { category: "PROGRAMMING", items: ["Python", "Java", "C++", "Problem Solving"] },
    { category: "TOOLS & DATA", items: ["Git & GitHub", "SQL", "Excel", "Power BI"] }
  ],
  projects: [
    { title: "Gesture Canvas", type: "INTERACTIVE EXPERIENCE", description: "A playful canvas experiment exploring a more natural way to interact with a screen.", tech: ["JavaScript", "Creative Coding"], image: "assets/images/project-1.svg", url: "#" },
    { title: "Fusion Drive", type: "WEB DESIGN & DEVELOPMENT", description: "A confident automotive landing page built around bold visuals and a clear user journey.", tech: ["HTML", "CSS", "JavaScript"], image: "assets/images/project-2.svg", url: "#" },
    { title: "Student Analyzer", type: "DATA & INSIGHTS", description: "A dashboard concept that turns student performance data into useful, readable insights.", tech: ["Python", "Pandas", "Data"], image: "assets/images/project-3.svg", url: "#" },
    { title: "Secure Notes", type: "PRODUCT CONCEPT", description: "A minimal, privacy-first notes interface with a focus on clarity and ease of use.", tech: ["UI Design", "JavaScript"], image: "assets/images/project-4.svg", url: "#" }
  ],
  certificates: [
    { title: "Certificate Name One", issuer: "Issuing Organization", year: "2026", url: "" },
    { title: "Certificate Name Two", issuer: "Issuing Organization", year: "2026", url: "" },
    { title: "Certificate Name Three", issuer: "Issuing Organization", year: "2026", url: "" }
  ]
};

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[character]));

function renderPortfolio() {
  const fullName = PORTFOLIO.name || "Your Name";
  $("#brandName").textContent = fullName;
  $("#footerName").textContent = fullName;
  $("#heroSummary").textContent = PORTFOLIO.summary;
  $("#aboutLead").textContent = PORTFOLIO.aboutLead;
  $("#aboutBody").textContent = PORTFOLIO.aboutBody;
  $("#location").textContent = PORTFOLIO.location;
  $("#copyrightYear").textContent = new Date().getFullYear();
  $("#aboutPills").innerHTML = PORTFOLIO.facts.map(function (fact) {
    return "<span>" + escapeHTML(fact) + "</span>";
  }).join("");

  $("#contactEmail").textContent = PORTFOLIO.email;
  $("#contactEmail").href = "mailto:" + PORTFOLIO.email;
  $("#emailLink").href = "mailto:" + PORTFOLIO.email;
  $("#contactSocials").innerHTML = PORTFOLIO.socials.map(function (social) {
    return '<a href="' + escapeHTML(social.url) + '" target="_blank" rel="noreferrer">' + escapeHTML(social.label) + " ↗</a>";
  }).join("");

  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map(function (project, index) {
    const safeURL = escapeHTML(project.url || "#");
    return '<article class="project-card">' +
      '<a class="project-image" href="' + safeURL + '" target="_blank" rel="noreferrer" aria-label="Open ' + escapeHTML(project.title) + '">' +
      '<img src="' + escapeHTML(project.image) + '" alt="' + escapeHTML(project.title) + ' project preview" loading="lazy"></a>' +
      '<div class="project-meta"><span>' + String(index + 1).padStart(2, "0") + " / " + escapeHTML(project.type) + '</span><a href="' + safeURL + '" target="_blank" rel="noreferrer" aria-label="Visit project">↗</a></div>' +
      "<h3>" + escapeHTML(project.title) + "</h3><p>" + escapeHTML(project.description) + '</p><div class="tech-tags">' +
      project.tech.map(function (tag) { return "<span>" + escapeHTML(tag) + "</span>"; }).join("") +
      "</div></article>";
  }).join("");

  $("#skillGroups").innerHTML = PORTFOLIO.skills.map(function (group) {
    return '<div class="skill-group"><h3>' + escapeHTML(group.category) + '</h3><div class="skill-items">' +
      group.items.map(function (skill) { return "<span>" + escapeHTML(skill) + "</span>"; }).join("") +
      "</div></div>";
  }).join("");

  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map(function (certificate, index) {
    const content = '<span class="certificate-icon">✦</span><div><span class="micro-label">MILESTONE ' +
      String(index + 1).padStart(2, "0") + "</span><h3>" + escapeHTML(certificate.title) + "</h3><p>" +
      escapeHTML(certificate.issuer) + (certificate.year ? " · " + escapeHTML(certificate.year) : "") +
      '</p></div><span class="certificate-arrow">↗</span>';
    if (certificate.url) {
      return '<a class="certificate-card" href="' + escapeHTML(certificate.url) + '" target="_blank" rel="noreferrer">' + content + "</a>";
    }
    return '<article class="certificate-card">' + content + "</article>";
  }).join("");

  $("#lcUsername").textContent = PORTFOLIO.leetcodeUsername ? "@" + PORTFOLIO.leetcodeUsername : "@yourusername";
  $("#lcProfileLink").href = PORTFOLIO.leetcodeUsername
    ? "https://leetcode.com/u/" + encodeURIComponent(PORTFOLIO.leetcodeUsername) + "/"
    : "https://leetcode.com/";
}

function statCard(label, value, suffix) {
  return '<div class="lc-stat"><span>' + escapeHTML(label) + '</span><strong>' + escapeHTML(value) +
    (suffix ? ' <em>' + escapeHTML(suffix) + "</em>" : "") + "</strong></div>";
}

async function loadLeetCodeStats() {
  const username = PORTFOLIO.leetcodeUsername.trim();
  const statsContainer = $("#lcStats");
  if (!username) {
    statsContainer.innerHTML = [
      statCard("TOTAL SOLVED", "—", "add username"),
      statCard("EASY SOLVED", "—", ""),
      statCard("MEDIUM SOLVED", "—", ""),
      statCard("HARD SOLVED", "—", "")
    ].join("");
    $("#lcStatus").textContent = "Set leetcodeUsername in script.js to request public stats.";
    return;
  }

  statsContainer.innerHTML = '<div class="lc-loading">Fetching public stats…</div>';
  $("#lcStatus").textContent = "Connecting to stats service…";
  try {
    const response = await fetch("https://leetcode-stats-api.herokuapp.com/" + encodeURIComponent(username));
    if (!response.ok) throw new Error("Stats request failed");
    const data = await response.json();
    if (data.status === "error" || data.error || data.totalSolved == null) throw new Error("Stats unavailable");
    statsContainer.innerHTML = [
      statCard("TOTAL SOLVED", data.totalSolved, "problems"),
      statCard("EASY SOLVED", data.easySolved, data.totalEasy != null ? "/ " + data.totalEasy : ""),
      statCard("MEDIUM SOLVED", data.mediumSolved, data.totalMedium != null ? "/ " + data.totalMedium : ""),
      statCard("HARD SOLVED", data.hardSolved, data.totalHard != null ? "/ " + data.totalHard : "")
    ].join("");
    $("#lcStatus").textContent = "Updated " + new Date().toLocaleTimeString() + " · Third-party service";
  } catch (error) {
    statsContainer.innerHTML = '<div class="lc-loading">Stats are temporarily unavailable. The profile link is still available.</div>';
    $("#lcStatus").textContent = "Unable to fetch stats right now.";
  }
}

const menuButton = $("#menuToggle");
const nav = $("#mainNav");
menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
$("#refreshLc").addEventListener("click", loadLeetCodeStats);
renderPortfolio();
loadLeetCodeStats();