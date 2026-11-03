document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.getElementById("menuToggle"),nav=document.querySelector(".navbar nav");
 if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.classList.toggle("active",open);menu.setAttribute("aria-expanded",String(open));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.classList.remove("active");menu.setAttribute("aria-expanded","false");}));}
 const current=location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".navbar nav a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active");});
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
 const theme=document.getElementById("themeToggle");const saved=localStorage.getItem("asmus-theme");if(saved==="light")document.body.classList.add("light-mode");
 if(theme){theme.textContent=document.body.classList.contains("light-mode")?"☾":"☼";theme.addEventListener("click",()=>{document.body.classList.toggle("light-mode");const light=document.body.classList.contains("light-mode");localStorage.setItem("asmus-theme",light?"light":"dark");theme.textContent=light?"☾":"☼";});}
 if("serviceWorker" in navigator && location.protocol!=="file:"){navigator.serviceWorker.register("./sw.js").catch(()=>{});}
 let installPrompt;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;document.getElementById("installBanner")?.classList.add("show");});
 document.getElementById("installButton")?.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;document.getElementById("installBanner")?.classList.remove("show");});
});