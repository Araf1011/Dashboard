// Mock dataset based on KOI ICT753 Assessment 2 Proposal
// Standardized Excel Template schema from Page 8

export const INITIAL_STUDENTS = [
  { id: "S10036", name: "Student_36", subject: "MIS101", week: 8, attendance: 100, submission: 100, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10037", name: "Student_37", subject: "ICT201", week: 4, attendance: 80, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10038", name: "Student_38", subject: "BUS301", week: 8, attendance: 30, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10039", name: "Student_39", subject: "DAT401", week: 4, attendance: 80, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10040", name: "Student_40", subject: "NET101", week: 8, attendance: 20, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10041", name: "Student_41", subject: "MIS101", week: 4, attendance: 0, submission: 60, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10042", name: "Student_42", subject: "ICT201", week: 8, attendance: 20, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10043", name: "Student_43", subject: "BUS301", week: 4, attendance: 80, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10044", name: "Student_44", subject: "DAT401", week: 8, attendance: 100, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10045", name: "Student_45", subject: "NET101", week: 4, attendance: 0, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10046", name: "Student_46", subject: "MIS101", week: 4, attendance: 20, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10047", name: "Student_47", subject: "ICT201", week: 4, attendance: 0, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10048", name: "Student_48", subject: "BUS301", week: 8, attendance: 60, submission: 100, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10049", name: "Student_49", subject: "DAT401", week: 4, attendance: 80, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10050", name: "Student_50", subject: "NET101", week: 8, attendance: 80, submission: 80, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },

  // Additional 35 students to make the complete 50-student institutional cohort
  { id: "S10051", name: "Student_51", subject: "MIS101", week: 4, attendance: 35, submission: 45, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10052", name: "Student_52", subject: "MIS101", week: 8, attendance: 75, submission: 85, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10053", name: "Student_53", subject: "MIS101", week: 8, attendance: 90, submission: 95, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10054", name: "Student_54", subject: "MIS101", week: 4, attendance: 25, submission: 70, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10055", name: "Student_55", subject: "MIS101", week: 8, attendance: 70, submission: 80, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10056", name: "Student_56", subject: "MIS101", week: 4, attendance: 85, submission: 90, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10057", name: "Student_57", subject: "MIS101", week: 8, attendance: 95, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },

  { id: "S10058", name: "Student_58", subject: "ICT201", week: 4, attendance: 40, submission: 35, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10059", name: "Student_59", subject: "ICT201", week: 4, attendance: 15, submission: 50, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10060", name: "Student_60", subject: "ICT201", week: 8, attendance: 80, submission: 90, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10061", name: "Student_61", subject: "ICT201", week: 8, attendance: 30, submission: 40, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10062", name: "Student_62", subject: "ICT201", week: 4, attendance: 90, submission: 95, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10063", name: "Student_63", subject: "ICT201", week: 8, attendance: 85, submission: 85, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10064", name: "Student_64", subject: "ICT201", week: 4, attendance: 45, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },

  { id: "S10065", name: "Student_65", subject: "BUS301", week: 4, attendance: 40, submission: 80, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10066", name: "Student_66", subject: "BUS301", week: 8, attendance: 70, submission: 85, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10067", name: "Student_67", subject: "BUS301", week: 4, attendance: 95, submission: 90, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10068", name: "Student_68", subject: "BUS301", week: 8, attendance: 85, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10069", name: "Student_69", subject: "BUS301", week: 4, attendance: 80, submission: 75, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10070", name: "Student_70", subject: "BUS301", week: 8, attendance: 90, submission: 95, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10071", name: "Student_71", subject: "BUS301", week: 8, attendance: 100, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },

  { id: "S10072", name: "Student_72", subject: "DAT401", week: 4, attendance: 30, submission: 40, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10073", name: "Student_73", subject: "DAT401", week: 8, attendance: 75, submission: 80, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10074", name: "Student_74", subject: "DAT401", week: 4, attendance: 45, submission: 75, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10075", name: "Student_75", subject: "DAT401", week: 8, attendance: 85, submission: 90, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10076", name: "Student_76", subject: "DAT401", week: 4, attendance: 90, submission: 95, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10077", name: "Student_77", subject: "DAT401", week: 8, attendance: 95, submission: 100, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10078", name: "Student_78", subject: "DAT401", week: 8, attendance: 35, submission: 45, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },

  { id: "S10079", name: "Student_79", subject: "NET101", week: 4, attendance: 25, submission: 30, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10080", name: "Student_80", subject: "NET101", week: 8, attendance: 70, submission: 85, quizAttempted: "Yes", actionTaken: 1, stillAtRisk: "Resolved" },
  { id: "S10081", name: "Student_81", subject: "NET101", week: 4, attendance: 40, submission: 75, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10082", name: "Student_82", subject: "NET101", week: 8, attendance: 30, submission: 50, quizAttempted: "No", actionTaken: 0, stillAtRisk: "YES - Needs Follow Up" },
  { id: "S10083", name: "Student_83", subject: "NET101", week: 4, attendance: 85, submission: 90, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10084", name: "Student_84", subject: "NET101", week: 8, attendance: 90, submission: 95, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" },
  { id: "S10085", name: "Student_85", subject: "NET101", week: 8, attendance: 85, submission: 85, quizAttempted: "Yes", actionTaken: 0, stillAtRisk: "Resolved" }
];

export const SUBJECT_METRICS = [
  { code: "MIS101", name: "Management Information Systems", coordinator: "Dr. Sweta Thakur", total: 10, week4Risk: 4, week8Risk: 2, avgAttendance: 68, avgSubmission: 72 },
  { code: "ICT201", name: "Database Systems & Modeling", coordinator: "Prof. R. Kumar", total: 10, week4Risk: 5, week8Risk: 2, avgAttendance: 64, avgSubmission: 66 },
  { code: "BUS301", name: "Business Analytics", coordinator: "Dr. A. Singh", total: 10, week4Risk: 2, week8Risk: 1, avgAttendance: 74, avgSubmission: 81 },
  { code: "DAT401", name: "Data Science Fundamentals", coordinator: "Dr. Y. Chen", total: 10, week4Risk: 3, week8Risk: 1, avgAttendance: 71, avgSubmission: 75 },
  { code: "NET101", name: "Networking Principles", coordinator: "Eng. M. Oladapo", total: 10, week4Risk: 4, week8Risk: 2, avgAttendance: 61, avgSubmission: 63 }
];

export const PROJECT_DETAILS = {
  institution: "King's Own Institute (KOI)",
  cricos: "01871A",
  course: "ICT753 Industry Project",
  trimester: "T126",
  assessment: "Assessment 2 - Group Project Proposal",
  title: "Automated Student Risk Identification System",
  supervisor: "Dr. Sweta Thakur",
  authors: [
    { name: "Moses Kiprop KIPKOECH", role: "Project Manager / Process Mapping Lead" },
    { name: "Eddie", role: "Data Analyst / Dataset Preparation Lead" },
    { name: "Abraham", role: "Data Scientist / Risk Algorithm & Python Scripts Lead" },
    { name: "Iqra", role: "Developer / Excel Templates & Notification System Lead" }
  ],
  successCriteria: {
    workloadReduction: "≥ 40% Administrative Time Saved",
    accuracy: "> 95% Identification Accuracy",
    sla: "< 24 Hours Notification Turnaround",
    targetCheckpoints: "Week 4 & Week 8 Evaluated"
  }
};

