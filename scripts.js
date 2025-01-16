const prompts = [
    "A dragon having a tea party",
    "A futuristic treehouse",
    "A magical underwater garden",
    "An alien walking a dog",
    "A scene from a dream",
    "A superhero with unexpected powers",
    "A pirate ship in the clouds",
    "A sunset on an alien planet",
    "A market in a floating city",
    "A robot learning to paint",
    "A snowy forest with glowing trees",
    "A space explorer on a new world",
    "A knight befriending a dragon",
    "A mountain with a hidden village",
    "An underwater castle",
    "A city street with floating lanterns",
    "A mystical creature in a meadow",
    "A robot gardener",
    "A haunted house with friendly ghosts",
    "A carnival on the moon",
    "A historical figure in the future",
    "A picnic with mythical creatures",
    "A superhero in everyday life",
    "A fairytale castle with a twist",
    "A camping trip with aliens",
    "A futuristic vehicle",
    "A busy airport on another planet",
    "A village on a giant leaf",
    "A waterfall with hidden secrets",
    "A secret garden in the sky",
    "A cabin with magical decorations",
    "A musician with unusual instruments",
    "A playful animal with a surprising friend",
    "A fairy resting on a flower",
    "A harbor with fantastic ships",
    "A mysterious figure in a cloak",
    "A sunny day with a twist",
    "A scientist discovering magic",
    "A library with enchanted books",
    "A family celebrating with fireworks",
    "A dragon's treasure room",
    "A robot metropolis",
    "A lighthouse on a floating island",
    "A meadow with mythical creatures",
    "A busy café with magical patrons",
    "A wizard mixing potions",
    "A tropical island with secrets",
    "A butterfly with unique patterns",
    "A superhero team in action",
    "A lake with a mystical creature",
    "A forest with glowing animals",
    "A knight riding a mythical beast",
    "A spaceship in a battle",
    "A mermaid exploring a shipwreck",
    "A market with alien goods",
    "A peaceful Zen garden with robots",
    "A pirate map leading to a floating island",
    "A bustling train station with magical elements",
    "A cozy reading nook with enchanted books",
    "A cave with glowing crystals",
    "A city with whimsical architecture",
    "A knight's armor with a twist",
    "A playful kitten with magical toys",
    "A fantasy world with diverse creatures",
    "A cityscape with floating buildings",
    "A forest with a hidden waterfall",
    "A superhero base in an unusual location",
    "A park with surprising features",
    "A portal to another world",
    "A cozy cabin in a winter wonderland",
    "A lab with futuristic gadgets",
    "A treehouse in a magical forest",
    "A busy marketplace with whimsical items",
    "A beach with unexpected visitors",
    "A dragon's hoard with futuristic items",
    "A park with a blend of technology and nature",
    "A hero and sidekick with unique abilities",
    "A futuristic transportation hub",
    "A sunset with otherworldly colors",
    "An amusement park with a twist",
    "A wizard's study with unusual ingredients",
    "A countryside with fantastical elements",
    "A secret lab with hidden mysteries",
    "A treasure hunt with mythical clues",
    "A frozen landscape with hidden magic",
    "A creature from legend",
    "A busy city with a twist",
    "A beach with glowing waves",
    "A city with floating cars",
    "A bookstore with magical books",
    "A forest with hidden portals",
    "A marketplace with creative stalls",
    "A garden with unusual plants",
    "A knight's journey with a twist",
    "A space colony with diverse inhabitants",
    "A carnival with magical rides",
    "A river with a hidden bridge",
    "A busy square with surprising elements",
    "A school for magical beings",
    "A home with a garden of wonders",
    "A creature from myth in modern times"
];

const promptElement = document.getElementById('prompt');
const newPromptButton = document.getElementById('new-prompt');

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        showNewPrompt();
    }
});

newPromptButton.addEventListener('click', showNewPrompt);

function showNewPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    promptElement.textContent = prompts[randomIndex];
}
