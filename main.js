(function () {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const initials = (t) => t.split(/[\s:.-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  $("#year").textContent = new Date().getFullYear();
  const ALL = WORK.flatMap((g) => g.projects);
  $("#stat-shipped").textContent = ALL.length + "+";
  /* unique companies across full-time and freelance (TLM / PlayMagic counted once) */
  const key = (n) => n.toLowerCase().split(/[\s(]/)[0];
  $("#stat-studios").textContent = new Set([...STUDIOS.map((s) => key(s.name)), ...CLIENTS.map(key)]).size;

  /* filters */
  const tags = ["All", ...new Set(ALL.flatMap((p) => p.tags))];
  let active = "All";
  $("#filters").innerHTML = tags.map((t) => `<button data-tag="${esc(t)}" class="${t === active ? "on" : ""}">${esc(t)}</button>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    active = b.dataset.tag;
    document.querySelectorAll("#filters button").forEach((x) => x.classList.toggle("on", x === b));
    renderGrid();
  });

  /* project grid, grouped by company (not clickable) */
  const card = (p) => `
      <article class="card">
        <div class="thumb" data-initials="${esc(initials(p.title))}">
          <img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" class="${p.fit === "contain" ? "contain" : ""}" onerror="this.remove()">
        </div>
        <div class="info">
          <h3>${esc(p.title)}</h3>
          ${p.context ? `<p class="note">${esc(p.context)}</p>` : ""}
          ${p.role ? `<p class="meta">${esc(p.role)}</p>` : ""}
          ${p.tags.length ? `<div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
        </div>
      </article>`;
  function renderGrid() {
    $("#grid").innerHTML = WORK.map((g) => {
      const items = g.projects.filter((p) => active === "All" || p.tags.includes(active));
      if (!items.length) return "";
      return `
        <div class="company">
          <div class="company-head"><h3>${esc(g.company)}</h3><span>${esc(g.dates)}</span></div>
          <div class="grid">${items.map(card).join("")}</div>
        </div>`;
    }).join("");
  }
  renderGrid();

  /* timeline */
  $("#timeline").innerHTML = STUDIOS.map((s) => `
    <li>
      <div class="when">${esc(s.dates)}</div>
      <div>
        <h3>${esc(s.name)}</h3>
        ${s.note ? `<p class="muted">${esc(s.note)}</p>` : ""}
      </div>
    </li>`).join("");
  $("#freelance").innerHTML = CLIENTS.map((c) => `<li>${esc(c)}</li>`).join("");

  /* unreleased, grouped by company */
  $("#unreleased").innerHTML = UNRELEASED.map((g) => `
    <div class="company">
      <div class="company-head"><h3>${esc(g.company)}</h3></div>
      <ul class="chips">${g.projects.map((x) => `
        <li class="${x.image.endsWith("nda.jpg") ? "is-nda" : ""}">
          <div class="u-thumb"><img src="${esc(x.image)}" alt="${esc(x.title)}" onerror="this.remove()"></div>
          <span>${esc(x.title)}</span>
        </li>`).join("")}</ul>
    </div>`).join("");
  /* ============ motion ============ */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // scroll reveal (sections + staggered children)
  const io = "IntersectionObserver" in window && !reduce
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  function reveal(root) {
    root.querySelectorAll(".timeline > li, .freelance, .company-head, .card, .chips li").forEach((el, i) => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      const sib = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", Math.min(sib, 8) * 0.06 + "s");
      io ? io.observe(el) : el.classList.add("in");
    });
  }
  document.querySelectorAll(".section").forEach((s) => io ? io.observe(s) : s.classList.add("in"));
  reveal(document);
  const _render = renderGrid;
  renderGrid = function () { _render(); reveal($("#grid")); };

  // count-up stats
  document.querySelectorAll(".stats strong").forEach((el) => {
    const txt = el.textContent, n = parseInt(txt, 10), suf = txt.replace(/^\d+/, "");
    if (reduce || !n) return;
    const t0 = performance.now() + 550, dur = 1200;
    (function tick(t) {
      const p = Math.min(1, Math.max(0, (t - t0) / dur)), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(n * e) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  });

  // scroll progress bar + portrait parallax
  const bar = $("#progress"), portrait = $("#portrait");
  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    if (!reduce && portrait && scrollY < innerHeight * 1.2) portrait.querySelector("img").style.transform = `scale(1.04) translateY(${scrollY * 0.06}px)`;
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // cursor spotlight on cards and portrait
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest && e.target.closest(".card, .portrait");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  });
})();
