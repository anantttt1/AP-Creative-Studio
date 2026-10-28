// PERSONALIZE THIS CONFIGURATION. Use verified links and credentials only.
const PORTFOLIO = {
  name: "Your Name",
  role: "Your Role · Your Speciality",
  location: "Your City, Country",
  focus: "Web Development · DSA · AI",
  availability: "Open to opportunities",
  email: "you@example.com",
  resumeUrl: "",
  leetcodeUsername: "",
  githubUsername: "",
  linkedinUrl: "https://www.linkedin.com/",
  about: "I enjoy building useful digital experiences, solving problems, and turning curious ideas into projects that help people.",
  aboutExtra: "Add two or three sentences about your background, skills you're developing, and the work you enjoy. Keep it authentic and specific.",
  manifesto: "CURIOSITY TURNS IDEAS INTO THINGS PEOPLE CAN USE.",
  aboutQuote: "A personal principle that guides how I approach challenges, collaborate with others, and turn feedback into better work.",
  facts: ["Problem solving", "Web development", "AI & data", "Continuous learning"],
  educationIntro: "Write a short note about your studies, career direction, or professional journey.",
  education: [
    { date: "YYYY — YYYY", title: "Degree / Qualification", place: "Institution Name · Location", description: "Add your major, achievements, or relevant coursework." },
    { date: "MONTH YYYY — MONTH YYYY", title: "Role / Internship / Experience", place: "Organisation Name · Type", description: "Describe your responsibilities or the impact of your contribution." },
    { date: "MONTH YYYY", title: "Additional Milestone", place: "Organisation or programme name", description: "Include another relevant experience, award, or academic milestone." }
  ],
  socials: [
    { label: "GH", url: "https://github.com/", title: "GitHub" },
    { label: "in", url: "https://www.linkedin.com/", title: "LinkedIn" },
    { label: "LC", url: "https://leetcode.com/", title: "LeetCode" },
    { label: "@", url: "mailto:you@example.com", title: "Email" }
  ],
  skills: [
    { icon: "⌘", category: "PROGRAMMING", description: "Languages and fundamentals.", items: ["Java", "Python", "C"] },
    { icon: "⌁", category: "CORE CONCEPTS", description: "Foundations and problem solving.", items: ["DSA", "OOP", "DBMS"] },
    { icon: "▧", category: "WEB DEVELOPMENT", description: "Tools for building websites and apps.", items: ["HTML", "CSS", "JavaScript"] },
    { icon: "✳", category: "AI / DATA / SPECIALITY", description: "Your specialist or emerging skill area.", items: ["Machine Learning", "Pandas", "NumPy"] },
    { icon: "◆", category: "FRAMEWORKS & LIBRARIES", description: "Libraries and frameworks you've used.", items: ["React", "Tailwind", "OpenCV"] },
    { icon: "⌘", category: "DEVELOPER TOOLS", description: "Your day-to-day workflow.", items: ["Git", "GitHub", "VS Code"] }
  ],
  projects: [
    { title: "Project Title One", type: "WEB", category: "web", description: "Describe the problem you solved, what you built, and why it matters in two or three clear sentences.", tech: ["JavaScript", "CSS"], image: "assets/images/project-1.svg", demo: "", source: "" },
    { title: "Project Title Two", type: "AI / DATA", category: "ai", description: "Explain your approach, the key feature, and what you learned while developing this project.", tech: ["Python", "Machine Learning"], image: "assets/images/project-2.svg", demo: "", source: "" },
    { title: "Project Title Three", type: "WEB", category: "web", description: "Highlight a different project, hackathon prototype, experiment, or useful tool you created.", tech: ["React", "API"], image: "assets/images/project-3.svg", demo: "", source: "" },
    { title: "Project Title Four", type: "OTHER", category: "other", description: "Add another example that demonstrates your range, contribution, or growth as a developer.", tech: ["Java", "DSA"], image: "assets/images/project-4.svg", demo: "", source: "" }
  ],
  certificates: [
    { title: "Certificate / Credential Title One", issuer: "Issuing Organisation", date: "Month DD, YYYY", url: "" },
    { title: "Certificate / Credential Title Two", issuer: "Issuing Organisation", date: "Month DD, YYYY", url: "" },
    { title: "Certificate / Credential Title Three", issuer: "Issuing Organisation", date: "Month DD, YYYY", url: "" },
    { title: "Certificate / Credential Title Four", issuer: "Issuing Organisation", date: "Month DD, YYYY", url: "" }
  ]
};
const $ = selector => document.querySelector(selector);
const safe = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const validHttpUrl = value => /^https?:\/\//i.test(String(value || ""));
const externalUrl = (value, fallback = "#") => validHttpUrl(value) ? value : fallback;

