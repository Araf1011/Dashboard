# 🎓 ASRIS™ — Automated Student Risk Identification System
### Enterprise Student Retention & Early Intervention Portal
> **Client Demonstration Platform • King's Own Institute (KOI) ICT753 Industry Project (T126)**  
> **Academic Supervisor:** Dr. Sweta Thakur

---

## 🌟 Overview & Business Objective

In higher education, identifying vulnerable students through manual spreadsheet tracking is slow, disorganized, and labor-intensive (Tinto, 2017). Students who fall below attendance and tutorial milestones often fail because interventions occur too late in the trimester.

**ASRIS** solves this by digitalizing and automating the student monitoring workflow:
- **Early Algorithmic Checkpoints:** Automatically evaluates engagement at **Week 4** (early intervention) and **Week 8** (mid-term evaluation).
- **Automated 24h Remedial Dispatch:** Dispatches targeted, step-by-step guidance emails to flagged students within a **strict 24-hour SLA**.
- **Unified Academic Cockpit:** Centralizes attendance, tutorial homework, and quiz attempts across 5 core units (**MIS101**, **ICT201**, **BUS301**, **DAT401**, **NET101**).
- **Demonstrated Results:** Reduces administrative workload by **≥ 40%** with **> 95% identification precision**.

---

## 📱 Mobile & Multi-Device Responsive Architecture

Designed from the ground up for seamless operation across desktop, tablet, and mobile devices:
- **Desktop View:** Sticky left icon rail, spacious multi-column layout, and wide spline graphs.
- **Mobile & Tablet View:** Responsive top brand bar, fluid grid cards, and an intuitive **mobile bottom navigation dock** allowing quick thumb navigation on touch screens.
- **Dark & Light Mode:** Instant reactive theme toggle.

---

## 🖥️ Live Application Views & Features

The web platform provides a focused set of functional views for faculty and advisors:

### 1. 📊 Executive Dashboard
- **Cohort KPIs:** Real-time visibility into **Total Monitored (50)**, **Avg Attendance (68%)**, **Clearance Rate (84%)**, and **Persistent At-Risk (8)**.
- **Natural Spline Engagement Curve:** Smooth attendance velocity curve with custom interactive tooltips (`Friday: 1h 32min • High Risk <50%`) and Week 4 vs Week 8 comparison.
- **Subject Status Cards:** Quick cards for **MIS101**, **ICT201**, and **BUS301** featuring 3D geometric visual markers and cohort progress bars.
- **24-Hour Alert Action Card:** Single-click batch alert dispatcher with confetti celebration feedback.
- **Intervention Agenda:** Chronological schedule of student counseling appointments and batch evaluation runs.

### 2. 👥 Student Risk Master Roster
- Direct implementation of the **KOI Standardized Excel Template** (50 students across 5 subjects).
- Instant multi-filter: Search by ID/Name, filter by Subject, filter by Week (Week 4 or Week 8), or filter by Risk Status (`YES - Needs Follow Up` vs `Resolved`).
- Visual progress bars for Attendance % and Tutorial Submission % (red below 50%, green above).
- Individual action buttons to dispatch 24h remedial emails or log counseling sessions.
- **1-Click Master CSV Export:** Downloads clean Excel-ready dataset directly.

### 3. 📅 Attendance & Tutorial Submissions
- Unit-by-unit tracking of weekly classroom presence and lab exercise submissions.
- Highlights specific deficits (e.g. Attendance &lt;50% or Tutorial Homework &lt;50%) with clear status indicators.

### 4. 🛡️ Interventions & Counseling Case Management
- Documented record of student meetings, academic counseling sessions, and signed progression contracts.
- Track case recovery rates and maintain audit notes logged by academic advisors.

### 5. 🔔 Automated Alert Notifications & SLA Audit Trail
- Time-stamped delivery log of automated remedial emails dispatched within the 24-hour SLA window.
- Inspect exact email copy containing personalized student deficiency breakdowns and step-by-step guidance.

### 6. ⚙️ Risk Rules & Algorithmic Thresholds
- Interactive faculty configuration: Adjust attendance cutoff (`<50%`), tutorial cutoff (`<50%`), and quiz incomplete flags.
- Trigger manual batch simulation runs for Week 4 and Week 8 checkpoints.

---

## 🏗️ Technical Architecture (Under the Hood)

Behind the scenes, the system maintains a strict **3-Layer Architecture**:
1. **Data Layer (Backend/Database):** Standardized tabular schema storing Student profiles, Subject details, Attendance records, Tutorial submission logs, Assessment attempts, Risk status checkpoints, and Notification audit logs (aligned with the project UML relational model).
2. **Application Layer (Business Logic):** Algorithmic threshold classification, automated 24-hour notification triggers, and data consolidation routines.
3. **Presentation Layer (Web Application):** Modern React 19 + Tailwind CSS frontend with Recharts visualization.

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Araf1011/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open **`http://localhost:5173/`** in your browser.

---

## 🌐 Live Deployment (GitHub Pages)

This repository includes automated CI/CD via GitHub Actions (`.github/workflows/deploy.yml`).
1. In your GitHub repository: Go to **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
3. Live URL: **`https://araf1011.github.io/Dashboard/`**
