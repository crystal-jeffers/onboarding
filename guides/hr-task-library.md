# Editing the Task Library

The Task Library is the master list of steps. Change a step here once, and every future case uses the new version. Cases already open keep the steps they started with.

<figure class="shot">
  <img src="assets/img/hr/hr-task-library-detail.png" alt="A Task Library step showing timing, owners, case types and its email template" loading="lazy">
  <figcaption>One step: who owns it, who confirms it, when it's due and what email it sends.</figcaption>
</figure>

<details class="accordion"> <summary>What each setting does</summary> <div class="accordion-body">

<div class="table-scroll">
<table>
<thead><tr><th>Setting</th><th>What it controls</th></tr></thead>
<tbody>
<tr><td>Timing Rule</td><td>The phase (Before Start, Day 1, First Week or Post Start), which sets the due date.</td></tr>
<tr><td>Owner</td><td>Who does the step. Every step has one owner. When one party asks and another delivers (the manager requests a laptop, IT delivers it), that's two steps: a request step and a completion step.</td></tr>
<tr><td>Confirmed By</td><td>Who ticks the step done: Manager or HR. For steps owned by people without system access (IT, a vendor, the employee), it's whoever sent the request.</td></tr>
<tr><td>Platform</td><td>Where the step gets done: Outlook, Workday, RedCarpet, Labcorp and so on. Shows in HR's daily email.</td></tr>
<tr><td>Automation</td><td><strong>Automated</strong>: the system sends the request. <strong>Manual</strong>: a person does it. <strong>Automatable</strong>: manual today, a candidate for automation.</td></tr>
<tr><td>Email Template</td><td>The request's subject, body, To and CC. The employee's name, date and location are added automatically.</td></tr>
<tr><td>Prerequisite Task</td><td>The step only appears once its prerequisite is complete. A completion step's prerequisite is always its request step.</td></tr>
<tr><td>Vehicle Rule</td><td>For vehicle steps only. Has vehicle: added when the person gets or has a company vehicle (any role). Getting / giving up a vehicle: role changes where that actually changes.</td></tr>
<tr><td>Notify Owner</td><td>Emails the step's contact when it's their turn. Use it for teams without system access that nothing else tells, like the office administrator's welcome email. Leave it off when a request email already reaches them.</td></tr>
<tr><td>Applicability Groups</td><td>Which roles, departments, locations and unions get this step.</td></tr>
<tr><td>Case Types</td><td>Onboarding, Role Change, Offboarding, or more than one.</td></tr>
<tr><td>Exit Types</td><td>Offboarding only. Tick Voluntary for steps that don't apply to an involuntary exit.</td></tr>
<tr><td>Change Trigger</td><td>Role change only. The step is added only when this changes (for example, Location adds building access). Use at most one per step.</td></tr>
<tr><td>Est. Manual Minutes</td><td>How long the step takes by hand. This feeds the minutes-saved measure.</td></tr>
</tbody>
</table>
</div>

</div> </details>

<details class="accordion"> <summary>Adding a step</summary> <div class="accordion-body">

<ol class="chunked-list">
<li>Add a row to the Task Library, with a name and an unused <strong>Step Number</strong> in the gap where it belongs. Numbers go up in 10s (onboarding 10–310, offboarding 1010+, role change 2010+), so a step between 20 and 30 can be 25. Nothing else needs renumbering.</li>
<li>Set Timing Rule, Owner, Confirmed By, Platform and Case Types.</li>
<li>If someone else has to deliver it, add a second row for the completion step: set its <strong>Prerequisite Task</strong> to the request step and number it request + 1 (for example 171 after 170).</li>
<li>Link the Applicability Groups it applies to. Use <strong>All</strong> for everyone.</li>
<li>If the system should send it, set Automation to <strong>Automated</strong> and link an <strong>Email Template</strong>.</li>
<li>Submit a test case to check it appears where you expect.</li>
</ol>

</div> </details>

<details class="accordion"> <summary>Keeping steps in order</summary> <div class="accordion-body">

- Sort Task Library views and task lists by <strong>Sort Order</strong>, not Step Number.
- A completion step sorts right after its request automatically, even with no number of its own.
- Never renumber existing steps. Use the gaps.

</div> </details>

<details class="accordion"> <summary>Changing a recipient</summary> <div class="accordion-body">

- Recipients live on the email template (To and CC) and on <strong>Contacts</strong>.
- To make every email to one recipient wait for review (as union dispatch does), set that contact's <strong>Contact Preference</strong> to Review &amp; Send.

</div> </details>
