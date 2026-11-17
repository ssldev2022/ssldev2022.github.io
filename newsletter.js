const newsletterPosts = portfolioPosts;
const newsletterMarkup = `<div class="nl-shell" lang="ko"><main id="main" class="nl-main"><section class="nl-profile" id="about"><div class="nl-identity"><div class="nl-avatar" aria-hidden="true">SL</div><div><h1>Sean의 개발 노트</h1><p>Sean Lee · MS Computer Science</p></div></div><p class="nl-description"><span>이 시대에서 살아남는 법을 찾고 있습니다.</span><br><span>제너럴리스트가 되어가는 제 여정을 지켜봐 주세요.</span></p><div class="nl-stats"><div><span>고찰</span><strong>${newsletterPosts.filter(p=>p.category!=='Projects').length}</strong></div><div><span>프로젝트</span><strong>${newsletterPosts.filter(p=>p.category==='Projects').length}</strong></div></div></section><div class="nl-tabs" role="group" aria-label="콘텐츠 보기"><button type="button" data-nl-tab="reflections" aria-pressed="true">고찰</button><button type="button" data-nl-tab="projects" aria-pressed="false">프로젝트</button><button type="button" data-nl-tab="about" aria-pressed="false">작성자 소개</button></div><section class="nl-post-panel" id="work"><div class="nl-categories" role="group" aria-label="카테고리">${['전체',...new Set(newsletterPosts.map(p=>p.category))].map((c,i)=>`<button type="button" data-nl-category="${c}" aria-pressed="${i===0}">${c}</button>`).join('')}</div><form class="nl-search" role="search"><input type="search" aria-label="개발 노트 찾아보기" placeholder="개발 노트 찾아보기"><button type="submit" aria-label="검색">⌕</button></form><div class="nl-tags" role="group" aria-label="태그 필터">${[...new Set(newsletterPosts.map(p=>p.tag))].map(t=>`<button type="button" data-nl-tag="${t}" aria-pressed="false">#${t}</button>`).join('')}</div><p class="nl-results sr-only" role="status"></p><div class="nl-posts"></div><p class="nl-empty" hidden>일치하는 글이 없어요. 다른 검색어나 카테고리를 선택해 주세요.</p></section><section class="nl-author" hidden aria-labelledby="author-title">
<div class="author-intro"><span class="small-label">ABOUT ME</span><h2 id="author-title">안녕하세요, Sean Shinil Lee입니다.</h2><p>결제 업계에서 2년 이상 Android 소프트웨어를 개발했고, 현재는 Brixcon에서 현장과 사무 업무를 연결하는 내부 도구를 만들고 있습니다. Stevens Institute of Technology에서 Computer Science 석사 과정을 공부하고 있습니다.</p><p>사용자의 요구를 구체적인 기능으로 옮기고, 실제 피드백을 받아 개선하는 일에 관심이 있습니다. 최근에는 AI coding 도구를 활용하면서 요구사항, 프로젝트 지침, 리뷰와 테스트 과정을 함께 설계하고 있습니다.</p></div>
<section class="author-section" aria-labelledby="experience-title"><h3 id="experience-title">Experience</h3>
<article class="author-entry"><div class="author-entry-heading"><h4>Brixcon, Inc.</h4><span>2026.05 — 현재</span></div><p class="author-role">SWE, Business Operations · Construction</p><p>5명으로 구성된 운영팀을 위해 일일 보고, 현장 사진, 발주서, 일정 관리 흐름을 연결하는 클라우드 기반 업무 자동화를 개발·배포했습니다. 현장 직원의 피드백을 요구사항에 반영하고, Codex를 활용한 구현에 프로젝트 지침과 리뷰·테스트 단계를 마련했습니다.</p><a class="author-project-link" href="projects/slack-integration/">Brixcon 프로젝트 보기 <span aria-hidden="true">↗</span></a></article>
<article class="author-entry"><div class="author-entry-heading"><h4>Pax Technology, Inc.</h4><span>2022.08 — 2024.11</span></div><p class="author-role">Software Engineer · Payment</p><p>Android 기반 POS(Point of Sale, 매장 결제 단말) 프로젝트 8개에 참여했고, 그중 2개는 유지보수부터 릴리스까지 담당했습니다. 요구사항과 개발팀 사이의 소통을 맡았으며, Jira·Confluence 문서화와 Python을 활용한 반복 업무 자동화도 진행했습니다.</p></article>
</section>
<section class="author-section" aria-labelledby="education-title"><h3 id="education-title">Education</h3><article class="author-entry"><div class="author-entry-heading"><h4>Stevens Institute of Technology</h4><span>2025.09 — 2027.05 졸업 예정</span></div><p>M.S. in Computer Science · GPA 3.93 / 4.00</p></article><article class="author-entry"><div class="author-entry-heading"><h4>Full Sail University</h4><span>2019.06 — 2022.03</span></div><p>B.S. in Mobile Development · Advanced Achievement Award</p></article></section>
<section class="author-section" aria-labelledby="skills-title"><h3 id="skills-title">Skills & Tools</h3><dl class="author-skills"><div><dt>Languages</dt><dd>Java, Kotlin, Swift, Python, SQL</dd></div><div><dt>Cloud & Automation</dt><dd>Google Cloud (Cloud Run), Slack API, Google Workspace APIs, Vercel</dd></div><div><dt>Development</dt><dd>Codex CLI, Claude Code, Git, Jira, Confluence, Android Studio, Xcode</dd></div></dl></section>
<section class="author-section" aria-labelledby="service-title"><h3 id="service-title">Military Service</h3><article class="author-entry"><div class="author-entry-heading"><h4>Republic of Korea Marine Corps</h4><span>2017.06 — 2019.03</span></div><p>Combat Engineer · Sergeant. 분대장으로 10명 규모의 팀을 이끌며 작업 계획과 실행을 조율했습니다.</p></article></section>
</section></main><footer class="nl-footer"><div><strong>© 2026 Sean의 개발 노트</strong></div></footer></div>`;
function initializeNewsletter(root) {
 let activeTab='reflections', category='전체', tag='', query='';
 const panel=root.querySelector('.nl-post-panel'), author=root.querySelector('.nl-author');
 function render(){
  const localizedPosts=newsletterPosts.map(p=>window.portfolioLanguage==='en'?{...p,...p.en}:p);
  const filtered=localizedPosts.filter(p=>(activeTab==='projects'?p.category==='Projects':p.category!=='Projects')&&(category==='전체'||p.category===category)&&(!tag||p.tag===tag)&&(`${p.title} ${p.excerpt} ${p.category} ${p.tag}`.toLowerCase().includes(query)));
  root.querySelector('.nl-posts').innerHTML=filtered.map(p=>`<a class="nl-post" href="${p.path}"><span class="nl-post-copy" lang="${p.contentLanguage || window.portfolioLanguage}"><span class="nl-post-category">${p.category}</span><strong>${p.title}</strong><span class="nl-excerpt">${p.excerpt}</span><span class="nl-post-meta">${translateCopy('초안 · 발행 전')} <span>·</span> #${p.tag}</span></span><span class="nl-art nl-art-${p.art}" aria-hidden="true"><span>${p.label}</span><b>${p.art==='slack'?'# ↗':p.art==='http'?'⇄':p.art==='portfolio'?'Aa.':'{ }'}</b><small>SEAN’S DEVELOPMENT NOTES</small></span></a>`).join('');
  root.querySelector('.nl-empty').hidden=filtered.length>0;
  root.querySelector('.nl-results').textContent=window.portfolioLanguage==='en'?`${filtered.length} draft${filtered.length===1?'':'s'}`:`${filtered.length}개의 초안`;
  root.querySelectorAll('[data-nl-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.nlCategory===category)));
  root.querySelectorAll('[data-nl-tag]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.nlTag===tag)));
  root.querySelector('.nl-shell').lang=window.portfolioLanguage;
  translateInterface(root);
 }
 root.querySelectorAll('[data-nl-category]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.nlCategory;render();}));
 root.querySelectorAll('[data-nl-tag]').forEach(b=>b.addEventListener('click',()=>{tag=tag===b.dataset.nlTag?'':b.dataset.nlTag;render();}));
 const input=root.querySelector('.nl-search input');
 input.addEventListener('input',()=>{query=input.value.trim().toLowerCase();render();});
 root.querySelector('.nl-search').addEventListener('submit',e=>{e.preventDefault();query=input.value.trim().toLowerCase();render();});
 root.querySelectorAll('[data-nl-tab]').forEach(b=>b.addEventListener('click',()=>{
  root.querySelectorAll('[data-nl-tab]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));
  activeTab=b.dataset.nlTab;
  const url=new URL(location.href);url.searchParams.set('tab',activeTab);history.replaceState(null,'',url);
  const about=activeTab==='about';panel.hidden=about;author.hidden=!about;
  root.querySelectorAll('[data-nl-category]').forEach(c=>{c.hidden=activeTab==='projects'?c.dataset.nlCategory!=='전체'&&c.dataset.nlCategory!=='Projects':c.dataset.nlCategory==='Projects';});
  category='전체';tag='';query='';input.value='';render();
 }));
 window.addEventListener('portfolio-language-change',render);
 const requestedTab = new URLSearchParams(location.search).get('tab');
 const initialTab = ['reflections','projects','about'].includes(requestedTab) ? requestedTab : 'reflections';
 root.querySelector(`[data-nl-tab="${initialTab}"]`).click();
}
