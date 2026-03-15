import React, { useState, useMemo } from 'react';
import { BookOpen, Users, Zap, GitBranch, ChevronRight, Search, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Philosopher {
  id: string;
  name: string;
  nameEn: string;
  years: string;
  school: string;
  avatar?: string;
  color: string;
}

interface Work {
  title: string;
  titleEn: string;
  year: number;
}

interface School {
  id: string;
  name: string;
  nameEn: string;
  period: string;
  color: string;
  description: string;
  descriptionEn: string;
  keyIdeas: string[];
  keyIdeasEn: string[];
  philosophers: Philosopher[];
  works: Work[];
  influences: string[]; // IDs of schools that influenced this one
  conflicts: string[]; // IDs of schools in conflict
}

const PHILOSOPHY_SCHOOLS: School[] = [
  {
    id: 'phenomenology',
    name: '现象学',
    nameEn: 'Phenomenology',
    period: '1900-1950',
    color: '#E63946',
    description: '回到事物本身,悬置自然态度,探索意识的本质结构',
    descriptionEn: 'Return to things themselves, suspend natural attitude, explore essential structures of consciousness',
    keyIdeas: ['意向性', '本质直观', '生活世界', '时间意识'],
    keyIdeasEn: ['Intentionality', 'Eidetic Intuition', 'Lifeworld', 'Time-Consciousness'],
    philosophers: [
      { id: 'husserl', name: '胡塞尔', nameEn: 'Edmund Husserl', years: '1859-1938', school: 'phenomenology', color: '#E63946' },
      { id: 'heidegger', name: '海德格尔', nameEn: 'Martin Heidegger', years: '1889-1976', school: 'phenomenology', color: '#E63946' },
      { id: 'merleau-ponty', name: '梅洛-庞蒂', nameEn: 'Maurice Merleau-Ponty', years: '1908-1961', school: 'phenomenology', color: '#E63946' }
    ],
    works: [
      { title: '逻辑研究', titleEn: 'Logical Investigations', year: 1900 },
      { title: '存在与时间', titleEn: 'Being and Time', year: 1927 },
      { title: '知觉现象学', titleEn: 'Phenomenology of Perception', year: 1945 }
    ],
    influences: [],
    conflicts: ['logical-positivism']
  },
  {
    id: 'existentialism',
    name: '存在主义',
    nameEn: 'Existentialism',
    period: '1930-1970',
    color: '#457B9D',
    description: '存在先于本质,强调个体自由、选择与责任,面对荒诞的人类处境',
    descriptionEn: 'Existence precedes essence, emphasizes individual freedom, choice and responsibility in absurd human condition',
    keyIdeas: ['自由', '荒诞', '真实性', '焦虑'],
    keyIdeasEn: ['Freedom', 'Absurdity', 'Authenticity', 'Anxiety'],
    philosophers: [
      { id: 'sartre', name: '萨特', nameEn: 'Jean-Paul Sartre', years: '1905-1980', school: 'existentialism', color: '#457B9D' },
      { id: 'camus', name: '加缪', nameEn: 'Albert Camus', years: '1913-1960', school: 'existentialism', color: '#457B9D' },
      { id: 'beauvoir', name: '波伏娃', nameEn: 'Simone de Beauvoir', years: '1908-1986', school: 'existentialism', color: '#457B9D' }
    ],
    works: [
      { title: '存在与虚无', titleEn: 'Being and Nothingness', year: 1943 },
      { title: '西西弗神话', titleEn: 'The Myth of Sisyphus', year: 1942 },
      { title: '第二性', titleEn: 'The Second Sex', year: 1949 }
    ],
    influences: ['phenomenology'],
    conflicts: ['structuralism']
  },
  {
    id: 'structuralism',
    name: '结构主义',
    nameEn: 'Structuralism',
    period: '1950-1970',
    color: '#F1A208',
    description: '关注深层结构而非表层现象,语言、文化、心理的共时性系统分析',
    descriptionEn: 'Focus on deep structures over surface phenomena, synchronic analysis of language, culture, psyche',
    keyIdeas: ['符号系统', '二元对立', '共时性', '结构决定论'],
    keyIdeasEn: ['Sign Systems', 'Binary Opposition', 'Synchrony', 'Structural Determinism'],
    philosophers: [
      { id: 'saussure', name: '索绪尔', nameEn: 'Ferdinand de Saussure', years: '1857-1913', school: 'structuralism', color: '#F1A208' },
      { id: 'levi-strauss', name: '列维-斯特劳斯', nameEn: 'Claude Lévi-Strauss', years: '1908-2009', school: 'structuralism', color: '#F1A208' },
      { id: 'lacan-early', name: '拉康(早期)', nameEn: 'Jacques Lacan (Early)', years: '1901-1981', school: 'structuralism', color: '#F1A208' }
    ],
    works: [
      { title: '普通语言学教程', titleEn: 'Course in General Linguistics', year: 1916 },
      { title: '野性的思维', titleEn: 'The Savage Mind', year: 1962 },
      { title: '文集', titleEn: 'Écrits', year: 1966 }
    ],
    influences: [],
    conflicts: ['existentialism']
  },
  {
    id: 'poststructuralism',
    name: '后结构主义',
    nameEn: 'Post-Structuralism',
    period: '1960-1990',
    color: '#A8DADC',
    description: '解构中心、本质与二元对立,强调差异、延异与能指的无限游戏',
    descriptionEn: 'Deconstruct center, essence and binary oppositions, emphasize difference, différance and infinite play of signifiers',
    keyIdeas: ['解构', '差异', '权力/知识', '能指链'],
    keyIdeasEn: ['Deconstruction', 'Différance', 'Power/Knowledge', 'Signifying Chain'],
    philosophers: [
      { id: 'derrida', name: '德里达', nameEn: 'Jacques Derrida', years: '1930-2004', school: 'poststructuralism', color: '#A8DADC' },
      { id: 'foucault', name: '福柯', nameEn: 'Michel Foucault', years: '1926-1984', school: 'poststructuralism', color: '#A8DADC' },
      { id: 'deleuze', name: '德勒兹', nameEn: 'Gilles Deleuze', years: '1925-1995', school: 'poststructuralism', color: '#A8DADC' }
    ],
    works: [
      { title: '论文字学', titleEn: 'Of Grammatology', year: 1967 },
      { title: '规训与惩罚', titleEn: 'Discipline and Punish', year: 1975 },
      { title: '反俄狄浦斯', titleEn: 'Anti-Oedipus', year: 1972 }
    ],
    influences: ['structuralism', 'phenomenology'],
    conflicts: []
  },
  {
    id: 'psychoanalysis',
    name: '精神分析',
    nameEn: 'Psychoanalysis',
    period: '1900-present',
    color: '#D4AF37',
    description: '无意识、欲望、主体的分裂结构,从弗洛伊德到拉康的理论演进',
    descriptionEn: 'Unconscious, desire, split structure of subject, from Freud to Lacan',
    keyIdeas: ['无意识', '欲望', '主体分裂', '实在界'],
    keyIdeasEn: ['Unconscious', 'Desire', 'Split Subject', 'The Real'],
    philosophers: [
      { id: 'freud', name: '弗洛伊德', nameEn: 'Sigmund Freud', years: '1856-1939', school: 'psychoanalysis', color: '#D4AF37' },
      { id: 'lacan', name: '拉康', nameEn: 'Jacques Lacan', years: '1901-1981', school: 'psychoanalysis', color: '#D4AF37' },
      { id: 'zizek', name: '齐泽克', nameEn: 'Slavoj Žižek', years: '1949-', school: 'psychoanalysis', color: '#D4AF37' }
    ],
    works: [
      { title: '梦的解析', titleEn: 'The Interpretation of Dreams', year: 1900 },
      { title: '文集', titleEn: 'Écrits', year: 1966 },
      { title: '意识形态的崇高客体', titleEn: 'The Sublime Object of Ideology', year: 1989 }
    ],
    influences: ['phenomenology'],
    conflicts: []
  },
  {
    id: 'frankfurt-school',
    name: '法兰克福学派',
    nameEn: 'Frankfurt School',
    period: '1930-1980',
    color: '#8B4513',
    description: '批判理论,文化工业批判,启蒙辩证法与交往理性',
    descriptionEn: 'Critical theory, critique of culture industry, dialectic of enlightenment and communicative rationality',
    keyIdeas: ['批判理论', '文化工业', '工具理性', '交往行动'],
    keyIdeasEn: ['Critical Theory', 'Culture Industry', 'Instrumental Reason', 'Communicative Action'],
    philosophers: [
      { id: 'adorno', name: '阿多诺', nameEn: 'Theodor Adorno', years: '1903-1969', school: 'frankfurt-school', color: '#8B4513' },
      { id: 'horkheimer', name: '霍克海默', nameEn: 'Max Horkheimer', years: '1895-1973', school: 'frankfurt-school', color: '#8B4513' },
      { id: 'habermas', name: '哈贝马斯', nameEn: 'Jürgen Habermas', years: '1929-', school: 'frankfurt-school', color: '#8B4513' }
    ],
    works: [
      { title: '启蒙辩证法', titleEn: 'Dialectic of Enlightenment', year: 1947 },
      { title: '否定辩证法', titleEn: 'Negative Dialectics', year: 1966 },
      { title: '交往行动理论', titleEn: 'Theory of Communicative Action', year: 1981 }
    ],
    influences: [],
    conflicts: ['logical-positivism']
  },
  {
    id: 'logical-positivism',
    name: '逻辑实证主义',
    nameEn: 'Logical Positivism',
    period: '1920-1960',
    color: '#6A4C93',
    description: '科学哲学,可证实性原则,拒斥形而上学',
    descriptionEn: 'Philosophy of science, verifiability principle, rejection of metaphysics',
    keyIdeas: ['可证实性', '逻辑分析', '科学统一', '拒斥形而上学'],
    keyIdeasEn: ['Verifiability', 'Logical Analysis', 'Unity of Science', 'Anti-Metaphysics'],
    philosophers: [
      { id: 'carnap', name: '卡尔纳普', nameEn: 'Rudolf Carnap', years: '1891-1970', school: 'logical-positivism', color: '#6A4C93' },
      { id: 'ayer', name: '艾耶尔', nameEn: 'A.J. Ayer', years: '1910-1989', school: 'logical-positivism', color: '#6A4C93' },
      { id: 'schlick', name: '石里克', nameEn: 'Moritz Schlick', years: '1882-1936', school: 'logical-positivism', color: '#6A4C93' }
    ],
    works: [
      { title: '世界的逻辑构造', titleEn: 'The Logical Structure of the World', year: 1928 },
      { title: '语言、真理与逻辑', titleEn: 'Language, Truth and Logic', year: 1936 }
    ],
    influences: [],
    conflicts: ['phenomenology', 'frankfurt-school']
  }
];

interface PhilosophyTimelineProps {
  lang: 'CN' | 'EN';
}

export const PhilosophyTimeline: React.FC<PhilosophyTimelineProps> = ({ lang }) => {
  const { theme } = useTheme();
  const isRetro = theme === 'retro';

  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [hoveredSchool, setHoveredSchool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'influences' | 'conflicts'>('all');

  const activeSchool = useMemo(() => {
    const id = hoveredSchool || selectedSchool;
    return id ? PHILOSOPHY_SCHOOLS.find(s => s.id === id) : null;
  }, [hoveredSchool, selectedSchool]);

  const filteredSchools = useMemo(() => {
    let schools = PHILOSOPHY_SCHOOLS;

    if (searchQuery) {
      schools = schools.filter(s =>
        s.name.includes(searchQuery) ||
        s.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.philosophers.some(p => p.name.includes(searchQuery) || p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (filterType !== 'all' && activeSchool) {
      const relatedIds = filterType === 'influences' ? activeSchool.influences : activeSchool.conflicts;
      schools = schools.filter(s => relatedIds.includes(s.id) || s.id === activeSchool.id);
    }

    return schools;
  }, [searchQuery, filterType, activeSchool]);

  const getRelationship = (schoolId: string): 'influence' | 'conflict' | null => {
    if (!activeSchool || schoolId === activeSchool.id) return null;
    if (activeSchool.influences.includes(schoolId)) return 'influence';
    if (activeSchool.conflicts.includes(schoolId)) return 'conflict';
    return null;
  };

  return (
    <div className="flex flex-col h-full w-full bg-[var(--bg-main)] text-[var(--text-main)]">

      {/* Header */}
      <div className={`px-8 py-6 border-b ${isRetro ? 'border-[var(--border-main)]' : 'border-white/10'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen size={20} className="text-gold-primary" />
            <h1 className={`text-2xl font-bold ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'}`}>
              {lang === 'CN' ? '哲学时间轴' : 'Philosophy Timeline'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'CN' ? '搜索流派或哲学家...' : 'Search schools or philosophers...'}
                className={`pl-9 pr-4 py-2 rounded-md text-sm ${
                  isRetro
                    ? 'bg-white/40 border border-black/20 text-black placeholder:text-black/40'
                    : 'bg-black/20 border border-white/10 text-white placeholder:text-zinc-400'
                }`}
              />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className={`px-3 py-2 rounded-md text-sm ${
                isRetro
                  ? 'bg-white/40 border border-black/20 text-black'
                  : 'bg-black/20 border border-white/10 text-white'
              }`}
            >
              <option value="all">{lang === 'CN' ? '全部' : 'All'}</option>
              <option value="influences">{lang === 'CN' ? '影响关系' : 'Influences'}</option>
              <option value="conflicts">{lang === 'CN' ? '冲突关系' : 'Conflicts'}</option>
            </select>
          </div>
        </div>

        <p className={`text-sm ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
          {lang === 'CN'
            ? '20世纪哲学流派的交互时间轴 // 探索思想的碰撞与演进'
            : '20th Century Philosophy Interactive Timeline // Explore Collisions and Evolution of Ideas'}
        </p>
      </div>

      <div className="flex-1 flex overflow-hidden">

        {/* Timeline Area */}
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            {filteredSchools.map((school) => {
              const relationship = getRelationship(school.id);
              const isActive = activeSchool?.id === school.id;

              return (
                <div
                  key={school.id}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `border-[${school.color}] bg-[${school.color}]/10 scale-[1.02]`
                      : relationship === 'influence'
                      ? 'border-green-500/50 bg-green-500/5'
                      : relationship === 'conflict'
                      ? 'border-red-500/50 bg-red-500/5'
                      : isRetro
                      ? 'border-[var(--border-main)] bg-white/5 hover:bg-white/10'
                      : 'border-white/10 bg-black/20 hover:bg-black/30'
                  }`}
                  onClick={() => setSelectedSchool(school.id)}
                  onMouseEnter={() => setHoveredSchool(school.id)}
                  onMouseLeave={() => setHoveredSchool(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: school.color }}
                        />
                        <h3 className={`text-xl font-bold ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'}`}>
                          {lang === 'CN' ? school.name : school.nameEn}
                        </h3>
                        <span className={`text-sm ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
                          {school.period}
                        </span>
                      </div>
                      <p className={`text-sm ${isRetro ? 'text-[var(--text-main)]' : 'text-zinc-300'} mb-3`}>
                        {lang === 'CN' ? school.description : school.descriptionEn}
                      </p>

                      {/* Key Ideas */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(lang === 'CN' ? school.keyIdeas : school.keyIdeasEn).map((idea, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded text-xs font-bold"
                            style={{
                              backgroundColor: `${school.color}20`,
                              color: school.color,
                              border: `1px solid ${school.color}40`
                            }}
                          >
                            {idea}
                          </span>
                        ))}
                      </div>
                    </div>

                    {relationship && (
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        relationship === 'influence'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                          : 'bg-red-500/20 text-red-400 border border-red-500/50'
                      }`}>
                        {relationship === 'influence'
                          ? (lang === 'CN' ? '影响' : 'Influence')
                          : (lang === 'CN' ? '冲突' : 'Conflict')
                        }
                      </div>
                    )}
                  </div>

                  {/* Philosophers */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    {school.philosophers.map((phil) => (
                      <div
                        key={phil.id}
                        className={`p-3 rounded border ${
                          isRetro
                            ? 'bg-white/5 border-[var(--border-main)]'
                            : 'bg-black/20 border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Users size={14} style={{ color: school.color }} />
                          <span className={`text-sm font-bold ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'}`}>
                            {lang === 'CN' ? phil.name : phil.nameEn}
                          </span>
                        </div>
                        <span className={`text-xs ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
                          {phil.years}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Representative Works */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-primary/60">
                      <Zap size={12} />
                      {lang === 'CN' ? '代表作品' : 'Key Works'}
                    </div>
                    {school.works.map((work, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <ChevronRight size={14} className="text-gold-primary/40" />
                        <span className={isRetro ? 'text-[var(--text-main)]' : 'text-zinc-300'}>
                          {lang === 'CN' ? work.title : work.titleEn}
                        </span>
                        <span className={`text-xs ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>
                          ({work.year})
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Relationships */}
                  {(school.influences.length > 0 || school.conflicts.length > 0) && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex gap-6">
                        {school.influences.length > 0 && (
                          <div className="flex items-center gap-2">
                            <GitBranch size={14} className="text-green-400" />
                            <span className="text-xs text-green-400">
                              {lang === 'CN' ? '受影响于: ' : 'Influenced by: '}
                              {school.influences.map(id =>
                                PHILOSOPHY_SCHOOLS.find(s => s.id === id)?.[lang === 'CN' ? 'name' : 'nameEn']
                              ).join(', ')}
                            </span>
                          </div>
                        )}
                        {school.conflicts.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Zap size={14} className="text-red-400" />
                            <span className="text-xs text-red-400">
                              {lang === 'CN' ? '冲突于: ' : 'Conflicts with: '}
                              {school.conflicts.map(id =>
                                PHILOSOPHY_SCHOOLS.find(s => s.id === id)?.[lang === 'CN' ? 'name' : 'nameEn']
                              ).join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Panel */}
        {activeSchool && (
          <div className={`w-96 border-l ${isRetro ? 'border-[var(--border-main)] bg-[var(--bg-panel)]' : 'border-white/10 bg-black/40'} p-6 overflow-y-auto custom-scrollbar`}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: activeSchool.color }}
                />
                <h2 className={`text-2xl font-bold ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'}`}>
                  {lang === 'CN' ? activeSchool.name : activeSchool.nameEn}
                </h2>
              </div>
              <p className={`text-sm ${isRetro ? 'text-[var(--text-main)]' : 'text-zinc-300'} leading-relaxed`}>
                {lang === 'CN' ? activeSchool.description : activeSchool.descriptionEn}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-primary/60 mb-3">
                  {lang === 'CN' ? '核心思想' : 'Key Ideas'}
                </h3>
                <div className="space-y-2">
                  {(lang === 'CN' ? activeSchool.keyIdeas : activeSchool.keyIdeasEn).map((idea, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeSchool.color }} />
                      <span className={`text-sm ${isRetro ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                        {idea}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-primary/60 mb-3">
                  {lang === 'CN' ? '代表人物' : 'Key Figures'}
                </h3>
                <div className="space-y-3">
                  {activeSchool.philosophers.map((phil) => (
                    <div
                      key={phil.id}
                      className={`p-3 rounded border ${
                        isRetro
                          ? 'bg-white/5 border-[var(--border-main)]'
                          : 'bg-black/20 border-white/10'
                      }`}
                    >
                      <div className={`font-bold mb-1 ${isRetro ? 'text-[var(--text-accent)]' : 'text-white'}`}>
                        {lang === 'CN' ? phil.name : phil.nameEn}
                      </div>
                      <div className={`text-xs ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-400'}`}>
                        {phil.years}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-primary/60 mb-3">
                  {lang === 'CN' ? '重要著作' : 'Major Works'}
                </h3>
                <div className="space-y-2">
                  {activeSchool.works.map((work, idx) => (
                    <div key={idx} className={`text-sm ${isRetro ? 'text-[var(--text-main)]' : 'text-zinc-300'}`}>
                      <div className="font-medium">{lang === 'CN' ? work.title : work.titleEn}</div>
                      <div className={`text-xs ${isRetro ? 'text-[var(--text-muted)]' : 'text-zinc-500'}`}>
                        {work.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
