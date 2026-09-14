YOUNGJAE MEEN PORTFOLIO / V5.1 / 2026-09-14

이 폴더는 별도 빌드 없이 사용할 수 있는 정적 웹사이트입니다.
V4와 V5를 보존한 별도 사전 배포 버전이며, 기존 저장소나 현재 서비스 중인 사이트에는 게시하지 않았습니다.
This is a standalone static website. It does not require a build step.
V4 is preserved separately. This version has not been published to the live site.

로컬에서 보기 / Preview

index.html을 브라우저에서 엽니다. 파일과 assets 폴더의 상대 위치를 유지하세요.
또는 이 폴더에서 python3 -m http.server 8000 실행 후 http://localhost:8000/ 접속.
Open index.html in a browser, or serve this folder with a local HTTP server.

수동 업로드 / Manual upload

site 폴더 안의 파일과 폴더 전체를 GitHub Pages의 공개 루트에 복사합니다.
index.html과 assets는 같은 디렉터리에 있어야 합니다. npm 설치나 빌드는 필요 없습니다.
CNAME은 bluehorror.com으로 설정되어 있습니다. 다른 도메인에서 사용할 때만 변경하세요.
기존 저장소를 먼저 백업하고, GitHub Pages에서 사용 중인 브랜치/폴더에 업로드하세요.
웹사이트 배포에는 이 site 폴더만 필요합니다. PPT와 미리보기 폴더는 올리지 않아도 됩니다.
Copy the contents of this folder to the published root of your GitHub Pages repository.
Keep the relative paths intact. CNAME is configured for bluehorror.com.

페이지 / Pages

index.html               소개, 최신 Galaxy Wearable, 주요 작업, 아카이브 진입
about.html               프로필, 경력, 학력, 실무 역량, 특허
work-connected.html      Galaxy Wearable / One UI 9 Watch Manager
work-gwd.html            Galaxy Watch Designer
work-gwa2.html           Galaxy Watch Active2
work-data-science.html   응용데이터사이언스 석사 논문
work-tizen-phone.html    Tizen Phone Core UX
lab-depthapprox.html    Pressure DepthApprox 개인 실험
archive.html             AI Family Hub, 360 Round, Samsung × Microsoft,
                         Strap Studio, Grey Goo, Rolling Paint
404.html                 페이지 없음

언어 / Language

KO / EN 버튼으로 전환합니다. 첫 방문에는 브라우저 언어를 따릅니다.
선택한 언어는 해당 브라우저의 로컬 저장소에 보관하며 외부로 전송하지 않습니다.
각 HTML에 .lang-ko와 .lang-en 문장을 함께 보관합니다.
Use the KO / EN control. Your language preference is stored locally in the browser.

구조와 유지보수 / Structure

assets/css/main.css      기존 공통 레이아웃과 컴포넌트
assets/css/v5.css        V5 레이아웃, 타이포그래피, 색상, 반응형 조정
assets/js/main.js        언어 전환, 모바일 메뉴, 키보드 탐색
assets/fonts/            자체 호스팅 Pretendard Variable
assets/images/           포트폴리오 이미지

문구 수정 시 한국어·영어를 함께 수정하세요. 이미지는 src, width, height와 양 언어 alt를 확인하세요.
새 페이지를 추가할 때는 내비게이션, 내부 링크와 sitemap.xml을 함께 갱신하세요.
Edit both language versions together. Keep image dimensions and localized alt text in sync.

이미지와 공개 범위 / Images and disclosure

최신 Watch Manager는 디자이너가 2026-08-22 제공한 원본 캡처를 사용합니다.
스토어의 이전 이미지를 최신 디자인의 근거로 사용하지 않습니다.
저해상도 자료는 보존된 고해상도 파생본을 재사용하되 화면에서의 확대를 제한했습니다.
V5에서 생성형 복원으로 제품 UI나 글자를 새로 만들지 않았습니다.
일부 상세 이미지는 클릭하면 원본 크기로 열립니다. 논문 분포 차트도 원본 크기로 열 수 있습니다.

Family Hub는 공개 가능한 역할과 설계 접근만 소개합니다. 내부 UI, 로드맵과 회사 수치는 제외했습니다.
Pressure DepthApprox는 실험용 추정이며 다이빙용 제품이나 안전 장비가 아닙니다.
삼성·협업 제품 사진은 제품 맥락을 보여 주는 자료이며 모든 요소를 개인이 단독 제작했다는 뜻이 아닙니다.
Samsung × Microsoft 사진: Samsung Newsroom, 2019-10-01. 페이지 캡션에 원문 링크를 표시했습니다.

Public contact: yjblue.meen@gmail.com
LinkedIn: https://www.linkedin.com/in/youngjae-meen-2841a168
