// =========================
//  프로젝트 데이터
//  각 프로젝트에 상세 정보를 넣으면 카드 클릭 시 모달에 표시된다.
//  비워둔 항목("")은 모달에서 자동으로 생략된다.
//  featured: true 를 넣으면 메인 홈의 "대표작"에 표시된다.
//  stack: [...] 배열은 카드/모달에 기술 스택 칩으로 표시된다.
//  ※ stack 값은 임시 추정치 — 실제 사용 기술에 맞게 수정하세요.
// =========================
const projects = {
    2024: [
        {
            title: "Trip Maker",
            image: "asset/2024.png",
            featured: false,
            status: "진행완료",
            role: "PM",
            stack: ["Figma", "Notion"],
            activity: "2학기 JB Start-up! 창업아이디어 우체통 공모전",
            date: "2024-2",
            award: "2학기 JB Start-up! 창업아이디어 우체통 공모전 - 장려상",
            description: "AI로 완성하는 맞춤형 국내여행 서비스",
        },

                {
            title: "파이루프",
            image: "asset/2024-6.png",
            featured: false,
            status: "진행완료",
            role: "웹페이지제작",
            stack: ["HTML", "CSS", "JavaScript"],
            activity: "2024 2학기 비마 학습 동아리 ",
            date: "2024-2",
            url: "ㅤ",
            award: "2024 2학기 비마 학습 동아리 - 대상",
            description: "미니게임 웹페이지",
        },

        {
            title: "구질구질",
            image: "asset/2024-1.png",
            featured: true,
            status: "진행완료",
            role: "웹퍼블리싱, littlynotion 페이지 제작",
            stack: ["HTML", "CSS", "JavaScript", "Notion"],
            activity: "구름톤3기 연합 해커톤",
            date: "2024/09/23 → 2024/09/29",
            url: "https://www.notion.so/GoogilGoogil-10d9c3bd34928098aa4fe8be2dcf438b?source=copy_link",
            award: "구름톤 연합 해커톤 - 최우수상",
            description: "부담 없이 질문하고 강연자와 수강자 사이에 원활한 커뮤니케이션이 가능한 서비스",
        },

        {
            title: "Book두칠성",
            image: "asset/2024-2.png",
            featured: true,
            status: "진행완료",
            role: "웹퍼블리싱, PM",
            stack: ["HTML", "CSS", "JavaScript"],
            activity: "구름톤3기 단풍톤",
            date: "2024/09/23 → 2024/09/29",
            url: "https://www.notion.so/Book-1422de7f76958188acecfca521d76d48?source=copy_link",
            description: "청년들을 위한 공유 독서 플랫폼",
        },
    ],
    2025: [
        {
            title: "Homi",
            image: "asset/2025-5.png",
            featured: false,
            status: "진행완료",
            role: "FE",
            stack: ["React", "JavaScript"],
            activity: "인공지능 전공 학과 동아리 :404",
            date: "2025-1",
            award: "구름톤 연합 해커톤 - 최우수상",
            description: "스마트홈 프로젝트",
        },

        {
            title: "중부마켓",
            image: "asset/2025-7.png",
            featured: false,
            status: "진행완료",
            role: "FE, BE",
            stack: ["React", "Django", "MySQL"],
            activity: "2025-1 데이터모델링과 SQL PBL",
            date: "2025-1",
            description: "중부대학생 전용 중고마켓",
        },

        {
            title: "스마트쓰레기통",
            image: "asset/2025-6.png",
            featured: false,
            status: "진행완료",
            role: "FE",
            stack: ["HTML", "CSS", "JavaScript"],
            activity: "2025-1 스마트 회로 과제",
            date: "2025-1",
            description: "부담 없이 질문하고 강연자와 수강자 사이에 원활한 커뮤니케이션이 가능한 서비스",
        },

        {
            title: "AutoPlanAI",
            image: "asset/2025-1.png",
            featured: false,
            status: "진행완료",
            role: "FE",
            stack: ["React", "TypeScript"],
            activity: "2025 오픈소스 개발자 대회",
            date: "2025-S",
            url: "https://github.com/SY-20231230/AutoPlanAIv2",
            description: "AI 기반 연구개발 프로세스 자동화 플랫폼",
        },

        {
            title: "Eventory",
            image: "asset/2025-2.png",
            featured: false,
            status: "진행완료",
            role: "FE",
            stack: ["React", "TypeScript", "TailwindCSS"],
            activity: "구름톤3기 연합 해커톤",
            date: "2025/9",
            url: "https://github.com/9oormthon-univ/2025_SEASONTHON_TEAM_88_FE",
            description: "예산과 목적에 맞춰 최적의 준비 전략으로 소중한 사람들과의 이벤트를 준비할 수 있는 서비스 ",
        },

        {
            title: "GSS 비계 통합관리",
            image: "asset/2025.png",
            featured: false,
            status: "진행중",
            role: "FE",
            stack: ["React", "TypeScript"],
            activity: "인공지능 전공 학과 동아리 :404",
            date: "2025-S~",
            description: "AI 기반 비계 자재 인식 관리 플랫폼 ",
        },
    ],
    2026: [

        {
            title: "Mood Palette",
            image: "asset/2026-1.png",
            featured: false,
            status: "진행완료",
            role: "AI (그림 생성)",
            stack: ["Python", "AI"],
            activity: "인공지능 전공 학과 동아리 :404",
            date: "2025-W",
            description: "AI 감정 분석 그림 일기 플랫폼",
        },

        {
            title: "DermaLens",
            image: "asset/2026-2.png",
            featured: false,
            status: "진행중",
            role: "BE",
            stack: ["Django", "Python", "MySQL"],
            activity: "2026-1 빅데이터 플랫폼 캡스톤디자인 과제",
            date: "2026",
            url: " ",
            award: [
                "2026 창업아이디어 우체통 공모전 - 장려상",
                "2026 유튜브 콘텐츠 경진대회 - 우수상",
            ],
            description: "피부 및 성분 기반으로 개인 맞춤 분석을 제공하는 AI 뷰티 플랫폼",
        },

                {
            title: "GSS 비계 통합관리",
            image: "asset/2025.png",
            featured: false,
            status: "진행중",
            role: "FE",
            stack: ["React", "TypeScript"],
            activity: "인공지능 전공 학과 동아리 :404",
            date: "2025-S~",
            description: "AI 기반 비계 자재 인식 관리 플랫폼 ",
        },
    ],
};

