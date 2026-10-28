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
const externalLink = (url, fallback = "#") => /^https?:\/\//i.test(url || "") ? url : fallback;

function renderPortfolio() {
  const name = PORTFOLIO.name || "Your Name";
  $("#brandName").textContent = name.toUpperCase();
  $("#footerName").textContent = name.toUpperCase();
  $("#signatureName").textContent = name.toUpperCase();
  $("#heroNameSmall").textContent = name.toUpperCase();
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
  $("#resumeLink").href = PORTFOLIO.resumeUrl || "#contact";
  $("#socialLinks").innerHTML = PORTFOLIO.socials.map(s => '<a href="' + safe(s.url) + '" title="' + safe(s.title) + '" target="_blank" rel="noreferrer">' + safe(s.label) + '</a>').join("");
  $("#aboutFacts").innerHTML = PORTFOLIO.facts.map((fact, i) => '<span><b>' + String(i + 1).padStart(2, "0") + '</b> ' + safe(fact) + '</span>').join("");
  $("#skillsGrid").innerHTML = PORTFOLIO.skills.map(group => '<article class="skill-card"><span class="skill-icon">' + safe(group.icon) + '</span><h3>' + safe(group.category) + '</h3><p>' + safe(group.description) + '</p><div class="skill-tags">' + group.items.map(item => '<span>' + safe(item) + '</span>').join("") + '</div></article>').join("");
  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map((project, index) => '<article class="project-card" data-category="' + safe(project.category) + '"><a class="project-image" href="' + safe(externalLink(project.demo || project.source, "#contact")) + '" ' + (project.demo || project.source ? 'target="_blank" rel="noreferrer"' : '') + '><img src="' + safe(project.image) + '" alt="' + safe(project.title) + ' preview" loading="lazy"></a><div class="project-body"><div class="project-meta"><span>PROJECT / ' + String(index + 1).padStart(2, "0") + ' · ' + safe(project.type) + '</span><span>MONTH YYYY</span></div><h3>' + safe(project.title) + '</h3><p>' + safe(project.description) + '</p><div class="skill-tags">' + project.tech.map(t => '<span>' + safe(t) + '</span>').join("") + '</div><div class="project-links">' + (project.demo ? '<a href="' + safe(externalLink(project.demo)) + '" target="_blank" rel="noreferrer">Live Demo ↗</a>' : '') + (project.source ? '<a href="' + safe(externalLink(project.source)) + '" target="_blank" rel="noreferrer">Source Code ↗</a>' : '') + '</div></div></article>').join("");
  $("#timeline").innerHTML = PORTFOLIO.education.map(item => '<article class="timeline-item"><span>' + safe(item.date) + '</span><h3>' + safe(item.title) + '</h3><p>' + safe(item.place) + '</p><p>' + safe(item.description) + '</p></article>').join("");
  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map((item, i) => '<article class="certificate-card"><span class="certificate-icon">' + ["✧","◇","⌘","✳"][i % 4] + '</span><div class="certificate-copy"><span>CERTIFICATE / CREDENTIAL ' + String(i + 1).padStart(2, "0") + '</span><h3>' + safe(item.title) + '</h3><p>' + safe(item.issuer) + ' · ' + safe(item.date) + (item.url ? ' · <a href="' + safe(externalLink(item.url)) + '" target="_blank" rel="noreferrer">View certificate ↗</a>' : '') + '</p></div></article>').join("");
  $("#contactDetails").innerHTML = '<span>✉ &nbsp; <a href="mailto:' + safe(PORTFOLIO.email) + '">' + safe(PORTFOLIO.email) + '</a></span><span>⌖ &nbsp; ' + safe(PORTFOLIO.location) + '</span><span>↗ &nbsp; <a href="' + safe(externalLink(PORTFOLIO.linkedinUrl)) + '" target="_blank" rel="noreferrer">LinkedIn profile</a></span>';
  $("#githubLink").href = PORTFOLIO.githubUsername ? "https://github.com/" + encodeURIComponent(PORTFOLIO.githubUsername) : "https://github.com/";
  $("#githubHandle").textContent = PORTFOLIO.githubUsername ? "@" + PORTFOLIO.githubUsername : "Add your username in script.js";
  $("#linkedinLink").href = externalLink(PORTFOLIO.linkedinUrl, "https://www.linkedin.com/");
  $("#linkedinHandle").textContent = PORTFOLIO.linkedinUrl.includes("yourusername") ? "Add your profile URL" : PORTFOLIO.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "");
  $("#lcUsername").textContent = PORTFOLIO.leetcodeUsername ? "@" + PORTFOLIO.leetcodeUsername : "Add your username in script.js";
  $("#lcProfileLink").href = PORTFOLIO.leetcodeUsername ? "https://leetcode.com/u/" + encodeURIComponent(PORTFOLIO.leetcodeUsername) + "/" : "https://leetcode.com/";
}

