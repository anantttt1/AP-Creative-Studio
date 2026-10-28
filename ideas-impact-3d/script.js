// Ideas Into Impact 3D — edit this configuration to personalise the template.
const PORTFOLIO = {
  name: "Your Name",
  role: "Your Role · Your Speciality",
  location: "Your City, Country",
  focus: "Currently exploring",
  availability: "Current status",
  email: "you@example.com",
  resumeUrl: "",
  githubUsername: "",
  leetcodeUsername: "",
  hackerrankUsername: "",
  linkedinUrl: "",
  manifesto: "CURIOSITY TURNS IDEAS INTO THINGS PEOPLE CAN USE.",
  aboutQuote: "Add a short personal statement, guiding principle, or line that captures your approach to work.",
  about: "Write two or three sentences about your background, the skills you're developing, and the work you enjoy.",
  aboutExtra: "Share how you approach challenges, collaborate with others, or turn feedback into better work. Keep it authentic and specific.",
  facts: ["Your focus area one", "Your focus area two", "Your focus area three", "Your focus area four"],
  educationIntro: "Write a short note about your studies, career direction, or professional journey.",
  education: [
    { date: "YYYY — YYYY", title: "DEGREE / QUALIFICATION", place: "Institution Name · Location", description: "Optional details, major, achievements, or relevant coursework." },
    { date: "MONTH YYYY — MONTH YYYY", title: "ROLE / INTERNSHIP / EXPERIENCE", place: "Organisation Name · Type", description: "Describe your responsibilities or the impact of your contribution." },
    { date: "MONTH YYYY", title: "ADDITIONAL MILESTONE", place: "Organisation or programme name", description: "Include another relevant experience, award, or academic milestone." }
  ],
  socials: [
    { label: "GH", title: "GitHub", url: "https://github.com/" },
    { label: "in", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "LC", title: "LeetCode", url: "https://leetcode.com/" },
    { label: "@", title: "Email", url: "mailto:you@example.com" }
  ],
  skills: [
    { icon: "⌘", title: "PROGRAMMING", description: "Languages and fundamentals.", tags: ["SKILL ONE", "SKILL TWO", "SKILL THREE"] },
    { icon: "⌁", title: "CORE CONCEPTS", description: "Foundations and problem solving.", tags: ["CONCEPT ONE", "CONCEPT TWO", "CONCEPT THREE"] },
    { icon: "▧", title: "WEB DEVELOPMENT", description: "Tools for building websites and apps.", tags: ["TECHNOLOGY ONE", "TECHNOLOGY TWO", "TECHNOLOGY THREE"] },
    { icon: "✳", title: "AI / DATA / SPECIALITY", description: "Your specialist or emerging skill area.", tags: ["TOOL ONE", "TOOL TWO", "TOOL THREE"] },
    { icon: "◆", title: "FRAMEWORKS & LIBRARIES", description: "Libraries and frameworks you've used.", tags: ["LIBRARY ONE", "LIBRARY TWO", "LIBRARY THREE"] },
    { icon: "⌘", title: "DEVELOPER TOOLS", description: "Your day-to-day workflow.", tags: ["TOOL ONE", "TOOL TWO", "TOOL THREE"] }
  ],
  projects: [
    { title: "PROJECT TITLE ONE", category: "web", date: "Month YYYY", description: "Describe the problem you solved, what you built, and why it matters in two or three clear sentences.", tech: ["TECH ONE", "TECH TWO", "TECH THREE"], image: "assets/images/project-1.svg", demo: "", source: "" },
    { title: "PROJECT TITLE TWO", category: "ai", date: "Month YYYY", description: "Explain your approach, the key feature, and what you learned while developing this project.", tech: ["TECH ONE", "TECH TWO", "TECH THREE"], image: "assets/images/project-2.svg", demo: "", source: "" },
    { title: "PROJECT TITLE THREE", category: "web", date: "Month YYYY", description: "Highlight a different project, hackathon prototype, experiment, or useful tool you created.", tech: ["TECH ONE", "TECH TWO"], image: "assets/images/project-3.svg", demo: "", source: "" },
    { title: "PROJECT TITLE FOUR", category: "other", date: "Month YYYY", description: "Add another example that demonstrates your range, contribution, or growth as a developer.", tech: ["TECH ONE", "TECH TWO", "TECH THREE"], image: "assets/images/project-4.svg", demo: "", source: "" }
  ],
  certificates: [
    { title: "CERTIFICATE / CREDENTIAL TITLE ONE", issuer: "Issuing Organisation · One-line context or skill covered.", date: "Month DD, YYYY", url: "" },
    { title: "CERTIFICATE / CREDENTIAL TITLE TWO", issuer: "Issuing Organisation · One-line context or skill covered.", date: "Month DD, YYYY", url: "" },
    { title: "CERTIFICATE / CREDENTIAL TITLE THREE", issuer: "Issuing Organisation · One-line context or skill covered.", date: "Month DD, YYYY", url: "" },
    { title: "CERTIFICATE / CREDENTIAL TITLE FOUR", issuer: "Issuing Organisation · One-line context or skill covered.", date: "Month DD, YYYY", url: "" }
  ]
};

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const isHttpURL = value => /^https?:\/\//i.test(String(value || ""));
const safeProfileURL = (value, fallback) => isHttpURL(value) ? value : fallback;

