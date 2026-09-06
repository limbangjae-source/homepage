import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Sangrok clinic information page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>전주혁신도시 상록한의원/);
  assert.match(html, /상록한의원/);
  assert.match(html, /교통사고 후유증/);
  assert.match(html, /자주 묻는 질문/);
  assert.match(html, /063-714-4365/);
  assert.match(html, /010-7650-4365/);
  assert.match(html, /booking\.naver\.com\/booking\/13\/bizes\/288249/);
  assert.match(html, /우석대학교 수석 입학·졸업/);
  assert.match(html, /365일 진료 안내/);
  assert.match(html, /일요일·공휴일 14:00–18:00/);
  assert.match(html, /추석 연휴·구정 연휴·크리스마스/);
  assert.match(html, /application\/ld\+json/);

  for (const prohibitedClaim of [
    "완치",
    "100%",
    "부작용 없음",
    "최고",
    "유일",
    "즉시 효과",
    "치료 전후",
  ]) {
    assert.doesNotMatch(html, new RegExp(prohibitedClaim));
  }
});

test("removes starter preview assets and keeps safe information boundaries", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type="application\/ld\+json"/);
  assert.match(page, /063-714-4365/);
  assert.match(page, /010-7650-4365/);
  assert.match(page, /tel:0637144365/);
  assert.match(page, /booking\.naver\.com\/booking\/13\/bizes\/288249/);
  assert.match(page, /개인정보처리방침 확인 필요/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.match(layout, /<html lang="ko">/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
