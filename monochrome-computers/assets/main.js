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

const I18N = {
  en: {
    "common.skip": "Skip to content",
    "common.brandHomeAria": "Techzy home",
    "common.langToggleAria": "Switch language",
    "common.menuToggleAria": "Open menu",

    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.contact": "Contact",

    "footer.tagline": "Minimalist laptops and desktops for modern work.",
    "footer.about": "About",
    "footer.products": "Products",
    "footer.contact": "Contact",
    "footer.backToTop": "Back to top",
    "footer.copyrightName": "Techzy",
    "footer.themeLine": "Built in black, gray, and white.",

    "home.hero.kicker": "Minimal hardware. Maximum focus.",
    "home.hero.title": "Laptops and desktops built with a clean, modern edge.",
    "home.hero.lede":
      "Curated machines for creators, builders, and teams who want quiet performance without the noise.",
    "home.hero.ctaPrimary": "Browse Products",
    "home.hero.ctaSecondary": "How We Work",
    "home.metrics.aria": "Key metrics",
    "home.metrics.warrantyLabel": "Warranty",
    "home.metrics.warrantyValue": "2 years",
    "home.metrics.shippingLabel": "Shipping",
    "home.metrics.shippingValue": "Fast + insured",
    "home.metrics.supportLabel": "Support",
    "home.metrics.supportValue": "Real humans",
    "home.featured.title": "Featured picks",
    "home.featured.subtitle": "A quick look at what customers are buying this week.",
    "home.featured.link": "See all products",
    "home.why.title": "Why Techzy",
    "home.why.body":
      "We keep it simple: strong components, clean builds, and honest pricing. No neon. No clutter. Just machines that do the work.",
    "home.why.f1Title": "Curated builds",
    "home.why.f1Body": "Tested combinations for stability, thermals, and longevity.",
    "home.why.f2Title": "Clean design",
    "home.why.f2Body": "Minimalist finishes, subtle textures, and no visual noise.",
    "home.why.f3Title": "Smart support",
    "home.why.f3Body": "Fast diagnosis, clear answers, and real repair options.",

    "about.hero.kicker": "About us",
    "about.hero.title": "A minimalist approach to computers.",
    "about.hero.lede":
      "We sell carefully selected laptops and desktops that prioritize reliability, clean design, and quiet performance.",
    "about.beliefs.title": "What we believe",
    "about.beliefs.body":
      "Technology should fade into the background. Your machine should be fast, stable, and understated. That is the whole point.",
    "about.beliefs.quote": "“The best spec is the one you never have to think about.”",
    "about.beliefs.byline": "Techzy team",
    "about.cards.qTitle": "Quality checks",
    "about.cards.qBody":
      "Each model is validated for thermals, performance consistency, and daily-driver reliability.",
    "about.cards.pTitle": "Straight pricing",
    "about.cards.pBody": "Clear configurations, no confusing bundles, and no gimmicks.",
    "about.cards.rTitle": "Repair mindset",
    "about.cards.rBody":
      "We support upgrades and repairs where it makes sense, to extend the life of your machine.",
    "about.how.title": "How it works",
    "about.how.subtitle": "A simple process from selection to delivery.",
    "about.steps.s1Title": "Pick a category",
    "about.steps.s1Body": "Browse laptops, desktops, and accessories in one place.",
    "about.steps.s2Title": "Choose a configuration",
    "about.steps.s2Body":
      "Select a build that matches your workload: work, studio, or performance.",
    "about.steps.s3Title": "Get support",
    "about.steps.s3Body": "Ask a question, confirm compatibility, and get post-purchase help.",
    "about.cta.title": "Ready to browse?",
    "about.cta.body": "Explore our lineup of minimalist machines and clean builds.",
    "about.cta.button": "View Products",

    "products.hero.kicker": "Products",
    "products.hero.title": "Clean machines. Clear choices.",
    "products.hero.lede":
      "Use search, filters, and sorting to find your next laptop or desktop.",
    "products.filters.searchLabel": "Search",
    "products.filters.searchPlaceholder": "e.g. 16-inch, studio, RTX, ultralight",
    "products.filters.all": "All",
    "products.filters.laptops": "Laptops",
    "products.filters.desktops": "Desktops",
    "products.filters.accessories": "Accessories",
    "products.filters.sortLabel": "Sort",
    "products.sort.featured": "Featured",
    "products.sort.priceAsc": "Price: low to high",
    "products.sort.priceDesc": "Price: high to low",
    "products.sort.nameAsc": "Name: A to Z",
    "products.empty.title": "No matches",
    "products.empty.body": "Try a different search term, or reset filters to see everything.",
    "products.empty.reset": "Reset filters",
    "products.card.ask": "Ask about this",
    "products.card.buy": "Buy / Quote",
    "products.card.askAria": "Ask about {name} via the contact page",
    "products.card.buyAria": "Request a quote for {name}",

    "contact.hero.kicker": "Contact",
    "contact.hero.title": "Talk to a human.",
    "contact.hero.lede":
      "Questions about specs, shipping, warranties, or the right build? Send a message and we will respond soon.",
    "contact.form.title": "Send a message",
    "contact.form.subtitle":
      "This is a static site, so the form will open your email app with a pre-filled message.",
    "contact.form.nameLabel": "Name",
    "contact.form.emailLabel": "Email",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePlaceholder":
      "Tell us what you need (use-case, budget, screen size, etc.)",
    "contact.form.submit": "Compose Email",
    "contact.form.reset": "Clear",
    "contact.form.direct": "Or email directly:",
    "contact.aside.hoursTitle": "Hours",
    "contact.aside.hoursBody": "Mon to Fri, 9:00 to 18:00",
    "contact.aside.supportTitle": "Support",
    "contact.aside.supportBody": "Include your model name and order number (if you have one).",
    "contact.aside.locationTitle": "Location",
    "contact.aside.locationBody":
      "We ship nationwide. Local pickup available by appointment.",

    "contact.err.name": "Please enter your name.",
    "contact.err.email": "Please enter a valid email.",
    "contact.err.message": "Please enter a message.",
    "contact.mail.subject": "Techzy inquiry from {name}",
    "contact.mail.footer": "Sent from the Techzy website.",
  },
  my: {
    "common.skip": "အကြောင်းအရာသို့ တိုက်ရိုက်သွားရန်",
    "common.brandHomeAria": "Techzy ပင်မစာမျက်နှာ",
    "common.langToggleAria": "ဘာသာစကား ပြောင်းရန်",
    "common.menuToggleAria": "မီနူး ဖွင့်ရန်",

    "nav.home": "ပင်မစာမျက်နှာ",
    "nav.about": "ကျွန်ုပ်တို့အကြောင်း",
    "nav.products": "ထုတ်ကုန်များ",
    "nav.contact": "ဆက်သွယ်ရန်",

    "footer.tagline": "ခေတ်မီလုပ်ငန်းအတွက် မီနီမယ်လ် လက်ပ်တော့နှင့် ဒက်စ်တော့များ။",
    "footer.about": "အကြောင်း",
    "footer.products": "ထုတ်ကုန်များ",
    "footer.contact": "ဆက်သွယ်ရန်",
    "footer.backToTop": "အပေါ်သို့ ပြန်သွားရန်",
    "footer.copyrightName": "Techzy",
    "footer.themeLine": "အနက်၊ မီးခိုး၊ အဖြူ အရောင်စနစ်ဖြင့် တည်ဆောက်ထားသည်။",

    "home.hero.kicker": "မီနီမယ်လ် ဟာ့ဒ်ဝဲ။ အာရုံစိုက်မှု အမြင့်ဆုံး။",
    "home.hero.title": "သန့်ရှင်းသက်သာသော ခေတ်မီဒီဇိုင်းနဲ့ လက်ပ်တော့/ဒက်စ်တော့များ။",
    "home.hero.lede":
      "ဖန်တီးမှု၊ တည်ဆောက်မှု၊ အဖွဲ့လိုက်လုပ်ဆောင်မှုအတွက် တိတ်ဆိတ်ပြီး အားကောင်းသော စွမ်းဆောင်ရည်။",
    "home.hero.ctaPrimary": "ထုတ်ကုန်များ ကြည့်ရန်",
    "home.hero.ctaSecondary": "ကျွန်ုပ်တို့၏ လုပ်နည်း",
    "home.metrics.aria": "အဓိက အချက်အလက်များ",
    "home.metrics.warrantyLabel": "အာမခံ",
    "home.metrics.warrantyValue": "၂ နှစ်",
    "home.metrics.shippingLabel": "ပို့ဆောင်မှု",
    "home.metrics.shippingValue": "မြန်ဆန် + အာမခံပါ",
    "home.metrics.supportLabel": "အကူအညီ",
    "home.metrics.supportValue": "လူจริงများ",
    "home.featured.title": "အကြံပြု ထုတ်ကုန်များ",
    "home.featured.subtitle": "ဒီအပတ်မှာ လူကြိုက်များနေတဲ့ မော်ဒယ်များကို မြန်မြန်ကြည့်ပါ။",
    "home.featured.link": "ထုတ်ကုန်အားလုံး ကြည့်ရန်",
    "home.why.title": "Techzy ကို ဘာကြောင့်ရွေးမလဲ",
    "home.why.body":
      "ခိုင်မာတဲ့ အစိတ်အပိုင်းများ၊ သန့်ရှင်းတဲ့ တည်ဆောက်မှု၊ ရိုးရှင်းတဲ့ စျေးနှုန်း။ အလွန်အကျွံ မဟုတ်ပါ။",
    "home.why.f1Title": "ရွေးချယ်စစ်ဆေးပြီးသား",
    "home.why.f1Body": "တည်ငြိမ်မှု၊ အပူချိန်၊ ကြာရှည်ခံမှုအတွက် စမ်းသပ်ထားသည်။",
    "home.why.f2Title": "သန့်ရှင်းတဲ့ ဒီဇိုင်း",
    "home.why.f2Body": "မီနီမယ်လ် အပြင်အဆင်၊ သေသပ်သန့်ရှင်းပြီး မအလွန်အကျွံ။",
    "home.why.f3Title": "အကူအညီကောင်း",
    "home.why.f3Body": "လျင်မြန်တဲ့ စစ်ဆေးမှု၊ ရှင်းလင်းတဲ့ အဖြေတွေ၊ ပြုပြင်မှုရွေးချယ်စရာများ။",

    "about.hero.kicker": "ကျွန်ုပ်တို့အကြောင်း",
    "about.hero.title": "ကွန်ပျူတာများကို မီနီမယ်လ်နည်းလမ်းနဲ့ ရွေးချယ်ရောင်းချခြင်း။",
    "about.hero.lede":
      "ယုံကြည်စိတ်ချရမှု၊ သန့်ရှင်းသောဒီဇိုင်း၊ တိတ်ဆိတ်သော စွမ်းဆောင်ရည်ကို ဦးစားပေးထားတဲ့ မော်ဒယ်များကိုသာ ရွေးချယ်ထားပါတယ်။",
    "about.beliefs.title": "ကျွန်ုပ်တို့ ယုံကြည်တာ",
    "about.beliefs.body":
      "နည်းပညာက နောက်ကွယ်မှာ နေသင့်ပါတယ်။ သင့်မက်ရှင်က လျင်မြန်၊ တည်ငြိမ်၊ သေသပ်ဖြစ်ရမယ်။",
    "about.beliefs.quote": "“စဉ်းစားစရာ မလိုအောင် အဆင်ပြေတဲ့ စပက်က တကယ်ကောင်းတာပါ।”",
    "about.beliefs.byline": "Techzy အဖွဲ့",
    "about.cards.qTitle": "အရည်အသွေး စစ်ဆေးမှု",
    "about.cards.qBody":
      "အပူချိန်၊ စွမ်းဆောင်ရည် တည်ငြိမ်မှု၊ နေ့စဉ်အသုံးပြုမှုအတွက် စမ်းသပ်အတည်ပြုထားပါတယ်။",
    "about.cards.pTitle": "ရိုးရှင်းတဲ့ စျေးနှုန်း",
    "about.cards.pBody": "ဖွံ့ဖြိုးထားတဲ့ ပက်ကေ့ချ် မရှုပ်ထွေး၊ များမားစွာ ဂျစ်မစ်မရှိ။",
    "about.cards.rTitle": "ပြုပြင်တိုးမြှင့်နိုင်မှု",
    "about.cards.rBody":
      "အသုံးတည့်ရာမှာ အဆင့်မြှင့်ခြင်း/ပြုပြင်ခြင်းကို ထောက်ပံ့ပြီး သက်တမ်းတိုးစေပါတယ်။",
    "about.how.title": "လုပ်ဆောင်ပုံ",
    "about.how.subtitle": "ရွေးချယ်မှုကနေ ပို့ဆောင်မှုအထိ ရိုးရှင်းတဲ့ လုပ်ငန်းစဉ်။",
    "about.steps.s1Title": "အမျိုးအစားရွေးပါ",
    "about.steps.s1Body": "လက်ပ်တော့၊ ဒက်စ်တော့၊ အပိုပစ္စည်းတွေကို တစ်နေရာတည်းက ကြည့်ရှုပါ။",
    "about.steps.s2Title": "စပက်/ဖွဲ့စည်းမှု ရွေးပါ",
    "about.steps.s2Body": "အလုပ်လုပ်ပုံနဲ့ ကိုက်ညီတဲ့ build ကို ရွေးချယ်ပါ။",
    "about.steps.s3Title": "အကူအညီ ရယူပါ",
    "about.steps.s3Body": "မေးမြန်းပါ၊ ကိုက်ညီမှုစစ်ပါ၊ ဝယ်ပြီးနောက် အကူအညီရယူပါ။",
    "about.cta.title": "ကြည့်ရှုရန် အဆင်သင့်လား",
    "about.cta.body": "မီနီမယ်လ် မက်ရှင်တွေကို အလွယ်တကူ ရွေးချယ်လိုက်ပါ။",
    "about.cta.button": "ထုတ်ကုန်များ ကြည့်ရန်",

    "products.hero.kicker": "ထုတ်ကုန်များ",
    "products.hero.title": "သန့်ရှင်းတဲ့ မက်ရှင်တွေ။ ရိုးရှင်းတဲ့ ရွေးချယ်မှု။",
    "products.hero.lede":
      "ရှာဖွေမှု၊ စစ်ထုတ်မှု၊ အစီအစဉ်ချခြင်းဖြင့် သင့်တော်တဲ့ မော်ဒယ်ကို ရှာပါ။",
    "products.filters.searchLabel": "ရှာဖွေ",
    "products.filters.searchPlaceholder": "ဥပမာ 16-inch, studio, RTX, ultralight",
    "products.filters.all": "အားလုံး",
    "products.filters.laptops": "လက်ပ်တော့များ",
    "products.filters.desktops": "ဒက်စ်တော့များ",
    "products.filters.accessories": "အပိုပစ္စည်းများ",
    "products.filters.sortLabel": "အစီအစဉ်",
    "products.sort.featured": "အကြံပြု",
    "products.sort.priceAsc": "စျေးနှုန်း: နိမ့် မှ မြင့်",
    "products.sort.priceDesc": "စျေးနှုန်း: မြင့် မှ နိမ့်",
    "products.sort.nameAsc": "အမည်: A မှ Z",
    "products.empty.title": "မကိုက်ညီတဲ့ ရလဒ်",
    "products.empty.body": "အခြား စကားလုံးနဲ့ စမ်းပါ၊ သို့မဟုတ် filter များကို ပြန်လည်သတ်မှတ်ပါ။",
    "products.empty.reset": "Filter ပြန်စတင်ရန်",
    "products.card.ask": "မေးမြန်းရန်",
    "products.card.buy": "ဝယ်/Quote",
    "products.card.askAria": "{name} အကြောင်း မေးမြန်းရန်",
    "products.card.buyAria": "{name} အတွက် Quote တောင်းရန်",

    "contact.hero.kicker": "ဆက်သွယ်ရန်",
    "contact.hero.title": "လူနဲ့ တိုက်ရိုက် ပြောကြည့်ပါ။",
    "contact.hero.lede":
      "စပက်၊ ပို့ဆောင်မှု၊ အာမခံ၊ သင့်တော်တဲ့ build ရွေးချယ်မှုအတွက် မေးမြန်းနိုင်ပါတယ်။",
    "contact.form.title": "စာပို့ရန်",
    "contact.form.subtitle":
      "ဒီဆိုက်က static ဖြစ်လို့ email app ကို ဖွင့်ပြီး စာကို အလိုအလျောက် ဖြည့်ပေးမှာပါ။",
    "contact.form.nameLabel": "နာမည်",
    "contact.form.emailLabel": "အီးမေးလ်",
    "contact.form.messageLabel": "စာ",
    "contact.form.messagePlaceholder":
      "လိုအပ်တာတွေကို ရေးပါ (အသုံးပြုရည်ရွယ်ချက်၊ ဘတ်ဂျက်၊ အရွယ်အစား စသည်)",
    "contact.form.submit": "Email ဖွင့်ရန်",
    "contact.form.reset": "ရှင်းလင်းရန်",
    "contact.form.direct": "သို့မဟုတ် တိုက်ရိုက် email ပို့ပါ:",
    "contact.aside.hoursTitle": "အချိန်",
    "contact.aside.hoursBody": "တနင်္လာ မှ သောကြာ, 9:00 မှ 18:00",
    "contact.aside.supportTitle": "အကူအညီ",
    "contact.aside.supportBody": "မော်ဒယ်အမည်နဲ့ အော်ဒါနံပါတ် (ရှိလျှင်) ထည့်ပါ။",
    "contact.aside.locationTitle": "တည်နေရာ",
    "contact.aside.locationBody":
      "နိုင်ငံတစ်ဝှမ်း ပို့ဆောင်ပေးသည်။ အချိန်နဲ့ ချိန်းဆိုပြီး လာယူနိုင်သည်။",

    "contact.err.name": "နာမည် ထည့်ပါ။",
    "contact.err.email": "မှန်ကန်တဲ့ အီးမေးလ် ထည့်ပါ။",
    "contact.err.message": "စာကို ထည့်ပါ။",
    "contact.mail.subject": "Techzy သို့ မေးမြန်းချက် ({name})",
    "contact.mail.footer": "Techzy ဝဘ်ဆိုက်မှ ပေးပို့ထားသည်။",
  },
};

