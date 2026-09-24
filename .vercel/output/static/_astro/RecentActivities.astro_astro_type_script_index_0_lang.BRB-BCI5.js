import{t as e}from"./supabase-browser.JAwjBCb8.js";var t=document.querySelector(`[data-slider]`),n=t?.querySelector(`[data-track]`),r=document.querySelector(`[data-event-list]`),i=t?.querySelector(`[data-prev]`),a=t?.querySelector(`[data-next]`),o=0;function s(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function c(e){let t=new Date(`${e}T00:00:00Z`);return new Intl.DateTimeFormat(`en-US`,{month:`long`,day:`2-digit`,year:`numeric`,timeZone:`UTC`}).format(t)}function l(e){let t=new Date(`${e}T00:00:00Z`);return{month:new Intl.DateTimeFormat(`en-US`,{month:`short`,timeZone:`UTC`}).format(t).toUpperCase(),day:String(t.getUTCDate()).padStart(2,`0`)}}function u(e){r&&(r.innerHTML=`
			${e.slice(0,3).map(e=>{let t=l(e.event_date);return`
					<a
						class="event-card"
						href="/events/${encodeURIComponent(e.slug)}"
					>
						<div class="date-badge">
							<span class="month">
								${t.month}
							</span>

							<span class="day">
								${t.day}
							</span>
						</div>

						<div>
							<p class="title">
								${s(e.title)}
							</p>

							<p class="desc">
								${s(e.description)}
							</p>
						</div>
					</a>
				`}).join(``)}

			<a
				href="/events"
				class="browse-btn"
			>
				Browse All Past Events
			</a>
		`)}function d(e){if(!n)return;let t=e.filter(e=>e.featured===!0);t.length===0&&(t=e),t=t.slice(0,5),t.length!==0&&(n.innerHTML=t.map(e=>{let t=c(e.event_date),n=e.image_url||`/images/home/event-techfest.png`,r=e.registration_open===!0&&!!e.registration_link,i=r?e.registration_link:`/events/${encodeURIComponent(e.slug)}`,a=r?`Register Now`:`View Event`;return`
						<div class="slide">

							<img
								src="${s(n)}"
								alt="${s(e.title)}"
							/>

							<div class="gradient"></div>

							<div class="slide-content">

								<span class="badge">
									${s(e.chapter||`ACTIVITY`)}
								</span>

								<h3>
									${s(e.title)}
								</h3>

								<p>
									${s(e.description)}
								</p>

								<div class="meta">

									<span class="date">

										<img
											src="/images/home/icon-calendar.svg"
											alt=""
										/>

										${t}

									</span>

									<a
										href="${s(i)}"
										class="btn-register"
									>
										${a}
									</a>

								</div>

							</div>
						</div>
					`}).join(``),o=0,f(t.length),p())}function f(e){let n=t?.querySelector(`[data-dots]`);if(n){n.innerHTML=``;for(let t=0;t<e;t++){let e=document.createElement(`span`);e.className=t===0?`dot active`:`dot`,e.dataset.dot=String(t),e.addEventListener(`click`,()=>{o=t,p()}),n.appendChild(e)}}}function p(){if(!n)return;let e=n.querySelectorAll(`.slide`).length;e&&(o>=e&&(o=0),n.style.transform=`translateX(-${o*100}%)`,(t?.querySelectorAll(`[data-dot]`))?.forEach((e,t)=>{e.classList.toggle(`active`,t===o)}))}i?.addEventListener(`click`,()=>{if(!n)return;let e=n.querySelectorAll(`.slide`).length;e&&(o=(o-1+e)%e,p())}),a?.addEventListener(`click`,()=>{if(!n)return;let e=n.querySelectorAll(`.slide`).length;e&&(o=(o+1)%e,p())});async function m(){let{data:t,error:n}=await e.from(`events`).select(`*`).eq(`published`,!0).order(`event_date`,{ascending:!1});if(n){console.error(`[Recent Activities] Could not load events:`,n);return}let r=t??[];console.log(`[Recent Activities] Loaded:`,r.length,`published events`),u(r),d(r)}m(),e.channel(`recent-activities-live`).on(`postgres_changes`,{event:`*`,schema:`public`,table:`events`},e=>{console.log(`[Recent Activities] Realtime event:`,e),m()}).subscribe(e=>{console.log(`[Recent Activities] Realtime status:`,e)});