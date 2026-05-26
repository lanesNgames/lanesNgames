const roleJourneys = [
  {
    id: "store-associate",
    title: "Store Associate Journey",
    description:
      "Build confidence using Microsoft Copilot for customer conversations, product knowledge, and faster daily execution.",
    jobAids: [
      "Copilot prompt starter: customer profile + activity + weather + budget.",
      "2-minute product comparison prompt for in-store recommendations.",
      "Shift handoff template: wins, missed opportunities, follow-up tasks.",
      "Returns conversation script generator with policy-safe language.",
      "Opening and closing checklist simplifier for quick huddles."
    ],
    modules: [
      {
        id: "sa-1",
        title: "Copilot Basics for Frontline Work",
        summary:
          "Learn safe, practical prompts and when to use Copilot during a shift.",
        time: "18 min",
        mode: "Virtual",
        outcomes: [
          "Use context-rich prompts that include intent, audience, and constraints.",
          "Recognize when to verify Copilot output before sharing with customers.",
          "Save reusable prompts for repeat workflows."
        ],
        scenarios: [
          {
            id: "prompt-quality",
            title: "Scenario 1: Product recommendation prompt",
            context:
              "A customer is training for a half marathon and has mild overpronation. They also want something for wet-weather runs.",
            question:
              "Which prompt is most likely to produce a useful, role-specific recommendation script?",
            options: [
              "Tell me about running shoes.",
              "Create a concise recommendation script for a half-marathon runner with mild overpronation and rainy-weather needs. Include 3 options and one follow-up question to ask.",
              "What is your favorite shoe?"
            ],
            answerIndex: 1
          },
          {
            id: "safe-use",
            title: "Scenario 2: Verification in the flow of work",
            context:
              "Copilot gives a product feature claim you have not seen on the floor card.",
            question:
              "What is the best next step before using that claim with a customer?",
            options: [
              "Share it immediately to move the sale forward.",
              "Check trusted product sources or a manager, then use verified wording.",
              "Ignore Copilot forever."
            ],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sa-2",
        title: "Scenario Practice: Customer Dialogues",
        summary:
          "Use scenario-based prompts to prepare for common sales floor interactions.",
        time: "22 min",
        mode: "Virtual + In-person",
        outcomes: [
          "Generate role-play scripts for difficult customer interactions.",
          "Use Copilot to simplify technical product details.",
          "Adapt tone for first-time versus experienced athletes."
        ],
        scenarios: [
          {
            id: "tone-switch",
            title: "Scenario 1: Tone adaptation",
            context:
              "You need two scripts: one for a first-time runner and one for an experienced runner comparing cushioning technologies.",
            question:
              "Why is asking Copilot for audience-specific scripts valuable?",
            options: [
              "It helps tailor complexity and language to customer needs.",
              "It removes the need to listen to customers.",
              "It guarantees every customer wants the same recommendation."
            ],
            answerIndex: 0
          },
          {
            id: "objection-handling",
            title: "Scenario 2: Handling price objection",
            context:
              "A customer likes the recommended shoe but says the price feels high.",
            question:
              "What should your Copilot prompt include to generate a strong response script?",
            options: [
              "Only ask for a discount script.",
              "Ask for value framing, alternatives at lower price, and one clarifying question.",
              "Ask Copilot to pressure the customer."
            ],
            answerIndex: 1
          }
        ]
      },
      {
        id: "sa-3",
        title: "In-the-Flow Job Aids",
        summary:
          "Create quick reference assets and shift support content with Copilot.",
        time: "16 min",
        mode: "Self-paced",
        outcomes: [
          "Turn policy notes into one-page job aids.",
          "Draft shift recap templates for team handoff.",
          "Build reusable prompts for repetitive tasks."
        ],
        scenarios: [
          {
            id: "job-aid-format",
            title: "Scenario 1: Checklist quality",
            context:
              "Inventory process changed this week and teammates are missing a key step during closing.",
            question:
              "Which job aid format works best during a busy shift?",
            options: [
              "A long narrative explaining every edge case first.",
              "A short checklist with steps, owners, and escalation notes.",
              "A memo with no sequence."
            ],
            answerIndex: 1
          },
          {
            id: "handoff-consistency",
            title: "Scenario 2: Shift handoff consistency",
            context:
              "Different associates give uneven handoff notes, causing confusion for morning teams.",
            question:
              "What should Copilot generate to improve consistency?",
            options: [
              "A standardized handoff template with required fields.",
              "No written notes; rely on memory.",
              "A single sentence recap regardless of issues."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "sa-4",
        title: "Merchandising and Floor Readiness",
        summary:
          "Use Copilot to plan floor priorities, signage language, and recovery tasks.",
        time: "20 min",
        mode: "Facilitated",
        outcomes: [
          "Prioritize merchandising tasks based on traffic patterns.",
          "Draft concise, customer-friendly signage text.",
          "Build task blocks for floor recovery under time constraints."
        ],
        scenarios: [
          {
            id: "priority-order",
            title: "Scenario 1: Recovery priorities",
            context:
              "You have 30 minutes before peak traffic and several zones need recovery.",
            question:
              "Which Copilot output is most useful for immediate execution?",
            options: [
              "A ranked task list with estimated minutes and owner suggestions.",
              "A full history of all past floor changes.",
              "A generic paragraph about merchandising."
            ],
            answerIndex: 0
          },
          {
            id: "signage-clarity",
            title: "Scenario 2: Signage rewrite",
            context:
              "Current signage is too technical for first-time customers.",
            question:
              "What should you ask Copilot to optimize?",
            options: [
              "Use shorter wording, benefits-first phrasing, and plain language.",
              "Add more product jargon and abbreviations.",
              "Keep text long so customers read everything."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "sa-5",
        title: "Post-Shift Reflection and Development",
        summary:
          "Turn shift outcomes into learning moments and next-shift action plans.",
        time: "17 min",
        mode: "Self-paced",
        outcomes: [
          "Summarize wins and blockers with clear next actions.",
          "Use Copilot to draft coaching asks for supervisors.",
          "Build continuous-improvement habits from daily work."
        ],
        scenarios: [
          {
            id: "reflection-loop",
            title: "Scenario 1: Daily learning loop",
            context:
              "Your team missed add-on opportunities in two customer segments today.",
            question:
              "What is the strongest Copilot use after shift end?",
            options: [
              "Draft a reflection with segment-specific improvements and a plan for tomorrow.",
              "Ignore the issue and hope tomorrow is better.",
              "Write only sales totals with no context."
            ],
            answerIndex: 0
          },
          {
            id: "coaching-request",
            title: "Scenario 2: Manager coaching prep",
            context:
              "You want targeted coaching in greeting and discovery questions.",
            question:
              "Which output helps your manager coach you effectively?",
            options: [
              "A vague request to improve everything.",
              "A concise note with 2 observed gaps, 1 goal, and practice scenarios.",
              "No request; wait for annual review."
            ],
            answerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "team-lead",
    title: "Team Lead Journey",
    description:
      "Enable leads to coach associates, communicate updates, and drive adoption with practical Copilot workflows.",
    jobAids: [
      "Weekly enablement recap template: wins, blockers, support needed.",
      "Workflow update translator: system language to floor-ready coaching points.",
      "Coaching prep prompt for scenario-based huddles.",
      "Adoption pulse template: confidence, consistency, and escalation trends.",
      "Launch-day communications checklist across channels."
    ],
    modules: [
      {
        id: "tl-1",
        title: "Translating Workflow Changes into Training",
        summary:
          "Convert process changes into clear, practical coaching content.",
        time: "20 min",
        mode: "Facilitated",
        outcomes: [
          "Summarize system updates into role-based action items.",
          "Use Copilot to generate huddle discussion guides.",
          "Document adoption risks and mitigation plans."
        ],
        scenarios: [
          {
            id: "workflow-brief",
            title: "Scenario 1: Workflow briefing",
            context:
              "Returns workflow changed and associates are confused about exceptions.",
            question:
              "What should a lead ask Copilot to generate first?",
            options: [
              "A role-based quick brief with key actions, exceptions, and where to escalate.",
              "A full technical document copied directly from system notes.",
              "A generic motivational message only."
            ],
            answerIndex: 0
          },
          {
            id: "risk-framing",
            title: "Scenario 2: Adoption risk framing",
            context:
              "The update impacts peak-hour transactions.",
            question:
              "Which communication approach best reduces risk?",
            options: [
              "Share once in chat and assume adoption.",
              "Provide role impacts, examples, and a same-day practice scenario.",
              "Delay communication until issues appear."
            ],
            answerIndex: 1
          }
        ]
      },
      {
        id: "tl-2",
        title: "Facilitation with Copilot",
        summary:
          "Use Copilot during live sessions to answer questions and tailor examples.",
        time: "18 min",
        mode: "Live Virtual",
        outcomes: [
          "Create role-play prompts during Q&A.",
          "Generate alternate examples for different learner levels.",
          "Capture session notes and action items efficiently."
        ],
        scenarios: [
          {
            id: "live-questions",
            title: "Scenario 1: Real-time examples",
            context:
              "During virtual training, associates ask for examples specific to weekend traffic.",
            question:
              "How should Copilot support facilitation in this moment?",
            options: [
              "Generate role-specific examples and immediate follow-up practice prompts.",
              "Replace the facilitator and run the session alone.",
              "Postpone all questions until next week."
            ],
            answerIndex: 0
          },
          {
            id: "action-capture",
            title: "Scenario 2: Session follow-up",
            context:
              "You need to send clear recap notes with owners and due dates.",
            question:
              "What should your Copilot prompt request?",
            options: [
              "A recap grouped by theme, owner, and deadline with unresolved questions.",
              "A transcript dump with no structure.",
              "Only a thank-you message."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "tl-3",
        title: "Measuring Adoption",
        summary:
          "Track confidence, usage, and consistency across the learning journey.",
        time: "19 min",
        mode: "Self-paced",
        outcomes: [
          "Define simple adoption metrics for team check-ins.",
          "Use Copilot to summarize qualitative feedback.",
          "Identify content to refresh based on recurring issues."
        ],
        scenarios: [
          {
            id: "metric-choice",
            title: "Scenario 1: Metric selection",
            context:
              "Leadership asks if training worked after rollout.",
            question:
              "Which metric best reflects practical adoption?",
            options: [
              "Number of slides presented in class.",
              "Consistent task execution with fewer support escalations.",
              "Length of the kickoff meeting."
            ],
            answerIndex: 1
          },
          {
            id: "feedback-synthesis",
            title: "Scenario 2: Theme extraction",
            context:
              "You received mixed qualitative comments from multiple stores.",
            question:
              "How should Copilot help synthesize this feedback?",
            options: [
              "Cluster comments by theme and suggest targeted refresher actions.",
              "Average all comments into one sentence.",
              "Ignore comments and rely only on attendance."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "tl-4",
        title: "Coaching for Performance Gaps",
        summary:
          "Use Copilot to build focused coaching plans and practice routines.",
        time: "21 min",
        mode: "Facilitated + Self-paced",
        outcomes: [
          "Identify behavior-level gaps from observed workflows.",
          "Generate scenario practices aligned to specific needs.",
          "Track coaching impact over short learning cycles."
        ],
        scenarios: [
          {
            id: "gap-diagnosis",
            title: "Scenario 1: Diagnose root cause",
            context:
              "One team consistently misses escalation criteria even after training.",
            question:
              "Which Copilot output best supports next-step coaching?",
            options: [
              "A root-cause hypothesis map with observed behaviors and practice targets.",
              "A reminder to work harder.",
              "A generic policy summary."
            ],
            answerIndex: 0
          },
          {
            id: "practice-design",
            title: "Scenario 2: Practice structure",
            context:
              "You have 10 minutes in a huddle for skill reinforcement.",
            question:
              "What format should Copilot create?",
            options: [
              "One long lecture script.",
              "A micro-scenario, expected responses, and debrief prompts.",
              "No structure, open discussion only."
            ],
            answerIndex: 1
          }
        ]
      },
      {
        id: "tl-5",
        title: "Launch Readiness and Communications",
        summary:
          "Prepare launch messaging, manager alignment, and support plans for new initiatives.",
        time: "18 min",
        mode: "Virtual",
        outcomes: [
          "Sequence launch communication across stakeholder groups.",
          "Draft clear callouts for frontline and manager audiences.",
          "Build readiness checks and support channels."
        ],
        scenarios: [
          {
            id: "message-map",
            title: "Scenario 1: Audience mapping",
            context:
              "A new tool release affects frontline, supervisors, and support teams differently.",
            question:
              "What should your Copilot communication plan include?",
            options: [
              "One message for all audiences to save time.",
              "Audience-specific messages with role impact, timing, and action required.",
              "Only a technical change log."
            ],
            answerIndex: 1
          },
          {
            id: "readiness-check",
            title: "Scenario 2: Go-live readiness",
            context:
              "Launch is tomorrow and leads need confidence checks.",
            question:
              "Which checklist is most practical?",
            options: [
              "Completion of briefing, practice scenario, support contact, and escalation path.",
              "Just confirm everyone attended one meeting.",
              "Skip checks and react after launch."
            ],
            answerIndex: 0
          }
        ]
      }
    ]
  },
  {
    id: "operations-associate",
    title: "Operations Associate Journey",
    description:
      "Help operations teams use Copilot to execute accurate, timely workflows and improve communication consistency.",
    jobAids: [
      "Daily operations stand-up agenda generated from key blockers.",
      "Error-resolution prompt template for ERP/CRM task troubleshooting.",
      "Policy-to-checklist converter for compliance updates.",
      "Escalation-ready summary template with impact and urgency levels.",
      "Incident retrospective format for enablement improvements."
    ],
    modules: [
      {
        id: "oa-1",
        title: "Copilot for Workflow Accuracy",
        summary:
          "Apply Copilot to reduce ambiguity in repeat operational tasks.",
        time: "18 min",
        mode: "Self-paced",
        outcomes: [
          "Build prompts that include process IDs and constraints.",
          "Generate exception handling notes.",
          "Create role-specific checklists for daily use."
        ],
        scenarios: [
          {
            id: "prompt-precision",
            title: "Scenario 1: Precision prompt",
            context:
              "A shipment exception appears in ERP and resolution steps vary by channel.",
            question:
              "What makes your Copilot prompt high quality for this task?",
            options: [
              "It includes process context, expected format, and constraints.",
              "It is broad and asks Copilot to guess.",
              "It asks for unrelated historical details."
            ],
            answerIndex: 0
          },
          {
            id: "verification-step",
            title: "Scenario 2: Verification discipline",
            context:
              "Copilot returns a sequence that conflicts with yesterday's documented SOP.",
            question:
              "What is the correct action?",
            options: [
              "Follow Copilot anyway to save time.",
              "Validate against current SOP/SME guidance, then update aid if needed.",
              "Stop using SOPs completely."
            ],
            answerIndex: 1
          }
        ]
      },
      {
        id: "oa-2",
        title: "Cross-Team Communication",
        summary:
          "Draft clear updates for store, logistics, and leadership partners.",
        time: "15 min",
        mode: "Virtual",
        outcomes: [
          "Rewrite technical details for different audiences.",
          "Generate concise updates with risks and dependencies.",
          "Produce follow-up actions and owners."
        ],
        scenarios: [
          {
            id: "audience-adjustment",
            title: "Scenario 1: Audience-specific messaging",
            context:
              "A delayed shipment impacts three stores and one wholesale partner.",
            question:
              "Why tailor Copilot output by audience?",
            options: [
              "Different teams need different levels of detail and action clarity.",
              "Only executives should receive updates.",
              "Tailoring adds no operational value."
            ],
            answerIndex: 0
          },
          {
            id: "action-clarity",
            title: "Scenario 2: Owner clarity",
            context:
              "Teams report confusion because updates do not specify owners.",
            question:
              "What should Copilot produce in each update?",
            options: [
              "Owner, due time, dependency, and escalation point.",
              "A general status statement without names.",
              "A long appendix before action items."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "oa-3",
        title: "Continuous Improvement Loop",
        summary:
          "Capture lessons learned and refresh enablement assets over time.",
        time: "17 min",
        mode: "Facilitated",
        outcomes: [
          "Convert incident logs into training improvements.",
          "Update job aids from recurring support trends.",
          "Prioritize next enablement topics with data."
        ],
        scenarios: [
          {
            id: "error-patterns",
            title: "Scenario 1: Pattern analysis",
            context:
              "One process step causes repeated errors across locations.",
            question:
              "What is the best Copilot-assisted response?",
            options: [
              "Create targeted refresher training and an updated quick-reference aid.",
              "Wait for quarterly planning.",
              "Assume the issue will self-correct."
            ],
            answerIndex: 0
          },
          {
            id: "priority-ranking",
            title: "Scenario 2: Improvement prioritization",
            context:
              "You have ten improvement ideas but limited enablement capacity.",
            question:
              "How should Copilot help rank priorities?",
            options: [
              "Sort by impact frequency, business risk, and implementation effort.",
              "Pick randomly to move faster.",
              "Prioritize the longest idea list first."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "oa-4",
        title: "Exception Management and Escalation",
        summary:
          "Use Copilot to triage incidents quickly and route escalations correctly.",
        time: "20 min",
        mode: "Facilitated + Virtual",
        outcomes: [
          "Classify incident severity with clear criteria.",
          "Draft escalation summaries for fast decision-making.",
          "Reduce handoff friction during high-pressure periods."
        ],
        scenarios: [
          {
            id: "severity-triage",
            title: "Scenario 1: Severity triage",
            context:
              "A system issue affects order confirmations in multiple regions.",
            question:
              "What should Copilot include in a triage output?",
            options: [
              "Severity level, impacted processes, current workaround, and next checkpoint.",
              "Only technical logs.",
              "A high-level note with no urgency guidance."
            ],
            answerIndex: 0
          },
          {
            id: "exec-summary",
            title: "Scenario 2: Escalation summary",
            context:
              "Leadership needs a one-minute readout for action.",
            question:
              "Which summary structure is best?",
            options: [
              "Issue, impact, actions taken, decision needed, and owner.",
              "Raw message history copied from chat.",
              "A long narrative without decisions."
            ],
            answerIndex: 0
          }
        ]
      },
      {
        id: "oa-5",
        title: "SOP and Compliance Enablement",
        summary:
          "Convert policy updates into usable SOPs and micro-learning assets.",
        time: "19 min",
        mode: "Self-paced",
        outcomes: [
          "Transform policy language into role-ready SOP checklists.",
          "Create micro-learning refreshers tied to compliance risk points.",
          "Maintain current documentation with version clarity."
        ],
        scenarios: [
          {
            id: "policy-conversion",
            title: "Scenario 1: Policy to SOP conversion",
            context:
              "A compliance update is dense and difficult for associates to apply.",
            question:
              "What should Copilot generate first?",
            options: [
              "A step-by-step SOP with role responsibilities and validation checks.",
              "A verbatim copy of legal text.",
              "A short motivational quote."
            ],
            answerIndex: 0
          },
          {
            id: "version-control",
            title: "Scenario 2: Documentation currency",
            context:
              "Teams are using outdated reference sheets from prior launches.",
            question:
              "What is the best enablement response?",
            options: [
              "Add version/date labels and replace old materials with a launch note.",
              "Keep all versions visible and let teams choose.",
              "Only update documents annually."
            ],
            answerIndex: 0
          }
        ]
      }
    ]
  }
];

const elements = {
  roleButtons: document.getElementById("role-buttons"),
  moduleList: document.getElementById("module-list"),
  completedCount: document.getElementById("completed-count"),
  progressPercent: document.getElementById("progress-percent"),
  quizAverage: document.getElementById("quiz-average"),
  journeyTitle: document.getElementById("journey-title"),
  journeyDescription: document.getElementById("journey-description"),
  badgeStatus: document.getElementById("badge-status"),
  moduleTemplate: document.getElementById("module-template"),
  moduleDialog: document.getElementById("module-dialog"),
  closeDialog: document.getElementById("close-dialog"),
  dialogTitle: document.getElementById("dialog-title"),
  dialogSummary: document.getElementById("dialog-summary"),
  dialogOutcomes: document.getElementById("dialog-outcomes"),
  dialogScenarios: document.getElementById("dialog-scenarios"),
  jobAidsList: document.getElementById("job-aids-list"),
  associateName: document.getElementById("associate-name"),
  saveProfile: document.getElementById("save-profile"),
  downloadCertificate: document.getElementById("download-certificate"),
  managerLearners: document.getElementById("manager-learners"),
  managerCompletion: document.getElementById("manager-completion"),
  managerCompleted: document.getElementById("manager-completed"),
  managerTableBody: document.getElementById("manager-table-body")
};

const storageKey = "copilot-lms-state";
const learnerRecordsKey = "copilot-lms-learners";

const defaultState = {
  associateName: "",
  selectedRoleId: roleJourneys[0].id,
  completedModules: {},
  quizScores: {}
};

let appState = loadState();
let learnerRecords = loadLearnerRecords();

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return { ...defaultState };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      completedModules: parsed.completedModules || {},
      quizScores: parsed.quizScores || {}
    };
  } catch (_error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function loadLearnerRecords() {
  const raw = localStorage.getItem(learnerRecordsKey);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function saveLearnerRecords() {
  localStorage.setItem(learnerRecordsKey, JSON.stringify(learnerRecords));
}

function getCurrentJourney() {
  return (
    roleJourneys.find((journey) => journey.id === appState.selectedRoleId) ||
    roleJourneys[0]
  );
}

function moduleIsComplete(moduleId) {
  return Boolean(appState.completedModules[moduleId]);
}

function getJourneyById(roleId) {
  return roleJourneys.find((journey) => journey.id === roleId) || roleJourneys[0];
}

function getModuleScenarios(module) {
  if (Array.isArray(module.scenarios)) {
    return module.scenarios;
  }

  if (module.scenario && module.quiz) {
    return [
      {
        id: "legacy-check",
        title: "Scenario challenge",
        context: module.scenario,
        question: module.quiz.question,
        options: module.quiz.options,
        answerIndex: module.quiz.answerIndex
      }
    ];
  }

  return [];
}

function getScenarioScoreKey(moduleId, scenarioId) {
  return `${moduleId}::${scenarioId}`;
}

function getJourneyStats(roleId = appState.selectedRoleId) {
  const journey = getJourneyById(roleId);
  const total = journey.modules.length;
  const completed = journey.modules.filter((module) =>
    Boolean(appState.completedModules[module.id])
  ).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  const scores = journey.modules
    .flatMap((module) =>
      getModuleScenarios(module).map((scenario) =>
        appState.quizScores[getScenarioScoreKey(module.id, scenario.id)]
      )
    )
    .filter((score) => typeof score === "number");
  const quizAverage = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
    : 0;

  return { journey, total, completed, progress, quizAverage };
}

function normalizeName(value) {
  return value.trim().toLowerCase();
}

function buildLearnerRecordKey(name, roleId) {
  return `${normalizeName(name)}::${roleId}`;
}

function syncCurrentLearnerRecord() {
  const associateName = appState.associateName.trim();
  if (!associateName) {
    return;
  }

  const stats = getJourneyStats(appState.selectedRoleId);
  const key = buildLearnerRecordKey(associateName, appState.selectedRoleId);

  learnerRecords[key] = {
    associateName,
    roleId: appState.selectedRoleId,
    roleTitle: stats.journey.title.replace(" Journey", ""),
    completed: stats.completed,
    total: stats.total,
    progress: stats.progress,
    quizAverage: stats.quizAverage,
    lastUpdated: new Date().toISOString()
  };

  saveLearnerRecords();
}

function markModuleComplete(moduleId) {
  appState.completedModules[moduleId] = true;
  saveState();
  syncCurrentLearnerRecord();
  render();
}

function updateQuizScore(moduleId, scenarioId, score) {
  appState.quizScores[getScenarioScoreKey(moduleId, scenarioId)] = score;
  saveState();
  syncCurrentLearnerRecord();
  updateStats();
  renderManagerDashboard();
}

function updateStats() {
  const currentStats = getJourneyStats();

  elements.completedCount.textContent = `${currentStats.completed} / ${currentStats.total}`;
  elements.progressPercent.textContent = `${currentStats.progress}%`;
  elements.quizAverage.textContent = `${currentStats.quizAverage}%`;
  elements.badgeStatus.textContent =
    currentStats.progress === 100
      ? "Journey Complete"
      : currentStats.progress > 0
        ? "In Progress"
        : "Not Started";

  const canDownload =
    currentStats.progress === 100 && appState.associateName.trim().length > 0;
  elements.downloadCertificate.disabled = !canDownload;
}

function renderRoleButtons() {
  elements.roleButtons.innerHTML = "";

  roleJourneys.forEach((journey) => {
    const button = document.createElement("button");
    button.className = "role-btn";
    if (journey.id === appState.selectedRoleId) {
      button.classList.add("active");
    }
    button.textContent = journey.title.replace(" Journey", "");
    button.addEventListener("click", () => {
      syncCurrentLearnerRecord();
      appState.selectedRoleId = journey.id;
      saveState();
      render();
    });
    elements.roleButtons.appendChild(button);
  });
}

function renderJobAids() {
  const currentJourney = getCurrentJourney();
  elements.jobAidsList.innerHTML = "";

  currentJourney.jobAids.forEach((aid) => {
    const li = document.createElement("li");
    li.textContent = aid;
    elements.jobAidsList.appendChild(li);
  });
}

function openModuleDialog(module) {
  const scenarios = getModuleScenarios(module);
  elements.dialogTitle.textContent = module.title;
  elements.dialogSummary.textContent = module.summary;

  elements.dialogOutcomes.innerHTML = "";
  module.outcomes.forEach((outcome) => {
    const li = document.createElement("li");
    li.textContent = outcome;
    elements.dialogOutcomes.appendChild(li);
  });

  elements.dialogScenarios.innerHTML = "";

  scenarios.forEach((scenario, scenarioIndex) => {
    const container = document.createElement("article");
    container.className = "scenario-card";

    const title = document.createElement("p");
    title.className = "scenario-title";
    title.textContent = scenario.title || `Scenario ${scenarioIndex + 1}`;
    container.appendChild(title);

    const context = document.createElement("p");
    context.className = "scenario-context";
    context.textContent = scenario.context;
    container.appendChild(context);

    const question = document.createElement("p");
    question.className = "scenario-question";
    question.textContent = scenario.question;
    container.appendChild(question);

    const options = document.createElement("div");
    options.className = "button-group stacked";

    const feedback = document.createElement("p");
    feedback.className = "feedback";

    const existingScore =
      appState.quizScores[getScenarioScoreKey(module.id, scenario.id)];
    if (existingScore === 100) {
      feedback.textContent = "Previously answered correctly.";
      feedback.className = "feedback good";
    } else if (existingScore === 0) {
      feedback.textContent = "Previously answered incorrectly. Try again.";
      feedback.className = "feedback bad";
    }

    scenario.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        const correct = optionIndex === scenario.answerIndex;
        feedback.textContent = correct
          ? "Correct. Great workflow-focused choice."
          : "Not quite. Review the scenario and try again.";
        feedback.className = `feedback ${correct ? "good" : "bad"}`;
        updateQuizScore(module.id, scenario.id, correct ? 100 : 0);
      });
      options.appendChild(button);
    });

    container.appendChild(options);
    container.appendChild(feedback);
    elements.dialogScenarios.appendChild(container);
  });

  elements.moduleDialog.showModal();
}

function renderModules() {
  const currentJourney = getCurrentJourney();
  elements.moduleList.innerHTML = "";

  currentJourney.modules.forEach((module) => {
    const fragment = elements.moduleTemplate.content.cloneNode(true);
    const container = fragment.querySelector(".module-item");
    const title = fragment.querySelector(".module-title");
    const summary = fragment.querySelector(".module-summary");
    const time = fragment.querySelector(".module-time");
    const mode = fragment.querySelector(".module-mode");
    const metaRow = fragment.querySelector(".meta-row");
    const detailsButton = fragment.querySelector(".details-btn");
    const completeButton = fragment.querySelector(".complete-btn");
    const scenarioCount = getModuleScenarios(module).length;

    title.textContent = module.title;
    summary.textContent = module.summary;
    time.textContent = module.time;
    mode.textContent = module.mode;
    if (scenarioCount > 0) {
      const scenarioPill = document.createElement("span");
      scenarioPill.className = "pill";
      scenarioPill.textContent = `${scenarioCount} scenarios`;
      metaRow.appendChild(scenarioPill);
    }

    if (moduleIsComplete(module.id)) {
      container.classList.add("completed");
      completeButton.textContent = "Completed";
      completeButton.disabled = true;
    }

    detailsButton.addEventListener("click", () => openModuleDialog(module));
    completeButton.addEventListener("click", () => markModuleComplete(module.id));

    elements.moduleList.appendChild(fragment);
  });
}

function renderHeader() {
  const currentJourney = getCurrentJourney();
  elements.journeyTitle.textContent = currentJourney.title;
  elements.journeyDescription.textContent = currentJourney.description;
  elements.associateName.value = appState.associateName;
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function renderManagerDashboard() {
  const records = Object.values(learnerRecords)
    .filter((record) => Boolean(record))
    .sort((a, b) =>
      String(b.lastUpdated || "").localeCompare(String(a.lastUpdated || ""))
    );

  const totalLearners = records.length;
  const avgCompletion = totalLearners
    ? Math.round(
      records.reduce((sum, record) => sum + record.progress, 0) / totalLearners
    )
    : 0;
  const completedJourneys = records.filter((record) => record.progress === 100).length;

  elements.managerLearners.textContent = `${totalLearners}`;
  elements.managerCompletion.textContent = `${avgCompletion}%`;
  elements.managerCompleted.textContent = `${completedJourneys}`;

  elements.managerTableBody.innerHTML = "";

  if (records.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No learner records yet. Save profiles and complete modules to populate this report.";
    row.appendChild(cell);
    elements.managerTableBody.appendChild(row);
    return;
  }

  records.forEach((record) => {
    const row = document.createElement("tr");
    const safeAssociate = record.associateName || "Unknown";
    const safeRole = record.roleTitle || "Unknown";
    const safeProgress = Number.isFinite(record.progress) ? record.progress : 0;
    const safeCompleted = Number.isFinite(record.completed) ? record.completed : 0;
    const safeTotal = Number.isFinite(record.total) ? record.total : 0;
    const safeQuiz = Number.isFinite(record.quizAverage) ? record.quizAverage : 0;

    const associateCell = document.createElement("td");
    associateCell.textContent = safeAssociate;
    row.appendChild(associateCell);

    const roleCell = document.createElement("td");
    roleCell.textContent = safeRole;
    row.appendChild(roleCell);

    const progressCell = document.createElement("td");
    progressCell.textContent = `${safeProgress}% (${safeCompleted}/${safeTotal})`;
    row.appendChild(progressCell);

    const quizCell = document.createElement("td");
    quizCell.textContent = `${safeQuiz}%`;
    row.appendChild(quizCell);

    const updatedCell = document.createElement("td");
    updatedCell.textContent = formatTimestamp(record.lastUpdated);
    row.appendChild(updatedCell);

    elements.managerTableBody.appendChild(row);
  });
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function downloadCertificate() {
  const stats = getJourneyStats();
  const associateName = appState.associateName.trim();

  if (!associateName || stats.progress < 100) {
    return;
  }

  const roleLabel = stats.journey.title.replace(" Journey", "");
  const issuedOn = new Date();
  const issuedLabel = issuedOn.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const certId = `CC-${issuedOn.getTime().toString().slice(-8)}`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1000" viewBox="0 0 1400 1000">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7fbff" />
      <stop offset="100%" stop-color="#edf3ff" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="1400" height="1000" fill="url(#bg)" />
  <rect x="45" y="45" width="1310" height="910" fill="none" stroke="#16385f" stroke-width="4" />
  <rect x="70" y="70" width="1260" height="860" fill="none" stroke="#7f95b6" stroke-width="2" />
  <text x="700" y="180" text-anchor="middle" font-size="28" fill="#2b4365" font-family="Arial">Copilot Coach LMS</text>
  <text x="700" y="260" text-anchor="middle" font-size="54" fill="#122840" font-weight="700" font-family="Arial">Certificate of Completion</text>
  <text x="700" y="355" text-anchor="middle" font-size="28" fill="#2f4f77" font-family="Arial">This certifies that</text>
  <text x="700" y="440" text-anchor="middle" font-size="64" fill="#0b2746" font-weight="700" font-family="Arial">${escapeXml(associateName)}</text>
  <line x1="340" y1="460" x2="1060" y2="460" stroke="#7f95b6" stroke-width="2" />
  <text x="700" y="545" text-anchor="middle" font-size="29" fill="#2f4f77" font-family="Arial">has successfully completed the role-based journey</text>
  <text x="700" y="610" text-anchor="middle" font-size="40" fill="#16385f" font-weight="700" font-family="Arial">${escapeXml(roleLabel)}</text>
  <text x="700" y="665" text-anchor="middle" font-size="24" fill="#2f4f77" font-family="Arial">Microsoft Copilot Associate Enablement Program</text>
  <text x="220" y="810" font-size="22" fill="#233f5f" font-family="Arial">Issued: ${escapeXml(issuedLabel)}</text>
  <text x="220" y="860" font-size="22" fill="#233f5f" font-family="Arial">Certificate ID: ${escapeXml(certId)}</text>
  <text x="1025" y="810" text-anchor="middle" font-size="22" fill="#233f5f" font-family="Arial">Training &amp; Enablement</text>
  <line x1="900" y1="825" x2="1150" y2="825" stroke="#6b87ad" stroke-width="2" />
  <text x="1025" y="860" text-anchor="middle" font-size="18" fill="#46638a" font-family="Arial">Copilot Coach Program Lead</text>
</svg>`;

  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const fileName = `copilot-certificate-${slugify(associateName)}-${stats.journey.id}.svg`;

  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
}

function render() {
  renderHeader();
  renderRoleButtons();
  renderJobAids();
  renderModules();
  updateStats();
  renderManagerDashboard();
}

elements.closeDialog.addEventListener("click", () => {
  elements.moduleDialog.close();
});

elements.saveProfile.addEventListener("click", () => {
  appState.associateName = elements.associateName.value.trim();
  saveState();
  syncCurrentLearnerRecord();
  render();
});

elements.downloadCertificate.addEventListener("click", downloadCertificate);

render();
