# Definitions

Plain-language meanings for the terms used across these guides, the emails, and Airtable. Type in the search box to filter the list, or use the letters to jump.

<nav class="glossary-jump" aria-label="Jump to letter"><a href="#g-a">A</a><a href="#g-b">B</a><a href="#g-c">C</a><a href="#g-d">D</a><a href="#g-e">E</a><a href="#g-f">F</a><a href="#g-h">H</a><a href="#g-i">I</a><a href="#g-l">L</a><a href="#g-m">M</a><a href="#g-o">O</a><a href="#g-p">P</a><a href="#g-q">Q</a><a href="#g-r">R</a><a href="#g-s">S</a><a href="#g-t">T</a><a href="#g-u">U</a></nav>
<dl class="glossary">
<div class="g-letter" id="g-a">A</div>
<dt id="applicability-group">Applicability Group</dt><dd>A label on Task Library steps that decides who gets them, such as "All", "Service", "Union", or "Local 393". A case gets the steps whose group matches its role, department, or union local.</dd>
<dt id="automation">Automation</dt><dd>A rule in Airtable that does something on its own when a condition is met, like sending a request when a step is due. Automations do the routine work so nobody has to remember it.</dd>
<div class="g-letter" id="g-b">B</div>
<dt id="base">Base</dt><dd>The Airtable database behind everything: cases, employees, steps, and settings all live in one base. People don't work in the base directly. They use the workspaces.</dd>
<div class="g-letter" id="g-c">C</div>
<dt id="case">Case</dt><dd>One onboarding, role change, or offboarding, tracked from start to finish. Each case has its own checklist of steps.</dd>
<dt id="case-owner">Case Owner</dt><dd>The HR person responsible for a case's details. It starts as whoever submitted the form (or, for role changes, whoever approved it) and can be reassigned. Missing-detail emails go to the Case Owner.</dd>
<dt id="company-vehicle">Company Vehicle</dt><dd>Yes or No on a case and on the employee record. It decides the vehicle steps for any role: an onboarding with Yes gets the MVR, fleet approval, vehicle tools, and DOT medical card steps. A role change that turns it on or off gets the assign or return step. An offboarding gets the return step unless the record says No.</dd>
<dt id="completion-step">Completion step</dt><dd>The second half of a hand-off. When one party asks and another delivers, there are two steps: the request (for example "Request Laptop") and the completion ("Laptop Ready"). The completion step appears as soon as the request is done, owned by whoever delivers. See also <a href="#request-step">Request step</a>.</dd>
<dt id="confirmed-by">Confirmed By</dt><dd>Who ticks a step done in the system: the manager or HR. Steps owned by people without system access (IT, Accounting, a vendor, the employee) are ticked by whoever sent the request, once they hear back.</dd>
<dt id="case-type">Case Type</dt><dd>Which kind of change a case is: Onboarding, Role Change, or Offboarding. It decides which form starts the case and which steps apply.</dd>
<dt id="crew-record">Crew record</dt><dd>The scheduling record for a field employee in the Service Workspace. It puts them on the dispatch calendar and the Friday schedule email. Who the person is (role, union, location) comes from their employee record.</dd>
<div class="g-letter" id="g-d">D</div>
<dt id="draft-queue">Draft Queue</dt><dd>The Manager Workspace page where drafted requests wait for review. Open one, edit if needed, then send it from Outlook or tick Send For Me.</dd>
<dt id="due-soon">Due Soon</dt><dd>A step due within the next 3 days. When a request step turns Due Soon, it sends or drafts automatically.</dd>
<div class="g-letter" id="g-e">E</div>
<dt id="effective-date">Effective Date <span class="g-also">(Key date)</span></dt><dd>The date every step is timed from: the first day for onboarding, the day the change takes effect for a role change, and the last day for an offboarding.</dd>
<dt id="email-settings">Email Settings</dt><dd>The page where each manager picks a send mode and which notices they get. Every change is confirmed by email.</dd>
<dt id="employee-record">Employee record</dt><dd>The one record per person that holds who they are now: name, role, department, manager, location, and union local. HR owns it. Role changes update it on the effective date.</dd>
<div class="g-letter" id="g-f">F</div>
<dt id="fully-automated">Fully Automated</dt><dd>A send mode. Requests go out in the manager's name on schedule without the manager touching them. The opposite of Review &amp; Send.</dd>
<div class="g-letter" id="g-h">H</div>
<dt id="hitl">HITL <span class="g-also">(Human-in-the-loop)</span></dt><dd>A design where automation prepares the work but a person checks or approves it before it takes effect. Here that means Review &amp; Send drafts, union and involuntary-exit emails that are always reviewed, and HR approving every role change. Automation handles the routine; people make the judgment calls.</dd>
<dt id="hr-approved">HR Approved</dt><dd>The checkbox HR ticks on a role change after checking it. Nothing on a role change starts until it's ticked.</dd>
<div class="g-letter" id="g-i">I</div>
<dt id="interface">Interface <span class="g-also">(Workspace)</span></dt><dd>An Airtable app screen built for one group of people. The HR Workspace, Manager Workspace, and Service Workspace are interfaces. Each person sees only what they need.</dd>
<div class="g-letter" id="g-l">L</div>
<dt id="local">Local <span class="g-also">(Union local)</span></dt><dd>The union chapter an employee belongs to, such as Local 393. It decides union steps, union holidays, and the dispatch bar color.</dd>
<div class="g-letter" id="g-m">M</div>
<dt id="manager-added-task">Manager-added task</dt><dd>A one-off step a manager adds to a case from Triage with the New record button. It gets a due date (7 days out unless one is entered) and counts in reminders like any other step.</dd>
<dt id="triage">Manager Triage <span class="g-also">(Triage)</span></dt><dd>The manager's to-do list: every open step on their team's cases, soonest first.</dd>
<dt id="mark-complete">Mark Complete</dt><dd>The checkbox that finishes a step. Ticking it can unlock the next step, such as a request's completion step.</dd>
<dt id="mla">MLA</dt><dd>The construction labor agreement that sets holidays and terms for Start-Up field staff. Service staff fall under the Service Agreement instead.</dd>
<div class="g-letter" id="g-o">O</div>
<dt id="owner">Owner</dt><dd>Who does a step: Manager, HR, IT, Accounting, Admin, Employee, or an outside party. Every step has exactly one owner. A manager or HR can hand a step to someone else with Reassign To.</dd>
<dt id="owner-notice">Owner notice <span class="g-also">(Action needed email)</span></dt><dd>An email telling a team without system access, such as the office administrator, that a step is theirs and ready. Replies go to whoever sent the request, who then marks the step done.</dd>
<dt id="ofd">OFD <span class="g-also">(Off day)</span></dt><dd>A union off day: not worked and not paid. It appears on the dispatch calendar like a holiday.</dd>
<dt id="open-in-outlook">Open in Outlook</dt><dd>A button that opens a ready-to-send email in Outlook with the recipients, subject, and body filled in. After sending, tick Sent from Outlook so the step is logged.</dd>
<dt id="overdue">Overdue</dt><dd>A step past its due date that isn't complete. It shows on Triage, the Monday roll-up, and HR check-ins.</dd>
<div class="g-letter" id="g-p">P</div>
<dt id="phase">Phase</dt><dd>When a step is due, relative to the key date: Before Start, Day 1, First Week (4 days after), or Post Start (14 days after).</dd>
<dt id="pilot-mode">Pilot mode</dt><dd>While the system is being tested, every email goes to one review inbox and lists who it would have gone to. At go-live, emails go to the real recipients.</dd>
<dt id="prerequisite">Prerequisite</dt><dd>A step that has to be finished before another can start. Every completion step has its request step as its prerequisite. For Local 393 hires, the dispatch form must be submitted before the dispatch request goes out.</dd>
<div class="g-letter" id="g-q">Q</div>
<dt id="quick-deploy">Quick Deploy</dt><dd>The Manager Workspace page listing requests that are ready to send now, before their due date.</dd>
<div class="g-letter" id="g-r">R</div>
<dt id="record">Record</dt><dd>One row in Airtable: one case, one step, one employee.</dd>
<dt id="reassign-to">Reassign To</dt><dd>Hands a step to a different owner (for example from the manager to IT). Only managers and HR can do it. A reassigned step leaves the manager's Triage but stays on Case Progress.</dd>
<dt id="request-step">Request step</dt><dd>The first half of a hand-off: asking someone else to do something, often by email. Once it's done, its <a href="#completion-step">completion step</a> appears.</dd>
<dt id="responsible">Responsible</dt><dd>The person or team who needs to act on a step, shown in emails and on Triage.</dd>
<dt id="review-and-send">Review &amp; Send</dt><dd>A send mode. Requests are drafted into the Draft Queue for the manager to check before they go out. An example of HITL.</dd>
<dt id="role-change">Role Change</dt><dd>A case for a current employee whose role, department, manager, location, union local, team, level, pay, or vehicle eligibility is changing. Managers file it and HR approves it.</dd>
<div class="g-letter" id="g-s">S</div>
<dt id="send-for-me">Send For Me</dt><dd>A checkbox on a draft that has Airtable send it in the manager's name, instead of opening it in Outlook.</dd>
<dt id="send-mode">Send Mode</dt><dd>How a manager's requests go out: Fully Automated or Review &amp; Send.</dd>
<dt id="step">Step <span class="g-also">(Task)</span></dt><dd>One item on a case's checklist, like "Request Laptop" or "Exit Interview". Each step has one owner. Some send an email. Others are hands-on.</dd>
<div class="g-letter" id="g-t">T</div>
<dt id="task-library">Task Library</dt><dd>The master list of every possible step, kept in Airtable by HR. Each case copies only the steps that apply to it. Change a step here, and every future case uses the change.</dd>
<div class="g-letter" id="g-u">U</div>
<dt id="union-holiday">Union holiday</dt><dd>A paid holiday from a union's agreement. Holidays are added to each tech's calendar automatically, and a job booked on one is flagged.</dd>
</dl>

Missing a term? Ask HR, and it'll be added here.
