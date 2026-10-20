# Manager Checklist: New Start-Up Hire

The Start-Up new hire procedure from the area superintendents, in its original order, as one checklist. Every item below is a step on your **Manager Triage**, with a due date. The ones marked **Sends for you** go out automatically in your name (or land in your Draft Queue to review first).

<style>
.ck { --auto: #ff6a00; --you: #2f5fb3; --conf: #1f7a6d; margin: 1.25rem 0 2rem; }
.ck-legend { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0 0 1.25rem; }
.ck-list { list-style: none; margin: 0; padding: 0; counter-reset: none; }
.ck-item { background: #fff; border: 1px solid #e3e3e3; border-left: 4px solid var(--you); border-radius: 10px; padding: 0.85rem 1rem 0.6rem; margin: 0 0 0.85rem; }
.ck-item.is-auto { border-left-color: var(--auto); }
.ck-item.is-conf { border-left-color: var(--conf); }
.ck-row { display: flex; align-items: flex-start; gap: 0.65rem; cursor: pointer; }
.ck-row input { width: 1.15rem; height: 1.15rem; margin: 0.2rem 0 0; accent-color: var(--auto); flex: none; }
.ck-num { flex: none; min-width: 1.7rem; height: 1.7rem; border-radius: 50%; background: #111; color: #fff; font-weight: 800; font-size: 0.85rem; display: inline-flex; align-items: center; justify-content: center; font-variant-numeric: tabular-nums; }
.ck-title { font-weight: 700; font-size: 1.05rem; line-height: 1.35; padding-top: 0.15rem; }
.ck-row input:checked ~ .ck-title { text-decoration: line-through; color: #8a8a8a; }
.ck-meta { display: flex; flex-wrap: wrap; gap: 0.35rem; margin: 0.5rem 0 0.4rem 4.5rem; }
.ck-item > p, .ck-item > .ck-sub, .ck-item > details { margin-left: 4.5rem; }
.ck-item > p { margin-top: 0.2rem; margin-bottom: 0.5rem; }
.tag { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.78rem; font-weight: 700; padding: 0.15rem 0.55rem; border-radius: 999px; background: #f1f1f1; color: #333; white-space: nowrap; }
.tag-auto { background: #ffe9d9; color: #a84400; }
.tag-you { background: #e3ebf8; color: #23498a; }
.tag-conf { background: #dff0ec; color: #17594f; }
.tag-when { background: #111; color: #fff; }
.tag-if { background: #fff; border: 1px dashed #b5b5b5; color: #555; }
.ck-sub { list-style: none; padding: 0; margin: 0.25rem 0 0.6rem; }
.ck-sub li { border-top: 1px solid #efefef; padding: 0.5rem 0 0.35rem; }
.ck-sub .ck-row { gap: 0.55rem; }
.ck-sub .ck-title { font-size: 0.97rem; font-weight: 600; padding-top: 0.05rem; }
.ck-sub .ck-meta { margin: 0.3rem 0 0.2rem 1.75rem; }
.ck-sub p { margin: 0.15rem 0 0.3rem 1.75rem; font-size: 0.95rem; }
.ck-more { background: #f7f7f7; border-radius: 8px; padding: 0.45rem 0.8rem; margin-bottom: 0.5rem; }
.ck-more summary { cursor: pointer; font-weight: 600; font-size: 0.92rem; }
.ck-more dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.25rem 0.9rem; margin: 0.6rem 0 0.3rem; font-size: 0.92rem; }
.ck-more dt { font-weight: 600; color: #555; }
.ck-more dd { margin: 0; }
.ck-contacts { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 0.6rem; margin: 0.4rem 0 0.6rem 4.5rem; }
.ck-card { background: #f7f7f7; border-radius: 8px; padding: 0.55rem 0.75rem; font-size: 0.92rem; line-height: 1.4; }
.ck-card b { display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.04em; color: #777; }
.ck-note { font-size: 0.88rem; color: #666; margin: 0 0 1rem; }
@media (max-width: 600px) {
  .ck-meta, .ck-item > p, .ck-item > .ck-sub, .ck-item > details, .ck-contacts { margin-left: 0; }
  .ck-more dl { grid-template-columns: 1fr; }
}
</style>

<div class="ck">
<div class="ck-legend">
<span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-you">You do it</span><span class="tag tag-conf">✓ You confirm</span><span class="tag tag-if">Only when it applies</span>
</div>
<p class="ck-note">Ticks on this page aren't saved anywhere. Your real checklist is Triage, which already knows which items apply to each hire.</p>
<ol class="ck-list">
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">1</span><span class="ck-title">Get the SI vehicle policy and MVR</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span><span class="tag tag-if">Company vehicle only</span></div>
<p>Request goes to the MVR inbox, CC'ing the vehicle policy coordinator and NorCal Start-Up Supervision. The new hire fills out page 12 and returns it. Results can take up to 3 days.</p>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Signed vehicle policy is back</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Forward the approval to Fleet with the confirmed start date</span></label><div class="ck-meta"><span class="tag tag-you">You do it</span></div><p>Fleet assigns the vehicle and provides the fuel card, PIN, and FasTrak.</p></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">2</span><span class="ck-title">Get the union dispatch</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span><span class="tag tag-if">Union hires</span></div>
<p>Every email to a union hall waits in your Draft Queue for review before it sends.</p>
<details class="ck-more"><summary>What the request includes</summary><dl>
<dt>Name and level</dt><dd>From the case</dd>
<dt>Start date</dt><dd>Confirmed start date</dd>
<dt>First job</dt><dd>Within the local's jurisdiction (for dispatch only)</dd>
<dt>CC</dt><dd>NorCal Start-Up Supervision</dd>
</dl></details>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Submit the dispatch form</span></label><div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-if">Local 393 only</span></div><p>Local 393 needs its form before the request goes out. Other locals skip this.</p></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Save the dispatch on the G Drive and send a copy to the new employee</span></label><div class="ck-meta"><span class="tag tag-you">You do it</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Confirm Timecards received the dispatch</span></label><div class="ck-meta"><span class="tag tag-you">You do it</span></div></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">3</span><span class="ck-title">SI Help Desk: new hire user request (laptop)</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span></div>
<p>Allow 7+ business days for delivery.</p>
<details class="ck-more"><summary>Request form answers</summary><dl>
<dt>Business unit</dt><dd>00.00 NorCal Service Field (example)</dd>
<dt>Job charged</dt><dd>No, business unit</dd>
<dt>Manager</dt><dd>Your area superintendent</dd>
<dt>Job title</dt><dd>"Start-Up Technician" (apprentice, journeyman) or "Start-Up Foreman / GF"</dd>
<dt>Employment status</dt><dd>Union</dd>
<dt>User type</dt><dd>Non-Design, no VDI</dd>
<dt>COINS</dt><dd>No</dd>
<dt>Delivery</dt><dd>Union City or Sacramento office</dd>
<dt>Hardware</dt><dd>Laptop, regular</dd>
<dt>Monitor / headset</dt><dd>No / No</dd>
<dt>Special groups</dt><dd>None</dd>
</dl></details>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Laptop ready and login works</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">4</span><span class="ck-title">Equipment request: mobile devices</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span></div>
<p>Includes the new email address request. CC NorCal Start-Up Supervision and the mobile device coordinator.</p>
<details class="ck-more"><summary>Request form answers</summary><dl>
<dt>Request type</dt><dd>New employee</dd>
<dt>New email address?</dt><dd>Yes</dd>
<dt>Devices</dt><dd>iPhone, iPad Pro 11", mobile hotspot, protective case</dd>
<dt>Carrier</dt><dd>Verizon</dd>
<dt>Ship to</dt><dd>Union City or Sacramento office, attention: your superintendent</dd>
</dl></details>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Phone delivered and set up</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">5</span><span class="ck-title">Additional software request (Bluebeam)</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span><span class="tag tag-if">Foreman and above, design and detailing roles</span></div>
<p>Added automatically for those roles. HR can tick <strong>Additional Software</strong> on the Kickoff form for anyone else who needs it.</p>
<details class="ck-more"><summary>Reason to give</summary><p>"Start-Up Foreman, needs to review, share, and mark up drawings, prints, and project documents to coordinate with project management and engineering."</p></details>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Bluebeam access granted</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">6</span><span class="ck-title">Building access: key fob</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span></div>
<p>Key fob: yes. Keys: no.</p>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Key fob issued</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">7</span><span class="ck-title">Business card request</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">About 3 weeks in</span></div>
<p>Ordered last, after the phone and the rest of onboarding are done. It appears on Triage automatically once the phone is marked delivered, so there's no reminder to set.</p>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">8</span><span class="ck-title">Schedule the onboarding date with SI Safety</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span></div>
<p>Goes to Bay Area or Sacramento Safety based on the hire's location. Tell the new hire to bring <strong>2 forms of ID and a voided check</strong> for direct deposit.</p>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Safety onboarding date confirmed and sent to the new hire</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">9</span><span class="ck-title">Order tools for the vehicle</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">Before day 1</span><span class="tag tag-if">Company vehicle only</span></div>
<p>Order from the approved tool list. When the tech picks them up on Day 3, log each tool on their <strong>Tools Issued</strong> list, so you always know who has what.</p>
</li>
<li class="ck-item is-auto">
<label class="ck-row"><input type="checkbox"><span class="ck-num">10</span><span class="ck-title">Home Depot card</span></label>
<div class="ck-meta"><span class="tag tag-auto">⚡ Sends for you</span><span class="tag tag-when">Before day 1</span><span class="tag tag-if">Field crew</span></div>
<p>The request includes the employee's full name and date of birth. It waits until HR adds the date of birth to the case.</p>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Card issued and agreement returned</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">11</span><span class="ck-title">Department training: Day 1</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">Day 1</span></div>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">SI safety training, direct deposit setup, and onboarding paperwork</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Vehicle pickup</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Review vehicle accident reporting</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Fuel card lock and the Enterprise app</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Company swag: t-shirts, hats, button-up shirts</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Issue the 6H90 and Transit key</span></label></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">12</span><span class="ck-title">Department training: Day 3</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">Day 3</span></div>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Pick up tools (log them on Tools Issued)</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">New tech completes the vehicle inventory</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Review Nextcode and how to submit a Pre-Task Plan</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Weekly tailgates</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Defensive driving</span></label><div class="ck-meta"><span class="tag tag-if">Company vehicle only</span></div></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">13</span><span class="ck-title">Department training: on the job site</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">First week</span></div>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Review Start-Up protocols and procedures</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">How to make purchases (PO from NorCal Purchasing, Home Depot card)</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">How to use the Help Desk</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Google Drive and ACC</span></label></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">14</span><span class="ck-title">NFPA 70E training and arc flash gear</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">First week</span></div>
<ul class="ck-sub">
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Sign the employee up for NFPA 70E training</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Training completed</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Order arc flash gear</span></label></li>
<li><label class="ck-row"><input type="checkbox"><span class="ck-title">Gear received and issued (log it on Tools Issued)</span></label><div class="ck-meta"><span class="tag tag-conf">✓ You confirm</span></div></li>
</ul>
</li>
<li class="ck-item">
<label class="ck-row"><input type="checkbox"><span class="ck-num">15</span><span class="ck-title">Give the new hire their key contacts</span></label>
<div class="ck-meta"><span class="tag tag-you">You do it</span><span class="tag tag-when">Day 1</span></div>
<p>Plus every crew member they'll be working with.</p>
<div class="ck-contacts">
<div class="ck-card"><b>Superintendent, North &amp; South Bay</b>Alex Rivera<br>(510) 555-0104</div>
<div class="ck-card"><b>Superintendent, Sacramento, East &amp; South Bay</b>Jordan Hale<br>(916) 555-0137</div>
<div class="ck-card"><b>Fleet</b>Sam Ortiz<br>(510) 555-0141</div>
<div class="ck-card"><b>Phones, iPads, key fobs</b>Taylor Brooks<br>(510) 555-0172</div>
<div class="ck-card"><b>Bay Area Safety</b>Morgan Lin<br>(510) 555-0118</div>
<div class="ck-card"><b>Sacramento Safety</b>Casey Nguyen<br>(916) 555-0163</div>
<div class="ck-card"><b>Accounting, direct deposit, UA dispatch</b>Priya Raman<br>(510) 555-0127</div>
<div class="ck-card"><b>Timecards</b>Jamie Flores<br>(510) 555-0190</div>
<div class="ck-card"><b>Purchasing</b>Drew Kim<br>(408) 555-0156</div>
</div>
<p class="ck-note">Example names and 555 numbers. The real contacts live in Airtable's Contacts list.</p>
</li>
</ol>
</div>

How each item is sent and tracked: see <a href="guide.html?role=manager&amp;file=guides%2Fmanager-sending-requests.md">Sending Requests</a>. Terms like "You confirm" are explained in <a href="guide.html?role=manager&amp;file=guides%2Fdefinitions.md">Definitions</a>.
