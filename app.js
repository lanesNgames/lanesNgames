const trailStops = [
  {
    id: "trailhead",
    icon: "1",
    title: "Trailhead: Reset the Launch",
    duration: "8 min",
    badge: "Go-live clarity",
    summary:
      "Create a shared starting point for a tool that rolled out without a clear launch moment.",
    lessons: [
      "Explain why the reset matters: budget errors, inconsistent work, and low confidence.",
      "Name the standard process as the safest route through the forecast cycle.",
      "Invite learners to choose one role-specific behavior they will practice this week."
    ],
    scenario:
      "Your team says, 'We already started using the tool months ago, so why are we launching training now?'",
    options: [
      {
        label:
          "Frame the trail as a reset: same tool, now one standard route with coaching and checkpoints.",
        correct: true,
        supplies: { confidence: 12, standard: 12, support: 6 },
        feedback:
          "Correct. Adults need the reason, the standard, and the support path before they change habits."
      },
      {
        label: "Tell the team to read the old rollout emails and move on.",
        correct: false,
        supplies: { confidence: -8, support: -6 },
        feedback:
          "That keeps the old confusion alive. The reset needs a clear purpose and visible leader support."
      },
      {
        label: "Skip context and only show button clicks in the system.",
        correct: false,
        supplies: { standard: -8, accuracy: -5 },
        feedback:
          "Tool steps matter, but behavior change starts with why the standard process matters."
      }
    ]
  },
  {
    id: "river-crossing",
    icon: "2",
    title: "River Crossing: Standard Forecast Flow",
    duration: "14 min",
    badge: "Process adherence",
    summary:
      "Practice the same sequence every team should follow before forecast submission.",
    lessons: [
      "Enter assumptions before numbers so reviewers know why the forecast changed.",
      "Use required fields and naming conventions before routing for approval.",
      "Confirm handoffs in the tool instead of side-channel messages."
    ],
    scenario:
      "A budget owner wants to submit a forecast quickly and add assumptions later because the deadline is close.",
    options: [
      {
        label:
          "Coach them to document assumptions first, then submit through the standard approval path.",
        correct: true,
        supplies: { standard: 16, accuracy: 12 },
        feedback:
          "Correct. This protects the downstream review and reduces rework caused by missing context."
      },
      {
        label: "Approve the shortcut because the numbers can be fixed later.",
        correct: false,
        supplies: { accuracy: -14, standard: -12 },
        feedback:
          "Shortcuts create the budget issues the training is designed to prevent."
      },
      {
        label: "Ask them to email the assumptions to finance after submission.",
        correct: false,
        supplies: { standard: -10, support: -4 },
        feedback:
          "Email creates a second source of truth. The trail route keeps the work inside the tool."
      }
    ]
  },
  {
    id: "supply-fort",
    icon: "3",
    title: "Supply Fort: Role-Based Job Aids",
    duration: "12 min",
    badge: "New-user support",
    summary:
      "Give new and existing users the exact aids they need at the moment of work.",
    lessons: [
      "Use one-page role guides instead of a long generic manual.",
      "Build checklists for planners, budget owners, approvers, and leaders.",
      "Place aids near the task: inside meetings, reminders, and team channels."
    ],
    scenario:
      "A new planner joins mid-cycle and asks where to learn the forecasting process.",
    options: [
      {
        label:
          "Point them to the role guide, then pair them with a trail buddy for the first submission.",
        correct: true,
        supplies: { support: 14, confidence: 12, standard: 8 },
        feedback:
          "Correct. New users need simple aids plus social reinforcement during real work."
      },
      {
        label: "Send the full system documentation and ask them to self-study.",
        correct: false,
        supplies: { confidence: -10, support: -6 },
        feedback:
          "That overloads the learner. Enablement should reduce friction and focus on the top tasks."
      },
      {
        label: "Have them watch a recording after the cycle closes.",
        correct: false,
        supplies: { standard: -6, accuracy: -8 },
        feedback:
          "Delayed support misses the moment when behavior is formed."
      }
    ]
  },
  {
    id: "mountain-pass",
    icon: "4",
    title: "Mountain Pass: Exception Decisions",
    duration: "15 min",
    badge: "Budget accuracy",
    summary:
      "Handle edge cases without creating hidden workarounds or budget risk.",
    lessons: [
      "Recognize high-risk changes that need review before submission.",
      "Use the exception path when the standard route does not fit.",
      "Capture decision rationale so teams can learn from recurring issues."
    ],
    scenario:
      "A late vendor change shifts spend into a different quarter. The team is unsure whether to adjust forecast assumptions or escalate.",
    options: [
      {
        label:
          "Use the exception checklist, document the impact, and escalate through the named reviewer.",
        correct: true,
        supplies: { accuracy: 18, standard: 10, support: 8 },
        feedback:
          "Correct. The exception route keeps flexibility without losing control."
      },
      {
        label: "Change the numbers quietly so the total still looks close.",
        correct: false,
        supplies: { accuracy: -18, standard: -14 },
        feedback:
          "Hidden edits are a major budget-risk behavior and should trigger coaching."
      },
      {
        label: "Wait until next month to explain the variance.",
        correct: false,
        supplies: { accuracy: -12, confidence: -6 },
        feedback:
          "The issue needs timely documentation and escalation while decisions are still useful."
      }
    ]
  },
  {
    id: "oregon-city",
    icon: "5",
    title: "Oregon City: Reinforce and Measure",
    duration: "10 min",
    badge: "Behavior change",
    summary:
      "Sustain adoption with manager routines and metrics that prove the process is changing.",
    lessons: [
      "Coach from observed behavior: missing assumptions, skipped approvals, or repeat rework.",
      "Track engagement, decision quality, process adherence, and business outcomes together.",
      "Celebrate trail champions who model the standard route for peers."
    ],
    scenario:
      "Leaders ask if training worked. Attendance was high, but budget rework is still appearing in two teams.",
    options: [
      {
        label:
          "Compare completion, scenario scores, process audit data, and rework trends by team.",
        correct: true,
        supplies: { standard: 14, accuracy: 12, support: 10, confidence: 8 },
        feedback:
          "Correct. Success is behavior change over time, not just content consumption."
      },
      {
        label: "Report only the number of people who attended training.",
        correct: false,
        supplies: { standard: -8, support: -6 },
        feedback:
          "Attendance is only a leading indicator. It does not prove process adherence."
      },
      {
        label: "Assume the tool is the issue and pause reinforcement.",
        correct: false,
        supplies: { confidence: -8, accuracy: -8 },
        feedback:
          "The data should separate tool issues from behavior gaps before changing direction."
      }
    ]
  }
];

