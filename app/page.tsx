const careAreas = [
  {
    number: "01",
    title: "교통사고 후유증",
    text: "원천자료에는 사고 이후의 통증·후유증 상담과 침, 뜸, 추나치료, 한약을 함께 안내한 기록이 있습니다.",
  },
  {
    number: "02",
    title: "근골격계 통증",
    text: "손목·팔꿈치·목·허리 통증과 소관절 질환에 관한 의료정보를 안내합니다.",
  },
  {
    number: "03",
    title: "비만·다이어트",
    text: "리즈다이어트 프로그램과 체성분 확인, 생활·운동 상담 관련 안내를 제공합니다.",
  },
  {
    number: "04",
    title: "입원·회복 관리",
    text: "입원실을 운영하며, 교통사고 후유증과 수술 후 재활이 필요한 분의 진료 동선을 안내합니다.",
  },
];

const columns = [
  {
    title: "숨길을 열어주는 3분의 마법",
    date: "2026.01.10",
    category: "비염 · 생활관리",
    href: "https://blog.naver.com/365_ever_green/224141120075",
  },
  {
    title: "입 벌리고 자는 우리 아이, 비염 때문일까?",
    date: "2026.01.10",
    category: "소아 비염",
    href: "https://blog.naver.com/365_ever_green/224141109532",
  },
  {
    title: "첩약(한약)처방 건강보험 적용",
    date: "2025.12.21",
    category: "한약 · 건강보험",
    href: "https://blog.naver.com/365_ever_green/224117545425",
  },
  {
    title: "골격근·체지방·내장지방을 함께 보는 이유",
    date: "2024.09.14",
    category: "다이어트 · 체성분",
    href: "https://blog.naver.com/365_ever_green/223583858190",
  },
];

