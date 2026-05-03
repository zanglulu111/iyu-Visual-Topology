const philosophers = [
  {
    id: "plato",
    name: "柏拉图",
    en: "Plato",
    era: "公元前 427-347",
    school: "古典",
    vector: "理念型谱系起点",
    thesis: "把可见世界折叠成影像，把真理移入理念的高处；政治、灵魂与知识在同一套垂直结构里被重新排列。",
    axis: "理念 / 洞穴 / 城邦",
    method: "以对话制造上升运动，让意见在辩证法中被迫显形。",
    risk: "理念一旦成为唯一尺度，现实的裂缝会被误认为低级摹本。",
    tags: ["理念论", "洞穴寓言", "理想国", "灵魂三分"],
    image: "assets/philosophers/plato-infographic.png",
    color: "#55d4c4",
    x: 47,
    y: 22
  },
  {
    id: "zhuangzi",
    name: "庄子",
    en: "Zhuangzi",
    era: "约公元前 369-286",
    school: "道家",
    vector: "逍遥型变形学",
    thesis: "用寓言和梦境松开秩序的扣子，让主体从功用、名称和尺度里侧身而过。",
    axis: "齐物 / 逍遥 / 梦蝶",
    method: "取消固定视角，把万物差异转化为游移的观看位置。",
    risk: "极致的自由可能滑向不可传达，像风穿过没有刻度的器皿。",
    tags: ["齐物论", "逍遥游", "梦蝶", "无用之用"],
    image: "assets/philosophers/05-zhuangzi.png",
    color: "#d7b56d",
    x: 30,
    y: 36
  },
  {
    id: "kant",
    name: "康德",
    en: "Immanuel Kant",
    era: "1724-1804",
    school: "批判",
    vector: "先验边界工程",
    thesis: "不再追问世界自身如何，而是追问经验得以成立的条件；理性被安置在自我立法的边界上。",
    axis: "先验 / 范畴 / 崇高",
    method: "为认识划定合法领土，再把自由安放到实践理性的法庭。",
    risk: "边界越精确，物自身越像一枚无法拆封的黑匣。",
    tags: ["纯粹理性", "范畴", "物自身", "道德律"],
    image: "assets/philosophers/kant-infographic.png",
    color: "#8f80ff",
    x: 55,
    y: 40
  },
  {
    id: "hegel",
    name: "黑格尔",
    en: "G. W. F. Hegel",
    era: "1770-1831",
    school: "辩证",
    vector: "否定性发动机",
    thesis: "让矛盾成为历史的动力，使精神在自我异化与回返中获得形状。",
    axis: "否定 / 承认 / 绝对精神",
    method: "把对立推进到自身崩解处，在扬弃中保存并改写它。",
    risk: "总体性太强时，偶然的痛感会被吸收成历史的必要环节。",
    tags: ["辩证法", "主奴关系", "扬弃", "绝对知识"],
    color: "#c87945",
    x: 66,
    y: 30
  },
  {
    id: "marx",
    name: "马克思",
    en: "Karl Marx",
    era: "1818-1883",
    school: "政治经济",
    vector: "物质历史剖面",
    thesis: "把哲学从观念天空拽回生产现场，揭示商品、劳动、阶级和意识形态如何彼此缝合。",
    axis: "资本 / 劳动 / 阶级",
    method: "从商品形式切入，追踪抽象如何在现实关系中获得暴力。",
    risk: "结构分析若失去感性材料，会变成另一种冷硬的命运论。",
    tags: ["剩余价值", "异化劳动", "商品拜物教", "历史唯物主义"],
    color: "#a43f45",
    x: 72,
    y: 52
  },
  {
    id: "nietzsche",
    name: "尼采",
    en: "Friedrich Nietzsche",
    era: "1844-1900",
    school: "谱系",
    vector: "价值爆破装置",
    thesis: "把真理、善和主体都放回力量关系中检查；思想不再是冷静镜面，而是价值创造的战场。",
    axis: "权力意志 / 永恒轮回 / 酒神",
    method: "用格言、谱系学和风格强度拆开道德的起源叙事。",
    risk: "强度太迷人时，批判可能被误读成粗暴的姿态崇拜。",
    tags: ["权力意志", "谱系学", "超人", "永恒轮回"],
    image: "assets/philosophers/nietzsche-infographic.png",
    color: "#f06449",
    x: 62,
    y: 68
  },
  {
    id: "freud",
    name: "弗洛伊德",
    en: "Sigmund Freud",
    era: "1856-1939",
    school: "精神分析",
    vector: "无意识考古学",
    thesis: "把主体从自明性中夺回，显示梦、口误、症状和欲望如何在暗处组织生活。",
    axis: "无意识 / 欲望 / 症状",
    method: "沿着症状的缝隙逆向追踪，被压抑者在语言中返回。",
    risk: "解释机器太顺滑时，活生生的痛苦会被压缩成案例结构。",
    tags: ["无意识", "梦的解析", "力比多", "压抑"],
    color: "#55d4c4",
    x: 45,
    y: 68
  },
  {
    id: "lacan",
    name: "拉康",
    en: "Jacques Lacan",
    era: "1901-1981",
    school: "精神分析",
    vector: "语言拓扑学",
    thesis: "无意识像语言一样结构化，主体在能指链中被切开，并围绕欲望对象持续绕行。",
    axis: "想象界 / 象征界 / 实在界",
    method: "用拓扑、公式和反常句法迫使主体遭遇自身的缺口。",
    risk: "形式化若脱离临床锋面，会变成漂亮但空转的机器。",
    tags: ["镜像阶段", "大他者", "对象a", "三界"],
    color: "#8f80ff",
    x: 36,
    y: 62
  },
  {
    id: "foucault",
    name: "福柯",
    en: "Michel Foucault",
    era: "1926-1984",
    school: "谱系",
    vector: "权力微物理学",
    thesis: "权力不是单一王座，而是散布在规训、知识、制度和身体技术中的细密网络。",
    axis: "知识 / 权力 / 规训",
    method: "考古学定位话语断层，谱系学追踪制度如何制造主体。",
    risk: "处处皆权力时，抵抗的位置需要更精细地被标出来。",
    tags: ["话语", "规训", "生命政治", "主体化"],
    color: "#d7b56d",
    x: 22,
    y: 52
  },
  {
    id: "deleuze",
    name: "德勒兹",
    en: "Gilles Deleuze",
    era: "1925-1995",
    school: "生成",
    vector: "差异生成机器",
    thesis: "思想不是再现同一，而是在差异、强度、块茎和生成中不断改写自身。",
    axis: "差异 / 生成 / 块茎",
    method: "用概念创造逃逸线，让结构从中心化树形转向多入口网络。",
    risk: "流动性若没有阻力，会失去真正的切割能力。",
    tags: ["差异与重复", "块茎", "生成", "无器官身体"],
    color: "#55d4c4",
    x: 18,
    y: 72
  },
  {
    id: "arendt",
    name: "阿伦特",
    en: "Hannah Arendt",
    era: "1906-1975",
    school: "政治存在论",
    vector: "公共行动剧场",
    thesis: "政治并非管理技术，而是人在公共空间中以言说和行动显现自身的能力。",
    axis: "行动 / 公共性 / 极权",
    method: "区分劳动、制作与行动，让政治重新获得可见的舞台。",
    risk: "公共性的高贵想象需要面对现代制度的复杂泥沙。",
    tags: ["人的境况", "公共领域", "平庸之恶", "行动"],
    color: "#c87945",
    x: 80,
    y: 74
  },
  {
    id: "zizek",
    name: "齐泽克",
    en: "Slavoj Zizek",
    era: "1949-",
    school: "意识形态",
    vector: "症候式短路",
    thesis: "把黑格尔、拉康和大众文化接入同一电路，追踪意识形态如何在笑话和日常欲望里继续运行。",
    axis: "实在界 / 意识形态 / 反讽",
    method: "通过悖论、电影和粗粝例子，把理论推到它最尴尬也最发光的位置。",
    risk: "短路太频繁时，真正的政治判断会被表演性火花遮住。",
    tags: ["意识形态幻象", "实在界", "犬儒主义", "视差"],
    color: "#a43f45",
    x: 84,
    y: 42
  }
];

