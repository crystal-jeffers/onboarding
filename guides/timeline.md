# Timeline: What Happens When

Every case follows the same shape: a form starts it, steps are timed from one key date, and the case closes itself when the last step is done. Pick a case type to see its checkpoints. The specific steps live in the Task Library in Airtable; this page shows the shape.

<div class="tl">
<input type="radio" name="tl-type" id="tl-on" checked>
<input type="radio" name="tl-type" id="tl-rc">
<input type="radio" name="tl-type" id="tl-off">
<div class="tl-switch" role="tablist" aria-label="Case type">
<label for="tl-on">Onboarding</label>
<label for="tl-rc">Role change</label>
<label for="tl-off">Offboarding</label>
</div>
<div class="tl-legend" aria-label="Who acts">
<span class="who who-sys">System</span><span class="who who-hr">HR</span><span class="who who-mgr">Manager</span><span class="who who-emp">Employee</span><span class="who who-team">Other teams</span>
</div>
<div class="tl-panel tl-panel-on">
<p class="tl-key">Key date: <strong>the first day</strong>. Everything below is timed from it.</p>
<ol class="tl-track">
<li class="tl-stop tl-start">
<div class="tl-when"><span class="tl-day">Offer accepted</span><span class="tl-sub">case opens</span></div>
<div class="tl-body">
<h3>HR starts the case</h3>
<p><span class="who who-hr">HR</span> submits the New Hire Kickoff form.</p>
<p><span class="who who-sys">System</span> creates the employee record (and a crew record for field hires), builds the checklist from the Task Library, makes the submitter the Case Owner and tells the manager.</p>
</div>
</li>
<li class="tl-stop">
<div class="tl-when"><span class="tl-day">Before day 1</span><span class="tl-sub">due the day before, or a week after the case opens, whichever is first</span></div>
<div class="tl-body">
<h3>Get everything ready</h3>
<p><span class="who who-sys">System</span> sends the requests 3 days before they're due: laptop, phone, building access, safety onboarding, union dispatch, and the vehicle policy if the hire gets a company vehicle. Review &amp; Send managers get drafts instead.</p>
<p><span class="who who-hr">HR</span> sends the forms, orders the background check and schedules the drug screen.</p>
<p><span class="who who-mgr">Manager</span> reviews drafts if they've chosen to, and submits the Local 393 dispatch form for 393 hires.</p>
<p><span class="who who-emp">Employee</span> completes portal paperwork, tax forms, direct deposit and the drug screen.</p>
<p><span class="who who-team">Other teams</span> fulfil the requests. Each request has a matching completion step (laptop ready, fob issued) that appears once the request is done; whoever asked ticks it when the team confirms. The office administrator gets an "Action needed" email to send the first-day welcome.</p>
</div>
</li>
<li class="tl-stop tl-key-stop">
<div class="tl-when"><span class="tl-day">Day 1</span><span class="tl-sub">the first day</span></div>
<div class="tl-body">
<h3>First day</h3>
<p><span class="who who-mgr">Manager</span> runs Day 1 training and hands over equipment, ticking off any completion steps still open.</p>
<p><span class="who who-emp">Employee</span> completes I-9 Section 1. <span class="who who-hr">HR</span> verifies the documents and opens the E-Verify case within 3 business days.</p>
<p><span class="who who-sys">System</span> flags anything from before day 1 that's still open as overdue.</p>
</div>
</li>
<li class="tl-stop">
<div class="tl-when"><span class="tl-day">Day 4</span><span class="tl-sub">first week</span></div>
<div class="tl-body">
<h3>Settle in</h3>
<p><span class="who who-mgr">Manager</span> runs Day 3 training and the on-site protocol review, and schedules the 30/60/90 check-ins.</p>
<p><span class="who who-team">Other teams</span> add the new hire to the org chart and distribution lists.</p>
</div>
</li>
<li class="tl-stop tl-end">
<div class="tl-when"><span class="tl-day">Day 14</span><span class="tl-sub">post start</span></div>
<div class="tl-body">
<h3>Wrap up</h3>
<p><span class="who who-team">Other teams</span> order business cards.</p>
<p><span class="who who-sys">System</span> closes the case once every step is done and sends the manager a closing note.</p>
</div>
</li>
</ol>
</div>
<div class="tl-panel tl-panel-rc">
<p class="tl-key">Key date: <strong>the effective date</strong>. Only steps for what's actually changing are added.</p>
<ol class="tl-track">
<li class="tl-stop tl-start">
<div class="tl-when"><span class="tl-day">Request</span><span class="tl-sub">case opens</span></div>
<div class="tl-body">
<h3>The manager files it</h3>
<p><span class="who who-mgr">Manager</span> submits the Role Change form, filling in only what's changing.</p>
<p><span class="who who-sys">System</span> copies in the employee's current details, works out what changed and emails HR to review.</p>
</div>
</li>
<li class="tl-stop tl-gate">
<div class="tl-when"><span class="tl-day">HR approval</span><span class="tl-sub">nothing starts until this</span></div>
<div class="tl-body">
<h3>HR approves</h3>
<p><span class="who who-hr">HR</span> checks the details and ticks HR Approved, and becomes the Case Owner.</p>
<p><span class="who who-sys">System</span> then creates the steps: core ones for every role change, plus one for each change (new location, new local, new manager, vehicle).</p>
</div>
</li>
<li class="tl-stop">
<div class="tl-when"><span class="tl-day">Before the change</span><span class="tl-sub">due the day before</span></div>
<div class="tl-body">
<h3>Line it up</h3>
<p><span class="who who-hr">HR</span> updates the HR record and title.</p>
<p><span class="who who-team">Other teams</span> update payroll and system access; for a new location, building access; for a new local, the union transfer; and any change to vehicle eligibility.</p>
</div>
</li>
<li class="tl-stop tl-key-stop">
<div class="tl-when"><span class="tl-day">Effective date</span><span class="tl-sub">the change takes effect</span></div>
<div class="tl-body">
<h3>The change goes live</h3>
<p><span class="who who-sys">System</span> updates the employee and crew records, so the dispatch calendar, union holidays and bar colors follow on their own.</p>
<p><span class="who who-mgr">Manager</span> holds the handoff and team introduction.</p>
</div>
</li>
<li class="tl-stop tl-end">
<div class="tl-when"><span class="tl-day">Day 4</span><span class="tl-sub">first week</span></div>
<div class="tl-body">
<h3>Wrap up</h3>
<p><span class="who who-team">Other teams</span> run role-specific safety training and update the org chart and distribution lists.</p>
<p><span class="who who-sys">System</span> closes the case once every step is done.</p>
</div>
</li>
</ol>
</div>
<div class="tl-panel tl-panel-off">
<p class="tl-key">Key date: <strong>the last day</strong>. Confidential throughout; involuntary exits have every email reviewed before it sends.</p>
<ol class="tl-track">
<li class="tl-start tl-stop">
<div class="tl-when"><span class="tl-day">Notice</span><span class="tl-sub">case opens</span></div>
<div class="tl-body">
<h3>HR starts the case</h3>
<p><span class="who who-hr">HR</span> submits the Offboarding form, marking it voluntary or involuntary.</p>
<p><span class="who who-sys">System</span> copies in the employee's details and tells the manager, with no reason given.</p>
</div>
</li>
<li class="tl-stop">
<div class="tl-when"><span class="tl-day">Before the last day</span><span class="tl-sub">due the day before</span></div>
<div class="tl-body">
<h3>Plan the exit</h3>
<p><span class="who who-hr">HR</span> confirms the separation details.</p>
<p><span class="who who-mgr">Manager</span> puts together the knowledge transfer and handoff plan.</p>
<p><span class="who who-team">Other teams</span> schedule access removal and the vehicle, fuel card and toll tag return, cancel the Pcard, and send the union termination notice for union staff. The vehicle return is skipped if the employee record says they have no company vehicle.</p>
</div>
</li>
<li class="tl-stop tl-key-stop">
<div class="tl-when"><span class="tl-day">Last day</span><span class="tl-sub">the effective date</span></div>
<div class="tl-body">
<h3>Last day</h3>
<p><span class="who who-mgr">Manager</span> collects equipment: laptop, phone, badge, keys, tools and PPE.</p>
<p><span class="who who-hr">HR</span> holds the exit interview and hands over the separation notice and EDD pamphlet.</p>
<p><span class="who who-team">Other teams</span> prepare the final paycheck and switch off building access.</p>
<p><span class="who who-sys">System</span> marks the employee Former and takes them off the dispatch calendar, keeping their history.</p>
</div>
</li>
<li class="tl-stop">
<div class="tl-when"><span class="tl-day">Day 4</span><span class="tl-sub">first week after</span></div>
<div class="tl-body">
<h3>Benefits and mail</h3>
<p><span class="who who-hr">HR</span> sends the COBRA notice.</p>
<p><span class="who who-team">Other teams</span> set up mailbox forwarding and data retention.</p>
</div>
</li>
<li class="tl-stop tl-end">
<div class="tl-when"><span class="tl-day">Day 14</span><span class="tl-sub">post exit</span></div>
<div class="tl-body">
<h3>Close out</h3>
<p><span class="who who-hr">HR</span> completes the offboarding closeout.</p>
<p><span class="who who-sys">System</span> closes the case once every step is done.</p>
</div>
</li>
</ol>
</div>
<div class="tl-always">
<h3>Running the whole time</h3>
<ul>
<li><strong>3 days before a due date</strong>, a step turns Due Soon and its request goes out (or drafts).</li>
<li><strong>Every morning at 7:15</strong>, HR gets the open items waiting on employees and outside teams.</li>
<li><strong>Every Monday</strong>, each manager gets one roll-up of everything overdue or due soon.</li>
<li><strong>Anytime details are missing</strong>, the Case Owner gets one email saying what to fill in.</li>
<li><strong>When a request is done</strong>, its completion step appears straight away, owned by whoever delivers.</li>
</ul>
</div>
</div>

New to any of these terms? See <a href="guide.html?role=hr&amp;file=guides%2Fdefinitions.md">Definitions</a>.
