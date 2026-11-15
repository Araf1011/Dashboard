# 🎓 ASRIS™ — Automated Student Risk Identification System
### Enterprise Early-Intervention & Student Retention Intelligence Platform
> **Demo Showcase for Stakeholders & Clients**  
> Based on the King's Own Institute (KOI) ICT753 Industry Project Proposal • Supervised by Dr. Sweta Thakur

---

## 📌 Executive Summary

In higher education institutions, **student attrition and course failure** frequently stem from delayed identification of vulnerable students. Manual monitoring of attendance spreadsheets, tutorial submissions, and quiz attempts is labor-intensive, error-prone, and sluggish (Tinto, 2017; Gibbs & Jenkins, 2019).

**ASRIS (Automated Student Risk Identification System)** solves this crisis by digitalizing and automating academic risk classification:
- **Proactive Early Detection:** Evaluates engagement metrics at **Week 4** (early intervention) and **Week 8** (mid-term evaluation) before final examination deadlines.
- **Automated Remedial Dispatch:** Delivers personalized, step-by-step guidance emails to flagged students within a **strict 24-hour SLA**.
- **Centralized Staff Cockpit:** Unifies multi-subject data (MIS101, ICT201, BUS301, DAT401, NET101) into an intuitive, real-time dashboard.
- **Proven Impact:** Delivers **≥ 40% reduction in administrative manual workload** and **> 95% identification precision**.

---

## 🖥️ Interactive Demo Walkthrough (For Clients & Reviewers)

When testing this live prototype, here are the key workflows to explore:

### 1. 📊 Executive Dashboard (Overview)
- **Top Metrics:** Review real-time KPIs across the 50-student cohort: **Total Monitored (50)**, **Avg Attendance (68%)**, **Clearance Rate (84%)**, and **Persistent At-Risk (8)**.
- **Smooth Spline Attendance Curve:** Hover over points on the natural spline graph to view day-by-day attendance hours and risk indicators (e.g., `Friday: 1h 32min • High Risk <50%`).
- **Dynamic Risk Cutoff Slider:** Click `Cutoff: 50%` in the chart header to adjust the threshold slider (30% to 70%) and watch the algorithm dynamically recalculate student statuses in real-time.
- **Course Status Cards:** View animated 3D iridescent cards for **MIS101**, **ICT201**, and **BUS301** displaying cohort progress bars.

### 2. ⚡ Automated 24h Alert Dispatcher (Right Rail)
- In the right-hand pastel action card, click **"Dispatch All 24h Alerts"**.
- Triggers a batch notification run for all currently flagged students, increments their action count, and triggers a celebratory completion animation.

### 3. 👥 Student Master Roster (Excel Data Layer Implementation)
- Click the **Users icon** on the left rail or click **"View all 50 student records in master table"**.
- **Instant Search & Filter:** Filter by Subject (MIS101, ICT201, BUS301, DAT401, NET101), Week Checkpoint (Week 4 or Week 8), or Risk Status (`YES - Needs Follow Up` vs `Resolved`).
- **Visual Progress Bars:** Colored attendance and tutorial submission bars instantly highlight students below the 50% threshold.
- **Export CSV:** Click **"Export Master CSV"** to download the clean, consolidated dataset ready for Microsoft Excel.

### 4. ✉️ Simulated Remedial Email Notification
- In any student row, click the **Paper Airplane icon**.
- Opens the **Automated Remedial Notification Simulator**, demonstrating the exact personalized email sent to the student:
  - Exact deficiency metrics (e.g. Attendance 30%, Tutorial 100%, Quiz Yes).
  - Recommended stepwise recovery roadmap (LMS review, coordinator office hours, study contract).
  - Compliance with KOI academic progression policies.
- Click **"Dispatch Alert & Log Audit"** to confirm dispatch.

### 5. 📝 Academic Counseling & Intervention Logger
- In any student row, click the **User Check icon**.
- Academic advisors can record **1-on-1 Counseling**, **Peer Tutoring Referrals**, or **Study Plan Agreements**, update the student's status to **Resolved**, and save advisor notes into the audit trail.

### 6. 🏛️ 3-Tier Architecture & Appendix Schematics
- Click the **Layers icon** to inspect the **3-Tier System Architecture** (Presentation Layer, Application Layer, Data Layer).
- Click the **Workflow icon** to explore:
  - **UML Class Diagram:** 8 relational entities (Student, Staff, Subject, Attendance, Tutorial, Assessment, Risk_Status, Notification) with Primary & Foreign Keys.
  - **Activity Flowchart:** Ingestion &rarr; Cleaning &rarr; Week 4/8 Checkpoint &rarr; Email Trigger &rarr; Dashboard sync.
  - **Sequence Diagram:** Message calls between Staff, DB, Python Engine, Student, and Dashboard.
  - **Data Flow Diagram (DFD Level-1):** Information flows across external actors and data stores.

### 7. 📅 Project Gantt Roadmap & WBS
- Click the **Calendar icon** to view the **12-Week Capstone Timeline** (Weeks 2–12 across 5 phases and 12 work packages) with team responsibility allocations (Moses, Eddie, Abraham, Iqra) and the **ISO/IEC 31000 Risk & Mitigation Matrix**.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | React 19 + Vite 8 | Ultra-fast rendering, modular component architecture |
| **Styling & Design System** | Tailwind CSS 3.4 | Modern soft-palette aesthetic, borderless canvas, light/dark mode |
| **Data Visualization** | Recharts | Smooth natural spline curves, responsive charts, custom tooltips |
| **Iconography** | Lucide React | Minimalist, high-clarity SVG iconography |
| **Interactive Micro-actions** | Canvas Confetti | Celebratory feedback upon successful SLA dispatches and case resolutions |
| **Data Processing Logic** | Python Simulation (Pandas / OpenPyXL) | `<50%` threshold evaluations, multi-subject data aggregation |

---

## 🚀 Running the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation & Launch

```bash
# 1. Clone the repository
git clone https://github.com/Araf1011/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open your browser and navigate to **`http://localhost:5173/`**.

### Building for Production

```bash
# Compile optimized static build to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Automated via GitHub Actions)
This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.
1. Push this repository to GitHub on branch `main`.
2. Go to repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The site will automatically build and publish live at `https://araf1011.github.io/Dashboard/`.

### Option 2: Vercel (1-Click Deployment)
1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Vite**.
3. Root Directory: `./`.
4. Click **Deploy**.

### Option 3: Netlify
1. Connect your repository at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

---

## 👥 Academic Project Team & Credits

- **Institution:** King's Own Institute (KOI), Sydney, Australia (CRICOS 01871A)
- **Unit:** ICT753 Industry Project (Trimester T126)
- **Academic Supervisor:** Dr. Sweta Thakur
- **Project Authors:**
  - **Moses Kiprop KIPKOECH** — *Project Manager / Process Mapping Lead*
  - **Eddie** — *Data Analyst / Dataset Preparation Lead*
  - **Abraham** — *Data Scientist / Python Algorithmic Logic Lead*
  - **Iqra** — *Developer / Excel Templates & Notification Workflow Lead*

---

## 📄 License
This prototype is developed for educational and demonstration purposes under the KOI ICT753 Industry Project curriculum.
