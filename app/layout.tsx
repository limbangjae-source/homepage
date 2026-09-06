import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "전주혁신도시 상록한의원 | 교통사고 후유증·통증·입원 진료 안내",
  description:
    "전주혁신도시 상록한의원의 교통사고 후유증, 근골격계 통증, 비만·다이어트 및 입원·회복 관리 진료 안내입니다.",
  openGraph: {
    title: "전주혁신도시 상록한의원 | 진료 안내",
    description:
      "교통사고 후유증, 통증, 비만·다이어트, 입원·회복 관리에 관한 상록한의원 진료 안내입니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
