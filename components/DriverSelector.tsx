import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DriverType } from '../types';

interface DriverSelectorProps {
  selectedDriver: DriverType | null;
  onSelect: (id: DriverType) => void;
  lang: 'CN' | 'EN';
  hoveredDriver: DriverType | null;
  onHover: (id: DriverType | null) => void;
}

interface ArchiveDriverCard {
  id: DriverType;
  number: string;
  titleCn: string;
  titleEn: string;
  topology: string;
  description: string;
  imageSrc: string;
  accent: string;
}

const archiveDriverCards: ArchiveDriverCard[] = [
  {
    id: DriverType.COMMERCIAL,
    number: '01',
    titleCn: '商业欲望',
    titleEn: 'COMMERCIAL',
    topology: '欲望－商品－交换',
    description: '围绕匮乏感与价值投射，驱动消费循环与身份认同的欲望结构。',
    imageSrc: '/portal-assets/card-01-89.png',
    accent: '#5ecfdc'
  },
  {
    id: DriverType.NARRATIVE,
    number: '02',
    titleCn: '叙事欲望',
    titleEn: 'NARRATIVE',
    topology: '欲望－商品－认同',
    description: '通过事件组织与因果链，生成主体同一性与意义连续性的欲望结构。',
    imageSrc: '/portal-assets/card-02-88.png',
    accent: '#c93a34'
  },
  {
    id: DriverType.AESTHETIC,
    number: '03',
    titleCn: '审美欲望',
    titleEn: 'AESTHETIC',
    topology: '欲望－凝视－形式',
    description: '以感知形式与感官组织为核心，建立愉悦结构与欲望升华的路径。',
    imageSrc: '/portal-assets/card-03-91.png',
    accent: '#c93a34'
  },
  {
    id: DriverType.EXPERIMENTAL,
    number: '04',
    titleCn: '还原协议',
    titleEn: 'EXPERIMENTAL',
    topology: '欲望－结构－差异',
    description: '在规则与变量之间进行结构实验，生成非线性与非定型的欲望路径。',
    imageSrc: '/portal-assets/card-04-90.png',
    accent: '#c93a34'
  },
  {
    id: DriverType.TRAILER,
    number: '05',
    titleCn: '预告片欲望',
    titleEn: 'TRAILER',
    topology: '欲望－悬置－预示',
    description: '以信息节制与悬念机制，激活期待结构与欲望前驱的张力系统。',
    imageSrc: '/portal-assets/card-05-87.png',
    accent: '#c93a34'
  }
];

const cardSignalPaths = [
  'M 0 18 L 50 18 L 56 17 L 62 18 L 69 18 L 75 11 L 81 25 L 87 4 L 94 29 L 101 14 L 108 22 L 116 17 L 126 18 L 136 17 L 146 19 L 156 17 L 166 18 L 176 17 L 186 19 L 196 18 L 205 16 L 214 18 L 222 8 L 230 30 L 238 15 L 246 21 L 260 18',
  'M 0 18 L 55 18 L 62 17 L 70 18 L 78 18 L 85 6 L 92 28 L 98 12 L 105 23 L 114 17 L 124 19 L 134 17 L 144 18 L 154 17 L 164 19 L 174 18 L 184 17 L 194 19 L 204 18 L 213 8 L 221 29 L 229 14 L 238 22 L 260 18',
  'M 0 18 L 34 18 L 43 17 L 52 19 L 62 18 L 72 16 L 83 19 L 94 15 L 106 17 L 118 13 L 130 10 L 142 7 L 154 10 L 166 15 L 178 18 L 190 19 L 202 18 L 214 17 L 226 18 L 238 17 L 260 18',
  'M 0 18 L 22 18 L 31 15 L 39 22 L 47 9 L 56 29 L 65 12 L 74 24 L 84 14 L 94 20 L 104 16 L 114 23 L 124 13 L 135 21 L 146 15 L 157 19 L 168 17 L 180 22 L 192 11 L 204 5 L 216 27 L 228 16 L 240 20 L 260 18',
  'M 0 18 L 52 18 L 60 17 L 68 18 L 77 18 L 84 16 L 91 18 L 98 7 L 105 31 L 112 11 L 119 21 L 128 16 L 138 18 L 148 17 L 158 19 L 170 17 L 182 18 L 194 19 L 206 15 L 218 13 L 230 19 L 242 18 L 260 18'
];

export const DriverSelector: React.FC<DriverSelectorProps> = ({
  selectedDriver,
  onSelect,
  hoveredDriver,
  onHover
}) => {
  const [hoverArmed, setHoverArmed] = useState(false);

  useEffect(() => {
    onHover(null);
  }, [onHover]);

  const activateHover = (id: DriverType) => {
    if (!hoverArmed) setHoverArmed(true);
    onHover(id);
  };

  return (
    <div className="desire-archive-card-row">
      {archiveDriverCards.map((driver, index) => {
        const active = hoverArmed && hoveredDriver === driver.id;

        return (
          <button
            key={driver.id}
            type="button"
            onClick={() => onSelect(driver.id)}
            onMouseEnter={() => {
              if (hoverArmed) onHover(driver.id);
            }}
            onMouseMove={() => activateHover(driver.id)}
            onMouseLeave={() => onHover(null)}
            aria-pressed={selectedDriver === driver.id}
            className={`desire-archive-card ${driver.id === DriverType.COMMERCIAL ? 'is-commercial' : ''} ${active ? 'is-active' : ''}`}
            style={{ '--desire-card-accent': driver.accent } as React.CSSProperties}
          >
            <span className="desire-card-corner desire-card-corner-tl" aria-hidden="true" />
            <span className="desire-card-corner desire-card-corner-tr" aria-hidden="true" />
            <span className="desire-card-corner desire-card-corner-bl" aria-hidden="true" />
            <span className="desire-card-corner desire-card-corner-br" aria-hidden="true" />

            <div className="desire-card-meta-row">
              <span>{driver.number}</span>
              <span>ENGINE</span>
            </div>

            <header className="desire-card-title-row">
              <span className="desire-card-title-group">
                <span className="desire-card-title-cn">{driver.titleCn}</span>
                <span className="desire-card-title-en">{driver.titleEn}</span>
              </span>
            </header>

            <div className="desire-card-image-frame">
              <img src={driver.imageSrc} alt="" draggable="false" />
            </div>

            <div className="desire-card-topology">
              <span>TOPOLOGY</span>
              <span aria-hidden="true">|</span>
              <span>{driver.topology}</span>
            </div>

            <p className="desire-card-description">
              {driver.description}
            </p>

            <div className="desire-card-signal" aria-hidden="true">
              <svg viewBox="0 0 260 36" preserveAspectRatio="none">
                <path d={cardSignalPaths[index % cardSignalPaths.length]} />
              </svg>
            </div>

            <div className="desire-card-arrow" aria-hidden="true">
              <ArrowRight size={34} strokeWidth={1.35} />
            </div>

            <div className="desire-card-bottom-line" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
};
