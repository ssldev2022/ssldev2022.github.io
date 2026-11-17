// Exact UI copy pairs; category keys and URLs stay language-independent.
const englishCopy = {
 '이력서 보기 (PDF) ↗': 'View Resume (PDF) ↗',
 '안녕하세요, Sean Shinil Lee입니다.': 'Hi, I’m Sean Shinil Lee.',
 'Sean의 개발 노트': 'Sean’s Development Notes',
 '© 2026 Sean의 개발 노트': '© 2026 Sean’s Development Notes',
 '직접 만든 프로젝트, 그리고 그 안에서 배우는 기술 이야기를 기록합니다.': 'Projects I build, and the things I learn along the way.',
 '프로젝트': 'Projects', '글 초안': 'Drafts', '레이아웃 시안 · 발행 전': 'Work in progress · Unpublished',
 '콘텐츠 보기': 'Browse content', '고찰': 'Thoughts', '작성자 소개': 'About me', '카테고리': 'Categories',
 '전체': 'All', '개발 노트 찾아보기': 'Search notes', '검색': 'Search', '태그 필터': 'Filter by tag',
 '일치하는 글이 없어요. 다른 검색어나 카테고리를 선택해 주세요.': 'No matching posts. Try another search or category.',
 '이 시대에서 살아남는 법을 찾고 있습니다.': 'I’m figuring out how to survive in this world.',
 '제너럴리스트가 되어가는 제 여정을 지켜봐 주세요.': 'Watch me grow into a generalist.',
 '결제 업계에서 2년 이상 Android 소프트웨어를 개발했고, 현재는 Brixcon에서 현장과 사무 업무를 연결하는 내부 도구를 만들고 있습니다. Stevens Institute of Technology에서 Computer Science 석사 과정을 공부하고 있습니다.': 'I have over two years of Android development experience in the payments industry. Today, I build internal tools connecting field and office operations at Brixcon while pursuing an M.S. in Computer Science at Stevens Institute of Technology.',
 '사용자의 요구를 구체적인 기능으로 옮기고, 실제 피드백을 받아 개선하는 일에 관심이 있습니다. 최근에는 AI coding 도구를 활용하면서 요구사항, 프로젝트 지침, 리뷰와 테스트 과정을 함께 설계하고 있습니다.': 'I’m interested in turning user needs into working features and improving them through real feedback. More recently, I’ve been using AI coding tools while shaping the requirements, project instructions, reviews, and tests that guide the work.',
 '2026.05 — 현재': 'May 2026 — Present',
 '5명으로 구성된 운영팀을 위해 일일 보고, 현장 사진, 발주서, 일정 관리 흐름을 연결하는 클라우드 기반 업무 자동화를 개발·배포했습니다. 현장 직원의 피드백을 요구사항에 반영하고, Codex를 활용한 구현에 프로젝트 지침과 리뷰·테스트 단계를 마련했습니다.': 'Built and deployed cloud-based automation connecting daily reports, site photos, purchase orders, and timelines for a five-person operations team. Translated field staff feedback into requirements and established project instructions, review steps, and testing checkpoints for Codex-assisted development.',
 'Brixcon 프로젝트 보기': 'Explore the Brixcon project',
 '2022.08 — 2024.11': 'Aug 2022 — Nov 2024',
 'Android 기반 POS(Point of Sale, 매장 결제 단말) 프로젝트 8개에 참여했고, 그중 2개는 유지보수부터 릴리스까지 담당했습니다. 요구사항과 개발팀 사이의 소통을 맡았으며, Jira·Confluence 문서화와 Python을 활용한 반복 업무 자동화도 진행했습니다.': 'Contributed to eight Android POS (Point of Sale) projects, owning two from maintenance through release. Bridged requirements and development teams, organized documentation in Jira and Confluence, and automated recurring tasks with Python.',
 '2025.09 — 2027.05 졸업 예정': 'Sep 2025 — May 2027 (expected)',
 '2019.06 — 2022.03': 'Jun 2019 — Mar 2022',
 '2017.06 — 2019.03': 'Jun 2017 — Mar 2019',
 'Combat Engineer · Sergeant. 분대장으로 10명 규모의 팀을 이끌며 작업 계획과 실행을 조율했습니다.': 'Combat Engineer · Sergeant. Led a team of ten as squad leader, coordinating planning and execution.',
 '연결되는 곳': 'Connect', '만들고, 이해하고, 기록합니다.': 'Build. Understand. Document.',
 '초안 · 발행 전': 'Draft · Unpublished', '본문으로 이동': 'Skip to content'
};
function translateCopy(text) {
 return window.portfolioLanguage === 'en' ? (englishCopy[text] ?? text) : text;
}
// Retain original text so switching back does not rely on reverse translation.
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
function translateInterface(root) {
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()) {
  const node=walker.currentNode;
  if (!originalText.has(node)) originalText.set(node,node.nodeValue);
  const original=originalText.get(node), key=original.trim();
  if(Object.hasOwn(englishCopy,key)) node.nodeValue=original.replace(key,translateCopy(key));
 }
 root.querySelectorAll('[aria-label],[placeholder]').forEach(element=>{
  if(!originalAttributes.has(element)) originalAttributes.set(element,Object.fromEntries(['aria-label','placeholder'].filter(a=>element.hasAttribute(a)).map(a=>[a,element.getAttribute(a)])));
  for(const [attr,value] of Object.entries(originalAttributes.get(element))) element.setAttribute(attr,translateCopy(value));
 });
}
