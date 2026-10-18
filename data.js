// Growth Diary — data file.
// Claude updates this file when you send numbers in chat.
// Anything you log inside the dashboard is saved in your browser and merged on top of this.
// Use "Export backup" in the dashboard to save your browser logs as a file in this folder.

window.SEED = {
  profile: { sex: "female", heightCm: 163, age: 30 },

  targets: {
    protein: 110, proteinMin: 95, calMin: 2100, calMax: 2200, fatMin: 55, fatMax: 65, carbsMin: 150, carbsMax: 200, carbsGluteMin: 220, carbsGluteMax: 250, // carbs: higher on glute days
    stepsMin: 8000, stepsMax: 12000, creatineG: 5
  },

  // What a full week looks like. Order doesn't matter — the app suggests what fits today.
  week: { glute: 2, upper: 1, core: 1, full: 1, yoga: 2, stretch: 2 },

  templates: {
    gluteA: { type: "glute", name: "Glute A · Heavy", note: "Based on your Oct 18 session. Low reps, add weight when all reps feel solid.",
      ex: [["Hip Thrust","4 × 8"],["Hip Abduction","3 × 6–10"],["Squat","3 × 8"],["Bulgarian Split Squat","2 × 6 / leg"],["Standing Glute Kickback (machine)","2 / leg"],["RDL","2–3 × 6–8"],["45° Back Extension","2 × 10"]] },
    gluteB: { type: "glute", name: "Glute B · Pump", note: "Lighter, more reps. Same muscles, different stimulus.",
      ex: [["Hip Thrust","3 × 12"],["DB RDL","3 × 10"],["Walking Lunges","3 × 12 / leg"],["Cable Kickback","3 × 15 / leg"],["Hip Abduction","3 × 20"],["45° Back Extension","3 × 15"]] },
    upper:  { type: "upper", name: "Upper", note: "Back + posture + arm tone. Light shoulders (your frame is already broad).",
      ex: [["Lat Pulldown","3 × 10"],["Seated Cable Row","3 × 10"],["Lateral Raise","3 × 15"],["Face Pull","3 × 15"],["Triceps Rope Pushdown","3 × 12"],["Incline DB Press","2 × 10"]] },
    core:   { type: "core", name: "Core + Cardio", note: "Core that helps you brace on heavy hip thrusts, then easy cardio (you can talk, not sing).",
      ex: [["Dead Bug","3 × 10 / side"],["Pallof Press","3 × 12 / side"],["Side Plank","3 × 30 s"],["Reverse Crunch","3 × 12"],["Farmer Carry","3 × 30 m"],["Incline walk or bike","30–40 min"]] },
    full:   { type: "full", name: "Full Body", note: "Balanced — not a third glute day.",
      ex: [["Leg Press","3 × 10"],["Assisted Pull-Up","3 × 8"],["DB Bench Press","3 × 10"],["DB RDL","2 × 10"],["Plank","3 × 40 s"]] },
    yoga:   { type: "yoga", name: "Yoga · 30 min", note: "On top of workouts. Any day, even after lifting.", ex: [] },
    stretch:{ type: "stretch", name: "Stretch · 15 min", note: "Hips, hamstrings, hip flexors, chest/shoulders.", ex: [] }
  },

  goals: {
    start: "2026-10-17",
    year: { date: "2027-10-17", weightMin: 58, weightMax: 60, waist: 65, waistLikely: [66, 68], gluteMin: 98, gluteMax: 100, top: 85 },
    // Phases: build (small surplus) → mini-cut (small deficit) → build
    phases: [
      { name: "Build", from: "2026-10-17", to: "2027-03-17", kcal: "+150 / day" },
      { name: "Mini-cut", from: "2027-03-17", to: "2027-06-17", kcal: "−300 / day" },
      { name: "Build", from: "2027-06-17", to: "2027-10-17", kcal: "+150 / day" }
    ],
    // Monthly checkpoints (estimates — we'll adjust them to your real rate)
    months: [
      { m: 1,  date: "2026-11-17", glute: 94.5, waistMax: 70,   weight: [57.6, 58.2], hipThrust: 102.5 },
      { m: 2,  date: "2026-12-17", glute: 95,   waistMax: 70,   weight: [57.8, 58.5], hipThrust: 105 },
      { m: 3,  date: "2027-01-17", glute: 95.5, waistMax: 70.5, weight: [58, 58.8],   hipThrust: 107.5 },
      { m: 4,  date: "2027-02-17", glute: 96,   waistMax: 70.5, weight: [58.3, 59],   hipThrust: 110 },
      { m: 5,  date: "2027-03-17", glute: 96.5, waistMax: 70.5, weight: [58.5, 59.3], hipThrust: 112.5 },
      { m: 6,  date: "2027-04-17", glute: 96.5, waistMax: 69.5, weight: [58, 58.8],   hipThrust: 112.5 },
      { m: 7,  date: "2027-05-17", glute: 96.5, waistMax: 68.5, weight: [57.6, 58.4], hipThrust: 112.5 },
      { m: 8,  date: "2027-06-17", glute: 96.5, waistMax: 67.5, weight: [57.2, 58],   hipThrust: 112.5 },
      { m: 9,  date: "2027-07-17", glute: 97,   waistMax: 67.5, weight: [57.5, 58.3], hipThrust: 115 },
      { m: 10, date: "2027-08-17", glute: 97.5, waistMax: 67.5, weight: [57.8, 58.7], hipThrust: 117.5 },
      { m: 11, date: "2027-09-17", glute: 98,   waistMax: 67.5, weight: [58, 59.2],   hipThrust: 120 },
      { m: 12, date: "2027-10-17", glute: 99,   waistMax: 67,   weight: [58, 60],     hipThrust: 120 }
    ]
  },

  measurements: [
    { id: "m-2026-06-24", date: "2026-06-24", weight: null, top: 85, waist: 69, glute: 90.5, arm: null, note: "Glute 90–91 cm" },
    { id: "m-2026-10-17", date: "2026-10-17", weight: 57.6, top: 85, waist: 70, glute: 94, arm: null, note: "" }
  ],

  // Weekly plans (week starts Monday). Each day: list of workouts; done = completed.
  plans: {
    "2026-10-12": { "2026-10-12": [], "2026-10-13": [], "2026-10-14": [], "2026-10-15": [], "2026-10-16": [], "2026-10-17": [],
                    "2026-10-18": [{ k: "gluteA", done: true }, { k: "stretch", done: false }] }
  },

  // weight in kg
  lifts: [
    { id: "l-1017-ht1", date: "2026-10-17", exercise: "Hip Thrust", weight: 85, sets: 1, reps: null },
    { id: "l-1017-ht2", date: "2026-10-17", exercise: "Hip Thrust", weight: 90, sets: 1, reps: null },
    { id: "l-1017-ht3", date: "2026-10-17", exercise: "Hip Thrust", weight: 95, sets: 1, reps: null },
    { id: "l-1017-rdl", date: "2026-10-17", exercise: "RDL", weight: 30, sets: null, reps: null, note: "machine" },
    { id: "l-1017-sq1", date: "2026-10-17", exercise: "Squat", weight: 35, sets: 1, reps: null },
    { id: "l-1017-sq2", date: "2026-10-17", exercise: "Squat", weight: 40, sets: 1, reps: null },
    { id: "l-1017-abd", date: "2026-10-17", exercise: "Hip Abduction", weight: 97, sets: null, reps: null },

    { id: "l-1018-ht1", date: "2026-10-18", exercise: "Hip Thrust", weight: 90, sets: 1, reps: 8 },
    { id: "l-1018-ht2", date: "2026-10-18", exercise: "Hip Thrust", weight: 95, sets: 1, reps: 8 },
    { id: "l-1018-ht3", date: "2026-10-18", exercise: "Hip Thrust", weight: 100, sets: 1, reps: 8, note: "4 sets total" },
    { id: "l-1018-abd1", date: "2026-10-18", exercise: "Hip Abduction", weight: 95, sets: 3, reps: 6, note: "leaning forward" },
    { id: "l-1018-abd2", date: "2026-10-18", exercise: "Hip Abduction", weight: 90, sets: 1, reps: 4, note: "sitting upright" },
    { id: "l-1018-sq", date: "2026-10-18", exercise: "Squat", weight: 40, sets: 3, reps: 8 },
    { id: "l-1018-bss", date: "2026-10-18", exercise: "Bulgarian Split Squat", weight: 28, sets: 2, reps: 6, note: "per leg · 2×14 kg DBs" },
    { id: "l-1018-le1", date: "2026-10-18", exercise: "Standing Glute Kickback (machine)", weight: 57.5, sets: 1, reps: null, note: "per leg" },
    { id: "l-1018-le2", date: "2026-10-18", exercise: "Standing Glute Kickback (machine)", weight: 65, sets: 1, reps: null, note: "per leg" },
    { id: "l-1018-rdl1", date: "2026-10-18", exercise: "RDL", weight: 25, sets: 1, reps: 6 },
    { id: "l-1018-rdl2", date: "2026-10-18", exercise: "RDL", weight: 30, sets: 1, reps: 6 },
    { id: "l-1018-be", date: "2026-10-18", exercise: "45° Back Extension", weight: null, sets: 1, reps: 6 }
  ],

  food: [],
  habits: []
};
