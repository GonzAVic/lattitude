const cursor=document.querySelector(".cursor");
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
function follow(){
  cx+=(mx-cx)*.15;cy+=(my-cy)*.15;
  cursor.style.left=cx+"px";cursor.style.top=cy+"px";
  requestAnimationFrame(follow);
}
follow();

document.querySelectorAll("a,button,.hoverable").forEach(el=>{
  el.addEventListener("mouseenter",()=>document.body.classList.add("cursor-active"));
  el.addEventListener("mouseleave",()=>document.body.classList.remove("cursor-active"));
});

const plus=document.querySelector(".menu-btn");
const overlay=document.querySelector(".overlay");
function toggleMenu(force){
  const open=typeof force==="boolean"?force:!overlay.classList.contains("open");
  overlay.classList.toggle("open",open);
  overlay.setAttribute("aria-hidden",String(!open));
  plus.setAttribute("aria-expanded",String(open));
  plus.setAttribute("aria-label",open?"Close menu":"Open menu");
}
plus.addEventListener("click",()=>toggleMenu());
document.querySelectorAll(".overlay-link").forEach(a=>a.addEventListener("click",()=>toggleMenu(false)));
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggleMenu(false)});
document.getElementById("year").textContent=new Date().getFullYear();