const roleGuides = {
  planner: {
    label: "Forecast Planner",
    focus: "assumptions, variance notes, and submission quality"
  },
  owner: {
    label: "Budget Owner",
    focus: "timely inputs, documented decisions, and handoff discipline"
  },
  approver: {
    label: "Approver",
    focus: "review consistency, exception judgment, and escalation clarity"
  },
  leader: {
    label: "Team Leader",
    focus: "reinforcement routines, coaching moments, and adoption measurement"
  }
};

const storageKey = "forecast-trail-state-v1";
const defaultSupplies = {
  confidence: 40,
  accuracy: 30,
  standard: 25,
  support: 35
};
const defaultState = {
  travelerName: "",
  role: "planner",
  completedStops: [],
  choices: {},
  supplies: { ...defaultSupplies },
  visits: 1
};

const elements = {
  travelerName: document.getElementById("traveler-name"),
  travelerRole: document.getElementById("traveler-role"),
  savePassport: document.getElementById("save-passport"),
  passportFeedback: document.getElementById("passport-feedback"),
  confidence: document.getElementById("supply-confidence"),
  accuracy: document.getElementById("supply-accuracy"),
  standard: document.getElementById("supply-standard"),
  support: document.getElementById("supply-support"),
  progressTitle: document.getElementById("progress-title"),
  progressPercent: document.getElementById("progress-percent"),
  trailStopList: document.getElementById("trail-stop-list"),
  metricCompletion: document.getElementById("metric-completion"),
  metricDecision: document.getElementById("metric-decision"),
  metricBehavior: document.getElementById("metric-behavior"),
  metricRisk: document.getElementById("metric-risk"),
  stopDialog: document.getElementById("stop-dialog"),
  closeDialog: document.getElementById("close-dialog"),
  dialogKicker: document.getElementById("dialog-kicker"),
  dialogTitle: document.getElementById("dialog-title"),
  dialogSummary: document.getElementById("dialog-summary"),
  dialogLessons: document.getElementById("dialog-lessons"),
  dialogScenario: document.getElementById("dialog-scenario"),
  dialogOptions: document.getElementById("dialog-options"),
  choiceFeedback: document.getElementById("choice-feedback")
};

