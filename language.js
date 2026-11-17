(() => {
 const resumeURL=new URL('Shinil_Lee-Resume-2026.pdf?v=a24d4b4f695b',document.currentScript.src).href;
 const key='sean-portfolio-language';
 let saved;
 try {saved=localStorage.getItem(key);} catch {}
 window.portfolioLanguage=saved==='ko'?'ko':'en';
 const bar=document.createElement('header');bar.className='language-bar';
 bar.innerHTML='<div class="language-inner"><nav class="header-links" aria-label="Contact and resume"><button type="button" class="open-resume" aria-haspopup="dialog">Resume</button><a href="https://www.linkedin.com/in/ssldev2022/" target="_blank" rel="noopener noreferrer">LinkedIn</a><button type="button" class="copy-email">Email</button></nav><div class="language-options" role="group" aria-label="Language / 언어"><button type="button" data-locale="en" lang="en" aria-label="English"><span aria-hidden="true">🇺🇸</span> EN</button><button type="button" data-locale="ko" lang="ko" aria-label="한국어"><span aria-hidden="true">🇰🇷</span> KO</button></div></div>';
 document.body.prepend(bar);
 const resumeDialog=document.createElement('dialog');
 resumeDialog.className='resume-dialog';resumeDialog.setAttribute('aria-labelledby','resume-dialog-title');
 resumeDialog.innerHTML='<div class="resume-dialog-toolbar"><h2 id="resume-dialog-title">Resume</h2><a class="resume-external" href="'+resumeURL+'" target="_blank" rel="noopener noreferrer"></a><button type="button" class="resume-close" autofocus>×</button></div><iframe class="resume-frame"></iframe>';
 document.body.append(resumeDialog);
 const resumeFrame=resumeDialog.querySelector('.resume-frame');
 const resumeButton=bar.querySelector('.open-resume');
 resumeButton.addEventListener('click',()=>{
  if(!resumeFrame.getAttribute('src'))resumeFrame.src=resumeURL+'#view=FitH';
  resumeDialog.showModal();document.body.classList.add('resume-open');
 });
 resumeDialog.querySelector('.resume-close').addEventListener('click',()=>resumeDialog.close());
 let backdropPress=false;
 function outsideDialog(event){const r=resumeDialog.getBoundingClientRect();return event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom;}
 resumeDialog.addEventListener('pointerdown',event=>{backdropPress=event.target===resumeDialog&&outsideDialog(event);});
 resumeDialog.addEventListener('click',event=>{if(backdropPress&&event.target===resumeDialog&&outsideDialog(event))resumeDialog.close();backdropPress=false;});
 resumeDialog.addEventListener('close',()=>{document.body.classList.remove('resume-open');resumeButton.focus();});
 const email='slee56@stevens.edu';
 const toast=document.createElement('div');
 toast.className='copy-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');toast.setAttribute('aria-atomic','true');
 document.body.append(toast);
 let toastTimer, toastState='';
 const messages={en:{success:'Copied to clipboard.',error:'Could not copy. Email: '+email},ko:{success:'클립보드에 복사되었습니다.',error:'복사하지 못했습니다. 이메일: '+email}};
 function updateToast(){toast.textContent=toastState?messages[window.portfolioLanguage][toastState]:'';}
 function showToast(state){
  clearTimeout(toastTimer);toastState=state;updateToast();toast.classList.add('is-visible');
  toastTimer=setTimeout(()=>{toast.classList.remove('is-visible');toastState='';toast.textContent='';},3500);
 }
 bar.querySelector('.copy-email').addEventListener('click',async()=>{
  try {
   await navigator.clipboard.writeText(email);
   showToast('success');
  } catch {showToast('error');}
 });
 function apply(language,announce=false) {
  window.portfolioLanguage=language;document.documentElement.lang=language;
  bar.querySelector('.copy-email').setAttribute('aria-label',language==='ko'?'이메일 주소 복사':'Copy email address');
  resumeDialog.querySelector('#resume-dialog-title').textContent=language==='ko'?'이력서':'Resume';
  resumeDialog.querySelector('.resume-external').textContent=language==='ko'?'새 탭에서 열기 ↗':'Open in new tab ↗';
  resumeDialog.querySelector('.resume-close').setAttribute('aria-label',language==='ko'?'이력서 닫기':'Close resume');
  resumeFrame.title=language==='ko'?'이력서 PDF':'Resume PDF';
  updateToast();
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
