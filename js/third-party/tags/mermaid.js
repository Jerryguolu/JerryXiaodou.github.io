document.addEventListener("page:loaded",()=>{const e=document.querySelectorAll(".mermaid");e.length&&NexT.utils.getScript(CONFIG.mermaid.js,{condition:window.mermaid}).then(()=>{e.forEach(e=>{var a=document.createElement("div"),r=(a.innerHTML=e.innerHTML,a.className=e.className,e.parentNode);r.matches("pre")?r.parentNode.replaceChild(a,r):r.replaceChild(a,e)}),mermaid.initialize({theme:CONFIG.darkmode&&window.matchMedia("(prefers-color-scheme: dark)").matches?CONFIG.mermaid.theme.dark:CONFIG.mermaid.theme.light,logLevel:4,flowchart:{curve:"linear"},gantt:{axisFormat:"%m/%d/%Y"},sequence:{actorMargin:50}}),mermaid.init()})});