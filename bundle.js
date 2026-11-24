/* Small dependency-free helpers shared by the page modules. */
(function(){
  'use strict';
  const $=(selector,root=document)=>root.querySelector(selector);
  const $$=(selector,root=document)=>Array.from(root.querySelectorAll(selector));
  const escapeHTML=(value='')=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const debounce=(fn,wait=250)=>{let timer;return(...args)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...args),wait)}};
  const toast=(message)=>{const node=$('#toast');if(!node)return;node.textContent=message;node.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>node.classList.remove('show'),2800)};
  const setBusy=(node,busy)=>{if(!node)return;node.classList.toggle('is-loading',busy);if('disabled'in node)node.disabled=busy};
  window.LRTools={ $, $$, escapeHTML, debounce, toast, setBusy };
})();