let state = loadState();
let activeStopId = null;

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return { ...defaultState, supplies: { ...defaultSupplies } };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      completedStops: Array.isArray(parsed.completedStops)
        ? parsed.completedStops
        : [],
      choices:
        parsed.choices && typeof parsed.choices === "object"
          ? parsed.choices
          : {},
      supplies: {
        ...defaultSupplies,
        ...(parsed.supplies || {})
      },
      visits: Number.isFinite(parsed.visits) ? parsed.visits + 1 : 1
    };
  } catch (_error) {
    return { ...defaultState, supplies: { ...defaultSupplies } };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function clampSupply(value) {
  return Math.max(0, Math.min(100, value));
}

function recalculateSupplies() {
  const supplies = { ...defaultSupplies };

  Object.entries(state.choices).forEach(([stopId, choiceIndex]) => {
    const stop = trailStops.find((trailStop) => trailStop.id === stopId);
    const choice = stop ? stop.options[choiceIndex] : null;

    if (!choice) {
      return;
    }

    Object.entries(choice.supplies).forEach(([key, value]) => {
      supplies[key] = clampSupply((supplies[key] || 0) + value);
    });
  });

  state.supplies = supplies;
}

function stopIsComplete(stopId) {
  return state.completedStops.includes(stopId);
}

function stopIsUnlocked(index) {
  if (index === 0) {
    return true;
  }

  return stopIsComplete(trailStops[index - 1].id);
}

function selectedChoice(stopId) {
  return state.choices[stopId];
}

function countCorrectChoices() {
  return trailStops.reduce((count, stop) => {
    const choiceIndex = selectedChoice(stop.id);
    const choice = stop.options[choiceIndex];
    return choice && choice.correct ? count + 1 : count;
  }, 0);
}

function calculateProgress() {
  return Math.round((state.completedStops.length / trailStops.length) * 100);
}

function calculateDecisionQuality() {
  const answeredStops = trailStops.filter((stop) =>
    Number.isInteger(selectedChoice(stop.id))
  );

  if (answeredStops.length === 0) {
    return 0;
  }

  return Math.round((countCorrectChoices() / answeredStops.length) * 100);
}

function calculateBehaviorScore() {
  const supplyAverage = Math.round(
    (state.supplies.confidence +
      state.supplies.accuracy +
      state.supplies.standard +
      state.supplies.support) /
      4
  );
  return Math.round((calculateProgress() + calculateDecisionQuality() + supplyAverage) / 3);
}

function adoptionRiskLabel() {
  const progress = calculateProgress();
  const decision = calculateDecisionQuality();
  const behavior = calculateBehaviorScore();

  if (progress >= 80 && decision >= 80 && behavior >= 75) {
    return "Low";
  }

  if (progress >= 40 && decision >= 60 && behavior >= 55) {
    return "Medium";
  }

  return "High";
}

function renderPassport() {
  elements.travelerName.value = state.travelerName;
  elements.travelerRole.value = state.role;

  const role = roleGuides[state.role] || roleGuides.planner;
  elements.passportFeedback.textContent = state.travelerName
    ? `${state.travelerName} is traveling as ${role.label}, focused on ${role.focus}.`
    : "Stamp your passport to personalize the journey.";
}

function renderSupplies() {
  elements.confidence.textContent = state.supplies.confidence;
  elements.accuracy.textContent = state.supplies.accuracy;
  elements.standard.textContent = state.supplies.standard;
  elements.support.textContent = state.supplies.support;
}

function renderProgress() {
  const progress = calculateProgress();
  elements.progressTitle.textContent = `${state.completedStops.length} of ${trailStops.length} trail stops complete`;
  elements.progressPercent.textContent = `${progress}%`;
  elements.progressPercent.parentElement.style.setProperty(
    "--progress",
    `${progress * 3.6}deg`
  );
}

function renderTrailStops() {
  elements.trailStopList.innerHTML = "";

  trailStops.forEach((stop, index) => {
    const unlocked = stopIsUnlocked(index);
    const complete = stopIsComplete(stop.id);
    const choiceIndex = selectedChoice(stop.id);
    const hasChoice = Number.isInteger(choiceIndex);

    const wrapper = document.createElement("article");
    wrapper.className = `trail-stop${complete ? " completed" : ""}`;

    const marker = document.createElement("div");
    marker.className = "marker";
    marker.textContent = complete ? "✓" : stop.icon;
    wrapper.appendChild(marker);

    const card = document.createElement("div");
    card.className = `trail-stop-card${unlocked ? "" : " locked"}`;

    const header = document.createElement("header");
    const titleGroup = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = stop.title;
    const summary = document.createElement("p");
    summary.textContent = stop.summary;
    titleGroup.append(title, summary);

    const badge = document.createElement("span");
    badge.className = "tag";
    badge.textContent = complete ? "Stamped" : unlocked ? "Open" : "Locked";
    header.append(titleGroup, badge);

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";
    [stop.duration, stop.badge, hasChoice ? "Choice recorded" : "Choice pending"].forEach(
      (label) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = label;
        tagRow.appendChild(tag);
      }
    );

    const actions = document.createElement("div");
    actions.className = "stop-actions";

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = unlocked ? "Enter stop" : "Locked";
    openButton.disabled = !unlocked;
    openButton.addEventListener("click", () => openStop(stop));

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.className = "complete-button";
    completeButton.textContent = complete ? "Passport stamped" : "Stamp complete";
    completeButton.disabled = complete || !unlocked || !hasChoice;
    completeButton.addEventListener("click", () => completeStop(stop.id));

    actions.append(openButton, completeButton);
    card.append(header, tagRow, actions);
    wrapper.appendChild(card);
    elements.trailStopList.appendChild(wrapper);
  });
}

