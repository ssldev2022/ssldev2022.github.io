(() => {
 const resumeURL=new URL('Shinil_Lee-Resume-2026.pdf?v=a24d4b4f695b',document.currentScript.src).href;
 const key='sean-portfolio-language';
 let saved;
 try {saved=localStorage.getItem(key);} catch {}
 window.portfolioLanguage=saved==='ko'?'ko':'en';
 const bar=document.createElement('header');bar.className='language-bar';
 bar.innerHTML='<div class="language-inner"><nav class="header-links" aria-label="Contact and resume"><a href="'+resumeURL+'" target="_blank" rel="noopener noreferrer">Resume</a><a href="https://www.linkedin.com/in/ssldev2022/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:slee56@stevens.edu">Email</a></nav><div class="language-options" role="group" aria-label="Language / 언어"><button type="button" data-locale="en" lang="en" aria-label="English"><span aria-hidden="true">🇺🇸</span> EN</button><button type="button" data-locale="ko" lang="ko" aria-label="한국어"><span aria-hidden="true">🇰🇷</span> KO</button></div></div>';
 document.body.prepend(bar);
 function apply(language,announce=false) {
  window.portfolioLanguage=language;document.documentElement.lang=language;
  bar.querySelectorAll('[data-locale]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.locale===language)));
  document.querySelectorAll('[data-language]').forEach(el=>{el.hidden=el.dataset.language!==language;});
  const title=document.querySelector('title');
  if(title?.dataset[language]) title.textContent=title.dataset[language];
  const description=document.querySelector('meta[name="description"]');
  if(description?.dataset[language]) description.content=description.dataset[language];
  const skip=document.querySelector('.skip');if(skip)skip.textContent=language==='en'?'Skip to content':'본문으로 이동';
  if(announce) window.dispatchEvent(new Event('portfolio-language-change'));
 }
 bar.querySelectorAll('[data-locale]').forEach(b=>b.addEventListener('click',()=>{
  try{localStorage.setItem(key,b.dataset.locale);}catch{}
  apply(b.dataset.locale,true);
 }));
 apply(window.portfolioLanguage);
})();