function renderPortfolio() {
  const name = PORTFOLIO.name || "Your Name";
  $("#brandName").textContent = name.toUpperCase();
  $("#footerName").textContent = name.toUpperCase();
  $("#signatureName").textContent = name.toUpperCase();
  $("#heroNameSmall").textContent = name.toUpperCase();
  $("#heroRole").textContent = PORTFOLIO.role || "Your Role · Your Speciality";
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
  $("#resumeLink").href = PORTFOLIO.resumeUrl && validHttpUrl(PORTFOLIO.resumeUrl) ? PORTFOLIO.resumeUrl : "#contact";
  $("#socialLinks").innerHTML = PORTFOLIO.socials.map(item => {
    const url = String(item.url || "");
    const href = url.startsWith("mailto:") ? url : externalUrl(url, "#contact");
    return '<a href="' + safe(href) + '" title="' + safe(item.title || item.label) + '" rel="noreferrer">' + safe(item.label) + '</a>';
  }).join("");
  $("#aboutFacts").innerHTML = PORTFOLIO.facts.map((fact, index) => '<span><b>' + String(index + 1).padStart(2, "0") + '</b> ' + safe(fact) + '</span>').join("");
  $("#skillsGrid").innerHTML = PORTFOLIO.skills.map(group =>
    '<article class="skill-card"><span class="skill-icon" aria-hidden="true">' + safe(group.icon) + '</span><h3>' + safe(group.category) + '</h3><p>' + safe(group.description) + '</p><div class="skill-tags">' +
    group.items.map(item => '<span>' + safe(item) + '</span>').join("") + '</div></article>'
  ).join("");

  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map((project, index) => {
    const projectUrl = validHttpUrl(project.demo) ? project.demo : (validHttpUrl(project.source) ? project.source : "");
    const image = '<img src="' + safe(project.image) + '" alt="' + safe(project.title) + ' preview" loading="lazy" decoding="async">';
    const preview = projectUrl
      ? '<a class="project-image" href="' + safe(projectUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="Open ' + safe(project.title) + '">' + image + '</a>'
      : '<div class="project-image" aria-label="' + safe(project.title) + ' preview">' + image + '</div>';
    const links = [
      validHttpUrl(project.demo) ? '<a href="' + safe(project.demo) + '" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>' : "",
      validHttpUrl(project.source) ? '<a href="' + safe(project.source) + '" target="_blank" rel="noopener noreferrer">Source Code ↗</a>' : ""
    ].filter(Boolean).join("");
    const dateLabel = project.date ? safe(project.date) : "FEATURED PROJECT";
    return '<article class="project-card" data-category="' + safe(project.category) + '">' + preview +
      '<div class="project-body"><div class="project-meta"><span>PROJECT / ' + String(index + 1).padStart(2, "0") + ' · ' + safe(project.type) + '</span><span>' + dateLabel + '</span></div>' +
      '<h3>' + safe(project.title) + '</h3><p>' + safe(project.description) + '</p><div class="skill-tags">' +
      project.tech.map(tech => '<span>' + safe(tech) + '</span>').join("") + '</div>' +
      (links ? '<div class="project-links">' + links + '</div>' : '') + '</div></article>';
  }).join("");

  $("#timeline").innerHTML = PORTFOLIO.education.map(item =>
    '<article class="timeline-item"><span>' + safe(item.date) + '</span><h3>' + safe(item.title) + '</h3><p>' +
    safe(item.place) + '</p><p>' + safe(item.description) + '</p></article>'
  ).join("");
  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map((item, index) =>
    '<article class="certificate-card"><span class="certificate-icon" aria-hidden="true">' + ["✧", "◇", "⌘", "✳"][index % 4] +
    '</span><div class="certificate-copy"><span>CERTIFICATE / CREDENTIAL ' + String(index + 1).padStart(2, "0") +
    '</span><h3>' + safe(item.title) + '</h3><p>' + safe(item.issuer) + (item.date ? ' · ' + safe(item.date) : '') +
    (validHttpUrl(item.url) ? ' · <a href="' + safe(item.url) + '" target="_blank" rel="noopener noreferrer">View certificate ↗</a>' : '') +
    '</p></div></article>'
  ).join("");

  $("#contactDetails").innerHTML = '<span>✉ &nbsp; <a href="mailto:' + safe(PORTFOLIO.email) + '">' + safe(PORTFOLIO.email) +
    '</a></span><span>⌖ &nbsp; ' + safe(PORTFOLIO.location) + '</span><span>↗ &nbsp; <a href="' +
    safe(externalUrl(PORTFOLIO.linkedinUrl, "https://www.linkedin.com/")) + '" target="_blank" rel="noopener noreferrer">LinkedIn profile</a></span>';

  $("#githubLink").href = PORTFOLIO.githubUsername ? "https://github.com/" + encodeURIComponent(PORTFOLIO.githubUsername) : "https://github.com/";
  $("#githubHandle").textContent = PORTFOLIO.githubUsername ? "@" + PORTFOLIO.githubUsername : "Add your username in script.js";
  $("#linkedinLink").href = externalUrl(PORTFOLIO.linkedinUrl, "https://www.linkedin.com/");
  $("#linkedinHandle").textContent = PORTFOLIO.linkedinUrl && !PORTFOLIO.linkedinUrl.endsWith("linkedin.com/")
    ? PORTFOLIO.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "") : "Add your profile URL";
  $("#lcUsername").textContent = PORTFOLIO.leetcodeUsername ? "@" + PORTFOLIO.leetcodeUsername : "Add your username in script.js";
  $("#lcProfileLink").href = PORTFOLIO.leetcodeUsername
    ? "https://leetcode.com/u/" + encodeURIComponent(PORTFOLIO.leetcodeUsername) + "/" : "https://leetcode.com/";
}