// 모든 프로젝트를 한 줄로 펼치고 고유 id 부여 (카드 클릭 시 조회용)
const allProjects = Object.values(projects).flat();
allProjects.forEach((project, index) => (project._id = index));

// 대표작 목록
const featuredProjects = allProjects.filter((project) => project.featured);

// 모달에 표시할 항목 순서와 라벨 (link: true면 링크로 렌더링)
const DETAIL_FIELDS = [
    { key: "role", label: "역할" },
    { key: "stack", label: "기술 스택", chips: true },
    { key: "activity", label: "활동" },
    { key: "date", label: "날짜" },
    { key: "url", label: "URL", link: true },
    { key: "githubFE", label: "github FE", link: true },
    { key: "githubBE", label: "github BE", link: true },
    { key: "notion", label: "notion", link: true },
    { key: "award", label: "수상" },
    { key: "description", label: "한 줄 설명" },
    { key: "review", label: "후기" },
];

// 상태 뱃지 HTML 만들기 (status 없으면 빈 문자열)
function statusBadge(status) {
    if (!status) return "";
    const cls = status === "진행중" ? "status-ongoing" : "status-done";
    return `<span class="status-badge ${cls}">${status}</span>`;
}

// 기술 스택 칩 묶음 HTML (배열 → 칩들)
function stackChips(stack) {
    if (!stack || !stack.length) return "";
    return stack.map((tech) => `<span class="chip">${tech}</span>`).join("");
}

