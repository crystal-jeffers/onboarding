# How It Works

Every employee change runs on one system: a **new hire**, a **role change** and a **departure** each become a *case*. Each case builds its own checklist, sends the requests, and tracks every step until it's done.

<div class="callout"><strong>Why it exists.</strong> Onboarding used to live in inboxes and memory. A new hire touched IT, Safety, Fleet, Facilities, Accounting and the union hall, and every manager did it a little differently. Steps got missed, and nobody could see where a hire stood.</div>

Now HR fills in one form, and the system builds the right checklist for that person's role, department, location and union. It sends the routine requests on time and shows everyone what's still open.

<figure class="shot">
  <img src="assets/img/hr/hr-home-dashboard.png" alt="HR Home Dashboard with active hires, overdue and due-soon counts, and every case by stage" loading="lazy">
  <figcaption>HR Home Dashboard: every open case, and what's overdue, at a glance.</figcaption>
</figure>

<details class="accordion"> <summary>HR Workflow</summary> <div class="accordion-body">

<div class="mermaid">
flowchart TD
  A[HR submits a form<br/>Kickoff, Role Change or Offboarding] --> B[Case created]
  B --> C[Checklist builds itself<br/>from the Task Library]
  C --> D{Step is due soon}
  D -->|Email step| E[Request sent or drafted<br/>in the manager's name]
  D -->|Hands-on step| F[Shows on the owner's<br/>to-do list]
  E --> G[Follow up if needed]
  F --> H[Marked complete]
  G --> H
  H --> I{All steps done?}
  I -->|No| D
  I -->|Yes| J[Case complete]
</div>

<h4>In plain words</h4>
<div class="numbered-group">
<ol>
<li><strong>HR starts a case</strong> with one form. (Each case type has its own.)</li>
<li><strong>The checklist builds itself.</strong> Only the steps that apply to this person's role, department, location, union and case type are added.</li>
<li><strong>Each step gets a due date</strong> auto-calculated from the case's key date (first day, change date or last day).</li>
<li><strong>When a step is due soon</strong>, the system either auto-sends emails in the manager's name or creates drafts for review, depending on their setting.</li>
<li><strong>Steps that need a person</strong> (training, collecting equipment, etc) show on that owner's list until someone marks them complete.</li>
<li><strong>Some steps unlock others.</strong> For example, a Local 393 dispatch request can't go out until the dispatch form is submitted. The task appears the moment the prerequisite step is marked complete.</li>
<li><strong>The case closes itself</strong> when every step is complete, and the manager gets a closing note if they want one.</li>
</ol>
</div>

</div> </details>

<details class="accordion"> <summary>Case Types</summary> <div class="accordion-body">

<div class="table-scroll">
<table>
<thead><tr><th>Case</th><th>Started by</th><th>Key date</th><th>What's special</th></tr></thead>
<tbody>
<tr><td>Onboarding</td><td>New Hire Kickoff form</td><td>First day</td><td>Field hires also get a dispatch calendar record, so supervisors can schedule their first week.</td></tr>
<tr><td>Role Change</td><td>Role Change form</td><td>Change date</td><td>Only HR's changes are entered. The system works out what changed and adds those steps.</td></tr>
<tr><td>Offboarding</td><td>Offboarding form</td><td>Last day</td><td>Confidential by design. On an involuntary exit, every email waits for a person to review it.</td></tr>
</tbody>
</table>
</div>

</div> </details>

<details class="accordion"> <summary>Phases and due dates</summary> <div class="accordion-body">

Every step belongs to a phase. The due date comes from the case's key date.

<div class="table-scroll">
<table>
<thead><tr><th>Phase</th><th>Due</th><th>Typical steps</th></tr></thead>
<tbody>
<tr><td>Before Start</td><td>7 days after the case opens (or the day before the key date, whichever comes first)</td><td>Laptop, phone, building access, union dispatch, vehicle policy</td></tr>
<tr><td>Day 1</td><td>The key date</td><td>Day 1 training; on a departure, collecting equipment and the final paycheck</td></tr>
<tr><td>First Week</td><td>4 days after the key date</td><td>Day 3 training, on-site protocol review, 30/60/90 check-ins</td></tr>
<tr><td>Post Start</td><td>14 days after the key date</td><td>Business cards; on a departure, closing out the case</td></tr>
</tbody>
</table>
</div>

- **Due Soon** is within 3 days of its due date. **Overdue** is the day after.
- Reminder emails only list steps in the case's **current phase** (plus anything still open from earlier). Future steps are omitted until their time comes.

</div> </details>

<details class="accordion"> <summary>Built-in safeguards</summary> <div class="accordion-body">

<div class="numbered-group"><strong>Nothing sends without the facts.</strong> If automated emails are missing an employee's name, date, location, or its prerequisite isn't done, it waits and tells the manager exactly what to fix. Once that's fixed, it sends by itself.</div>

<div class="numbered-group"><strong>Sensitive materials are HITL-managed.</strong> Even if Fully Automated preferences are set, sensitive material such asinvoluntary exit coordination, emails to the union hall, etc, are drafted manual review and approval.</div>

<div class="numbered-group"><strong>Departure details stay private.</strong> HR's separation notes never appear in an email or on a manager's page.</div>

<div class="numbered-group"><strong>No duplicates.</strong> Each request only sends once, and each unlocked step is created once, even if someone re-ticks a box.</div>

<div class="numbered-group"><strong>Manager-specific access.</strong> Each manager sees only their own cases.</div>

</div> </details>

<details class="accordion"> <summary>Workspaces</summary> <div class="accordion-body">

<div class="table-scroll">
<table>
<thead><tr><th>Who</th><th>Where</th><th>For</th></tr></thead>
<tbody>
<tr><td>HR</td><td>HR Workspace</td><td>Starting and tracking cases, nudging managers, editing the step library</td></tr>
<tr><td>Department managers</td><td>Manager Workspace</td><td>Their cases: what's due, sending requests, email settings</td></tr>
<tr><td>IT, Safety, Fleet, Facilities, Accounting, union hall</td><td>Their own inbox</td><td>They receive clear, complete requests. No new system to learn</td></tr>
<tr><td>Service Supervisors</td><td><a href="https://crystal-jeffers.github.io/start-up-procedures/supervisor.html">Service Workspace</a></td><td>New field hires appear on the dispatch calendar automatically</td></tr>
</tbody>
</table>
</div>

</div> </details>
