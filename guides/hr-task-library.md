# Editing the Task Library

The Task Library is the master list of steps. Change a step here once, and every future case uses the new version. Cases already open keep the steps they started with.

<figure class="shot">
  <img src="assets/img/hr/hr-task-library-detail.png" alt="A Task Library step showing timing, owners, case types and its email template" loading="lazy">
  <figcaption>One step: who starts it, who finishes it, when it's due and what email it sends.</figcaption>
</figure>

<details class="accordion"> <summary>What each setting does</summary> <div class="accordion-body">

<div class="table-scroll">
<table>
<thead><tr><th>Setting</th><th>What it controls</th></tr></thead>
<tbody>
<tr><td>Timing Rule</td><td>The phase (Before Start, Day 1, First Week or Post Start), which sets the due date.</td></tr>
<tr><td>Initiated By / Completed By</td><td>Who kicks it off and who finishes it. For example, the manager requests a laptop and IT delivers it.</td></tr>
<tr><td>Initiation Automation</td><td><strong>Automated</strong>: the system sends the request. <strong>Manual</strong>: a person does it. <strong>Automatable</strong>: manual today, a candidate for automation.</td></tr>
<tr><td>Email Template</td><td>The request's subject, body, To and CC. The employee's name, date and location are added automatically.</td></tr>
<tr><td>Follow-Up Required</td><td>After the email goes out, the step waits in Follow Up until someone confirms the work happened.</td></tr>
<tr><td>Prerequisite Task</td><td>The step only appears once its prerequisite is complete.</td></tr>
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
<li>Add a row to the Task Library, with a name and the next free <strong>Step Number</strong> (onboarding 1–99, offboarding 101–199, role change 201–299).</li>
<li>Set Timing Rule, Initiated By, Completed By and Case Types.</li>
<li>Link the Applicability Groups it applies to. Use <strong>All</strong> for everyone.</li>
<li>If the system should send it, set Initiation Automation to <strong>Automated</strong> and link an <strong>Email Template</strong>.</li>
<li>Submit a test case to check it appears where you expect.</li>
</ol>

</div> </details>

<details class="accordion"> <summary>Changing a recipient</summary> <div class="accordion-body">

- Recipients live on the email template (To and CC) and on <strong>Contacts</strong>.
- To make every email to one recipient wait for review (as union dispatch does), set that contact's <strong>Contact Preference</strong> to Review &amp; Send.

</div> </details>
