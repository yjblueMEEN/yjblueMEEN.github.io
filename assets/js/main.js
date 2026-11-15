(() => {
  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const navCluster = document.querySelector(".nav-cluster");
  const menuToggle = document.querySelector(".menu-toggle");
  const progress = document.querySelector(".scroll-progress");
  const langButtons = [...document.querySelectorAll("[data-set-lang]")];
  const localFile = root.dataset.localFile === "true";

  // File URLs may not share localStorage between pages, so carry the choice
  // through local document links without changing the published site URLs.
  const setFileLinkLanguage = (language) => {
    if (!localFile) return;
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!/^[a-z0-9-]+\.html(?:[?#]|$)/i.test(href || "")) return;
      const url = new URL(link.href);
      url.searchParams.set("lang", language);
      link.setAttribute("href", href.split(/[?#]/)[0] + url.search + url.hash);
    });
  };

  const getLanguage = () => root.dataset.lang === "ko" ? "ko" : "en";

  const updateAccessibilityLabels = () => {
    const korean = getLanguage() === "ko";
    const open = menuToggle?.getAttribute("aria-expanded") === "true";
    document.querySelector(".wordmark")?.setAttribute("aria-label", korean ? "민영재 홈" : "Youngjae Meen home");
    document.querySelector(".site-nav")?.setAttribute("aria-label", korean ? "주요 메뉴" : "Primary navigation");
    document.querySelector(".language-switcher")?.setAttribute("aria-label", korean ? "언어 선택" : "Language");
    menuToggle?.setAttribute("aria-label", open ? (korean ? "메뉴 닫기" : "Close navigation") : (korean ? "메뉴 열기" : "Open navigation"));
    const localizedLabels = [
      [".phone-stack", "민영재가 설계하고 프로토타이핑한 최신 Watch Manager 화면", "Latest Watch Manager screens designed and prototyped by Youngjae Meen"],
      [".proof-bar-section", "주요 경력", "Career highlights"],
      [".research-proof", "리뷰 376만 건에서 최고 정확도 75.78%까지의 연구 흐름", "Research pipeline from 3.76 million reviews to 75.78 percent accuracy"],
      [".connected-phone-row", "최신 One UI 9 Watch Manager 화면", "Latest One UI 9 Watch Manager screens"],
      [".device-relationship", "Galaxy Watch, Ring, Buds를 연결하는 폰 허브", "Phone hub connecting Galaxy Watch, Ring, and Buds"],
      [".data-visual", "최고 정확도 75.78%를 보여 주는 모델 성능 시각화", "Model-performance visualization showing 75.78 percent top accuracy"],
      [".model-architecture", "평점 예측을 위한 2단 분류 구조", "Two-stage rating classification architecture"],
      [".metric-chart", "단일 단계부터 투표 모델까지의 정확도 비교", "Accuracy comparison from one-stage to voting"]
    ];
    localizedLabels.forEach(([selector, ko, en]) => {
      document.querySelector(selector)?.setAttribute("aria-label", korean ? ko : en);
    });
  };

  const readStoredLanguage = () => {
    try {
      return window.localStorage.getItem("portfolio-language");
    } catch (_) {
      return null;
    }
  };

  const writeStoredLanguage = (language) => {
    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch (_) {
      // The language still works for the current page when storage is unavailable.
    }
  };

  const setLanguage = (language, persist = true) => {
    const next = language === "ko" ? "ko" : "en";
    root.lang = next;
    root.dataset.lang = next;
    document.querySelectorAll(".lang-ko, .lang-en").forEach((element) => {
      const active = element.classList.contains(`lang-${next}`);
      element.setAttribute("aria-hidden", String(!active));
      if ("inert" in element) element.inert = !active;
    });

    langButtons.forEach((button) => {
      const selected = button.dataset.setLang === next;
      button.setAttribute("aria-pressed", String(selected));
    });

    document.querySelectorAll("[data-alt-ko][data-alt-en]").forEach((image) => {
      image.alt = image.dataset[next === "ko" ? "altKo" : "altEn"] || "";
    });

    document.querySelectorAll("[data-title-ko][data-title-en]").forEach((element) => {
      element.title = element.dataset[next === "ko" ? "titleKo" : "titleEn"] || "";
    });

    document.querySelectorAll("[data-label-ko][data-label-en]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[next === "ko" ? "labelKo" : "labelEn"] || "");
    });

    updateAccessibilityLabels();
    setFileLinkLanguage(next);

    if (persist) {
      writeStoredLanguage(next);
      if (localFile) {
        const url = new URL(location.href);
        url.searchParams.set("lang", next);
        try {
          history.replaceState(null, "", url.href);
        } catch (_) {
          // Other local documents still receive the language through their links.
        }
      }
    }
    document.dispatchEvent(new CustomEvent("portfolio:language", { detail: { language: next } }));
  };

  const initialLanguage = root.dataset.lang || readStoredLanguage() ||
    (navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en");
  setLanguage(initialLanguage, false);

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLang));
  });

  const closeMenu = (returnFocus = false) => {
    if (!menuToggle || !navCluster) return;
    menuToggle.setAttribute("aria-expanded", "false");
    navCluster.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    updateAccessibilityLabels();
    if (returnFocus) menuToggle.focus();
  };

  if (menuToggle && navCluster) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      navCluster.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
      updateAccessibilityLabels();
      if (open) navCluster.querySelector("a")?.focus();
    });

    if (!navCluster.id) navCluster.id = "site-navigation";
    menuToggle.setAttribute("aria-controls", navCluster.id);
    navCluster.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) closeMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu(true);
      if (event.key !== "Tab" || menuToggle.getAttribute("aria-expanded") !== "true") return;
      const focusable = [menuToggle, ...navCluster.querySelectorAll('a, button:not([disabled])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  const updateScrollState = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    if (progress) {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const revealItems = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
      history.replaceState(null, "", id);
      if (target.matches("[tabindex], a[href]")) target.focus({ preventScroll: true });
    });
  });
})();