let activeLang = "en";
let productsPageCtx = null;

function initMobileMenu() {
  const btn = qs("#navToggle");
  const nav = qs("#primaryNav");
  if (!btn || !nav) return;

  function setOpen(nextOpen) {
    const open = Boolean(nextOpen);
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (!open) btn.focus({ preventScroll: true });
  }

  btn.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  // Close when selecting a link
  qsa("a", nav).forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Close when clicking the scrim (header ::after). We approximate by listening
  // for clicks on the document and checking if the menu is open and the click
  // is outside the nav + controls.
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("nav-open")) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (nav.contains(target) || btn.contains(target)) return;
    const lang = qs("#langToggle");
    if (lang && lang.contains(target)) return;
    setOpen(false);
  });

  // If resized to desktop, ensure it isn't stuck open.
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 561px)").matches) setOpen(false);
  });
}

function t(key, vars) {
  const dict = I18N[activeLang] || I18N.en;
  let out = dict[key] ?? I18N.en[key] ?? "";
  if (!out) return "";
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      out = out.replaceAll(`{${k}}`, String(v));
    });
  }
  return out;
}

function normalizeLang(l) {
  const s = String(l || "").toLowerCase();
  if (s.startsWith("my")) return "my";
  if (s.startsWith("mm")) return "my";
  return "en";
}

