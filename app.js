const roleJourneys = [
  {
    id: "store-associate",
    title: "Store Associate Journey",
    description:
      "Build confidence using Microsoft Copilot for customer conversations, product knowledge, and faster daily execution.",
    jobAids: [
      "Copilot prompt starter: customer style + activity + weather.",
      "2-minute product comparison prompt for in-store recommendations.",
      "Daily opening checklist rewording template for team huddles."
    ],
    modules: [
      {
        id: "sa-1",
        title: "Copilot Basics for Frontline Work",
        summary:
          "Learn safe, practical prompts and when to use Copilot during a shift.",
        time: "15 min",
        mode: "Virtual",
        outcomes: [
          "Use context-rich prompts that include intent, audience, and constraints.",
          "Recognize when to verify Copilot output before sharing with customers.",
          "Save reusable prompts for repeat workflows."
        ],
        scenario:
          "A customer asks for a running shoe for flat feet, marathon training, and rainy conditions. Draft a Copilot prompt that produces a concise recommendation script.",
        quiz: {
          question:
            "Which prompt is most likely to return useful, role-specific output?",
          options: [
            "Tell me about shoes.",
            "Create a customer-friendly recommendation for a marathon runner with flat feet in rainy weather, compare top 3 options in 4 bullet points.",
            "What are the best products?"
          ],
          answerIndex: 1
        }
      },
      {
        id: "sa-2",
        title: "Scenario Practice: Customer Dialogues",
        summary:
          "Use scenario-based prompts to prepare for common sales floor interactions.",
        time: "20 min",
        mode: "Virtual + In-person",
        outcomes: [
          "Generate role-play scripts for difficult customer interactions.",
          "Use Copilot to simplify technical product details.",
          "Adapt tone for first-time vs experienced athletes."
        ],
        scenario:
          "An associate needs to explain cushioning differences without sounding overly technical. Use Copilot to create two scripts: beginner and expert.",
        quiz: {
          question:
            "Why is scenario-based prompting useful for enablement?",
          options: [
            "It creates generic scripts that can be copied everywhere.",
            "It mirrors real workflows and improves confidence before live situations.",
            "It removes the need for manager coaching."
          ],
          answerIndex: 1
        }
      },
      {
        id: "sa-3",
        title: "In-the-Flow Job Aids",
        summary:
          "Create quick reference assets and shift support content with Copilot.",
        time: "12 min",
        mode: "Self-paced",
        outcomes: [
          "Turn policy notes into one-page job aids.",
          "Draft shift recap templates for team handoff.",
          "Build reusable prompts for repetitive tasks."
        ],
        scenario:
          "Inventory process changed this week. Create a short job aid your team can reference during closing.",
        quiz: {
          question:
            "What is the best format for a shift-time job aid?",
          options: [
            "Long narrative with every policy detail.",
            "Short checklist with steps, owners, and exception notes.",
            "Open-ended memo with no task order."
          ],
          answerIndex: 1
        }
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
      "Prompt for rewriting system updates into plain-language coaching points.",
      "Coaching prep prompt for scenario-based huddles."
    ],
    modules: [
      {
        id: "tl-1",
        title: "Translating Workflow Changes into Training",
        summary:
          "Convert process changes into clear, practical coaching content.",
        time: "18 min",
        mode: "Facilitated",
        outcomes: [
          "Summarize system updates into role-based action items.",
          "Use Copilot to generate huddle discussion guides.",
          "Document adoption risks and mitigation plans."
        ],
        scenario:
          "A returns workflow changed. Draft coaching notes for new associates and experienced associates in separate sections.",
        quiz: {
          question:
            "What should be included when communicating a workflow update?",
          options: [
            "Only the system terminology.",
            "Role impact, key actions, and where to get support.",
            "A single broad announcement."
          ],
          answerIndex: 1
        }
      },
      {
        id: "tl-2",
        title: "Facilitation with Copilot",
        summary:
          "Use Copilot during live sessions to answer questions and tailor examples.",
        time: "15 min",
        mode: "Live Virtual",
        outcomes: [
          "Create role-play prompts during Q&A.",
          "Generate alternate examples for different learner levels.",
          "Capture session notes and action items efficiently."
        ],
        scenario:
          "During a virtual training, learners ask for an example specific to weekend traffic. Build it in Copilot and share quickly.",
        quiz: {
          question:
            "How does Copilot best support facilitation?",
          options: [
            "By replacing the facilitator.",
            "By generating relevant examples and follow-up materials in real time.",
            "By eliminating learner interaction."
          ],
          answerIndex: 1
        }
      },
      {
        id: "tl-3",
        title: "Measuring Adoption",
        summary:
          "Track confidence, usage, and consistency across the learning journey.",
        time: "14 min",
        mode: "Self-paced",
        outcomes: [
          "Define simple adoption metrics for team check-ins.",
          "Use Copilot to summarize qualitative feedback.",
          "Identify content to refresh based on recurring issues."
        ],
        scenario:
          "You received mixed feedback after launch. Use Copilot to group comments into themes and propose next actions.",
        quiz: {
          question:
            "Which metric best indicates practical adoption?",
          options: [
            "Number of slides shown in training.",
            "Consistent task execution with fewer support escalations.",
            "Total meeting length."
          ],
          answerIndex: 1
        }
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
      "Policy-to-checklist converter prompt for compliance updates."
    ],
    modules: [
      {
        id: "oa-1",
        title: "Copilot for Workflow Accuracy",
        summary:
          "Apply Copilot to reduce ambiguity in repeat operational tasks.",
        time: "16 min",
        mode: "Self-paced",
        outcomes: [
          "Build prompts that include process IDs and constraints.",
          "Generate exception handling notes.",
          "Create role-specific checklists for daily use."
        ],
        scenario:
          "A shipment exception appears in ERP. Use Copilot to draft a step-by-step response checklist for your role.",
        quiz: {
          question:
            "What makes an operational Copilot prompt high quality?",
          options: [
            "It is very short and generic.",
            "It includes process context, expected format, and constraints.",
            "It asks for as much unrelated detail as possible."
          ],
          answerIndex: 1
        }
      },
      {
        id: "oa-2",
        title: "Cross-Team Communication",
        summary:
          "Draft clear updates for store, logistics, and leadership partners.",
        time: "12 min",
        mode: "Virtual",
        outcomes: [
          "Rewrite technical details for different audiences.",
          "Generate concise updates with risks and dependencies.",
          "Produce follow-up actions and owners."
        ],
        scenario:
          "A delayed shipment impacts three stores. Draft an update for managers and a simplified version for frontline associates.",
        quiz: {
          question:
            "Why tailor Copilot output by audience?",
          options: [
            "Different teams need different levels of detail and action clarity.",
            "It is only useful for executives.",
            "Tailoring introduces unnecessary effort with no value."
          ],
          answerIndex: 0
        }
      },
      {
        id: "oa-3",
        title: "Continuous Improvement Loop",
        summary:
          "Capture lessons learned and refresh enablement assets over time.",
        time: "15 min",
        mode: "Facilitated",
        outcomes: [
          "Convert incident logs into training improvements.",
          "Update job aids from recurring support trends.",
          "Prioritize next enablement topics with data."
        ],
        scenario:
          "After rollout, one process step causes repeat errors. Use Copilot to draft an updated micro-learning and quick reference aid.",
        quiz: {
          question:
            "What is the best follow-up after repeated process errors?",
          options: [
            "Wait for the next quarter.",
            "Create targeted refresher training and updated job aid immediately.",
            "Ignore if the errors are minor."
          ],
          answerIndex: 1
        }
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
  dialogScenario: document.getElementById("dialog-scenario"),
  dialogQuestion: document.getElementById("dialog-question"),
  dialogOptions: document.getElementById("dialog-options"),
  dialogFeedback: document.getElementById("dialog-feedback"),
  jobAidsList: document.getElementById("job-aids-list"),
  associateName: document.getElementById("associate-name"),
  saveProfile: document.getElementById("save-profile")
};

const storageKey = "copilot-lms-state";

const defaultState = {
  associateName: "",
  selectedRoleId: roleJourneys[0].id,
  completedModules: {},
  quizScores: {}
};

let appState = loadState();

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

function getCurrentJourney() {
  return (
    roleJourneys.find((journey) => journey.id === appState.selectedRoleId) ||
    roleJourneys[0]
  );
}

function moduleIsComplete(moduleId) {
  return Boolean(appState.completedModules[moduleId]);
}

function markModuleComplete(moduleId) {
  appState.completedModules[moduleId] = true;
  saveState();
  render();
}

function updateQuizScore(moduleId, score) {
  appState.quizScores[moduleId] = score;
  saveState();
  updateStats();
}

function calcQuizAverage() {
  const currentJourney = getCurrentJourney();
  const scores = currentJourney.modules
    .map((module) => appState.quizScores[module.id])
    .filter((score) => typeof score === "number");

  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return Math.round(total / scores.length);
}

function updateStats() {
  const currentJourney = getCurrentJourney();
  const total = currentJourney.modules.length;
  const completed = currentJourney.modules.filter((module) =>
    moduleIsComplete(module.id)
  ).length;
  const progress = Math.round((completed / total) * 100);

  elements.completedCount.textContent = `${completed} / ${total}`;
  elements.progressPercent.textContent = `${progress}%`;
  elements.quizAverage.textContent = `${calcQuizAverage()}%`;
  elements.badgeStatus.textContent =
    progress === 100 ? "Journey Complete" : progress > 0 ? "In Progress" : "Not Started";
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
  elements.dialogTitle.textContent = module.title;
  elements.dialogSummary.textContent = module.summary;
  elements.dialogScenario.textContent = module.scenario;
  elements.dialogQuestion.textContent = module.quiz.question;
  elements.dialogFeedback.textContent = "";
  elements.dialogFeedback.className = "feedback";

  elements.dialogOutcomes.innerHTML = "";
  module.outcomes.forEach((outcome) => {
    const li = document.createElement("li");
    li.textContent = outcome;
    elements.dialogOutcomes.appendChild(li);
  });

  elements.dialogOptions.innerHTML = "";
  module.quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      const correct = index === module.quiz.answerIndex;
      elements.dialogFeedback.textContent = correct
        ? "Correct. Great workflow-focused choice."
        : "Not quite. Review the scenario and try again.";
      elements.dialogFeedback.className = `feedback ${correct ? "good" : "bad"}`;
      updateQuizScore(module.id, correct ? 100 : 0);
    });
    elements.dialogOptions.appendChild(button);
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
    const detailsButton = fragment.querySelector(".details-btn");
    const completeButton = fragment.querySelector(".complete-btn");

    title.textContent = module.title;
    summary.textContent = module.summary;
    time.textContent = module.time;
    mode.textContent = module.mode;

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

function render() {
  renderHeader();
  renderRoleButtons();
  renderJobAids();
  renderModules();
  updateStats();
}

elements.closeDialog.addEventListener("click", () => {
  elements.moduleDialog.close();
});

elements.saveProfile.addEventListener("click", () => {
  appState.associateName = elements.associateName.value.trim();
  saveState();
  render();
});

render();
