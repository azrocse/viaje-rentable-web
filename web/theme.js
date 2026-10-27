const root=document.documentElement,key='vr-theme';
const system=()=>matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
root.dataset.theme=localStorage.getItem(key)||system();
document.querySelectorAll('[data-theme-toggle]').forEach(button=>button.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem(key,root.dataset.theme)}));
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(!localStorage.getItem(key))root.dataset.theme=system()});
