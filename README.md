# 2XtN Landing Page

새내기 마흔들의 LIFE 리부팅 프로젝트 "2XtN"의 공식 랜딩 페이지입니다.

## 🎯 프로젝트 개요

2XtN은 "두 번째 스무살(2×Twenty)"을 뜻하며, 변화의 경계에 선 새내기 마흔들을 위한 LIFE 리부팅 플랫폼입니다. Health·Affections·Dreams·Assets, 삶의 4가지 기둥을 재정의하고 리프레시하는 H.A.D.A 프로젝트를 제공합니다.

## ✨ 주요 기능

### 현재 구현된 기능 (최근 업데이트: 2024-08-30)
- ✅ **HTML 구조 최적화**: About 섹션의 feature-grid 구조 수정 완료
- ✅ **아이콘 최적화**: 지원되지 않는 'sparkles' 아이콘을 'star' 아이콘으로 교체
- ✅ **Y2K 무드 디자인**: 핑크, 퍼플, 바나나 컬러의 레트로 퓨처 스타일
- ✅ **스티커 효과**: 둥근 모서리와 그림자가 있는 3D 스티커 느낌의 UI 컴포넌트
- ✅ **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 최적화
- ✅ **애니메이션 효과**: 
  - 히어로 섹션 반짝이는 스파클 애니메이션
  - 스크롤 기반 fade-in 애니메이션
  - 버튼 호버 및 클릭 리플 효과
  - 플로팅 카드 애니메이션
- ✅ **인터랙션**: 
  - 부드러운 스크롤
  - 버튼 클릭 이벤트
  - 검색 기능 (기본 구현)
  - 뉴스레터 구독

### 페이지 구성
1. **헤더**: 로고, 검색바, CTA 버튼
2. **히어로 섹션**: 두번째 스무살 LIFE REBOOT HADA 프로젝트 메시지, H.A.D.A 4가지 핵심 요소, 인터랙티브 카드
3. **서비스 섹션**: 4PILLARS 플래너, 전문 코칭, 마켓
4. **회사 소개**: 2XtN 미션, H.A.D.A 4가지 기둥 (Health, Affections, Dreams, Assets)
5. **미디어 채널**: Newsletter, Instagram, YouTube, Naver Blog 링크
6. **푸터**: 회사 정보, 뉴스레터 구독

## 🎨 디자인 시스템

### Y2K 컬러 팔레트
- `--y2k-bg`: #F6C8FF (메인 배경)
- `--y2k-lilac`: #E7B5F9 (라일락)
- `--y2k-purple`: #8B5CF6 (퍼플)
- `--y2k-hotpink`: #FF7AD9 (핫핑크)
- `--y2k-banana`: #FFD84D (바나나 옐로우)
- `--y2k-ink`: #4B2B80 (잉크 다크)

### 스타일 특징
- **스티커 효과**: `border-radius: 1.5rem` + `border: 4px solid`
- **그림자**: `box-shadow: 0 Npx 0 var(--y2k-ink)`
- **그리드 패턴**: 서브틀한 도트 그리드 배경
- **타이포그래피**: 볼드하고 임팩트 있는 폰트 웨이트

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Variables (Custom Properties)
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Responsive Design (Media Queries)
- **Vanilla JavaScript**: 
  - DOM Manipulation
  - Event Handling
  - Intersection Observer API
  - Animation Effects
- **Feather Icons**: 아이콘 라이브러리 (CDN)

## 📁 파일 구조

```
/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 메인 스타일시트
├── js/
│   └── main.js        # JavaScript 로직
└── README.md          # 프로젝트 문서
```

## 🚀 실행 방법

1. 프로젝트 파일을 로컬에 다운로드
2. `index.html`을 웹브라우저에서 열기
3. 또는 로컬 서버 실행:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   ```

## 📱 반응형 브레이크포인트

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎭 애니메이션 효과

### 구현된 애니메이션
1. **Sparkles Animation**: 히어로 섹션의 반짝이는 효과
2. **Scroll Reveal**: 스크롤 시 요소들이 아래에서 위로 나타나는 효과
3. **Button Ripple**: 버튼 클릭 시 물결 효과
4. **Card Float**: 히어로 카드의 부유하는 효과
5. **Hover Transformations**: 호버 시 확대/이동 효과

### CSS 키프레임
```css
@keyframes sparkle { /* 반짝임 */ }
@keyframes float { /* 부유 */ }
@keyframes ripple-animation { /* 리플 */ }
```

## 🔧 주요 JavaScript 기능

### 핵심 함수들
- `initSparkles()`: 반짝이 효과 생성
- `initScrollAnimations()`: 스크롤 기반 애니메이션
- `initButtonInteractions()`: 버튼 인터랙션 (리플 효과)
- `initSmoothScroll()`: 부드러운 스크롤링
- `initParallaxEffect()`: 패럴랙스 효과

### 인터랙션 이벤트
- 검색 기능: "지금 20살이면 무엇을 시작하고 싶나요?" 플레이스홀더
- 뉴스레터 구독 기능
- H.A.D.A 서비스 버튼들 (플래너 미리보기, 커뮤니티 보기, 마켓 둘러보기)
- "START REBOOT" 및 "LEARN MORE" CTA 버튼

## 🎯 추후 개발 예정 기능

### Phase 2 - H.A.D.A 서비스 구현
- [ ] **4PILLARS 플래너**: Health·Affections·Dreams·Assets 루틴/목표 관리
  - [ ] 개인화 대시보드 & 진행률
  - [ ] 캘린더 연동, 주간월간리포트
  - [ ] 리셋 챌린지 스티커 시스템
- [ ] **전문 코칭 시스템**: 마인드셋/바디셋/관계/커리어/취미/육아/투자 분야
  - [ ] 두번째 스무살 크루 & 온라인 모임
  - [ ] 니즈별 맞춤 코칭 AI 매칭
  - [ ] 선배들의 스토리 콘텐츠
- [ ] **마켓**: 검증된 리부팅 아이템 큐레이션
  - [ ] 루틴 키트 / 클래스 / 아이템
  - [ ] 리부터들의 생생한 후기 시스템
  - [ ] 성장 배지 & 리워드 시스템

### Phase 3 - 플랫폼 확장
- [ ] **실제 검색 시스템**: "지금 20살이면" 키워드 기반 콘텐츠 검색
- [ ] **폼 시스템**: 실제 뉴스레터 구독, 코칭 상담 예약
- [ ] **데이터 연동**: REST API를 통한 동적 콘텐츠
- [ ] **사용자 인증**: 새내기 마흔 회원 시스템
- [ ] **커뮤니티**: 두번째 스무살들의 소통 플랫폼

## 🌐 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 90+

## 📋 개발 가이드라인

### 코드 스타일
- CSS: BEM 방법론 적용
- JavaScript: ES6+ 문법 사용
- HTML: 시맨틱 태그 우선 사용

### 성능 최적화
- 이미지 최적화 (WebP 포맷 권장)
- CSS/JS 압축
- 스크롤 이벤트 디바운싱
- Intersection Observer API 활용

## 🤝 기여 방법

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📞 연락처

- 웹사이트: [2XtN 공식 사이트](https://example.com)
- 이메일: 2XtN@gmail.com
- Instagram: [@2xtn_official](https://instagram.com/2xtn_official)
- YouTube: [2XtN Channel](https://youtube.com/@2xtn)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

**ⓒ 2024 2XtN Inc. All rights reserved.**

*새내기 마흔들의 두번째 스무살을 응원합니다! 💜*