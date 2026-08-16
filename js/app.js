document.addEventListener('DOMContentLoaded',function(){
const subtitle=document.getElementById('subtitle');
const description=document.getElementById('description');
const faBtn=document.getElementById('faBtn');
const enBtn=document.getElementById('enBtn');

const translations={
 fa:{subtitle:'به‌زودی',description:'یک دنیای جدید برای مودها و پروژه‌های ماینکرافت در راه است.'},
 en:{subtitle:'Coming Soon',description:'A new world for Minecraft mods and projects is on the way.'}
};

function setLanguage(language){
 document.documentElement.lang=language;
 document.documentElement.dir=language==='fa'?'rtl':'ltr';
 document.body.classList.toggle('en',language==='en');
 subtitle.textContent=translations[language].subtitle;
 description.textContent=translations[language].description;
 faBtn.classList.toggle('active',language==='fa');
 enBtn.classList.toggle('active',language==='en');
}

faBtn.addEventListener('click',()=>setLanguage('fa'));
enBtn.addEventListener('click',()=>setLanguage('en'));
});