function getSavedLang() {
  return normalizeLang(window.localStorage.getItem("lang"));
}

function setSavedLang(lang) {
  window.localStorage.setItem("lang", normalizeLang(lang));
}

function applyI18n(lang) {
  activeLang = normalizeLang(lang);
  document.documentElement.lang = activeLang === "my" ? "my" : "en";

  qsa("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    const value = t(key);
    if (value) node.textContent = value;
  });

  qsa("[data-i18n-attr]").forEach((node) => {
    const raw = node.getAttribute("data-i18n-attr") || "";
    const parts = raw
      .split(/\s+/)
      .map((p) => p.trim())
      .filter(Boolean);

    parts.forEach((p) => {
      const idx = p.indexOf(":");
      if (idx === -1) return;
      const attr = p.slice(0, idx).trim();
      const key = p.slice(idx + 1).trim();
      if (!attr || !key) return;
      const value = t(key);
      if (value) node.setAttribute(attr, value);
    });
  });

  const toggle = qs("#langToggle");
  if (toggle) {
    toggle.textContent = activeLang === "my" ? "EN" : "MY";
  }
}

function initLanguageSwitcher() {
  const toggle = qs("#langToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const next = activeLang === "my" ? "en" : "my";
    setSavedLang(next);
    applyI18n(next);
    // Re-render product grids so localized product copy updates.
    mountFeatured();
    if (productsPageCtx) productsPageCtx.render();
  });
}