function renderPortfolio() {
  const name = PORTFOLIO.name || "Your Name";
  $("#brandName").textContent = name;
  $("#footerName").textContent = name.toUpperCase();
  $("#signatureName").textContent = name.toUpperCase();
  $("#heroName").textContent = name.toUpperCase();
  $("#heroRole").textContent = PORTFOLIO.role;
  $("#heroBio").textContent = PORTFOLIO.about;
  $("#heroLocation").textContent = PORTFOLIO.location;
  $("#heroFocus").textContent = PORTFOLIO.focus;
  $("#heroStatus").textContent = PORTFOLIO.availability;
  $("#manifesto").textContent = PORTFOLIO.manifesto;
  $("#aboutQuote").textContent = PORTFOLIO.aboutQuote;
  $("#aboutText").textContent = PORTFOLIO.about;
  $("#aboutExtra").textContent = PORTFOLIO.aboutExtra;
  $("#educationIntro").textContent = PORTFOLIO.educationIntro;
  $("#copyrightYear").textContent = new Date().getFullYear();
  $("#resumeLink").href = isHttpURL(PORTFOLIO.resumeUrl) ? PORTFOLIO.resumeUrl : "#contact";
  $("#heroSocials").innerHTML = PORTFOLIO.socials.map(item => {
    const url = String(item.url || "");
    const href = url.startsWith("mailto:") ? url : safeProfileURL(url, "#contact");
    return '<a href="' + escapeHTML(href) + '" title="' + escapeHTML(item.title || item.label) + '">' + escapeHTML(item.label) + '</a>';
  }).join("");
  $("#aboutFacts").innerHTML = PORTFOLIO.facts.map((fact, index) =>
    '<div class="fact-item"><span>' + String(index + 1).padStart(2, "0") + '</span><p>' + escapeHTML(fact) + '</p></div>'
  ).join("");
  $("#skillsGrid").innerHTML = PORTFOLIO.skills.map(group =>
    '<article class="skill-card"><span class="skill-icon" aria-hidden="true">' + escapeHTML(group.icon) + '</span><h3>' + escapeHTML(group.title) + '</h3><p>' + escapeHTML(group.description) + '</p><div class="skill-tags">' +
    group.tags.map(tag => '<span>' + escapeHTML(tag) + '</span>').join("") + '</div></article>'
  ).join("");

  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map((project, index) => {
    const image = '<img src="' + escapeHTML(project.image) + '" alt="' + escapeHTML(project.title) + ' preview" loading="lazy" decoding="async">';
    const preview = '<div class="project-preview">' + image + '<span class="add-preview-label">Add preview image</span></div>';
    const links = [
      isHttpURL(project.demo) ? '<a href="' + escapeHTML(project.demo) + '" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>' : "",
      isHttpURL(project.source) ? '<a href="' + escapeHTML(project.source) + '" target="_blank" rel="noopener noreferrer">Source Code ↗</a>' : ""
    ].filter(Boolean).join("");
    return '<article class="project-card" data-category="' + escapeHTML(project.category) + '">' + preview +
      '<div class="project-body"><div class="project-meta"><span>PROJECT / ' + String(index + 1).padStart(2, "0") + '</span><span>' + escapeHTML(project.date || "Month YYYY") + '</span></div>' +
      '<h3>' + escapeHTML(project.title) + '</h3><p>' + escapeHTML(project.description) + '</p><div class="skill-tags">' +
      project.tech.map(tag => '<span>' + escapeHTML(tag) + '</span>').join("") + '</div>' +
      (links ? '<div class="project-links">' + links + '</div>' : '<div class="project-links"><span>Live Demo ↗</span><span>Source Code ↗</span></div>') +
      '</div></article>';
  }).join("");

  $("#timeline").innerHTML = PORTFOLIO.education.map(item =>
    '<article class="timeline-item"><span>' + escapeHTML(item.date) + '</span><h3>' + escapeHTML(item.title) + '</h3><p>' +
    escapeHTML(item.place) + '</p><p>' + escapeHTML(item.description) + '</p></article>'
  ).join("");
  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map((item, index) => {
    const content = '<span class="certificate-icon" aria-hidden="true">' + ["✧", "◇", "⌘", "✳"][index % 4] + '</span>' +
      '<div class="certificate-copy"><h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.issuer) + '</p>' +
      '<small>' + escapeHTML(item.date || "") + (isHttpURL(item.url) ? ' · <a href="' + escapeHTML(item.url) + '" target="_blank" rel="noopener noreferrer">View certificate ↗</a>' : '') +
      '</small></div>';
    return '<article class="certificate-card">' + content + '</article>';
  }).join("");

  $("#contactDetails").innerHTML = '<span>✉ &nbsp; <a href="mailto:' + escapeHTML(PORTFOLIO.email) + '">' + escapeHTML(PORTFOLIO.email) +
    '</a></span><span>⌖ &nbsp; ' + escapeHTML(PORTFOLIO.location) + '</span>' +
    (isHttpURL(PORTFOLIO.linkedinUrl) ? '<span>↗ &nbsp; <a href="' + escapeHTML(PORTFOLIO.linkedinUrl) + '" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></span>' : '');

  $("#githubLink").href = PORTFOLIO.githubUsername ? "https://github.com/" + encodeURIComponent(PORTFOLIO.githubUsername) : "https://github.com/";
  $("#githubHandle").textContent = PORTFOLIO.githubUsername ? "@" + PORTFOLIO.githubUsername : "Add your username";
  $("#leetcodeLink").href = PORTFOLIO.leetcodeUsername ? "https://leetcode.com/u/" + encodeURIComponent(PORTFOLIO.leetcodeUsername) + "/" : "https://leetcode.com/";
  $("#leetcodeHandle").textContent = PORTFOLIO.leetcodeUsername ? "@" + PORTFOLIO.leetcodeUsername : "Add your username";
  $("#hackerrankLink").href = PORTFOLIO.hackerrankUsername ? "https://www.hackerrank.com/" + encodeURIComponent(PORTFOLIO.hackerrankUsername) : "https://www.hackerrank.com/";
  $("#hackerrankHandle").textContent = PORTFOLIO.hackerrankUsername ? "@" + PORTFOLIO.hackerrankUsername : "Add your profile";
  $("#linkedinLink").href = safeProfileURL(PORTFOLIO.linkedinUrl, "https://www.linkedin.com/");
  $("#linkedinHandle").textContent = PORTFOLIO.linkedinUrl ? PORTFOLIO.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "") : "Add your profile";
}