function renderMetrics() {
  const progress = calculateProgress();
  const decision = calculateDecisionQuality();
  const behavior = calculateBehaviorScore();
  const risk = adoptionRiskLabel();

  elements.metricCompletion.textContent = `${progress}%`;
  elements.metricDecision.textContent = `${decision}%`;
  elements.metricBehavior.textContent = `${behavior}%`;
  elements.metricRisk.textContent = risk;
}

function render() {
  recalculateSupplies();
  renderPassport();
  renderSupplies();
  renderProgress();
  renderTrailStops();
  renderMetrics();
  saveState();
}

function openStop(stop) {
  activeStopId = stop.id;
  const existingChoiceIndex = selectedChoice(stop.id);
  const existingChoice = stop.options[existingChoiceIndex];

  elements.dialogKicker.textContent = stop.badge;
  elements.dialogTitle.textContent = stop.title;
  elements.dialogSummary.textContent = stop.summary;
  elements.dialogScenario.textContent = stop.scenario;
  elements.choiceFeedback.textContent = existingChoice
    ? existingChoice.feedback
    : "Pick the route that best reinforces the standard process.";
  elements.choiceFeedback.className = `choice-feedback ${
    existingChoice ? (existingChoice.correct ? "good" : "bad") : ""
  }`;

  elements.dialogLessons.innerHTML = "";
  stop.lessons.forEach((lesson) => {
    const item = document.createElement("li");
    item.textContent = lesson;
    elements.dialogLessons.appendChild(item);
  });

  elements.dialogOptions.innerHTML = "";
  stop.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option.label;

    if (existingChoiceIndex === optionIndex) {
      button.classList.add("selected", option.correct ? "good" : "bad");
    }

    button.addEventListener("click", () => chooseRoute(stop, optionIndex));
    elements.dialogOptions.appendChild(button);
  });

  elements.stopDialog.showModal();
}

function chooseRoute(stop, optionIndex) {
  const option = stop.options[optionIndex];
  state.choices[stop.id] = optionIndex;
  elements.choiceFeedback.textContent = option.feedback;
  elements.choiceFeedback.className = `choice-feedback ${option.correct ? "good" : "bad"}`;

  [...elements.dialogOptions.children].forEach((button, index) => {
    button.className = index === optionIndex
      ? `selected ${option.correct ? "good" : "bad"}`
      : "";
  });

  render();
}

function completeStop(stopId) {
  if (!state.completedStops.includes(stopId)) {
    state.completedStops.push(stopId);
  }

  render();
}

elements.savePassport.addEventListener("click", () => {
  state.travelerName = elements.travelerName.value.trim();
  state.role = elements.travelerRole.value;
  render();
});

elements.travelerRole.addEventListener("change", () => {
  state.role = elements.travelerRole.value;
  render();
});

elements.closeDialog.addEventListener("click", () => {
  elements.stopDialog.close();
  activeStopId = null;
});

elements.stopDialog.addEventListener("close", () => {
  activeStopId = null;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement === elements.travelerName) {
    state.travelerName = elements.travelerName.value.trim();
    render();
  }
});

render();