const PRODUCTS = [
  {
    id: "mono-air-14",
    name: "Mono Air 14",
    nameMy: "Mono Air 14",
    category: "laptop",
    badge: "Ultralight",
    badgeMy: "အလွန်ပေါ့ပါး",
    priceCents: 99900,
    desc: "A clean, portable laptop for daily work and travel. Quiet thermals and a crisp display.",
    descMy:
      "နေ့စဉ်အလုပ်နဲ့ ခရီးသွားအတွက် သန့်ရှင်းပြီး သယ်ဆောင်လွယ်တဲ့ လက်ပ်တော့။ အပူချိန်တိတ်ပြီး မျက်နှာပြင်ကြည်လင်။",
    specs: ["14-inch", "16GB RAM", "512GB SSD", "All-day battery"],
    specsMy: ["14 လက်မ", "16GB RAM", "512GB SSD", "တစ်နေ့လုံး ဘက်ထရီ"],
    featuredRank: 1,
  },
  {
    id: "mono-studio-16",
    name: "Mono Studio 16",
    nameMy: "Mono Studio 16",
    category: "laptop",
    badge: "Creator",
    badgeMy: "ဖန်တီးရေး",
    priceCents: 159900,
    desc: "For editing, design, and heavier multitasking. Balanced power with a calm minimalist finish.",
    descMy:
      "အင်တက်, ဒီဇိုင်း, မလွယ်ကူတဲ့ multitasking အတွက်။ မီနီမယ်လ် အပြင်အဆင်နဲ့ စွမ်းအားညီညွတ်။",
    specs: ["16-inch", "32GB RAM", "1TB SSD", "Color-true panel"],
    specsMy: ["16 လက်မ", "32GB RAM", "1TB SSD", "အရောင်မှန် panel"],
    featuredRank: 2,
  },
  {
    id: "mono-pro-15",
    name: "Mono Pro 15",
    nameMy: "Mono Pro 15",
    category: "laptop",
    badge: "Performance",
    badgeMy: "စွမ်းဆောင်ရည်",
    priceCents: 189900,
    desc: "High-performance laptop with dedicated graphics for demanding creative and technical workloads.",
    descMy:
      "လိုအပ်ချက်မြင့်မားတဲ့ ဖန်တီးရေး/နည်းပညာ လုပ်ငန်းများအတွက် GPU ပါဝင်တဲ့ စွမ်းဆောင်ရည်မြင့် လက်ပ်တော့။",
    specs: ["15-inch", "32GB RAM", "1TB SSD", "RTX-class GPU"],
    specsMy: ["15 လက်မ", "32GB RAM", "1TB SSD", "RTX အဆင့် GPU"],
    featuredRank: 4,
  },
  {
    id: "mono-tower-s",
    name: "Mono Tower S",
    nameMy: "Mono Tower S",
    category: "desktop",
    badge: "Workstation",
    badgeMy: "လုပ်ငန်းသုံး",
    priceCents: 149900,
    desc: "A compact workstation tuned for airflow and low noise. Ideal for studio desks and small offices.",
    descMy:
      "လေဝင်လေထွက်ကောင်းပြီး အသံနိမ့်အောင်ညှိထားတဲ့ compact workstation။ စတူဒီယိုနဲ့ ရုံးသေးများအတွက် သင့်တော်။",
    specs: ["Quiet cooling", "32GB RAM", "1TB SSD", "Upgradeable"],
    specsMy: ["တိတ်ဆိတ် cooling", "32GB RAM", "1TB SSD", "အဆင့်မြှင့်နိုင်"],
    featuredRank: 3,
  },
  {
    id: "mono-tower-x",
    name: "Mono Tower X",
    nameMy: "Mono Tower X",
    category: "desktop",
    badge: "High-end",
    badgeMy: "အဆင့်မြင့်",
    priceCents: 249900,
    desc: "A powerful desktop for 3D, rendering, and heavy compute. Built for stability under sustained loads.",
    descMy:
      "3D၊ rendering၊ heavy compute အတွက် စွမ်းအားမြင့် desktop။ အမြဲတမ်း load အောက်မှာတောင် တည်ငြိမ်မှုကို ဦးစားပေးထားသည်။",
    specs: ["64GB RAM", "2TB SSD", "Pro GPU", "10GbE optional"],
    specsMy: ["64GB RAM", "2TB SSD", "Pro GPU", "10GbE (ရွေးချယ်နိုင်)"],
    featuredRank: 6,
  },
  {
    id: "mono-dock",
    name: "Mono Dock",
    nameMy: "Mono Dock",
    category: "accessory",
    badge: "Minimal",
    badgeMy: "မီနီမယ်လ်",
    priceCents: 14900,
    desc: "A clean desk dock for fast I/O and one-cable laptop setups.",
    descMy: "မြန်ဆန် I/O နဲ့ တစ်ကြိုးတည်း setup အတွက် သန့်ရှင်းတဲ့ desk dock။",
    specs: ["USB-C", "HDMI", "PD charging", "Aluminum body"],
    specsMy: ["USB-C", "HDMI", "PD အားသွင်း", "Aluminum ကိုယ်ထည်"],
    featuredRank: 7,
  },
  {
    id: "mono-sleeve",
    name: "Mono Sleeve",
    nameMy: "Mono Sleeve",
    category: "accessory",
    badge: "Essentials",
    badgeMy: "အခြေခံ",
    priceCents: 5900,
    desc: "A simple protective sleeve with soft lining and understated branding.",
    descMy: "နူးညံ့တဲ့ lining နဲ့ သပ်ရပ်တဲ့ branding ပါတဲ့ ကာကွယ်ရေး sleeve။",
    specs: ["14–16 inch", "Soft lining", "Weather resistant", "Magnetic flap"],
    specsMy: ["14–16 လက်မ", "Soft lining", "ရေစိုခံ", "Magnetic flap"],
    featuredRank: 8,
  },
];