function renderStat(label, value) {
  return '<div class="lc-stat"><span>' + escapeHTML(label) + '</span><strong>' + escapeHTML(value ?? "—") + '</strong></div>';
}
function utcDateKey(date) {
  return date.toISOString().slice(0, 10);
}
function utcMonday(date) {
  const result = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  result.setUTCDate(result.getUTCDate() - ((result.getUTCDay() + 6) % 7));
  return result;
}
function renderMonthLabels(start, dayCount) {
  const months = [];
  let previousMonth = -1;
  for (let index = 0; index < dayCount; index++) {
    const day = new Date(start);
    day.setUTCDate(start.getUTCDate() + index);
    if (day.getUTCMonth() !== previousMonth) {
      const week = Math.floor(index / 7) + 1;
      if (!months.length || months[months.length - 1].week !== week) {
        months.push({ week, label: day.toLocaleDateString("en", { month: "short", timeZone: "UTC" }) });
      }
      previousMonth = day.getUTCMonth();
    }
  }
  $("#heatmapMonths").innerHTML = months.map(month =>
    '<span style="grid-column:' + month.week + '">' + escapeHTML(month.label) + '</span>'
  ).join("");
}
function renderEmptyHeatmap(message) {
  const now = new Date();
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const first = new Date(end);
  first.setUTCDate(first.getUTCDate() - 363);
  const start = utcMonday(first);
  const grid = $("#heatmapGrid");
  grid.innerHTML = "";
  let count = 0;
  for (const date = new Date(start); date <= end && count < 371; date.setUTCDate(date.getUTCDate() + 1)) {
    const cellDate = new Date(date);
    const cell = document.createElement("span");
    cell.className = "heat-cell";
    cell.title = cellDate.toLocaleDateString("en", { timeZone: "UTC" }) + ": no activity data";
    cell.setAttribute("aria-label", cell.title);
    grid.appendChild(cell);
    count++;
  }
  renderMonthLabels(start, count);
  $("#heatmapSummary").textContent = "Daily activity over the last year";
  $("#heatmapStatus").textContent = message;
}
function readCalendar(data) {
  let calendar = data?.submissionCalendar ?? data?.calendar ?? data?.submission_calendar ??
    data?.data?.submissionCalendar ?? data?.data?.calendar ?? data?.data?.submission_calendar;
  if (typeof calendar === "string") {
    try { calendar = JSON.parse(calendar); } catch { calendar = null; }
  }
  if (Array.isArray(calendar)) {
    return Object.fromEntries(calendar.map(item => [String(item.date ?? item.timestamp ?? ""), Number(item.count ?? item.submissions ?? 0)]));
  }
  return calendar && typeof calendar === "object" ? calendar : null;
}
function renderHeatmap(calendar) {
  const activity = new Map();
  for (const [rawKey, rawValue] of Object.entries(calendar || {})) {
    let timestamp = Number(rawKey);
    if (!Number.isFinite(timestamp)) timestamp = Date.parse(rawKey) / 1000;
    if (!Number.isFinite(timestamp)) continue;
    if (timestamp > 1e12) timestamp /= 1000;
    const value = rawValue && typeof rawValue === "object" ? (rawValue.count ?? rawValue.submissions ?? 0) : rawValue;
    const submissions = Number(value);
    if (!Number.isFinite(submissions) || submissions < 0) continue;
    const date = new Date(timestamp * 1000);
    if (Number.isNaN(date.getTime())) continue;
    activity.set(utcDateKey(date), submissions);
  }
  if (!activity.size) {
    renderEmptyHeatmap("The activity service returned no usable calendar data.");
    return;
  }

  const today = new Date();
  const end = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const first = new Date(end);
  first.setUTCDate(first.getUTCDate() - 363);
  const start = utcMonday(first);
  const grid = $("#heatmapGrid");
  grid.innerHTML = "";
  let dayCount = 0;
  let total = 0;
  let activeDays = 0;
  let peak = 0;
  for (let date = new Date(start); date <= end && dayCount < 371; date.setUTCDate(date.getUTCDate() + 1)) {
    const day = new Date(date);
    const submissions = activity.get(utcDateKey(day)) || 0;
    total += submissions;
    if (submissions > 0) activeDays++;
    peak = Math.max(peak, submissions);
    const level = submissions === 0 ? 0 : submissions <= 2 ? 1 : submissions <= 5 ? 2 : submissions <= 10 ? 3 : 4;
    const cell = document.createElement("span");
    cell.className = "heat-cell";
    cell.dataset.level = String(level);
    cell.title = day.toLocaleDateString("en", { timeZone: "UTC" }) + ": " + submissions + " submission" + (submissions === 1 ? "" : "s");
    cell.setAttribute("aria-label", cell.title);
    grid.appendChild(cell);
    dayCount++;
  }
  renderMonthLabels(start, dayCount);
  $("#heatmapSummary").textContent = total.toLocaleString() + " submissions · " + activeDays + " active days · last 12 months";
  $("#heatmapStatus").textContent = "Activity loaded · peak day " + peak + " submissions";
}
async function fetchJSON(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Request failed: " + response.status);
    const data = await response.json();
    if (!data || data.status === "error" || data.error) throw new Error(data.message || "Service returned an error");
    return data;
  } finally {
    clearTimeout(timer);
  }
}
async function loadLeetCode() {
  const username = String(PORTFOLIO.leetcodeUsername || "").trim();
  if (!username) {
    $("#lcStats").innerHTML = [
      renderStat("TOTAL SOLVED", "—"), renderStat("EASY", "—"),
      renderStat("MEDIUM", "—"), renderStat("HARD", "—")
    ].join("");
    $("#lcStatus").textContent = "Manual numbers";
    $("#statsNote").textContent = "Set leetcodeUsername in script.js to fetch verified public stats.";
    renderEmptyHeatmap("Configure a LeetCode username to load activity.");
    return;
  }

  $("#lcStatus").textContent = "Fetching live data…";
  $("#statsNote").textContent = "Requesting public LeetCode statistics.";
  $("#lcStats").innerHTML = '<p class="stats-loading">Loading LeetCode statistics…</p>';
  $("#heatmapStatus").textContent = "Loading submission calendar…";

  const encodedUser = encodeURIComponent(username);
  const statsRequests = [
    fetchJSON("https://leetcode-stats.tashif.codes/" + encodedUser),
    fetchJSON("https://leetcode-stats-api.herokuapp.com/" + encodedUser)
  ];
  const calendarRequest = fetchJSON("https://alfa-leetcode-api.onrender.com/" + encodedUser + "/calendar").catch(() => null);

  const [statsResults, calendarResult] = await Promise.all([
    Promise.allSettled(statsRequests),
    calendarRequest
  ]);
  const successfulStats = statsResults.find(result =>
    result.status === "fulfilled" &&
    (result.value.totalSolved != null || result.value.data?.totalSolved != null)
  );
  const stats = successfulStats
    ? (successfulStats.value.data && successfulStats.value.data.totalSolved != null
      ? { ...successfulStats.value, ...successfulStats.value.data }
      : successfulStats.value)
    : null;

  if (stats) {
    $("#lcStats").innerHTML = [
      renderStat("TOTAL SOLVED", stats.totalSolved),
      renderStat("EASY", stats.easySolved),
      renderStat("MEDIUM", stats.mediumSolved),
      renderStat("HARD", stats.hardSolved)
    ].join("");
    $("#lcStatus").textContent = "Live · public API";
    $("#statsNote").textContent = stats.ranking ? "Global rank: " + Number(stats.ranking).toLocaleString() : "Problem totals received from a public stats endpoint.";
  } else {
    $("#lcStats").innerHTML = [
      renderStat("TOTAL SOLVED", "—"), renderStat("EASY", "—"),
      renderStat("MEDIUM", "—"), renderStat("HARD", "—")
    ].join("");
    $("#lcStatus").textContent = "Unavailable";
    $("#statsNote").textContent = "The stats service is unavailable or rate-limited. Try again later.";
  }

  const statsCalendar = stats ? readCalendar(stats) : null;
  const serviceCalendar = calendarResult ? readCalendar(calendarResult) : null;
  if (statsCalendar && Object.keys(statsCalendar).length) renderHeatmap(statsCalendar);
  else if (serviceCalendar && Object.keys(serviceCalendar).length) renderHeatmap(serviceCalendar);
  else renderEmptyHeatmap("Calendar unavailable or rate-limited. Stats may still load.");
}
$("#refreshLc").addEventListener("click", () => {
  const button = $("#refreshLc");
  button.disabled = true;
  button.textContent = "Refreshing…";
  loadLeetCode().catch(() => {
    $("#lcStatus").textContent = "Unavailable";
    renderEmptyHeatmap("Could not load activity. Check the username or try again later.");
  }).finally(() => {
    button.disabled = false;
    button.textContent = "Refresh stats ↻";
  });
});

