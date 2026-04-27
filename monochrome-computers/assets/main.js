/* global window, document */

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function formatUSD(cents) {
  const dollars = cents / 100;
  return dollars.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const PRODUCTS = [
  {
    id: "mono-air-14",
    name: "Mono Air 14",
    category: "laptop",
    badge: "Ultralight",
    priceCents: 99900,
    desc: "A clean, portable laptop for daily work and travel. Quiet thermals and a crisp display.",
    specs: ["14-inch", "16GB RAM", "512GB SSD", "All-day battery"],
    featuredRank: 1,
  },
  {
    id: "mono-studio-16",
    name: "Mono Studio 16",
    category: "laptop",
    badge: "Creator",
    priceCents: 159900,
    desc: "For editing, design, and heavier multitasking. Balanced power with a calm minimalist finish.",
    specs: ["16-inch", "32GB RAM", "1TB SSD", "Color-true panel"],
    featuredRank: 2,
  },
  {
    id: "mono-pro-15",
    name: "Mono Pro 15",
    category: "laptop",
    badge: "Performance",
    priceCents: 189900,
    desc: "High-performance laptop with dedicated graphics for demanding creative and technical workloads.",
    specs: ["15-inch", "32GB RAM", "1TB SSD", "RTX-class GPU"],
    featuredRank: 4,
  },
  {
    id: "mono-tower-s",
    name: "Mono Tower S",
    category: "desktop",
    badge: "Workstation",
    priceCents: 149900,
    desc: "A compact workstation tuned for airflow and low noise. Ideal for studio desks and small offices.",
    specs: ["Quiet cooling", "32GB RAM", "1TB SSD", "Upgradeable"],
    featuredRank: 3,
  },
  {
    id: "mono-tower-x",
    name: "Mono Tower X",
    category: "desktop",
    badge: "High-end",
    priceCents: 249900,
    desc: "A powerful desktop for 3D, rendering, and heavy compute. Built for stability under sustained loads.",
    specs: ["64GB RAM", "2TB SSD", "Pro GPU", "10GbE optional"],
    featuredRank: 6,
  },
  {
    id: "mono-dock",
    name: "Mono Dock",
    category: "accessory",
    badge: "Minimal",
    priceCents: 14900,
    desc: "A clean desk dock for fast I/O and one-cable laptop setups.",
    specs: ["USB-C", "HDMI", "PD charging", "Aluminum body"],
    featuredRank: 7,
  },
  {
    id: "mono-sleeve",
    name: "Mono Sleeve",
    category: "accessory",
    badge: "Essentials",
    priceCents: 5900,
    desc: "A simple protective sleeve with soft lining and understated branding.",
    specs: ["14–16 inch", "Soft lining", "Weather resistant", "Magnetic flap"],
    featuredRank: 8,
  },
];

function setActiveNav() {
  const path = (window.location.pathname || "").toLowerCase();
  const file = path.split("/").pop() || "index.html";
  const key = file.startsWith("about")
    ? "about"
    : file.startsWith("products")
      ? "products"
      : file.startsWith("contact")
        ? "contact"
        : "home";

  qsa(".nav a[data-nav]").forEach((a) => {
    if (a.dataset.nav === key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

function mountFooterBits() {
  const year = qs("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btt = qs("#backToTop");
  if (btt) {
    btt.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function revealOnScroll() {
  const nodes = qsa("[data-reveal]");
  if (!nodes.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const ent of entries) {
        if (ent.isIntersecting) ent.target.classList.add("is-visible");
      }
    },
    { threshold: 0.14 }
  );
  nodes.forEach((n) => io.observe(n));
}

function productCard(p) {
  const wrap = document.createElement("article");
  wrap.className = "card product-card";
  wrap.setAttribute("data-cat", p.category);
  wrap.setAttribute("data-name", p.name.toLowerCase());
  wrap.setAttribute("data-reveal", "1");

  const top = document.createElement("div");
  top.className = "product-top";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = p.badge;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = formatUSD(p.priceCents);

  top.appendChild(badge);
  top.appendChild(price);

  const body = document.createElement("div");
  body.className = "product-body";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = p.name;

  const desc = document.createElement("p");
  desc.className = "product-desc";
  desc.textContent = p.desc;

  const specs = document.createElement("div");
  specs.className = "specs";
  p.specs.slice(0, 4).forEach((s) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = s;
    specs.appendChild(pill);
  });

  const actions = document.createElement("div");
  actions.className = "product-actions";
  const details = document.createElement("a");
  details.className = "btn btn-ghost btn-small";
  details.href = "contact.html";
  details.textContent = "Ask about this";
  details.setAttribute(
    "aria-label",
    `Ask about ${p.name} via the contact page`
  );

  const buy = document.createElement("a");
  buy.className = "btn btn-primary btn-small";
  buy.href = "contact.html";
  buy.textContent = "Buy / Quote";
  buy.setAttribute("aria-label", `Request a quote for ${p.name}`);

  actions.appendChild(details);
  actions.appendChild(buy);

  body.appendChild(name);
  body.appendChild(desc);
  body.appendChild(specs);
  body.appendChild(actions);

  wrap.appendChild(top);
  wrap.appendChild(body);
  return wrap;
}

function mountFeatured() {
  const grid = qs("#featuredGrid");
  if (!grid) return;

  const featured = [...PRODUCTS]
    .slice()
    .sort((a, b) => a.featuredRank - b.featuredRank)
    .filter((p) => p.featuredRank <= 4);

  featured.forEach((p) => grid.appendChild(productCard(p)));
}

function mountProductsPage() {
  const grid = qs("#productsGrid");
  if (!grid) return;

  const search = qs("#productSearch");
  const sort = qs("#productSort");
  const empty = qs("#productsEmpty");
  const reset = qs("#resetFilters");

  let activeFilter = "all";
  let query = "";
  let sortKey = "featured";

  function getFiltered() {
    let list = PRODUCTS.slice();

    if (activeFilter !== "all")
      list = list.filter((p) => p.category === activeFilter);

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) => {
        const hay = `${p.name} ${p.badge} ${p.desc} ${p.specs.join(" ")}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (sortKey === "featured") {
      list.sort((a, b) => a.featuredRank - b.featuredRank);
    } else if (sortKey === "price-asc") {
      list.sort((a, b) => a.priceCents - b.priceCents);
    } else if (sortKey === "price-desc") {
      list.sort((a, b) => b.priceCents - a.priceCents);
    } else if (sortKey === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }

  function render() {
    grid.innerHTML = "";
    const list = getFiltered();
    list.forEach((p) => grid.appendChild(productCard(p)));
    if (empty) empty.hidden = list.length !== 0;
    revealOnScroll();
  }

  qsa(".chip[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      qsa(".chip[data-filter]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      render();
    });
  });

  if (search) {
    search.addEventListener("input", () => {
      query = search.value || "";
      render();
    });
  }

  if (sort) {
    sort.addEventListener("change", () => {
      sortKey = sort.value || "featured";
      render();
    });
  }

  if (reset) {
    reset.addEventListener("click", () => {
      activeFilter = "all";
      query = "";
      sortKey = "featured";
      if (search) search.value = "";
      if (sort) sort.value = "featured";
      qsa(".chip[data-filter]").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.filter === "all");
      });
      render();
    });
  }

  render();
}

function mountContactForm() {
  const form = qs("#contactForm");
  if (!form) return;

  const name = qs("#cName");
  const email = qs("#cEmail");
  const msg = qs("#cMsg");

  function setErr(id, message) {
    const help = qs(`[data-error-for="${id}"]`);
    if (!help) return;
    help.textContent = message || "";
    help.classList.toggle("is-error", Boolean(message));
  }

  function isValidEmail(v) {
    // Conservative check; this is for UX only.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = String(name?.value || "").trim();
    const em = String(email?.value || "").trim();
    const m = String(msg?.value || "").trim();

    setErr("cName", n ? "" : "Please enter your name.");
    setErr("cEmail", isValidEmail(em) ? "" : "Please enter a valid email.");
    setErr("cMsg", m ? "" : "Please enter a message.");

    if (!n || !isValidEmail(em) || !m) return;

    const subject = encodeURIComponent(`Monochrome inquiry from ${n}`);
    const body = encodeURIComponent(
      `Name: ${n}\nEmail: ${em}\n\nMessage:\n${m}\n\n---\nSent from the Monochrome Computers website.`
    );

    window.location.href = `mailto:sales@monochrome.example?subject=${subject}&body=${body}`;
  });

  form.addEventListener("reset", () => {
    setErr("cName", "");
    setErr("cEmail", "");
    setErr("cMsg", "");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  mountFooterBits();
  mountFeatured();
  mountProductsPage();
  mountContactForm();

  // Basic reveal for any cards already on page
  qsa(".card, .feature, .step").forEach((n, i) => {
    if (!n.hasAttribute("data-reveal")) n.setAttribute("data-reveal", "1");
    n.style.transitionDelay = `${Math.min(i * 40, 220)}ms`;
  });
  revealOnScroll();
});

