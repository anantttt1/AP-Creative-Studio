// Edit this object to personalize the portfolio template.
const PORTFOLIO = {
  name: "Alex Morgan",
  role: "Developer & Creative Thinker",
  location: "Your City, Country",
  email: "hello@example.com",
  resumeUrl: "",
  leetcodeUsername: "",
  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "LeetCode", url: "https://leetcode.com/" }
  ],
  about: "I enjoy learning how things work, making useful projects, and improving through consistent practice.",
  aboutExtra: "Replace this text with your background, interests, education, and the opportunities you are looking for.",
  facts: ["Problem solving", "Web development", "Continuous learning"],
  skills: [
    { category: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "Responsive Design"] },
    { category: "PROGRAMMING", items: ["Python", "Java", "C++", "Problem Solving"] },
    { category: "TOOLS", items: ["Git & GitHub", "VS Code", "Figma", "SQL"] }
  ],
  projects: [
    { title: "Gesture Canvas", type: "INTERACTIVE WEB APP", description: "An interactive canvas experience controlled with hand gestures.", tech: ["JavaScript", "Computer Vision"], image: "assets/images/project-1.svg", url: "#" },
    { title: "Fusion Drive", type: "FRONTEND WEBSITE", description: "A modern automotive website concept with responsive layouts.", tech: ["HTML", "CSS", "JavaScript"], image: "assets/images/project-2.svg", url: "#" },
    { title: "Student Analyzer", type: "DATA PROJECT", description: "A dashboard concept for exploring student performance and trends.", tech: ["Python", "Pandas", "Charts"], image: "assets/images/project-3.svg", url: "#" },
    { title: "Secure Notes", type: "PERSONAL PROJECT", description: "A clean interface concept for organizing private notes.", tech: ["UI Design", "JavaScript"], image: "assets/images/project-4.svg", url: "#" }
  ],
  certificates: [
    { title: "Certificate Name One", issuer: "Issuing Organization", year: "2026", url: "" },
    { title: "Certificate Name Two", issuer: "Issuing Organization", year: "2026", url: "" },
    { title: "Certificate Name Three", issuer: "Issuing Organization", year: "2026", url: "" }
  ]
};
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
function renderPortfolio() {
  const name = PORTFOLIO.name || "Your Name";
  $("#brandName").textContent = name.toUpperCase();
  $("#footerName").textContent = name.toUpperCase();
  $("#heroNameSmall").textContent = name.split(" ")[0].toUpperCase();
  $("#heroRole").textContent = PORTFOLIO.role;
  $("#heroBio").textContent = PORTFOLIO.about;
  $("#aboutText").textContent = PORTFOLIO.about;
  $("#aboutExtra").textContent = PORTFOLIO.aboutExtra;
  $("#initials").textContent = name.split(/\s+/).map(part => part[0] || "").join("").slice(0, 2).toUpperCase();
  $("#copyrightYear").textContent = new Date().getFullYear();
  $("#resumeLink").href = PORTFOLIO.resumeUrl || "#contact";
  $("#socialLinks").innerHTML = PORTFOLIO.socials.map(item => '<a href="' + escapeHtml(item.url) + '" target="_blank" rel="noreferrer">' + escapeHtml(item.label) + ' ↗</a>').join("");
  $("#aboutFacts").innerHTML = PORTFOLIO.facts.map(fact => '<span>' + escapeHtml(fact) + '</span>').join("");
  $("#skillsGrid").innerHTML = PORTFOLIO.skills.map(group => '<article class="skill-card"><span class="skill-category">' + escapeHtml(group.category) + '</span><div class="skill-tags">' + group.items.map(skill => '<span>' + escapeHtml(skill) + '</span>').join("") + '</div></article>').join("");
  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map((project, index) => '<article class="project-card"><a class="project-image" href="' + escapeHtml(project.url) + '" target="_blank" rel="noreferrer"><img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.title) + ' preview" loading="lazy"></a><div class="project-meta"><span>' + String(index + 1).padStart(2, "0") + ' / ' + escapeHtml(project.type) + '</span><a href="' + escapeHtml(project.url) + '" target="_blank" rel="noreferrer" aria-label="Open ' + escapeHtml(project.title) + '">↗</a></div><h3>' + escapeHtml(project.title) + '</h3><p>' + escapeHtml(project.description) + '</p><div class="skill-tags">' + project.tech.map(tech => '<span>' + escapeHtml(tech) + '</span>').join("") + '</div></article>').join("");
  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map((certificate, index) => {
    const title = escapeHtml(certificate.title);
    const details = '<div class="certificate-icon">✦</div><div><span class="skill-category">CERTIFICATE ' + String(index + 1).padStart(2, "0") + '</span><h3>' + title + '</h3><p>' + escapeHtml(certificate.issuer) + (certificate.year ? ' · ' + escapeHtml(certificate.year) : '') + '</p></div><span class="certificate-arrow">↗</span>';
    return certificate.url ? '<a class="certificate-card" href="' + escapeHtml(certificate.url) + '" target="_blank" rel="noreferrer">' + details + '</a>' : '<article class="certificate-card">' + details + '</article>';
  }).join("");
  $("#contactText").textContent = "For internships, collaborations, or just a good conversation.";
  $("#contactDetails").innerHTML = '<span class="skill-category">CONTACT</span><a href="mailto:' + escapeHtml(PORTFOLIO.email) + '">' + escapeHtml(PORTFOLIO.email) + ' ↗</a><span class="muted small">' + escapeHtml(PORTFOLIO.location) + '</span>';
  $("#lcUsername").textContent = PORTFOLIO.leetcodeUsername ? "@" + PORTFOLIO.leetcodeUsername : "@yourusername";
  $("#lcProfileLink").href = PORTFOLIO.leetcodeUsername ? "https://leetcode.com/u/" + encodeURIComponent(PORTFOLIO.leetcodeUsername) + "/" : "https://leetcode.com/";
}
function stat(label, value, sub = "") {
  return '<div class="lc-stat"><span>' + escapeHtml(label) + '</span><strong>' + escapeHtml(value ?? "—") + (sub ? ' <em>' + escapeHtml(sub) + '</em>' : '') + '</strong></div>';
}
async function loadLeetCode() {
  const username = PORTFOLIO.leetcodeUsername.trim();
  if (!username) {
    $("#lcStats").innerHTML = [stat("TOTAL SOLVED", "—", "add username"), stat("EASY SOLVED", "—"), stat("MEDIUM SOLVED", "—"), stat("HARD SOLVED", "—")].join("");
    $("#lcUpdated").textContent = "Set leetcodeUsername in script.js to request live stats.";
    return;
  }
  $("#lcStats").innerHTML = '<div class="lc-loading">Fetching stats…</div>';
  try {
    const response = await fetch("https://leetcode-stats-api.herokuapp.com/" + encodeURIComponent(username));
    const data = await response.json();
    if (!response.ok || data.status === "error" || data.error) throw new Error("Stats unavailable");
    $("#lcStats").innerHTML = [
      stat("TOTAL SOLVED", data.totalSolved, "problems"),
      stat("EASY SOLVED", data.easySolved, data.totalEasy != null ? "/ " + data.totalEasy : ""),
      stat("MEDIUM SOLVED", data.mediumSolved, data.totalMedium != null ? "/ " + data.totalMedium : ""),
      stat("HARD SOLVED", data.hardSolved, data.totalHard != null ? "/ " + data.totalHard : ""),
      stat("ACCEPTANCE", data.acceptanceRate != null ? data.acceptanceRate + "%" : "—"),
      stat("RANK", data.ranking != null ? Number(data.ranking).toLocaleString() : "—")
    ].join("");
    $("#lcUpdated").textContent = "Updated " + new Date().toLocaleTimeString() + " · Third-party service";
  } catch {
    $("#lcStats").innerHTML = '<div class="lc-loading">Stats are temporarily unavailable. Your profile link still works.</div>';
    $("#lcUpdated").textContent = "Could not refresh stats.";
  }
}
$("#refreshLc").addEventListener("click", loadLeetCode);
$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => $("#nav").classList.remove("open")));
renderPortfolio();
loadLeetCode();