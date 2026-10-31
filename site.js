const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
function closeMenu(restoreFocus=false){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(restoreFocus)menu.focus();}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))closeMenu(true);});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
matchMedia('(min-width: 761px)').addEventListener('change',()=>closeMenu());
const privacy=document.querySelector('#privacy');
document.querySelector('.privacy-open').addEventListener('click',()=>privacy.showModal());
document.querySelector('.privacy-close').addEventListener('click',()=>privacy.close());
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.06});document.querySelectorAll('.section-copy,.section-art,.jali-panel').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
const form=document.querySelector('#enquiry-form');
if(form){
 const first=document.querySelector('#step-one'),second=document.querySelector('#step-two'),progress=document.querySelector('.form-progress'),review=document.querySelector('#enquiry-review');
 let preparedMessage='';
 function showStep(n){first.hidden=n!==1;first.disabled=n!==1;second.hidden=n!==2;second.disabled=n!==2;progress.textContent=n===1?'01 / 02 · Your occasion':'02 / 02 · Your vision';(n===1?first:second).querySelector('input,select').focus();}
 document.querySelector('#next-step').addEventListener('click',()=>{if(form.reportValidity())showStep(2);});
 document.querySelector('#back-step').addEventListener('click',()=>showStep(1));
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;
 // Enable the first fieldset only while collecting both steps; disabled fields are omitted by FormData.
 first.disabled=false;const d=new FormData(form);first.disabled=true;
 const value=k=>String(d.get(k)||'Not yet decided').trim()||'Not yet decided';
 preparedMessage=`Hello Luvvent Events, I would like to discuss a celebration.\n\nName: ${value('name')}\nOccasion: ${value('occasion')}\nApproximate date: ${value('date')}\nCity / venue: ${value('location')}\nGuest estimate: ${value('guests')}\nInvestment range: ${value('budget')}\n\nMy vision:\n${value('vision')}\n\nPlease let me know how we can begin a planning conversation.`;
 document.querySelector('#message-preview').textContent=preparedMessage;
 document.querySelector('#whatsapp-link').href='https://wa.me/919090219319?text='+encodeURIComponent(preparedMessage);
 form.hidden=true;review.hidden=false;review.focus();
 });
 document.querySelector('#edit-enquiry').addEventListener('click',()=>{review.hidden=true;form.hidden=false;showStep(2);});
 document.querySelector('#copy-enquiry').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(preparedMessage);status.textContent='Message copied. You can paste it into your preferred conversation.';}catch{status.textContent='Select the message above and copy it manually. Clipboard access is unavailable in this browser.';}});
}

// The collection remains fully readable without JavaScript.
const filterButtons=document.querySelectorAll('[data-filter]');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;let count=0;
 document.querySelectorAll('.collection-item').forEach(item=>{item.hidden=selected!=='all'&&item.dataset.category!==selected;if(!item.hidden)count++;});
 filterButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 const status=document.querySelector('.collection-count');if(status)status.textContent=count+' images · '+button.textContent;
}));
const photoViewer=document.querySelector('#photo-viewer');
if(photoViewer){document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{const image=document.querySelector('#photo-large');image.src=button.dataset.photo;image.alt=button.dataset.caption+' — supplied décor reference';document.querySelector('#photo-caption').textContent=button.dataset.caption;photoViewer.showModal();}));document.querySelector('.photo-close').addEventListener('click',()=>photoViewer.close());}