function getProductText(p) {
  const isMy = activeLang === "my";
  return {
    name: isMy ? p.nameMy || p.name : p.name,
    badge: isMy ? p.badgeMy || p.badge : p.badge,
    desc: isMy ? p.descMy || p.desc : p.desc,
    specs: isMy ? p.specsMy || p.specs : p.specs,
  };
}

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
  const pt = getProductText(p);
  const wrap = document.createElement("article");
  wrap.className = "card product-card";
  wrap.setAttribute("data-cat", p.category);
  wrap.setAttribute("data-name", pt.name.toLowerCase());
  wrap.setAttribute("data-reveal", "1");

  const top = document.createElement("div");
  top.className = "product-top";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = pt.badge;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = formatUSD(p.priceCents);

  top.appendChild(badge);
  top.appendChild(price);

  const body = document.createElement("div");
  body.className = "product-body";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = pt.name;

  const desc = document.createElement("p");
  desc.className = "product-desc";
  desc.textContent = pt.desc;

  const specs = document.createElement("div");
  specs.className = "specs";
  pt.specs.slice(0, 4).forEach((s) => {
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
  details.textContent = t("products.card.ask");
  details.setAttribute(
    "aria-label",
    t("products.card.askAria", { name: pt.name })
  );

  const buy = document.createElement("a");
  buy.className = "btn btn-primary btn-small";
  buy.href = "contact.html";
  buy.textContent = t("products.card.buy");
  buy.setAttribute("aria-label", t("products.card.buyAria", { name: pt.name }));

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
  grid.innerHTML = "";

  const featured = [...PRODUCTS]
    .slice()
    .sort((a, b) => a.featuredRank - b.featuredRank)
    .filter((p) => p.featuredRank <= 4);

  featured.forEach((p) => grid.appendChild(productCard(p)));
  revealOnScroll();
}

function mountProductsPage() {
  const grid = qs("#productsGrid");
  if (!grid) return;

  if (productsPageCtx) {
    productsPageCtx.render();
    return;
  }

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
        const pt = getProductText(p);
        const hay = `${pt.name} ${pt.badge} ${pt.desc} ${pt.specs.join(" ")}`.toLowerCase();
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

  productsPageCtx = { render };
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

    setErr("cName", n ? "" : t("contact.err.name"));
    setErr("cEmail", isValidEmail(em) ? "" : t("contact.err.email"));
    setErr("cMsg", m ? "" : t("contact.err.message"));

    if (!n || !isValidEmail(em) || !m) return;

    const subject = encodeURIComponent(t("contact.mail.subject", { name: n }));
    const body = encodeURIComponent(
      `Name: ${n}\nEmail: ${em}\n\nMessage:\n${m}\n\n---\n${t("contact.mail.footer")}`
    );

    window.location.href = `mailto:sales@techzy.example?subject=${subject}&body=${body}`;
  });

  form.addEventListener("reset", () => {
    setErr("cName", "");
    setErr("cEmail", "");
    setErr("cMsg", "");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const initial = getSavedLang() || normalizeLang(navigator.language);
  applyI18n(initial);
  initLanguageSwitcher();
  initMobileMenu();

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
