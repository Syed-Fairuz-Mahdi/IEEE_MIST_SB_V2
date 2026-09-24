import{t as e}from"./supabase-browser.JAwjBCb8.js";var t=6,n=6,r=document.querySelector(`[data-spotlight]`),i=document.querySelector(`[data-spotlight-grid]`),a=document.querySelector(`[data-feed]`),o=[...document.querySelectorAll(`.chip`)],s=document.querySelector(`[data-search]`),c=document.querySelector(`[data-load-more]`),l=document.querySelector(`[data-no-match]`),u=document.querySelector(`#initial-events-data`),d=`all`,f=``,p=t,m=new Map;function h(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function g(e){return`/events/${encodeURIComponent(e)}`}function _(e){return e?/^https?:\/\//i.test(e)||e.startsWith(`/`)?e:`/${e.replace(/^\/+/,``)}`:``}function v(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat(`en-US`,{month:`long`,day:`numeric`,year:`numeric`,timeZone:`UTC`}).format(t).toUpperCase()}function y(e,t){let n=v(e);return t?`${n} • ${t.toUpperCase()}`:n}function b(){return[...m.values()].sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime())}function x(e){return e.filter(e=>new Date(e.date).getTime()>=Date.now()).sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())}function S(e){return e.find(e=>e.featured)??x(e)[0]??e[0]}function C(e,t){return e.find(e=>e.id!==t?.id)}function w(e,t,n){return e.filter(e=>e.id!==t?.id&&e.id!==n?.id)}function T(e){return!e.slug||!e.title||!e.description||!e.chapter||!e.event_date||e.published===!1?null:{id:e.slug,title:e.title,date:e.event_date,chapter:e.chapter,description:e.description,image:e.image_url,location:e.location,time:e.event_time,registrationLink:e.registration_link,registrationOpen:e.registration_open??!0,featured:e.featured??!1,tags:Array.isArray(e.tags)?e.tags:[]}}function E(e,t){if(!r||!i)return;if(!e&&!t){r.hidden=!0,i.innerHTML=``;return}r.hidden=!1;let n=e?.image?`<img src="${h(_(e.image))}" alt="" />`:`<div class="ph"></div>`;i.innerHTML=`
			${e?`
						<a class="large-card" href="${h(g(e.id))}">
							<div class="large-media">${n}</div>
							<div class="large-body">
								<span class="eyebrow">${h(y(e.date,e.location))}</span>
								<h2>${h(e.title)}</h2>
								<p>${h(e.description)}</p>
								<span class="more">Read more →</span>
							</div>
						</a>
					`:``}
			${t?`
						<a class="secondary-card" href="${h(g(t.id))}">
							<span class="tag">Chapter News</span>
							<h3>${h(t.title)}</h3>
							<p>${h(t.description)}</p>
							<span class="eyebrow dark">${h(y(t.date,t.location))}</span>
						</a>
					`:``}
		`}function D(e){if(!a)return;let t=a.querySelector(`.callout`);a.querySelectorAll(`.card`).forEach(e=>e.remove()),e.forEach((e,n)=>{let r=document.createElement(`article`);r.className=`card`,r.dataset.eventId=e.id,r.dataset.chapter=e.chapter,r.dataset.title=e.title.toLowerCase(),r.dataset.index=String(n),r.hidden=n>=p;let i=e.image?`<img src="${h(_(e.image))}" alt="" loading="lazy" />`:`<div class="ph"></div>`;r.innerHTML=`
				<a class="card-media" href="${h(g(e.id))}">
					${i}
					<span class="card-chapter">${h(e.chapter)}</span>
				</a>
				<div class="card-body">
					<span class="eyebrow dark">${h(y(e.date,e.location))}</span>
					<h3>
						<a href="${h(g(e.id))}">${h(e.title)}</a>
					</h3>
					<p>${h(e.description)}</p>
				</div>
			`,t?a.insertBefore(r,t):a.appendChild(r)})}function O(e){let t=d===`all`||e.chapter===d,n=`${e.title} ${e.description} ${e.chapter}`.toLowerCase(),r=!f||n.includes(f);return t&&r}function k(){let e=b().filter(O),t=[...document.querySelectorAll(`[data-feed] .card`)],n=0;t.forEach(e=>{let t=m.get(e.dataset.eventId??``);if(!t||!O(t)){e.hidden=!0;return}n+=1,e.hidden=n>p}),c&&(c.hidden=p>=e.length),l&&(l.hidden=e.length>0)}function A(){let e=b(),t=S(e),n=C(e,t),r=w(e,t,n);E(t,n),D(r),k()}function j(e){m.set(e.id,e)}function M(e){m.delete(e)}function N(){if(u?.textContent)try{let e=JSON.parse(u.textContent);Array.isArray(e)&&e.forEach(j)}catch(e){console.error(`Could not parse initial events:`,e)}}async function P(){let{data:t,error:n}=await e.from(`events`).select(`*`).eq(`published`,!0).order(`event_date`,{ascending:!1});if(n){console.error(`Could not synchronize events:`,n);return}let r=new Map;for(let e of t??[]){let t=T(e);t&&r.set(t.id,t)}m=r,A()}N(),A(),o.forEach(e=>{e.addEventListener(`click`,()=>{d=e.dataset.filter??`all`,p=t,o.forEach(t=>t.classList.toggle(`active`,t===e)),k()})}),s?.addEventListener(`input`,()=>{f=s.value.trim().toLowerCase(),p=t,k()}),c?.addEventListener(`click`,()=>{p+=n,k()}),P();var F=e.channel(`events-index-live`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`events`},e=>{let t=e.new||e.old;if(t?.slug){if(e.eventType===`INSERT`){let t=T(e.new);t&&(j(t),A())}if(e.eventType===`UPDATE`){let n=T(e.new);n?j(n):M(t.slug),A()}e.eventType===`DELETE`&&(M(t.slug),A())}}).subscribe(e=>{console.log(`Events index Realtime status: ${e}`)});window.addEventListener(`beforeunload`,()=>{e.removeChannel(F)});