function stat(label, value, sub = "") {
  return '<div class="lc-stat"><span>' + safe(label) + '</span><strong>' + safe(value ?? "—") + (sub ? ' <em>' + safe(sub) + '</em>' : '') + '</strong></div>';
}
function renderEmptyHeatmap(message) {
  const grid = $("#heatmapGrid");
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() - 363);
  start.setDate(start.getDate() - start.getDay());
  grid.innerHTML = "";
  for (let i = 0; i < 364; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const cell = document.createElement("span");
    cell.className = "heat-cell";
    cell.title = date.toLocaleDateString() + ": no data";
    cell.setAttribute("aria-label", cell.title);
    grid.appendChild(cell);
  }
  $("#heatmapMonths").innerHTML = Array.from({length:12},(_,i)=>'<span>' + new Date(now.getFullYear(), now.getMonth()-11+i, 1).toLocaleDateString("en",{month:"short"}) + '</span>').join("");
  $("#heatmapSummary").textContent = "Daily activity over the last year";
  $("#heatmapStatus").textContent = message;
}
function parseCalendar(data) {
  let raw = data?.submissionCalendar ?? data?.calendar ?? data?.submission_calendar ?? data?.data?.submissionCalendar ?? data?.data?.calendar;
  if (typeof raw === "string") { try { raw = JSON.parse(raw); } catch { raw = null; } }
  if (Array.isArray(raw)) return Object.fromEntries(raw.map(item => [String(item.date ?? item.timestamp ?? ""), Number(item.count ?? item.submissions ?? 0)]));
  return raw && typeof raw === "object" ? raw : null;
}
function renderHeatmap(calendar) {
  const entries = Object.entries(calendar || {}).map(([key,value]) => {
    let timestamp = Number(key);
    if (!Number.isFinite(timestamp)) timestamp = Date.parse(key) / 1000;
    if (timestamp > 1e12) timestamp /= 1000;
    const count = typeof value === "object" ? Number(value.count ?? value.submissions ?? 0) : Number(value);
    return {day:new Date(timestamp * 1000),count:Number.isFinite(count) ? count : 0};
  }).filter(x => !Number.isNaN(x.day.getTime()));
  if (!entries.length) { renderEmptyHeatmap("The activity API did not return calendar data."); return; }
  const byDay = new Map(entries.map(x => [x.day.toISOString().slice(0,10), x.count]));
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(end); start.setDate(start.getDate()-363); start.setDate(start.getDate()-start.getDay());
  const grid = $("#heatmapGrid"); grid.innerHTML = "";
  let total = 0, active = 0, max = 0;
  for (let i=0;i<371;i++) {
    const date = new Date(start); date.setDate(start.getDate()+i);
    if (date > end) break;
    const key = date.toISOString().slice(0,10);
    const count = byDay.get(key) ?? 0;
    total += count; if(count>0) active++; max=Math.max(max,count);
    const level = count===0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4;
    const cell = document.createElement("span");
    cell.className = "heat-cell"; cell.dataset.level = String(level);
    cell.title = date.toLocaleDateString() + ": " + count + " submission" + (count===1?"":"s");
    cell.setAttribute("aria-label",cell.title); grid.appendChild(cell);
  }
  const months = []; let lastMonth = -1;
  for(let i=0;i<grid.children.length;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    if(d.getMonth()!==lastMonth){months.push({index:i,label:d.toLocaleDateString("en",{month:"short"})});lastMonth=d.getMonth();}
  }
  $("#heatmapMonths").innerHTML = months.map(m=>'<span style="grid-column:' + (Math.floor(m.index/7)+1) + '">' + safe(m.label) + '</span>').join("");
  $("#heatmapSummary").textContent = total.toLocaleString() + " submissions · " + active + " active days · last 12 months";
  $("#heatmapStatus").textContent = "Activity data loaded · peak day " + max + " submissions";
}
async function loadLeetCode() {
  const username = PORTFOLIO.leetcodeUsername.trim();
  if (!username) {
    $("#lcStats").innerHTML = [stat("TOTAL SOLVED","—"),stat("EASY","—"),stat("MEDIUM","—"),stat("HARD","—")].join("");
    $("#lcUpdated").textContent = "Set username in script.js";
    renderEmptyHeatmap("Configure a LeetCode username to load activity.");
    return;
  }
  $("#lcStats").innerHTML = '<div class="lc-loading">Fetching LeetCode stats…</div>';
  renderEmptyHeatmap("Loading recent submission activity…");
  const user = encodeURIComponent(username);
  const statsUrl = "https://leetcode-stats-api.herokuapp.com/" + user;
  const calendarUrl = "https://alfa-leetcode-api.onrender.com/" + user + "/calendar";
  const results = await Promise.allSettled([fetch(statsUrl).then(r=>{if(!r.ok)throw Error("Stats service unavailable");return r.json();}),fetch(calendarUrl).then(r=>{if(!r.ok)throw Error("Calendar service unavailable");return r.json();})]);
  const statsResult = results[0];
  if(statsResult.status==="fulfilled" && statsResult.value && statsResult.value.status!=="error" && !statsResult.value.error){
    const d=statsResult.value;
    $("#lcStats").innerHTML=[stat("TOTAL SOLVED",d.totalSolved),stat("EASY SOLVED",d.easySolved,d.totalEasy!=null?"/ "+d.totalEasy:""),stat("MEDIUM SOLVED",d.mediumSolved,d.totalMedium!=null?"/ "+d.totalMedium:""),stat("HARD SOLVED",d.hardSolved,d.totalHard!=null?"/ "+d.totalHard:"")].join("");
    $("#lcUpdated").textContent="Stats loaded · third-party API";
  } else {
    $("#lcStats").innerHTML=[stat("TOTAL SOLVED","—"),stat("EASY","—"),stat("MEDIUM","—"),stat("HARD","—")].join("");
    $("#lcUpdated").textContent="Stats API unavailable";
  }
  const calendarResult = results[1];
  if(calendarResult.status==="fulfilled"){
    const calendar=parseCalendar(calendarResult.value);
    if(calendar) renderHeatmap(calendar);
    else renderEmptyHeatmap("Calendar format was not recognised by the public API.");
  } else renderEmptyHeatmap("Activity API unavailable or rate-limited. Try refreshing later.");
}
$("#refreshLc").addEventListener("click",loadLeetCode);
$("#menuToggle").addEventListener("click",()=>{const open=$("#nav").classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
document.querySelectorAll("#nav a").forEach(link=>link.addEventListener("click",()=>{$("#nav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");}));
$("#projectFilters").addEventListener("click",event=>{
  const button=event.target.closest("button[data-filter]"); if(!button)return;
  document.querySelectorAll(".filter").forEach(item=>item.classList.toggle("active",item===button));
  const filter=button.dataset.filter;let visible=0;
  document.querySelectorAll(".project-card").forEach(card=>{const show=filter==="all"||card.dataset.category===filter;card.hidden=!show;if(show)visible++;});
  $("#projectCount").textContent="Showing "+visible+" project"+(visible===1?"":"s")+" · "+(filter==="all"?"All projects":button.textContent);
});
$("#contactForm").addEventListener("submit",event=>{
  event.preventDefault();const form=new FormData(event.currentTarget);
  const subject=encodeURIComponent(form.get("subject"));
  const body=encodeURIComponent("Name: "+form.get("name")+"\nEmail: "+form.get("email")+"\n\n"+form.get("message"));
  window.location.href="mailto:"+PORTFOLIO.email+"?subject="+subject+"&body="+body;
});
renderPortfolio();
$("#projectCount").textContent="Showing "+PORTFOLIO.projects.length+" projects · All projects";
renderEmptyHeatmap("Configure a LeetCode username to load activity.");
loadLeetCode();
