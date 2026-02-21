const ideas = [
  {
    title: "Neighborhood Skill Swap",
    description:
      "A mobile app where neighbors exchange short lessons (guitar basics, resume edits, bike repair) using a local credits system.",
  },
  {
    title: "Recipe Rescue",
    description:
      "An app that scans leftovers from your fridge photo and proposes 3 quick meals with adjustable nutrition goals.",
  },
  {
    title: "Micro-Adventure Planner",
    description:
      "A weekend discovery app that creates 2-hour local adventure itineraries based on budget, weather, and mood.",
  },
  {
    title: "Focus Buddy",
    description:
      "A co-working timer app that pairs you with someone else for a 25-minute silent sprint and a 5-minute check-in.",
  },
  {
    title: "Story Seed",
    description:
      "A writing companion that combines themes, character quirks, and settings into daily fiction prompts.",
  },
];

const titleEl = document.getElementById("idea-title");
const descriptionEl = document.getElementById("idea-description");
const generateButton = document.getElementById("generate-btn");

function randomIdea() {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

function updateIdea() {
  const next = randomIdea();
  titleEl.textContent = next.title;
  descriptionEl.textContent = next.description;
}

generateButton.addEventListener("click", updateIdea);
