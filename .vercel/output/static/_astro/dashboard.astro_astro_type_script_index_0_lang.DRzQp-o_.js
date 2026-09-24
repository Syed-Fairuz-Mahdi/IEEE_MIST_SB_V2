import{t as e}from"./dist.ojcb_qrN.js";var t=`https://czxhvlqhfqhovuslglpe.supabase.co`,n=`sb_publishable__C3FKDsT53MA-0siZYUbKw_Q26ZkV_H`,r=`site-content`,i=e(t,n),a=document.getElementById(`app`),o=[`SB`,`EDS`,`APS`,`WIE`,`MTT-S`,`SPS`];function s(e,t={},n=[]){let r=document.createElement(e);for(let[e,n]of Object.entries(t))e===`class`?r.className=n:r.setAttribute(e,n);for(let e of n)r.append(e);return r}function c(e,t=`ok`){let n=document.getElementById(`toast`);n&&(n.textContent=e,n.className=`toast show ${t}`,window.clearTimeout(n._t),n._t=window.setTimeout(()=>{n.classList.remove(`show`)},3500))}function l(e){return i.storage.from(r).getPublicUrl(e).data.publicUrl}async function u(e,t){let n=e.name.split(`.`).pop()||`jpg`,a=`${t}/${crypto.randomUUID()}.${n}`,{error:o}=await i.storage.from(r).upload(a,e,{cacheControl:`3600`,upsert:!1});if(o)throw o;return l(a)}function d(e,t,n){let r=s(`div`,{class:`imgpick`}),i=s(`img`,{class:`imgpick-preview`,src:e||f(`images/placeholder.png`),alt:`Image preview`});i.onerror=()=>{i.style.visibility=`hidden`};let a=s(`input`,{type:`file`,accept:`image/*`,class:`imgpick-input`}),o=s(`div`,{class:`imgpick-info`}),c=s(`strong`,{class:`imgpick-title`},[`Upload image`]),l=s(`span`,{class:`imgpick-help`},[`JPG, PNG or WebP`]),d=s(`span`,{class:`imgpick-status`},[``]);return o.append(c,l,a,d),a.addEventListener(`change`,async()=>{let e=a.files?.[0];if(e){if(e.size>5242880){d.textContent=`Image must be smaller than 5 MB.`,d.className=`imgpick-status error-text`;return}d.textContent=`Uploading...`,d.className=`imgpick-status`;try{let r=await u(e,t);i.src=r,i.style.visibility=`visible`,d.textContent=`Image uploaded successfully.`,d.className=`imgpick-status success-text`,n(r)}catch(e){d.textContent=`Upload failed: ${e.message||e}`,d.className=`imgpick-status error-text`}}}),r.append(i,o),r}function f(e){return e}function p(){a.replaceChildren();let e=s(`div`,{class:`login-page`}),t=s(`form`,{class:`login-card`}),n=s(`div`,{class:`login-logo`});n.innerHTML=`
            <div class="login-logo-ieee">IEEE</div>
            <div class="login-logo-text">
               MIST Student Branch
            </div>
         `;let r=s(`h1`,{},[`Content Dashboard`]),o=s(`p`,{class:`login-description`},[`Sign in with your administrator account to manage website content.`]),c=s(`input`,{type:`email`,placeholder:`Email address`,required:`true`,class:`field`}),l=s(`input`,{type:`password`,placeholder:`Password`,required:`true`,class:`field`}),u=s(`p`,{class:`error`},[``]),d=s(`button`,{type:`submit`,class:`btn primary login-button`},[`Sign in`]);t.append(n,r,o,v(`Email`,c),v(`Password`,l),u,d),t.addEventListener(`submit`,async e=>{e.preventDefault(),d.setAttribute(`disabled`,`true`),d.textContent=`Signing in...`,u.textContent=``;let{error:t}=await i.auth.signInWithPassword({email:c.value.trim(),password:l.value});t&&(u.textContent=t.message,d.removeAttribute(`disabled`),d.textContent=`Sign in`)});let f=s(`p`,{class:`login-footer`},[`IEEE MIST Student Branch • Admin Portal`]);e.append(t,f),a.append(e)}var m=[{id:`chief_patron`,group:`home`,label:`Chief Patron's Message`,icon:`👤`},{id:`counselor`,group:`home`,label:`Counselor's Message`,icon:`💬`},{id:`exec`,group:`home`,label:`Executive Committee`,icon:`👥`},{id:`assoc`,group:`home`,label:`Associate Directors`,icon:`🧩`},{id:`activities`,group:`home`,label:`Recent Activities`,icon:`📅`},{id:`settings`,group:`home`,label:`Publishing`,icon:`🚀`},{id:`about`,group:`about`,label:`About`,icon:`📄`},{id:`contact`,group:`contact`,label:`Contact`,icon:`📨`}];async function h(e){a.replaceChildren();let t=s(`header`,{class:`topbar`}),n=s(`div`,{class:`brand`});n.innerHTML=`
            <div class="brand-mark">
               IEEE
            </div>

            <div class="brand-content">
               <strong>IEEE MIST</strong>
               <span>Student Branch</span>
            </div>
         `;let r=s(`div`,{class:`user-area`}),o=s(`div`,{class:`user-info`});o.innerHTML=`
            <span class="user-label">
               Signed in as
            </span>

            <span class="user-email">
               ${e}
            </span>
         `;let c=s(`button`,{class:`btn ghost`},[`Sign out`]);c.addEventListener(`click`,()=>i.auth.signOut()),r.append(o,c),t.append(n,r);let l=s(`div`,{class:`dashboard-intro`});l.innerHTML=`
            <div>
               <span class="eyebrow">
                  ADMINISTRATION
               </span>

               <h1>
                  Content Dashboard
               </h1>

               <p>
                  Manage the content displayed across the
                  IEEE MIST Student Branch website.
               </p>
            </div>
         `;let u=s(`aside`,{class:`dashboard-sidebar`,"aria-label":`Dashboard navigation`}),d=s(`div`,{class:`sidebar-top`});d.innerHTML=`
            <span class="sidebar-kicker">SITE MANAGEMENT</span>
            <strong>Dashboard</strong>
         `,u.append(d);let f=s(`div`,{class:`dashboard-content`}),p=s(`main`,{class:`panel-host`}),h={},_=``;for(let e of m){if(e.group&&e.group!==_){_=e.group;let t=e.group===`about`?`ABOUT`:e.group===`contact`?`CONTACT`:`HOME`;u.append(s(`div`,{class:`sidebar-group-label`},[t]))}let t=s(`button`,{class:`tab`,"data-tab":e.id,type:`button`});t.innerHTML=`
               <span class="tab-icon">
                  ${e.icon}
               </span>

               <span>
                  ${e.label}
               </span>
            `,t.addEventListener(`click`,()=>v(e.id)),u.append(t),h[e.id]=s(`section`,{class:`panel`}),p.append(h[e.id])}function v(e){for(let t of u.querySelectorAll(`.tab`))t.classList.toggle(`active`,t.dataset.tab===e);for(let[t,n]of Object.entries(h))n.classList.toggle(`active`,t===e)}f.append(l,p);let y=s(`div`,{class:`dashboard-layout`});y.append(u,f),a.append(t,y,s(`div`,{id:`toast`,class:`toast`},[``])),await Promise.all([g(h.chief_patron,`chief_patron`),g(h.counselor,`counselor`),S(h.exec,`executive_committee`,`exec`),C(h.assoc),E(h.activities),A(h.settings),T(h.about),D(h.contact)]),v(`chief_patron`)}async function g(e,t){e.replaceChildren(b());let{data:n,error:r}=await i.from(`leadership_messages`).select(`*`).eq(`id`,t).maybeSingle();if(r){e.replaceChildren(x(r.message));return}let a=n||{id:t,eyebrow:``,heading:``,person_name:``,person_roles:[],message:[],image_url:null};e.replaceChildren(),e.append(y(t===`chief_patron`?`Chief Patron's Message`:`Counselor's Message`,t===`chief_patron`?`Manage the Chief Patron information displayed on the homepage.`:`Manage the Counselor information displayed on the homepage.`));let o=s(`form`,{class:`edit-form`}),l=_(`Eyebrow`,a.eyebrow||``),u=_(`Heading`,a.heading||``),f=_(`Name`,a.person_name||``),p=_(`Roles / titles`,(a.person_roles||[]).join(`
`),!0),m=_(`Message`,(a.message||[]).join(`

`),!0,10),h=a.image_url||null,g=d(h,`leadership/${t}`,e=>h=e),S=s(`span`,{class:`muted small`},[``]),C=s(`button`,{type:`submit`,class:`btn primary`},[`Save changes`]);o.append(v(`Photo`,g),v(`Eyebrow`,l),v(`Heading`,u),v(`Name`,f),v(`Roles / titles`,p),v(`Message`,m),s(`div`,{class:`form-footer`},[S,C])),o.addEventListener(`submit`,async e=>{e.preventDefault(),C.setAttribute(`disabled`,`true`),C.textContent=`Saving...`,S.textContent=`Saving changes...`;let n=m.value.split(/\n\s*\n/).map(e=>e.replace(/\n/g,` `).trim()).filter(Boolean),r=p.value.split(`
`).map(e=>e.trim()).filter(Boolean),{error:a}=await i.from(`leadership_messages`).upsert({id:t,eyebrow:l.value.trim(),heading:u.value.trim(),person_name:f.value.trim(),person_roles:r,message:n,image_url:h,updated_at:new Date().toISOString()});C.removeAttribute(`disabled`),C.textContent=`Save changes`,a?(S.textContent=`Error: ${a.message}`,c(`Could not save changes.`,`err`)):(S.textContent=`Changes saved successfully.`,c(`Saved. Publish the changes when ready.`))}),e.append(o)}function _(e,t,n=!1,r=3){let i=n?s(`textarea`,{class:`field`,rows:String(r)}):s(`input`,{type:`text`,class:`field`});return i.value=t,i}function v(e,t){let n=s(`label`,{class:`labeled`});return n.append(s(`span`,{class:`label-text`},[e]),t),n}function y(e,t){let n=s(`div`,{class:`section-header`});return n.innerHTML=`
            <div>
               <h2>${e}</h2>
               <p>${t}</p>
            </div>
         `,n}function b(){let e=s(`div`,{class:`state-card`});return e.innerHTML=`
            <div class="loading-spinner"></div>
            <p>Loading content...</p>
         `,e}function x(e){let t=s(`div`,{class:`state-card error-state`});return t.innerHTML=`
            <strong>Something went wrong</strong>
            <p>${e}</p>
         `,t}async function S(e,t,n){e.replaceChildren(b());let{data:r,error:a}=await i.from(t).select(`*`).order(`sort_order`,{ascending:!0});if(a){e.replaceChildren(x(a.message));return}e.replaceChildren(),e.append(y(`Executive Committee`,`Manage the members displayed in the Executive Committee section.`));let o=s(`div`,{class:`info-banner`});o.innerHTML=`
            <span class="info-icon">💡</span>
            <span>
               Use the Order field to control the position
               of each member on the website.
            </span>
         `;let l=s(`div`,{class:`card-list`});e.append(o,l,f());for(let e of r||[])l.append(u(e));function u(e){let r=s(`div`,{class:`member-card`}),a=s(`div`,{class:`member-card-header`});a.innerHTML=`
               <span class="card-label">
                  COMMITTEE MEMBER
               </span>

               <span class="member-id">
                  #${e.sort_order??0}
               </span>
            `;let o=_(``,e.name),l=_(``,e.role),u=_(``,e.department||``),f=_(``,e.major||``),p=s(`input`,{type:`number`,class:`field small`,value:String(e.sort_order??0)}),m=e.avatar_url||null,h=d(m,n,e=>m=e),g=s(`span`,{class:`muted small`},[``]),y=s(`button`,{class:`btn primary small`,type:`button`},[`Save`]),b=s(`button`,{class:`btn danger small`,type:`button`},[`Delete`]);return y.addEventListener(`click`,async()=>{g.textContent=`Saving...`,y.setAttribute(`disabled`,`true`);let{error:n}=await i.from(t).update({name:o.value.trim(),role:l.value.trim(),department:u.value.trim()||null,major:f.value.trim()||null,sort_order:Number(p.value)||0,avatar_url:m,updated_at:new Date().toISOString()}).eq(`id`,e.id);y.removeAttribute(`disabled`),n?(g.textContent=`Error: ${n.message}`,c(`Could not save member.`,`err`)):(g.textContent=`Saved successfully.`,c(`Saved. Publish to make it live.`))}),b.addEventListener(`click`,async()=>{if(!confirm(`Remove ${e.name}?`))return;let{error:n}=await i.from(t).delete().eq(`id`,e.id);if(n){c(n.message,`err`);return}r.remove(),c(`Member removed. Publish to make it live.`)}),r.append(a,h,v(`Name`,o),v(`Role`,l),v(`Department`,u),v(`Major`,f),v(`Display order`,p),s(`div`,{class:`row-actions`},[y,b,g])),r}function f(){let e=s(`form`,{class:`add-form`}),a=s(`div`,{class:`add-form-heading`});a.innerHTML=`
               <span class="add-icon">+</span>

               <div>
                  <h3>Add new member</h3>
                  <p>
                     Add a new Executive Committee member.
                  </p>
               </div>
            `;let o=_(``,``),f=_(``,``),p=_(``,``),m=_(``,``);o.placeholder=`Full name`,f.placeholder=`Role (e.g. Chair)`,p.placeholder=`Department (optional)`,m.placeholder=`Major (optional)`;let h=null,g=d(null,n,e=>h=e),y=s(`button`,{type:`submit`,class:`btn primary`},[`+ Add member`]);return e.append(a,g,v(`Name`,o),v(`Role`,f),v(`Department`,p),v(`Major`,m),y),e.addEventListener(`submit`,async n=>{if(n.preventDefault(),!o.value.trim()||!f.value.trim()){c(`Name and role are required.`,`err`);return}y.setAttribute(`disabled`,`true`);let{data:a,error:s}=await i.from(t).insert({name:o.value.trim(),role:f.value.trim(),department:p.value.trim()||null,major:m.value.trim()||null,avatar_url:h,sort_order:(r?.length||0)+l.children.length}).select().single();if(y.removeAttribute(`disabled`),s){c(s.message,`err`);return}l.append(u(a)),e.reset(),h=null,c(`Member added. Publish to make it live.`)}),e}}async function C(e){e.replaceChildren(b());let{data:t,error:n}=await i.from(`associate_directors`).select(`*`).eq(`group_key`,`sb`).order(`sort_order`,{ascending:!0});if(n){e.replaceChildren(x(n.message));return}e.replaceChildren(),e.append(y(`Associate Directors`,`Manage the branch-level Associate Directors shown on the homepage.`));let r=s(`div`,{class:`info-banner`});r.innerHTML=`
            <span class="info-icon">ℹ</span>

            <span>
               This dashboard manages the branch-level
               Associate Directors group.
            </span>
         `,e.append(r),await w(e,t||[])}async function w(e,t){let n=s(`div`,{class:`card-list`});e.append(n);for(let e of t)n.append(r(e));e.append(a());function r(e){let t=s(`div`,{class:`member-card`}),n=s(`div`,{class:`member-card-header`});n.innerHTML=`
               <span class="card-label">
                  ASSOCIATE DIRECTOR
               </span>

               <span class="member-id">
                  #${e.sort_order??0}
               </span>
            `;let r=_(``,e.name),a=_(``,e.role),o=s(`input`,{type:`number`,class:`field small`,value:String(e.sort_order??0)}),l=e.avatar_url||null,u=d(l,`associates`,e=>l=e),f=s(`span`,{class:`muted small`},[``]),p=s(`button`,{class:`btn primary small`,type:`button`},[`Save`]),m=s(`button`,{class:`btn danger small`,type:`button`},[`Delete`]);return p.addEventListener(`click`,async()=>{f.textContent=`Saving...`;let{error:t}=await i.from(`associate_directors`).update({name:r.value.trim(),role:a.value.trim(),sort_order:Number(o.value)||0,avatar_url:l,updated_at:new Date().toISOString()}).eq(`id`,e.id);t?(f.textContent=`Error: ${t.message}`,c(t.message,`err`)):(f.textContent=`Saved.`,c(`Saved. Publish to make it live.`))}),m.addEventListener(`click`,async()=>{if(!confirm(`Remove ${e.name}?`))return;let{error:n}=await i.from(`associate_directors`).delete().eq(`id`,e.id);if(n){c(n.message,`err`);return}t.remove(),c(`Associate Director removed.`)}),t.append(n,u,v(`Name`,r),v(`Role`,a),v(`Display order`,o),s(`div`,{class:`row-actions`},[p,m,f])),t}function a(){let e=s(`form`,{class:`add-form`}),t=s(`div`,{class:`add-form-heading`});t.innerHTML=`
               <span class="add-icon">+</span>

               <div>
                  <h3>
                     Add Associate Director
                  </h3>

                  <p>
                     Add a new branch-level associate director.
                  </p>
               </div>
            `;let a=_(``,``),o=_(``,``);a.placeholder=`Full name`,o.placeholder=`Role (e.g. Visual & Graphics)`;let l=null,u=d(null,`associates`,e=>l=e),f=s(`button`,{type:`submit`,class:`btn primary`},[`+ Add associate director`]);return e.append(t,u,v(`Name`,a),v(`Role`,o),f),e.addEventListener(`submit`,async t=>{if(t.preventDefault(),!a.value.trim()||!o.value.trim()){c(`Name and role are required.`,`err`);return}let{data:s,error:u}=await i.from(`associate_directors`).insert({group_key:`sb`,group_label:`IEEE MIST Student Branch`,name:a.value.trim(),role:o.value.trim(),avatar_url:l,sort_order:n.children.length}).select().single();if(u){c(u.message,`err`);return}n.append(r(s)),e.reset(),l=null,c(`Associate Director added.`)}),e}}async function T(e){e.replaceChildren(b());let{data:t,error:n}=await i.from(`about_page`).select(`*`).eq(`id`,`main`).maybeSingle();if(n){e.replaceChildren(x(n.message));return}let r=t||{id:`main`,hero_title:``,hero_description:``,stats:[],story:[],chair_name:``,chair_role:``,chair_image_url:null,chair_message:[],journey:[],mission:``,mission_source:``,vision:``,programs:[],contributors:[],cta_heading:``,cta_description:``,cta_button:``,cta_link:``};e.replaceChildren(),e.append(y(`About Page`,`Manage all editable content displayed on the public About page.`));let a=s(`form`,{class:`edit-form`}),o=_(`Hero title`,r.hero_title||``),l=_(`Hero description`,r.hero_description||``,!0,4),u=_(`Statistics`,(r.stats||[]).map(e=>`${e.value||``} | ${e.label||``}`).join(`
`),!0,6),f=_(`Our Story paragraphs`,(r.story||[]).join(`

`),!0,12),p=r.chair_image_url||null,m=_(`Chair's name`,r.chair_name||``),h=_(`Chair's role`,r.chair_role||``),g=_(`Chair's message paragraphs`,(r.chair_message||[]).join(`

`),!0,12),S=d(p,`about/chair`,e=>p=e),C=_(`Our Journey`,(r.journey||[]).map(e=>`${e.year||``} | ${e.title||``} | ${e.description||``}`).join(`
`),!0,9),w=_(`Mission`,r.mission||``,!0,5),T=_(`Mission source`,r.mission_source||``),E=_(`Vision`,r.vision||``,!0,5),D=_(`Programs`,(r.programs||[]).map(e=>`${e.title||``} | ${e.description||``} | ${e.href||``} | ${e.icon||``}`).join(`
`),!0,9),O=_(`Contributors`,(r.contributors||[]).map(e=>`${e.name||``} | ${e.role||``} | ${e.avatar||``}`).join(`
`),!0,7),k=_(`CTA heading`,r.cta_heading||``),A=_(`CTA description`,r.cta_description||``,!0,4),j=_(`CTA button text`,r.cta_button||``),M=_(`CTA button link`,r.cta_link||``),N=s(`div`,{class:`info-banner`});N.innerHTML=`<span class="info-icon">ℹ️</span><span><strong>Format:</strong> one item per line. Statistics: <code>value | label</code>. Journey: <code>year | title | description</code>. Programs: <code>title | description | link | icon</code>. Contributors: <code>name | role | avatar URL</code>.</span>`;let P=s(`span`,{class:`muted small`},[``]),F=s(`button`,{type:`submit`,class:`btn primary`},[`Save About Page`]),I=e=>s(`div`,{class:`form-section-title`},[e]);a.append(I(`Hero`),v(`Hero title`,o),v(`Hero description`,l),I(`Statistics`),v(`Statistics`,u),I(`Our Story`),v(`Story`,f),I(`Message from the Chair`),v(`Photo`,S),v(`Chair's name`,m),v(`Chair's role`,h),v(`Message`,g),I(`Our Journey`),v(`Journey`,C),I(`Mission & Vision`),v(`Mission`,w),v(`Mission source`,T),v(`Vision`,E),I(`Programs`),v(`Programs`,D),I(`Contributors`),v(`Contributors`,O),I(`Call to Action`),v(`CTA heading`,k),v(`CTA description`,A),v(`CTA button text`,j),v(`CTA button link`,M),N,s(`div`,{class:`form-footer`},[P,F])),a.addEventListener(`submit`,async e=>{e.preventDefault(),F.setAttribute(`disabled`,`true`),F.textContent=`Saving...`,P.textContent=`Saving About page...`;try{let e=e=>e.split(`
`).map(e=>e.trim()).filter(Boolean),t=e=>e.split(/\n\s*\n/).map(e=>e.replace(/\n/g,` `).trim()).filter(Boolean),n=(e,t)=>{let n=e.split(`|`).map(e=>e.trim());for(;n.length<t;)n.push(``);return n},r=e(u.value).map(e=>{let[t,r]=n(e,2);return{value:t,label:r}}).filter(e=>e.value||e.label),a=e(C.value).map(e=>{let[t,r,i]=n(e,3);return{year:t,title:r,description:i}}).filter(e=>e.year||e.title||e.description),s=e(D.value).map(e=>{let[t,r,i,a]=n(e,4);return{title:t,description:r,href:i||void 0,icon:a||void 0}}).filter(e=>e.title||e.description),d=e(O.value).map(e=>{let[t,r,i]=n(e,3);return{name:t,role:r,avatar:i||void 0}}).filter(e=>e.name||e.role||e.avatar),{error:_}=await i.from(`about_page`).upsert({id:`main`,hero_title:o.value.trim(),hero_description:l.value.trim(),stats:r,story:t(f.value),chair_name:m.value.trim(),chair_role:h.value.trim(),chair_image_url:p,chair_message:t(g.value),journey:a,mission:w.value.trim(),mission_source:T.value.trim(),vision:E.value.trim(),programs:s,contributors:d,cta_heading:k.value.trim(),cta_description:A.value.trim(),cta_button:j.value.trim(),cta_link:M.value.trim(),updated_at:new Date().toISOString()},{onConflict:`id`});if(_)throw _;P.textContent=`Changes saved successfully.`,c(`About page saved successfully.`)}catch(e){let t=e instanceof Error?e.message:String(e);P.textContent=`Error: ${t}`,c(`Could not save About page.`,`err`)}finally{F.removeAttribute(`disabled`),F.textContent=`Save About Page`}}),e.append(a)}async function E(e){e.replaceChildren(b());let{data:t,error:n}=await i.from(`events`).select(`*`).order(`event_date`,{ascending:!1});if(n){e.replaceChildren(x(n.message));return}e.replaceChildren(),e.append(y(`Recent Activities`,`Manage activities and events displayed on the website.`));let r=s(`div`,{class:`info-banner`});r.innerHTML=`
            <span class="info-icon">📅</span>

            <span>
               Only events marked
               <strong>Published</strong>
               will be visible to visitors.
            </span>
         `;let a=s(`div`,{class:`card-list`});e.append(r,a,p());for(let e of t||[])a.append(u(e));function l(e){let t=s(`select`,{class:`field`});for(let n of o){let r=s(`option`,{value:n},[n]);n===e&&r.setAttribute(`selected`,`true`),t.append(r)}return t}function u(e){let t=s(`div`,{class:`member-card event-card-edit`}),n=s(`div`,{class:`member-card-header`});n.innerHTML=`
               <span class="card-label">
                  EVENT / ACTIVITY
               </span>

               <span class="event-status">
                  ${e.published?`Published`:`Draft`}
               </span>
            `;let r=_(``,e.title),a=_(``,e.slug),o=s(`input`,{type:`date`,class:`field`,value:e.event_date}),u=l(e.chapter),p=_(``,e.description,!0,3),m=_(``,e.body||``,!0,5),h=_(``,e.location||``),g=_(``,e.event_time||``),y=_(``,e.registration_link||``),b=_(``,(e.tags||[]).join(`, `)),x=e.image_url||null,S=d(x,`events`,e=>x=e),C=s(`input`,{type:`checkbox`});C.checked=!!e.registration_open;let w=s(`input`,{type:`checkbox`});w.checked=!!e.featured;let T=s(`input`,{type:`checkbox`});T.checked=!!e.published;let E=s(`span`,{class:`muted small`},[``]),D=s(`button`,{class:`btn primary small`,type:`button`},[`Save`]),O=s(`button`,{class:`btn danger small`,type:`button`},[`Delete`]);return D.addEventListener(`click`,async()=>{E.textContent=`Saving...`;let{error:t}=await i.from(`events`).update({title:r.value.trim(),slug:a.value.trim(),event_date:o.value,chapter:u.value,description:p.value.trim(),body:m.value.trim()||null,location:h.value.trim()||null,event_time:g.value.trim()||null,registration_link:y.value.trim()||null,registration_open:C.checked,featured:w.checked,published:T.checked,tags:b.value.split(`,`).map(e=>e.trim()).filter(Boolean),image_url:x}).eq(`id`,e.id);t?(E.textContent=`Error: ${t.message}`,c(t.message,`err`)):(E.textContent=`Saved successfully.`,c(`Event saved.`))}),O.addEventListener(`click`,async()=>{if(!confirm(`Delete event "${e.title}"?`))return;let{error:n}=await i.from(`events`).delete().eq(`id`,e.id);if(n){c(n.message,`err`);return}t.remove(),c(`Event deleted.`)}),t.append(n,S,v(`Title`,r),v(`Slug`,a),v(`Date`,o),v(`Chapter`,u),v(`Short description`,p),v(`Full details`,m),v(`Location`,h),v(`Time`,g),v(`Registration link`,y),v(`Tags`,b),f(`Registration open`,C),f(`Featured`,w),f(`Published`,T),s(`div`,{class:`row-actions`},[D,O,E])),t}function f(e,t){let n=s(`label`,{class:`checkbox-row`});return n.append(t,s(`span`,{},[e])),n}function p(){let e=s(`form`,{class:`add-form`}),t=s(`div`,{class:`add-form-heading`});t.innerHTML=`
               <span class="add-icon">+</span>

               <div>
                  <h3>
                     Add new activity
                  </h3>

                  <p>
                     Create a new activity or event.
                  </p>
               </div>
            `;let n=_(``,``),r=_(``,``),o=s(`input`,{type:`date`,class:`field`}),f=l(`SB`),p=_(``,``,!0,3);n.placeholder=`Event title`,r.placeholder=`url-slug-like-this`,p.placeholder=`One or two sentences about the event`;let m=null,h=d(null,`events`,e=>m=e),g=s(`button`,{type:`submit`,class:`btn primary`},[`+ Add activity / event`]);return e.append(t,h,v(`Title`,n),v(`Slug`,r),v(`Date`,o),v(`Chapter`,f),v(`Short description`,p),g),e.addEventListener(`submit`,async t=>{if(t.preventDefault(),!n.value.trim()||!r.value.trim()||!o.value||!p.value.trim()){c(`Title, slug, date and description are required.`,`err`);return}g.setAttribute(`disabled`,`true`);let{data:s,error:l}=await i.from(`events`).insert({title:n.value.trim(),slug:r.value.trim().toLowerCase(),event_date:o.value,chapter:f.value,description:p.value.trim(),image_url:m,published:!1}).select().single();if(g.removeAttribute(`disabled`),l){c(l.message,`err`);return}a.append(u(s)),e.reset(),m=null,c(`Activity added as a draft.`)}),e}}async function D(e){e.replaceChildren(b());let{data:t,error:n}=await i.from(`contact_page`).select(`*`).eq(`id`,`main`).maybeSingle();if(n){e.replaceChildren(x(n.message));return}let r=t||{id:`main`,hero_title:`Connect with IEEE MIST`,hero_description:`Questions about membership, an event, or a collaboration? Send us a message and the right person on the committee will get back to you.`,address_lines:[`IEEE MIST Student Branch`,`Military Institute of Science and Technology`,`Mirpur Cantonment, Dhaka-1216, Bangladesh`],email:`ieeemistsb@mist.ac.bd`,office_hours:`Sunday — Thursday, 10:00 AM to 4:00 PM`,map_image_url:``,socials:[{label:`Facebook`,href:`https://www.facebook.com`},{label:`LinkedIn`,href:`https://www.linkedin.com`},{label:`Instagram`,href:`https://www.instagram.com`},{label:`YouTube`,href:`https://www.youtube.com`}],subjects:[`General Inquiry`,`Membership`,`Event or workshop`,`Collaboration / sponsorship`,`Chapter enquiry`],faqs:[]};e.replaceChildren(),e.append(y(`Contact Page`,`Edit the contact page content and manage messages submitted through the contact form.`));let a=s(`div`,{class:`editor-card`}),o=_(``,r.hero_title||``),l=_(``,r.hero_description||``,!0,4),u=_(``,Array.isArray(r.address_lines)?r.address_lines.join(`
`):``,!0,4),d=_(``,r.email||``),f=_(``,r.office_hours||``),p=_(``,r.map_image_url||``),m=_(``,Array.isArray(r.subjects)?r.subjects.join(`
`):``,!0,5),h=_(``,Array.isArray(r.socials)?r.socials.map(e=>`${e.label} | ${e.href}`).join(`
`):``,!0,6),g=_(``,Array.isArray(r.faqs)?r.faqs.map(e=>`${e.question} | ${e.answer}`).join(`
`):``,!0,8);o.placeholder=`Connect with IEEE MIST`,l.placeholder=`Hero description`,u.placeholder=`One address line per line`,d.placeholder=`ieeemistsb@mist.ac.bd`,f.placeholder=`Sunday — Thursday, 10:00 AM to 4:00 PM`,p.placeholder=`https://...`,m.placeholder=`One subject per line`,h.placeholder=`Facebook | https://facebook.com/...
LinkedIn | https://linkedin.com/...`,g.placeholder=`Question | Answer`;let S=s(`button`,{type:`button`,class:`btn primary`},[`Save Contact Page`]),C=s(`span`,{class:`muted small`},[``]);a.append(s(`h3`,{},[`Page content`]),v(`Hero title`,o),v(`Hero description`,l),v(`Address (one line per line)`,u),v(`Contact email`,d),v(`Office hours`,f),v(`Map image URL`,p),v(`Form subjects (one per line)`,m),v(`Social links (Label | URL)`,h),v(`FAQs (Question | Answer, one per line)`,g),s(`div`,{class:`publish-action`},[S,C])),S.addEventListener(`click`,async()=>{S.setAttribute(`disabled`,`true`),C.textContent=`Saving...`;let e=e=>e.split(`
`).map(e=>e.trim()).filter(Boolean),t=e(h.value).map(e=>{let[t,...n]=e.split(`|`);return{label:(t||``).trim(),href:n.join(`|`).trim()}}).filter(e=>e.label&&e.href),n=e(g.value).map(e=>{let[t,...n]=e.split(`|`);return{question:(t||``).trim(),answer:n.join(`|`).trim()}}).filter(e=>e.question&&e.answer),{error:r}=await i.from(`contact_page`).upsert({id:`main`,hero_title:o.value.trim(),hero_description:l.value.trim(),address_lines:e(u.value),email:d.value.trim(),office_hours:f.value.trim(),map_image_url:p.value.trim()||null,socials:t,subjects:e(m.value),faqs:n,updated_at:new Date().toISOString()});if(S.removeAttribute(`disabled`),r){C.textContent=`Error: ${r.message}`,c(`Could not save Contact page.`,`err`);return}C.textContent=`Saved successfully.`,c(`Contact page saved.`)});let w=s(`div`,{class:`editor-card`}),T=s(`div`,{class:`section-header`});T.innerHTML=`
            <div>
               <h3>Contact Messages</h3>
               <p>Messages submitted from the public contact form.</p>
            </div>
         `;let E=s(`div`,{class:`card-list`});w.append(T,E),e.append(a,w);async function D(){E.replaceChildren(b());let{data:e,error:t}=await i.from(`contact_messages`).select(`*`).order(`created_at`,{ascending:!1});if(t){E.replaceChildren(x(t.message));return}if(E.replaceChildren(),!e?.length){E.append(s(`div`,{class:`state-card`},[`No contact messages yet.`]));return}for(let t of e){let e=s(`article`,{class:`member-card`}),n=t.created_at?new Date(t.created_at).toLocaleString():``;e.innerHTML=`
                  <div class="member-card-header">
                     <span class="card-label">${t.subject||`General Inquiry`}</span>
                     <span class="member-id">${n}</span>
                  </div>

                  <h3>${O(t.name||`Unknown`)}</h3>

                  <p class="muted">
                     <a href="mailto:${k(t.email||``)}">
                        ${O(t.email||``)}
                     </a>
                  </p>

                  <p class="message-preview">
                     ${O(t.message||``)}
                  </p>
               `;let r=s(`div`,{class:`member-actions`}),a=_(``,t.status||`new`);a.placeholder=`new / read / replied`;let o=s(`button`,{type:`button`,class:`btn small`},[`Update status`]);o.addEventListener(`click`,async()=>{o.setAttribute(`disabled`,`true`);let{error:e}=await i.from(`contact_messages`).update({status:a.value.trim()||`new`}).eq(`id`,t.id);o.removeAttribute(`disabled`),e?c(e.message,`err`):c(`Message status updated.`)}),r.append(v(`Status`,a),o),e.append(r),E.append(e)}}await D(),i.channel(`contact-dashboard-live`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`contact_messages`},()=>{D()}).subscribe()}function O(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function k(e){return O(e)}async function A(e){e.replaceChildren(b());let{data:t,error:n}=await i.from(`site_settings`).select(`*`).eq(`key`,`deploy_hook_url`).maybeSingle();e.replaceChildren(),e.append(y(`Publishing`,`Save your content first, then trigger a new website build.`));let r=s(`div`,{class:`publish-card`});r.innerHTML=`
            <div class="publish-icon">
               🚀
            </div>

            <div>
               <h3>
                  Publish website changes
               </h3>

               <p>
                  Saved content is stored in Supabase.
                  Because the public website is statically
                  generated, the live website needs a new
                  Vercel build to display the latest changes.
               </p>

               <p>
                  Add your Vercel Deploy Hook URL below.
                  After saving your content, click
                  <strong>Publish changes</strong>.
               </p>
            </div>
         `;let a=_(``,t?.value||``);a.placeholder=`https://api.vercel.com/v1/integrations/deploy/...`;let o=s(`button`,{class:`btn small`,type:`button`},[`Save hook URL`]),l=s(`span`,{class:`muted small`},[``]);o.addEventListener(`click`,async()=>{l.textContent=`Saving...`;let{error:e}=await i.from(`site_settings`).upsert({key:`deploy_hook_url`,value:a.value.trim(),updated_at:new Date().toISOString()});l.textContent=e?`Error: ${e.message}`:`Hook URL saved.`,e||c(`Deploy Hook URL saved.`)});let u=s(`button`,{class:`btn primary publish-button`,type:`button`},[`🚀 Publish changes now`]),d=s(`p`,{class:`muted small`},[``]);u.addEventListener(`click`,async()=>{let e=a.value.trim();if(!e){d.textContent=`Add and save a Deploy Hook URL first.`;return}u.setAttribute(`disabled`,`true`),u.textContent=`Publishing...`,d.textContent=`Triggering a new Vercel build...`;try{await fetch(e,{method:`POST`,mode:`no-cors`}),d.textContent=`Build triggered. Changes should go live shortly.`,c(`Publish triggered successfully.`)}catch(e){d.textContent=`Could not reach the deploy hook: ${e.message||e}`,c(`Could not trigger publishing.`,`err`)}u.removeAttribute(`disabled`),u.textContent=`🚀 Publish changes now`});let f=s(`div`,{class:`hook-section`});f.append(v(`Vercel Deploy Hook URL`,a),s(`div`,{class:`row-actions`},[o,l])),e.append(r,f,s(`div`,{class:`publish-action`},[u,d]))}var j=null,M=0;async function N(e){let t=++M,n=e?.user;if(!n){j=null,p();return}if(j!==n.id){j=n.id;try{await h(n.email||`Signed in`)}catch(e){t===M&&(j=null,console.error(`Dashboard render failed:`,e))}}}var{data:{session:P}}=await i.auth.getSession();await N(P),i.auth.onAuthStateChange((e,t)=>{queueMicrotask(()=>{N(t)})});