const faqItems = [
  {
    question: "일요일이나 공휴일에도 진료하나요?",
    answer:
      "원천자료에는 일요일·공휴일 오후 2시부터 6시까지 진료한다고 안내되어 있습니다. 요일별 진료시간과 휴진일은 최종 확인이 필요합니다.",
  },
  {
    question: "한의원인데 입원도 가능한가요?",
    answer:
      "원천자료에는 입원실을 운영한다고 안내되어 있습니다. 이용 가능 여부와 입원 상담 절차는 확인 후 안내드립니다.",
  },
  {
    question: "교통사고 후 겉으로 다친 곳이 없어도 상담할 수 있나요?",
    answer:
      "원천자료에는 교통사고 후유증 진료 안내가 있습니다. 현재 불편한 증상과 진료 필요 여부는 의료진 상담을 통해 확인해 주세요.",
  },
  {
    question: "한약은 건강보험이 적용되나요?",
    answer:
      "원천자료에는 첩약 건강보험 적용 제도 안내가 있습니다. 적용 질환과 본인부담 등은 개인 상태와 최신 기준에 따라 달라질 수 있으므로 내원 전 확인이 필요합니다.",
  },
  {
    question: "전주혁신도시에서 가까운가요?",
    answer:
      "원천자료의 체크인 정보에는 전북특별자치도 전주시 덕진구 기지로 66, 303호로 안내되어 있습니다. 방문 전 상세 위치와 주차 정보는 확인이 필요합니다.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="상록한의원 처음으로">
          <span className="brand-mark">상</span>
          <span>
            <strong>상록한의원</strong>
            <small>JEONJU INNOVATION CITY</small>
          </span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#clinic">한의원 소개</a>
          <a href="#care">진료 안내</a>
          <a href="#columns">건강 칼럼</a>
          <a href="#visit">오시는 길</a>
        </nav>
        <a className="header-link" href="#contact">
          상담 안내
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">JEONJU INNOVATION CITY · SANGROK KOREAN MEDICINE</p>
            <h1 id="hero-title">
              전주혁신도시에서
              <br />
              내 몸의 이야기를 듣는 시간
            </h1>
            <p className="hero-description">
              상록한의원은 교통사고 후유증, 근골격계 통증, 비만·다이어트,
              입원·회복 관리에 관한 진료 정보를 안내합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#care">
                진료 안내 보기
              </a>
              <a className="button button-secondary" href="#visit">
                진료시간·오시는 길
              </a>
            </div>
            <p className="source-note">
              이 미리보기는 제공된 원천자료에서 확인된 내용만 사용했습니다.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <p>眞 · 善 · 美</p>
            <span>몸과 일상을 함께 살피는 진료 안내</span>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-seed hero-seed-one" />
            <div className="hero-seed hero-seed-two" />
          </div>
        </section>

        <section className="intro-band" aria-label="상록한의원 진료 방향">
          <p>환자의 이야기를 귀 기울여 듣고, 진료 과정을 알기 쉽게 안내합니다.</p>
          <span>정확한 진단과 올바른 치료를 지향합니다.</span>
        </section>

        <section className="section clinic-section" id="clinic" aria-labelledby="clinic-title">
          <div className="section-kicker">
            <span>01</span>
            <p>ABOUT SANGROK</p>
          </div>
          <div className="clinic-grid">
            <div>
              <h2 id="clinic-title">환자의 일상으로 이어지는 진료를 생각합니다.</h2>
              <p className="section-lead">
                전주혁신도시에 위치한 상록한의원은 입원실을 운영하며, 교통사고
                후유증과 수술 후 재활·회복이 필요한 분의 진료 동선을 안내합니다.
              </p>
            </div>
            <dl className="fact-list">
              <div>
                <dt>한의원명</dt>
                <dd>상록한의원</dd>
              </div>
              <div>
                <dt>대표원장</dt>
                <dd>임용현 원장</dd>
              </div>
              <div>
                <dt>진료 방향</dt>
                <dd>통증·후유증·회복 관리 안내</dd>
              </div>
              <div>
                <dt>의료진 이력</dt>
                <dd className="needs-confirmation">상세 학력·경력 확인 필요</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section care-section" id="care" aria-labelledby="care-title">
          <div className="section-heading">
            <div className="section-kicker">
              <span>02</span>
              <p>CARE AREAS</p>
            </div>
            <h2 id="care-title">진료과목 안내</h2>
            <p>원천자료에서 확인된 진료 영역을 중심으로 안내합니다.</p>
          </div>
          <div className="care-grid">
            {careAreas.map((area) => (
              <article className="care-card" key={area.number}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <a href="#contact">상담 안내 <b>→</b></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section treatment-section" aria-labelledby="treatment-title">
          <div className="treatment-panel">
            <div className="section-kicker light-kicker">
              <span>03</span>
              <p>TREATMENT GUIDE</p>
            </div>
            <h2 id="treatment-title">치료 방법은 상태를 살핀 뒤 안내합니다.</h2>
            <p>
              원천자료에는 침, 뜸, 추나치료, 한약과 약침, 부항 등의 진료 방법이
              안내되어 있습니다. 적용 여부와 진행 방식은 개인 상태에 따라 의료진과
              상담 후 결정됩니다.
            </p>
          </div>
          <div className="treatment-list" aria-label="원천자료에 안내된 치료 방법">
            <span>침</span>
            <span>뜸</span>
            <span>추나치료</span>
            <span>한약</span>
            <span>약침</span>
            <span>부항</span>
          </div>
        </section>

        <section className="section column-section" id="columns" aria-labelledby="columns-title">
          <div className="section-heading row-heading">
            <div>
              <div className="section-kicker">
                <span>04</span>
                <p>HEALTH JOURNAL</p>
              </div>
              <h2 id="columns-title">건강 칼럼</h2>
            </div>
            <p>원천자료에 수록된 블로그 글을 소개합니다.</p>
          </div>
          <div className="column-list">
            {columns.map((column) => (
              <article className="column-item" key={column.href}>
                <p>{column.category}</p>
                <h3>{column.title}</h3>
                <div>
                  <time>{column.date}</time>
                  <a href={column.href} target="_blank" rel="noreferrer">
                    원문 보기 <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-intro">
            <div className="section-kicker">
              <span>05</span>
              <p>FAQ</p>
            </div>
            <h2 id="faq-title">자주 묻는 질문</h2>
            <p>원천자료에서 확인 가능한 범위로 답변합니다.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question}>
                <summary>
                  <span>0{index + 1}</span>
                  {item.question}
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="visit-copy">
            <div className="section-kicker light-kicker">
              <span>06</span>
              <p>VISIT &amp; CONTACT</p>
            </div>
            <h2 id="visit-title">진료시간·오시는 길</h2>
            <p>
              전북특별자치도 전주시 덕진구 기지로 66, 303호
              <br />
              <small>원천자료의 블로그 체크인 정보 기준 · 최종 주소 확인 필요</small>
            </p>
          </div>
          <div className="visit-card" id="contact">
            <div>
              <span>진료시간</span>
              <strong>일요일·공휴일 14:00–18:00</strong>
              <p>원천자료에 확인된 일부 시간입니다. 평일·토요일·휴진일 확인 필요</p>
            </div>
            <div>
              <span>전화 상담</span>
              <strong className="needs-confirmation">대표 전화번호 확인 필요</strong>
              <p>정확한 번호 확인 전에는 전화 연결 버튼을 제공하지 않습니다.</p>
            </div>
            <div>
              <span>온라인 예약</span>
              <strong className="needs-confirmation">예약 링크 확인 필요</strong>
              <p>원천자료에는 네이버 예약 운영 기록이 있으나, 현재 링크 확인이 필요합니다.</p>
            </div>
          </div>
        </section>

        <section className="notice-section" aria-labelledby="notice-title">
          <div>
            <p className="eyebrow">INFORMATION CHECK</p>
            <h2 id="notice-title">공식 정보 확인이 필요한 항목</h2>
          </div>
          <ul>
            <li>대표 전화번호, 요일별 진료시간, 점심시간 및 휴진일</li>
            <li>의료진의 학력·경력·학회 활동과 상세 진료 이력</li>
            <li>주차 안내, 현재 예약 링크, 개인정보처리방침</li>
          </ul>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">상</span>
          <span>
            <strong>상록한의원</strong>
            <small>JEONJU INNOVATION CITY</small>
          </span>
        </div>
        <p>본 사이트의 의료정보는 일반적인 안내를 위한 것이며, 개인 상태에 따른 진료는 의료진 상담이 필요합니다.</p>
        <p className="needs-confirmation">개인정보처리방침 확인 필요</p>
      </footer>

      <div className="mobile-contact" aria-label="모바일 상담 안내">
        <span>전화번호 확인 후 바로 연결됩니다</span>
        <button type="button" disabled aria-disabled="true">
          대표 전화번호 확인 필요
        </button>
      </div>
    </>
  );
}