function stat(label, value, sub = "") {
  return '<div class="lc-stat"><span>' + safe(label) + '</span><strong>' + safe(value ?? "—") +
    (sub ? ' <em>' + safe(sub) + '</em>' : '') + '</strong></div>';
}
function dayStartMonday(date) {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  day.setDate(day.getDate() - ((day.getDay() + 6) % 7));
  return day;
}
function dateKey(date) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
}
function renderMonthLabels(start, cellCount) {
  const months = [];
  let previousMonth = -1;
  let previousWeek = -1;
  for (let i = 0; i < cellCount; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    const week = Math.floor(i / 7) + 1;
    if (day.getMonth() !== previousMonth) {
      // A month can start in the same heatmap column as the previous month.
      // Render one label per column so the month row never wraps vertically.
      if (week !== previousWeek) {
        months.push({ week, label: day.toLocaleDateString("en", { month: "short" }) });
        previousWeek = week;
      }
      previousMonth = day.getMonth();
    }
  }
  $("#heatmapMonths").innerHTML = months.map(item =>
    '<span style="grid-column:' + item.week + '">' + safe(item.label) + '</span>'
  ).join("");
}
function renderEmptyHeatmap(message) {
  const grid = $("#heatmapGrid");
  const today = new Date();
  const first = new Date(today);
  first.setDate(first.getDate() - 363);
  const start = dayStartMonday(first);
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  grid.innerHTML = "";
  let count = 0;
  for (let date = new Date(start); date <= end && count < 371; date.setDate(date.getDate() + 1)) {
    const cellDate = new Date(date);
    const cell = document.createElement("span");
    cell.className = "heat-cell";
    cell.title = cellDate.toLocaleDateString() + ": no activity data";
    cell.setAttribute("aria-label", cell.title);
    grid.appendChild(cell);
    count++;
  }
  renderMonthLabels(start, count);
  $("#heatmapSummary").textContent = "Daily activity over the last year";
  $("#heatmapStatus").textContent = message;
}
function parseCalendar(data) {
  let raw = data?.submissionCalendar ?? data?.calendar ?? data?.submission_calendar ??
    data?.data?.submissionCalendar ?? data?.data?.calendar;
  if (typeof raw === "string") {
    try { raw = JSON.parse(raw); } catch { raw = null; }
  }
  if (Array.isArray(raw)) {
    return Object.fromEntries(raw.map(item => [String(item.date ?? item.timestamp ?? ""), Number(item.count ?? item.submissions ?? 0)]));
  }
  return raw && typeof raw === "object" ? raw : null;
}
function renderHeatmap(calendar) {
  const normalized = [];
  for (const [key, rawValue] of Object.entries(calendar || {})) {
    let timestamp = Number(key);
    if (!Number.isFinite(timestamp)) timestamp = Date.parse(key) / 1000;
    if (!Number.isFinite(timestamp)) continue;
    if (timestamp > 1e12) timestamp /= 1000;
    const value = rawValue && typeof rawValue === "object" ? (rawValue.count ?? rawValue.submissions ?? 0) : rawValue;
    const count = Number(value);
    const date = new Date(timestamp * 1000);
    if (Number.isNaN(date.getTime()) || !Number.isFinite(count) || count < 0) continue;
    normalized.push({ key: dateKey(date), count });
  }
  if (!normalized.length) {
    renderEmptyHeatmap("The activity API returned no usable calendar data.");
    return;
  }
  const byDay = new Map(normalized.map(item => [item.key, item.count]));
  const today = new Date();
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const first = new Date(end);
  first.setDate(first.getDate() - 363);
  const start = dayStartMonday(first);
  const grid = $("#heatmapGrid");
  grid.innerHTML = "";
  let total = 0;
  let active = 0;
  let max = 0;
  let visibleDays = 0;
  for (let date = new Date(start); date <= end && visibleDays < 371; date.setDate(date.getDate() + 1)) {
    const day = new Date(date);
    const count = byDay.get(dateKey(day)) ?? 0;
    total += count;
    if (count > 0) active++;
    max = Math.max(max, count);
    const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4;
    const cell = document.createElement("span");
    cell.className = "heat-cell";
    cell.dataset.level = String(level);
    cell.title = day.toLocaleDateString() + ": " + count + " submission" + (count === 1 ? "" : "s");
    cell.setAttribute("aria-label", cell.title);
    grid.appendChild(cell);
    visibleDays++;
  }
  renderMonthLabels(start, visibleDays);
  $("#heatmapSummary").textContent = total.toLocaleString() + " submissions · " + active + " active days · last 12 months";
  $("#heatmapStatus").textContent = "Calendar loaded · peak day " + max + " submissions";
}
async function fetchJson(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { "Accept": "application/json" } });
    if (!response.ok) throw new Error("Request failed (" + response.status + ")");
    const data = await response.json();
    if (!data || data.status === "error" || data.error) throw new Error(data?.message || "API returned an error");
    return data;
  } finally {
    clearTimeout(timeout);
  }
}
async function fetchLeetCodeStats(username) {
  const providers = [
    "https://leetcode-stats-api.herokuapp.com/" + encodeURIComponent(username),
    "https://leetcode-stats.tashif.codes/" + encodeURIComponent(username)
  ];
  let lastError;
  for (const url of providers) {
    try {
      const data = await fetchJson(url);
      const stats = data.data && typeof data.data === "object" ? data.data : data;
      if (stats.totalSolved != null || stats.easySolved != null) return stats;
      throw new Error("API response did not include solved counts");
    } catch (error) { lastError = error; }
  }
  throw lastError || new Error("No LeetCode stats provider responded");
}
async function loadLeetCode() {
  const username = String(PORTFOLIO.leetcodeUsername || "").trim();
  if (!username) {
    $("#lcStats").innerHTML = [stat("TOTAL SOLVED", "—"), stat("EASY SOLVED", "—"), stat("MEDIUM SOLVED", "—"), stat("HARD SOLVED", "—")].join("");
    $("#lcUpdated").textContent = "Set username in script.js";
    renderEmptyHeatmap("Add your LeetCode username to load activity.");
    return;
  }
  $("#lcStats").innerHTML = '<div class="lc-loading">Loading LeetCode statistics…</div>';
  $("#lcUpdated").textContent = "Connecting to public API…";
  $("#heatmapStatus").textContent = "Loading activity calendar…";
  const user = encodeURIComponent(username);
  const statsPromise = fetchLeetCodeStats(username);
  const calendarPromise = fetchJson("https://alfa-leetcode-api.onrender.com/" + user + "/calendar").catch(() => null);
  const [statsResult, calendarResult] = await Promise.allSettled([statsPromise, calendarPromise]);

  let stats = null;
  if (statsResult.status === "fulfilled") stats = statsResult.value;
  if (stats) {
    $("#lcStats").innerHTML = [
      stat("TOTAL SOLVED", stats.totalSolved),
      stat("EASY SOLVED", stats.easySolved, stats.totalEasy != null ? "/ " + stats.totalEasy : ""),
      stat("MEDIUM SOLVED", stats.mediumSolved, stats.totalMedium != null ? "/ " + stats.totalMedium : ""),
      stat("HARD SOLVED", stats.hardSolved, stats.totalHard != null ? "/ " + stats.totalHard : "")
    ].join("");
    $("#lcUpdated").textContent = "Stats loaded · public API";
  } else {
    $("#lcStats").innerHTML = [stat("TOTAL SOLVED", "—"), stat("EASY SOLVED", "—"), stat("MEDIUM SOLVED", "—"), stat("HARD SOLVED", "—")].join("");
    $("#lcUpdated").textContent = "Stats unavailable · try refresh";
  }

  const statCalendar = stats ? parseCalendar(stats) : null;
  const apiCalendar = calendarResult.status === "fulfilled" && calendarResult.value ? parseCalendar(calendarResult.value) : null;
  if (statCalendar && Object.keys(statCalendar).length) renderHeatmap(statCalendar);
  else if (apiCalendar && Object.keys(apiCalendar).length) renderHeatmap(apiCalendar);
  else renderEmptyHeatmap("Activity calendar unavailable or rate-limited; stats may still load.");
}
$("#refreshLc").addEventListener("click", () => {
  $("#refreshLc").disabled = true;
  $("#refreshLc").textContent = "Refreshing…";
  loadLeetCode().finally(() => {
    $("#refreshLc").disabled = false;
    $("#refreshLc").textContent = "Refresh stats ↻";
  });
});
$("#menuToggle").addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => {
  $("#nav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}));
$("#projectFilters").addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  const filter = button.dataset.filter;
  let visible = 0;
  document.querySelectorAll(".project-card").forEach(card => {
    const show = filter === "all" || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible++;
  });
  $("#projectCount").textContent = "Showing " + visible + " project" + (visible === 1 ? "" : "s") + " · " +
    (filter === "all" ? "All projects" : button.textContent.trim());
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
renderEmptyHeatmap("Add your LeetCode username to load activity.");
loadLeetCode().catch(() => {
  $("#lcUpdated").textContent = "Stats unavailable · try refresh";
  renderEmptyHeatmap("Activity API unavailable or rate-limited.");
});