const schools = ["全部", ...Array.from(new Set(philosophers.map((item) => item.school)))];
const links = [
  ["plato", "kant"], ["plato", "hegel"], ["zhuangzi", "deleuze"], ["kant", "hegel"],
  ["hegel", "marx"], ["hegel", "zizek"], ["marx", "foucault"], ["marx", "zizek"],
  ["nietzsche", "foucault"], ["nietzsche", "deleuze"], ["freud", "lacan"],
  ["lacan", "zizek"], ["foucault", "arendt"], ["deleuze", "lacan"]
];

let activeId = philosophers[0].id;
let activeSchool = "全部";
let query = "";

const grid = document.querySelector("#atlas-grid");
const dossier = document.querySelector("#dossier");
const orbit = document.querySelector("#orbit-map");
const schoolNav = document.querySelector("#school-nav");
const searchInput = document.querySelector("#search-input");
const timeline = document.querySelector("#timeline-rail");
const heroName = document.querySelector("#hero-active-name");
const heroVector = document.querySelector("#hero-active-vector");
const activeEra = document.querySelector("#active-era");
const metricCount = document.querySelector("#metric-count");

function getFiltered() {
  const normalized = query.trim().toLowerCase();
  return philosophers.filter((item) => {
    const inSchool = activeSchool === "全部" || item.school === activeSchool;
    const haystack = [item.name, item.en, item.era, item.school, item.vector, item.axis, ...item.tags].join(" ").toLowerCase();
    return inSchool && (!normalized || haystack.includes(normalized));
  });
}

