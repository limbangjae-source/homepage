import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 상록한의원",
  description: "상록한의원 홈페이지의 개인정보 처리방침입니다.",
};

const policySections = [
  {
    title: "1. 개인정보의 처리 목적 및 항목",
    content: (
      <>
        <p>
          상록한의원 홈페이지는 진료 안내와 전화·온라인 예약 연결을 제공하기 위한 정보 안내 페이지입니다. 현재 홈페이지에는 회원가입, 로그인, 온라인 상담 입력폼, 의료정보 입력 기능이 없으며, 이용자의 성명·연락처·건강정보를 홈페이지에서 직접 수집하거나 저장하지 않습니다.
        </p>
        <p>
          전화 버튼을 누르면 이용자의 기기에서 전화 기능이 실행되며, 홈페이지가 통화 내용이나 통화 기록을 수집하지 않습니다. 전화 상담 또는 내원 과정에서 별도로 제공되는 개인정보의 처리 내용은 실제 접수 절차에 따라 안내합니다.
        </p>
      </>
    ),
  },
  {
    title: "2. 개인정보의 처리 및 보유 기간",
    content: (
      <p>
        홈페이지는 이용자가 직접 입력하는 개인정보를 수집·보유하지 않습니다. 다만 서비스의 안정성·보안 운영 과정에서 접속 일시, IP 주소, 브라우저·기기 정보 등 기술적 접속기록이 호스팅·통신 서비스에 의해 처리될 수 있으며, 해당 정보의 처리 및 보유는 각 서비스 제공자의 기술 운영 기준과 정책에 따릅니다.
      </p>
    ),
  },
  {
    title: "3. 개인정보의 제3자 제공 및 외부 서비스",
    content: (
      <>
        <p>
          상록한의원 홈페이지는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 온라인 예약은 네이버 예약의 별도 웹페이지로 연결되며, 이용자가 해당 페이지에서 입력하는 정보는 네이버의 개인정보처리방침과 이용약관에 따라 처리됩니다.
        </p>
        <a className="policy-external-link" href="https://booking.naver.com/booking/13/bizes/288249" target="_blank" rel="noreferrer">
          네이버 예약 페이지로 이동
        </a>
      </>
    ),
  },
  {
    title: "4. 개인정보 처리의 위탁",
    content: (
      <p>
        현재 홈페이지는 이용자 입력정보를 수집·저장하는 기능을 운영하지 않으므로, 그와 관련한 별도의 개인정보 처리 위탁을 운영하지 않습니다. 향후 온라인 상담·예약 접수 등 개인정보 수집 기능을 추가하는 경우, 수탁자·위탁 업무·보유기간을 이 방침에 반영합니다.
      </p>
    ),
  },
  {
    title: "5. 정보주체의 권리와 행사 방법",
    content: (
      <p>
        상록한의원이 개인정보를 처리하는 경우 정보주체는 열람, 정정·삭제, 처리정지 및 동의 철회를 요청할 수 있습니다. 홈페이지에서 직접 수집한 정보는 없지만, 전화 상담·내원 등 별도 절차에서 제공한 개인정보에 관한 요청은 아래 대표전화로 개인정보 문의 담당자 연결을 요청해 주세요. 관련 법령에 따라 필요한 확인 절차를 거쳐 처리합니다.
      </p>
    ),
  },
  {
    title: "6. 개인정보 보호책임자 및 문의 창구",
    content: (
      <div className="policy-contact-card">
        <p><strong>개인정보 문의 접수:</strong> 상록한의원 대표전화 063-714-4365</p>
        <p><strong>개인정보 보호책임자:</strong> 원장 임용현</p>
        <p className="policy-muted">개인정보 관련 문의와 권리 행사는 대표전화로 접수해 주세요.</p>
      </div>
    ),
  },
  {
    title: "7. 쿠키 및 자동 수집 장치",
    content: (
      <p>
        현재 홈페이지는 광고·맞춤형 분석을 위한 자체 쿠키, 픽셀 또는 분석 도구를 별도로 설정하지 않습니다. 이용자가 네이버 예약 등 외부 서비스로 이동한 이후의 쿠키·자동 수집 장치 운영은 해당 서비스의 방침이 적용됩니다.
      </p>
    ),
  },
  {
    title: "8. 개인정보의 안전성 확보 조치",
    content: (
      <p>
        상록한의원은 개인정보를 처리하게 되는 경우 접근권한 관리, 접근기록 관리, 전송·보관 시 보호조치, 보안 업데이트 등 관계 법령에 따른 기술적·관리적·물리적 보호조치를 적용합니다.
      </p>
    ),
  },
  {
    title: "9. 권익침해 구제 방법",
    content: (
      <p>
        개인정보 침해에 대한 신고·상담이 필요한 경우 개인정보침해 신고센터(privacy.kisa.or.kr, 국번 없이 118), 개인정보분쟁조정위원회(privacy.go.kr, 1833-6972) 등 관계기관을 이용할 수 있습니다.
      </p>
    ),
  },
  {
    title: "10. 처리방침의 변경",
    content: (
      <p>
        이 방침은 2026년 9월 6일부터 적용합니다. 개인정보 수집 기능, 예약·상담 절차 또는 외부 서비스가 변경되는 경우 적용일과 변경 내용을 홈페이지에 공개합니다.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header className="policy-header">
        <a className="brand" href="/" aria-label="상록한의원 홈페이지로 돌아가기">
          <span className="brand-mark">상</span>
          <span>
            <strong>상록한의원</strong>
            <small>JEONJU INNOVATION CITY</small>
          </span>
        </a>
        <a className="policy-back-link" href="/">홈페이지로 돌아가기</a>
      </header>

      <div className="policy-hero">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p>상록한의원 홈페이지에서 처리하는 개인정보와 이용자의 권리를 안내합니다.</p>
      </div>

      <article className="policy-content">
        <section className="policy-summary" aria-label="개인정보 처리 핵심 요약">
          <div>
            <span>처리자</span>
            <strong>상록한의원</strong>
          </div>
          <div>
            <span>홈페이지 직접 수집</span>
            <strong>없음</strong>
          </div>
          <div>
            <span>시행일</span>
            <strong>2026.09.06</strong>
          </div>
        </section>

        <aside className="policy-boundary">
          <strong>적용 범위</strong>
          <p>이 방침은 상록한의원 홈페이지에 적용됩니다. 진료기록, 전화 상담, 내원 접수 또는 네이버 예약에서 실제로 제공되는 개인정보는 해당 절차에서 별도로 고지되는 내용과 관계 법령에 따릅니다.</p>
        </aside>

        {policySections.map((section) => (
          <section className="policy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.content}
          </section>
        ))}

        <section className="policy-reference" aria-label="작성 기준">
          <p>작성 기준</p>
          <a href="https://www.law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=900078922" target="_blank" rel="noreferrer">개인정보 보호법 제30조</a>
          <a href="https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=20885" target="_blank" rel="noreferrer">개인정보보호위원회 2026 개인정보 처리방침 작성지침</a>
        </section>
      </article>
    </main>
  );
}