// 카드 한 장의 HTML 만들기
function cardHTML(project) {
    // 한 줄 소개 / 담당 역할 / 기술 스택은 값이 있을 때만 노출
    const desc = project.description
        ? `<p class="card-desc">${project.description}</p>`
        : "";
    const role = project.role
        ? `<p class="card-meta"><span class="meta-key">role</span>${project.role}</p>`
        : "";
    const stack = project.stack && project.stack.length
        ? `<div class="card-tags">${stackChips(project.stack)}</div>`
        : "";

    return `
        <article class="card-item" data-id="${project._id}">
            <div class="card-cover">
                <img src="${project.image}" alt="${project.title} 표지" loading="lazy">
            </div>
            <div class="card-footer">
                <div class="card-title-row">
                    <h3>${project.title}</h3>
                    ${statusBadge(project.status)}
                </div>
                ${desc}
                ${role}
                ${stack}
            </div>
        </article>
    `;
}

// 카드 목록을 특정 컨테이너에 그리기
function renderInto(container, list) {
    container.innerHTML = list.map(cardHTML).join("");
}

// =========================
//  상세 정보 모달 (두 페이지 공통)
// =========================
const modal = document.createElement("div");
modal.className = "modal-overlay";
modal.innerHTML = `
    <div class="modal-box">
        <button class="modal-close" aria-label="닫기">×</button>
        <h2 class="modal-title"></h2>
        <div class="modal-cover"></div>
        <div class="modal-props"></div>
    </div>
`;
document.body.appendChild(modal);

const modalTitle = modal.querySelector(".modal-title");
const modalProps = modal.querySelector(".modal-props");
const modalCover = modal.querySelector(".modal-cover");

// 항목 값을 HTML로 (칩 배열 / 여러 줄 배열 / 링크 / 일반 텍스트)
function renderValue(field, value) {
    if (field.chips && Array.isArray(value)) {
        return `<span class="chip-row">${stackChips(value)}</span>`;
    }
    if (Array.isArray(value)) {
        // 값이 여러 개면 줄바꿈으로 나열 (예: 수상 2건)
        return value.join("<br>");
    }
    if (field.link) {
        return `<a href="${value}" target="_blank" rel="noopener">${value}</a>`;
    }
    return value;
}

function openModal(project) {
    modalTitle.innerHTML = `${project.title}${statusBadge(project.status)}`;

    // 표지 이미지를 제목 바로 아래에 크게
    modalCover.innerHTML = `<img src="${project.image}" alt="${project.title} 표지">`;

    // 값이 있는 항목만 행으로 만든다 (배열은 비어있지 않을 때만)
    modalProps.innerHTML = DETAIL_FIELDS.filter((field) => {
        const value = project[field.key];
        return Array.isArray(value) ? value.length : value;
    })
        .map(
            (field) => `
        <div class="prop-row">
            <span class="prop-label">${field.label}</span>
            <span class="prop-value">${renderValue(field, project[field.key])}</span>
        </div>
    `
        )
        .join("");

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

// 닫기: X 버튼 / 바깥 영역 클릭 / ESC 키
modal.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});

// 어느 페이지든 카드 클릭 시 모달 열기 (이벤트 위임)
document.addEventListener("click", (event) => {
    const card = event.target.closest(".card-item");
    if (!card) return;
    openModal(allProjects[card.dataset.id]);
});

// =========================
//  Work 페이지: 연도 토글 + 전체 카드
// =========================
const cardContainer = document.getElementById("project-cards");
const yearButtons = document.querySelectorAll(".year-btn");

if (cardContainer && yearButtons.length) {
    yearButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedYear = button.dataset.year;

            yearButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            renderInto(cardContainer, projects[selectedYear] || []);
        });
    });

    // 처음 로딩 시 2024 프로젝트 보여주기
    renderInto(cardContainer, projects[2024]);
}

// =========================
//  메인 홈: 대표작 미리보기
// =========================
const featuredContainer = document.getElementById("featured-cards");

if (featuredContainer) {
    renderInto(featuredContainer, featuredProjects);
}