function bustMarkup(item) {
  if (item.image) {
    return `<img src="${item.image}" alt="${item.name} 图鉴视觉">`;
  }
  return `<div class="fallback-bust" aria-hidden="true">${item.name.slice(0, 1)}</div>`;
}

function renderSchools() {
  schoolNav.innerHTML = schools.map((school) => `
    <button class="filter-pill ${school === activeSchool ? "active" : ""}" type="button" data-school="${school}">
      ${school}
    </button>
  `).join("");
}

function renderGrid() {
  const filtered = getFiltered();
  metricCount.textContent = filtered.length;
  grid.innerHTML = filtered.map((item, index) => `
    <button class="philosopher-card ${item.id === activeId ? "active" : ""}" type="button" data-id="${item.id}" style="--accent-color: ${item.color}; transition-delay: ${index * 24}ms">
      <div class="card-media">
        ${bustMarkup(item)}
        <span class="card-school">${item.school}</span>
      </div>
      <span class="card-era">${item.era}</span>
      <h3>${item.name}</h3>
      <p>${item.vector}</p>
      <div class="card-footer">
        <span>${item.en}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
    </button>
  `).join("");
  attachCardTilt();
}

function renderDossier() {
  const item = philosophers.find((entry) => entry.id === activeId) || philosophers[0];
  heroName.textContent = item.name;
  heroVector.textContent = item.vector;
  activeEra.textContent = item.era;
  document.documentElement.style.setProperty("--teal", item.color);

  dossier.innerHTML = `
    <div class="dossier-layout" style="--accent-color: ${item.color}">
      <div class="portrait-plate">
        ${bustMarkup(item)}
        <span class="plate-index">${item.en}</span>
      </div>
      <div class="dossier-content">
        <p class="dossier-kicker">${item.school} / ${item.era}</p>
        <h2>${item.name}</h2>
        <h3>${item.en}</h3>
        <p class="dossier-thesis">${item.thesis}</p>
        <div class="concept-strip">
          ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="vector-panel">
          <div class="vector-row"><b>Axis</b><span>${item.axis}</span></div>
          <div class="vector-row"><b>Method</b><span>${item.method}</span></div>
          <div class="vector-row"><b>Risk</b><span>${item.risk}</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderOrbit() {
  const filteredIds = new Set(getFiltered().map((item) => item.id));
  const activeLinks = links.filter(([a, b]) => filteredIds.has(a) && filteredIds.has(b));
  const nodeMap = new Map(philosophers.map((item) => [item.id, item]));

  const lines = activeLinks.map(([a, b]) => {
    const first = nodeMap.get(a);
    const second = nodeMap.get(b);
    return `<line x1="${first.x}%" y1="${first.y}%" x2="${second.x}%" y2="${second.y}%"></line>`;
  }).join("");

  const nodes = getFiltered().map((item) => `
    <button class="orbit-node ${item.id === activeId ? "active" : ""}" type="button" data-id="${item.id}" style="left:${item.x}%; top:${item.y}%; --accent-color:${item.color}">
      <b>${item.name.slice(0, 1)}</b>
      <small>${item.name}</small>
    </button>
  `).join("");

  orbit.innerHTML = `<svg class="orbit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">${lines}</svg>${nodes}`;
}

function renderTimeline() {
  timeline.innerHTML = philosophers.map((item) => `
    <button class="timeline-mark ${item.id === activeId ? "active" : ""}" type="button" data-id="${item.id}">
      <b>${item.name}</b>
      <span>${item.era}</span>
    </button>
  `).join("");
}

function selectPhilosopher(id, shouldScroll = false) {
  activeId = id;
  renderDossier();
  renderGrid();
  renderOrbit();
  renderTimeline();
  if (shouldScroll) {
    document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function attachCardTilt() {
  document.querySelectorAll(".philosopher-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function wireEvents() {
  document.addEventListener("click", (event) => {
    const schoolButton = event.target.closest("[data-school]");
    const idButton = event.target.closest("[data-id]");

    if (schoolButton) {
      activeSchool = schoolButton.dataset.school;
      renderSchools();
      renderGrid();
      renderOrbit();
    }

    if (idButton) {
      selectPhilosopher(idButton.dataset.id, idButton.classList.contains("orbit-node"));
    }
  });

  searchInput.addEventListener("input", (event) => {
    query = event.target.value;
    renderGrid();
    renderOrbit();
  });

  document.querySelector("#enter-atlas").addEventListener("click", () => {
    document.querySelector("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.querySelector("#shuffle-btn").addEventListener("click", () => {
    const visible = getFiltered();
    const pool = visible.length ? visible : philosophers;
    const next = pool[Math.floor(Math.random() * pool.length)];
    selectPhilosopher(next.id, true);
  });

  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
    document.documentElement.style.setProperty("--my", `${event.clientY}px`);
  }, { passive: true });
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.16 });

  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}

function initThoughtField() {
  const canvas = document.querySelector("#thought-field");
  const ctx = canvas.getContext("2d");
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) return;

  let width = 0;
  let height = 0;
  let points = [];
  let pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.42 };

  function resize() {
    width = canvas.width = Math.floor(window.innerWidth * window.devicePixelRatio);
    height = canvas.height = Math.floor(window.innerHeight * window.devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    points = Array.from({ length: Math.min(86, Math.floor(window.innerWidth / 16)) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.5
    }));
  }

  function step() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = "lighter";

    points.forEach((point, index) => {
      const dx = pointer.x - point.x;
      const dy = pointer.y - point.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 190) {
        point.vx -= dx * 0.000002;
        point.vy -= dy * 0.000002;
      }

      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -20) point.x = window.innerWidth + 20;
      if (point.x > window.innerWidth + 20) point.x = -20;
      if (point.y < -20) point.y = window.innerHeight + 20;
      if (point.y > window.innerHeight + 20) point.y = -20;

      ctx.beginPath();
      ctx.fillStyle = "rgba(245, 232, 199, 0.42)";
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fill();

      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const next = points[nextIndex];
        const lineDistance = Math.hypot(point.x - next.x, point.y - next.y);
        if (lineDistance < 118) {
          ctx.strokeStyle = `rgba(85, 212, 196, ${0.11 * (1 - lineDistance / 118)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
  }, { passive: true });

  resize();
  step();
}

renderSchools();
renderDossier();
renderGrid();
renderOrbit();
renderTimeline();
wireEvents();
revealOnScroll();
initThoughtField();
