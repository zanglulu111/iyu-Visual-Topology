// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyBUzXI033cgDkJVIb2lscHWuR1JK3vNgEw",
    authDomain: "marx-codex-iyu.firebaseapp.com",
    projectId: "marx-codex-iyu",
    storageBucket: "marx-codex-iyu.firebasestorage.app",
    messagingSenderId: "996452242527",
    appId: "1:996452242527:web:a4eb473879ca99447af7ea",
    measurementId: "G-GRRKZG929N"
};

// 初始化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 核心 DOM
const entryListEl = document.getElementById('entry-list');
const activeTitleEl = document.getElementById('active-entry-title');
const activeCatEl = document.getElementById('active-entry-category');
const resonanceContentEl = document.getElementById('resonance-content');
const visualsContentEl = document.getElementById('visuals-content');
const mParamsGridEl = document.getElementById('m-params-grid');
const formulaSection = document.getElementById('formula-section');
const searchInput = document.getElementById('search-input');
const tabBtns = document.querySelectorAll('.tab-btn');

let currentEntries = [];
let currentCategory = 'all';

/**
 * 启动：获取所有数据
 */
async function initApp() {
    try {
        const snapshot = await db.collection('codex_entries').orderBy('title').get();
        currentEntries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("加载到 " + currentEntries.length + " 个全量节点");
        renderCurrentEntries();
    } catch (err) {
        console.error("同步失败:", err);
        entryListEl.innerHTML = `<div class="entry-item" style="color:red">数据连接中断</div>`;
    }
}

/**
 * 渲染过滤后的词条列表
 */
function renderCurrentEntries() {
    entryListEl.innerHTML = '';
    const query = searchInput.value.toLowerCase();
    
    const filtered = currentEntries.filter(e => {
        const matchesCat = (currentCategory === 'all' || e.category === currentCategory);
        const matchesSearch = e.title.toLowerCase().includes(query) || e.id.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });

    filtered.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'entry-item';
        item.id = 'entry-' + entry.id;
        
        const isReconstructed = entry.status === 'reconstructed';
        const badgeClass = isReconstructed ? 'badge-reconstructed' : 'badge-raw';
        const badgeLabel = isReconstructed ? 'M-S' : 'RAW';

        item.innerHTML = `
            <h4>${entry.title} <span class="status-badge ${badgeClass}">${badgeLabel}</span></h4>
            <span>[${entry.category}] / ${entry.id}</span>
        `;
        item.onclick = () => selectEntry(entry.id);
        entryListEl.appendChild(item);
    });
}

/**
 * 详细展示逻辑
 */
function selectEntry(id) {
    const entry = currentEntries.find(e => e.id === id);
    if (!entry) return;

    activeTitleEl.innerText = entry.title;
    activeCatEl.innerText = `[${entry.category.toUpperCase()}]`;
    
    // UI Active 切换
    document.querySelectorAll('.entry-item').forEach(el => el.classList.toggle('active', el.id === 'entry-' + id));

    const content = entry.content_md || '';
    
    // 如果是重构过的马克思词条：按 M-S 逻辑渲染
    if (entry.status === 'reconstructed') {
        formulaSection.style.display = 'block';
        
        // 渲染参数仪表盘
        renderMParams(content);
        
        // 渲染 叙事共振 & 影像转译
        const resonance = extractSection(content, '叙事共振');
        const visuals = extractSection(content, '影像转译');
        renderMD(resonanceContentEl, resonance || '未找到共振数据');
        renderMD(visualsContentEl, visuals || '未找到影像指令');
        
    } else {
        // 如果是原生文档 (raw)：隐藏公式面板，展示全文或核心部分
        formulaSection.style.display = 'none';
        resonanceContentEl.innerHTML = '<h4>原生文档内容：</h4>' + renderMDText(content);
        visualsContentEl.innerHTML = '<h4>由于尚未进行爱欲望拓扑重构，影像转译指令待定。</h4>';
    }
}

/**
 * 辅助：提取 Markdown 区块
 */
function extractSection(text, keywords) {
    const regex = new RegExp(`#{2,4}[\\d\\.\\s]*${keywords}[\\s\\S]*?(?=#{2,4}|$)`, 'g');
    const match = text.match(regex);
    return match ? match[0] : null;
}

/**
 * 渲染 M 参数网格
 */
function renderMParams(text) {
    const params = ['M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'];
    mParamsGridEl.innerHTML = '';
    params.forEach(p => {
        const regex = new RegExp(`${p}.*?\\*\\*(.*?)\\*\\*`, 'i');
        const match = text.match(regex);
        const val = match ? match[1] : '待解构';
        const box = document.createElement('div');
        box.className = 'm-param-box';
        box.innerHTML = `<strong>${p}</strong> ${val}`;
        mParamsGridEl.appendChild(box);
    });
}

/**
 * 基础 MD 转 HTML
 */
function renderMD(container, text) {
    container.innerHTML = renderMDText(text);
}

function renderMDText(text) {
    return text
        .replace(/^#{4} (.*$)/gm, '<h4>$1</h4>')
        .replace(/^#{3} (.*$)/gm, '<h3>$1</h3>')
        .replace(/^#{2} (.*$)/gm, '<h2>$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\* (.*$)/gm, '<li>$1</li>')
        .replace(/^- (.*$)/gm, '<li>$1</li>');
}

// 交互切换逻辑
tabBtns.forEach(btn => {
    btn.onclick = () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        renderCurrentEntries();
    };
});

searchInput.oninput = () => renderCurrentEntries();

// 运行
initApp();