$("#projectFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(filter => {
    const active = filter === button;
    filter.classList.toggle("active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  let visible = 0;
  document.querySelectorAll(".project-card").forEach(card => {
    const show = button.dataset.filter === "all" || card.dataset.category === button.dataset.filter;
    card.hidden = !show;
    if (show) visible++;
  });
  $("#projectCount").textContent = "Showing " + visible + " project" + (visible === 1 ? "" : "s") + " · " +
    (button.dataset.filter === "all" ? "All projects" : button.textContent.trim());
});

$("#menuToggle").addEventListener("click", () => {
  const menu = $("#nav");
  const isOpen = menu.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => {
  $("#nav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
  $("#menuToggle").setAttribute("aria-label", "Open navigation menu");
  document.querySelectorAll("#nav a").forEach(navLink => navLink.classList.toggle("active", navLink === link));
}));

const themeToggle = $("#themeToggle");
const savedTheme = (() => {
  try { return localStorage.getItem("ideas-impact-theme"); } catch { return null; }
})();
if (savedTheme === "light") document.documentElement.dataset.theme = "light";
themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "☾" : "☼";
themeToggle.addEventListener("click", () => {
  const light = document.documentElement.dataset.theme !== "light";
  if (light) document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;
  themeToggle.textContent = light ? "☾" : "☼";
  try { localStorage.setItem("ideas-impact-theme", light ? "light" : "dark"); } catch (_) {}
});

$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(form.get("subject"));
  const body = encodeURIComponent("Name: " + form.get("name") + "\nEmail: " + form.get("email") + "\n\n" + form.get("message"));
  window.location.href = "mailto:" + PORTFOLIO.email + "?subject=" + subject + "&body=" + body;
});

renderPortfolio();
$("#projectCount").textContent = "Showing " + PORTFOLIO.projects.length + " projects · All projects";
renderEmptyHeatmap("Configure a LeetCode username to load activity.");
loadLeetCode().catch(() => {
  $("#lcStatus").textContent = "Unavailable";
  renderEmptyHeatmap("Could not load the activity calendar. Try refreshing later.");
});
