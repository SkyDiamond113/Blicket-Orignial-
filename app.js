// --- GAME DATA ---
const chances = { Abyssal: 0.1, Godly: 0.3, Immortal: 0.5, Chroma: 0.7, Mythic: 0.9, Legendary: 1, Epic: 3, Rare: 8, Uncommon: 18, Common: 22 };

const packBlooks = {
    "Aquatic Pack": [
        {"name":"Jellyfish","rarity":"Common"}, {"name":"Clownfish","rarity":"Common"}, {"name":"Starfish","rarity":"Common"}, {"name":"Seahorse","rarity":"Common"}, {"name":"Shrimp","rarity":"Common"}, {"name":"Crab","rarity":"Common"}, {"name":"Frog","rarity":"Uncommon"}, {"name":"Pufferfish","rarity":"Uncommon"}, {"name":"Angelfish","rarity":"Uncommon"}, {"name":"Stingray","rarity":"Uncommon"}, {"name":"Lobster","rarity":"Uncommon"}, {"name":"Squid","rarity":"Uncommon"}, {"name":"Octopus","rarity":"Rare"}, {"name":"Narwhal","rarity":"Rare"}, {"name":"Sea Turtle","rarity":"Rare"}, {"name":"Orca","rarity":"Rare"}, {"name":"Manta Ray","rarity":"Rare"}, {"name":"Electric Eel","rarity":"Rare"}, {"name":"Megalodon","rarity":"Epic"}, {"name":"Baby Shark","rarity":"Epic"}, {"name":"Hammerhead","rarity":"Epic"}, {"name":"Great White Shark","rarity":"Epic"}, {"name":"Kraken","rarity":"Legendary"}, {"name":"Blue Whale","rarity":"Legendary"}, {"name":"Leviathan","rarity":"Legendary"}, {"name":"Poseidon's Trident","rarity":"Mythic"}, {"name":"Pearl Dragon","rarity":"Mythic"}, {"name":"Neptune's Crown","rarity":"Mythic"}, {"name":"Prismatic Dolphin","rarity":"Chroma"}, {"name":"Crystal Jellyfish","rarity":"Chroma"}, {"name":"Rainbow Coral","rarity":"Chroma"}, {"name":"Eternal Tide","rarity":"Immortal"}, {"name":"Ocean Sovereign","rarity":"Godly"}, {"name":"Void Leviathan","rarity":"Abyssal"}
    ],
    "Blizzard Pack": [
        {"name":"Snowman","rarity":"Common"}, {"name":"Penguin","rarity":"Common"}, {"name":"Snow Owl","rarity":"Common"}, {"name":"Ice Cube","rarity":"Common"}, {"name":"Snowflake","rarity":"Common"}, {"name":"Icicle","rarity":"Common"}, {"name":"Snow Leopard","rarity":"Uncommon"}, {"name":"Arctic Fox","rarity":"Uncommon"}, {"name":"Seal","rarity":"Uncommon"}, {"name":"Husky","rarity":"Uncommon"}, {"name":"Reindeer","rarity":"Uncommon"}, {"name":"Arctic Hare","rarity":"Uncommon"}, {"name":"Polar Bear","rarity":"Rare"}, {"name":"Ice Slime","rarity":"Rare"}, {"name":"Walrus","rarity":"Rare"}, {"name":"Snow Tiger","rarity":"Rare"}, {"name":"Snowy Owl","rarity":"Rare"}, {"name":"Frost Wolf","rarity":"Rare"}, {"name":"Yeti","rarity":"Epic"}, {"name":"Frost Wraith","rarity":"Epic"}, {"name":"Ice Dragon","rarity":"Epic"}, {"name":"Blizzard Golem","rarity":"Epic"}, {"name":"Ice Elemental","rarity":"Legendary"}, {"name":"Blizzard Beast","rarity":"Legendary"}, {"name":"Frost Giant","rarity":"Legendary"}, {"name":"Frozen Phoenix","rarity":"Mythic"}, {"name":"Crystal Heart","rarity":"Mythic"}, {"name":"Ice Scepter","rarity":"Mythic"}, {"name":"Aurora Spirit","rarity":"Chroma"}, {"name":"Diamond Snowflake","rarity":"Chroma"}, {"name":"Frozen Rainbow","rarity":"Chroma"}, {"name":"Eternal Frost","rarity":"Immortal"}, {"name":"Winter God","rarity":"Godly"}, {"name":"Black Ice Demon","rarity":"Abyssal"}
    ],
    "Bot Pack": [
        {"name":"Rusty Robot","rarity":"Common"}, {"name":"Old PC","rarity":"Common"}, {"name":"Calculator","rarity":"Common"}, {"name":"Floppy Disk","rarity":"Common"}, {"name":"USB Drive","rarity":"Common"}, {"name":"Circuit Board","rarity":"Common"}, {"name":"Laptop","rarity":"Uncommon"}, {"name":"Rocket Bot","rarity":"Uncommon"}, {"name":"Drone","rarity":"Uncommon"}, {"name":"Smart Watch","rarity":"Uncommon"}, {"name":"Tablet","rarity":"Uncommon"}, {"name":"VR Headset","rarity":"Uncommon"}, {"name":"Mega Bot","rarity":"Rare"}, {"name":"Cyber Dog","rarity":"Rare"}, {"name":"Robot Arm","rarity":"Rare"}, {"name":"Security Bot","rarity":"Rare"}, {"name":"Nano Bot","rarity":"Rare"}, {"name":"Tech Spider","rarity":"Rare"}, {"name":"AI Core","rarity":"Epic"}, {"name":"Holo Bot","rarity":"Epic"}, {"name":"Combat Mech","rarity":"Epic"}, {"name":"Battle Droid","rarity":"Epic"}, {"name":"Tim the Alien","rarity":"Legendary"}, {"name":"Neural Network","rarity":"Legendary"}, {"name":"Cyborg","rarity":"Legendary"}, {"name":"Quantum Processor","rarity":"Mythic"}, {"name":"Singularity Core","rarity":"Mythic"}, {"name":"Binary Blade","rarity":"Mythic"}, {"name":"Neon Mech","rarity":"Chroma"}, {"name":"Holographic AI","rarity":"Chroma"}, {"name":"Digital Phoenix","rarity":"Chroma"}, {"name":"Prime Sentinel","rarity":"Immortal"}, {"name":"Tech Deity","rarity":"Godly"}, {"name":"Void Machine","rarity":"Abyssal"}
    ],
    "Breakfast Pack": [
        {"name":"Toast","rarity":"Common"}, {"name":"Cereal","rarity":"Common"}, {"name":"Egg","rarity":"Common"}, {"name":"Bagel","rarity":"Common"}, {"name":"Butter","rarity":"Common"}, {"name":"Jam","rarity":"Common"}, {"name":"Waffle","rarity":"Uncommon"}, {"name":"Bacon","rarity":"Uncommon"}, {"name":"Donut","rarity":"Uncommon"}, {"name":"Croissant","rarity":"Uncommon"}, {"name":"Sausage","rarity":"Uncommon"}, {"name":"Hash Brown","rarity":"Uncommon"}, {"name":"Pancakes","rarity":"Rare"}, {"name":"French Toast","rarity":"Rare"}, {"name":"Muffin","rarity":"Rare"}, {"name":"Coffee","rarity":"Rare"}, {"name":"Smoothie","rarity":"Rare"}, {"name":"Yogurt Parfait","rarity":"Rare"}, {"name":"Omelet","rarity":"Epic"}, {"name":"Orange Juice","rarity":"Epic"}, {"name":"Avocado Toast","rarity":"Epic"}, {"name":"Eggs Benedict","rarity":"Epic"}, {"name":"Lucky Cat","rarity":"Legendary"}, {"name":"Breakfast Burrito","rarity":"Legendary"}, {"name":"Grand Slam","rarity":"Legendary"}, {"name":"Golden Syrup","rarity":"Mythic"}, {"name":"Maple Leaf Spirit","rarity":"Mythic"}, {"name":"Divine Breakfast","rarity":"Mythic"}, {"name":"Rainbow Pancake","rarity":"Chroma"}, {"name":"Crystal Honey","rarity":"Chroma"}, {"name":"Prismatic Waffle","rarity":"Chroma"}, {"name":"Infinite Buffet","rarity":"Immortal"}, {"name":"Breakfast Lord","rarity":"Godly"}, {"name":"Burnt Shadow","rarity":"Abyssal"}
    ],
    "Safari Pack": [
        {"name":"Zebra","rarity":"Common"}, {"name":"Giraffe","rarity":"Common"}, {"name":"Meerkat","rarity":"Common"}, {"name":"Gazelle","rarity":"Common"}, {"name":"Ostrich","rarity":"Common"}, {"name":"Wildebeest","rarity":"Common"}, {"name":"Rhino","rarity":"Uncommon"}, {"name":"Hippo","rarity":"Uncommon"}, {"name":"Warthog","rarity":"Uncommon"}, {"name":"Hyena","rarity":"Uncommon"}, {"name":"Baboon","rarity":"Uncommon"}, {"name":"Mongoose","rarity":"Uncommon"}, {"name":"Elephant","rarity":"Rare"}, {"name":"Cheetah","rarity":"Rare"}, {"name":"Leopard","rarity":"Rare"}, {"name":"Cape Buffalo","rarity":"Rare"}, {"name":"African Wild Dog","rarity":"Rare"}, {"name":"Black Panther","rarity":"Rare"}, {"name":"Lion","rarity":"Epic"}, {"name":"Gorilla","rarity":"Epic"}, {"name":"Crocodile","rarity":"Epic"}, {"name":"Silverback","rarity":"Epic"}, {"name":"King of the Jungle","rarity":"Legendary"}, {"name":"White Lion","rarity":"Legendary"}, {"name":"Alpha Elephant","rarity":"Legendary"}, {"name":"Sacred Elephant","rarity":"Mythic"}, {"name":"Ivory Guardian","rarity":"Mythic"}, {"name":"Tribal Mask","rarity":"Mythic"}, {"name":"Spectrum Tiger","rarity":"Chroma"}, {"name":"Golden Savanna","rarity":"Chroma"}, {"name":"Rainbow Zebra","rarity":"Chroma"}, {"name":"Ancient Mammoth","rarity":"Immortal"}, {"name":"Savanna God","rarity":"Godly"}, {"name":"Shadow Predator","rarity":"Abyssal"}
    ],
    "Medieval Pack": [
        {"name":"Peasant","rarity":"Common"}, {"name":"Squire","rarity":"Common"}, {"name":"Blacksmith","rarity":"Common"}, {"name":"Bard","rarity":"Common"}, {"name":"Knight","rarity":"Uncommon"}, {"name":"Archer","rarity":"Uncommon"}, {"name":"Monk","rarity":"Uncommon"}, {"name":"Guard","rarity":"Uncommon"}, {"name":"Wizard","rarity":"Rare"}, {"name":"Jester","rarity":"Rare"}, {"name":"Noble","rarity":"Rare"}, {"name":"Paladin","rarity":"Rare"}, {"name":"Queen","rarity":"Epic"}, {"name":"Dragon Knight","rarity":"Epic"}, {"name":"Dark Sorcerer","rarity":"Epic"}, {"name":"King","rarity":"Legendary"}, {"name":"Royal Guard","rarity":"Legendary"}, {"name":"Excalibur","rarity":"Mythic"}, {"name":"Crown of Light","rarity":"Mythic"}, {"name":"Crystal Paladin","rarity":"Chroma"}, {"name":"Rainbow Knight","rarity":"Chroma"}, {"name":"Eternal Crusader","rarity":"Immortal"}, {"name":"Divine Emperor","rarity":"Godly"}, {"name":"Dark Warlord","rarity":"Abyssal"}
    ],
    "Space Pack": [
        {"name":"Asteroid","rarity":"Common"}, {"name":"Satellite","rarity":"Common"}, {"name":"Moon Rock","rarity":"Common"}, {"name":"Comet","rarity":"Common"}, {"name":"Astronaut","rarity":"Uncommon"}, {"name":"UFO","rarity":"Uncommon"}, {"name":"Space Probe","rarity":"Uncommon"}, {"name":"Rocket","rarity":"Uncommon"}, {"name":"Space Ranger","rarity":"Rare"}, {"name":"Mars Rover","rarity":"Rare"}, {"name":"Solar Panel","rarity":"Rare"}, {"name":"Star Navigator","rarity":"Rare"}, {"name":"Alien","rarity":"Epic"}, {"name":"Planet","rarity":"Epic"}, {"name":"Nebula Explorer","rarity":"Epic"}, {"name":"Black Hole","rarity":"Legendary"}, {"name":"Quasar","rarity":"Legendary"}, {"name":"Supernova Core","rarity":"Mythic"}, {"name":"Galactic Crown","rarity":"Mythic"}, {"name":"Cosmic Prism","rarity":"Chroma"}, {"name":"Aurora Nebula","rarity":"Chroma"}, {"name":"Starforged Titan","rarity":"Immortal"}, {"name":"Celestial Being","rarity":"Godly"}, {"name":"Void of Space","rarity":"Abyssal"}
    ],
    "Wonderland Pack": [
        {"name":"White Rabbit","rarity":"Common"}, {"name":"Caterpillar","rarity":"Common"}, {"name":"Teacup","rarity":"Common"}, {"name":"Playing Card","rarity":"Common"}, {"name":"Cheshire Cat","rarity":"Uncommon"}, {"name":"Mad Hatter","rarity":"Uncommon"}, {"name":"March Hare","rarity":"Uncommon"}, {"name":"Dormouse","rarity":"Uncommon"}, {"name":"Tweedle Dee","rarity":"Rare"}, {"name":"Tweedle Dum","rarity":"Rare"}, {"name":"Flamingo","rarity":"Rare"}, {"name":"Mock Turtle","rarity":"Rare"}, {"name":"Queen of Hearts","rarity":"Epic"}, {"name":"Alice","rarity":"Epic"}, {"name":"Red Queen","rarity":"Epic"}, {"name":"Time Keeper","rarity":"Legendary"}, {"name":"Bandersnatch","rarity":"Legendary"}, {"name":"Jabberwocky","rarity":"Mythic"}, {"name":"Vorpal Blade","rarity":"Mythic"}, {"name":"Kaleidoscope Rabbit","rarity":"Chroma"}, {"name":"Rainbow Tea Party","rarity":"Chroma"}, {"name":"Forever Alice","rarity":"Immortal"}, {"name":"Wonderland Deity","rarity":"Godly"}, {"name":"Nightmare Realm","rarity":"Abyssal"}
    ],
    "Dino Pack": [
        {"name":"Fossil","rarity":"Common"}, {"name":"Egg","rarity":"Common"}, {"name":"Dino Bone","rarity":"Common"}, {"name":"Baby Raptor","rarity":"Common"}, {"name":"Velociraptor","rarity":"Uncommon"}, {"name":"Stegosaurus","rarity":"Uncommon"}, {"name":"Ankylosaurus","rarity":"Uncommon"}, {"name":"Parasaurolophus","rarity":"Uncommon"}, {"name":"Triceratops","rarity":"Rare"}, {"name":"Brontosaurus","rarity":"Rare"}, {"name":"Allosaurus","rarity":"Rare"}, {"name":"Carnotaurus","rarity":"Rare"}, {"name":"Pterodactyl","rarity":"Epic"}, {"name":"Spinosaurus","rarity":"Epic"}, {"name":"Mosasaurus","rarity":"Epic"}, {"name":"Tyrannosaurus Rex","rarity":"Legendary"}, {"name":"Indominus Rex","rarity":"Legendary"}, {"name":"Alpha Raptor","rarity":"Mythic"}, {"name":"Fossil King","rarity":"Mythic"}, {"name":"Prism Rex","rarity":"Chroma"}, {"name":"Rainbow Dino","rarity":"Chroma"}, {"name":"Prehistoric Titan","rarity":"Immortal"}, {"name":"Dino Overlord","rarity":"Godly"}, {"name":"Extinction Beast","rarity":"Abyssal"}
    ],
    "Spooky Pack": [
        {"name":"Pumpkin","rarity":"Common"}, {"name":"Bat","rarity":"Common"}, {"name":"Black Cat","rarity":"Common"}, {"name":"Spider","rarity":"Common"}, {"name":"Ghost","rarity":"Uncommon"}, {"name":"Skeleton","rarity":"Uncommon"}, {"name":"Scarecrow","rarity":"Uncommon"}, {"name":"Mummy","rarity":"Uncommon"}, {"name":"Witch","rarity":"Rare"}, {"name":"Zombie","rarity":"Rare"}, {"name":"Frankenstein","rarity":"Rare"}, {"name":"Haunted House","rarity":"Rare"}, {"name":"Vampire","rarity":"Epic"}, {"name":"Werewolf","rarity":"Epic"}, {"name":"Headless Horseman","rarity":"Epic"}, {"name":"Grim Reaper","rarity":"Legendary"}, {"name":"Demon","rarity":"Legendary"}, {"name":"Phantom King","rarity":"Mythic"}, {"name":"Soul Keeper","rarity":"Mythic"}, {"name":"Spectral Wraith","rarity":"Chroma"}, {"name":"Ghost Flame","rarity":"Chroma"}, {"name":"Undead Lord","rarity":"Immortal"}, {"name":"Death God","rarity":"Godly"}, {"name":"Absolute Darkness","rarity":"Abyssal"}
    ],
    "Outback Pack": [
        {"name":"Dingo","rarity":"Common"}, {"name":"Wombat","rarity":"Common"}, {"name":"Echidna","rarity":"Common"}, {"name":"Kookaburra","rarity":"Common"}, {"name":"Emu","rarity":"Uncommon"}, {"name":"Platypus","rarity":"Uncommon"}, {"name":"Wallaby","rarity":"Uncommon"}, {"name":"Frilled Lizard","rarity":"Uncommon"}, {"name":"Koala","rarity":"Rare"}, {"name":"Tasmanian Devil","rarity":"Rare"}, {"name":"Cassowary","rarity":"Rare"}, {"name":"Sugar Glider","rarity":"Rare"}, {"name":"Crocodile","rarity":"Epic"}, {"name":"Kangaroo","rarity":"Epic"}, {"name":"Saltwater Croc","rarity":"Epic"}, {"name":"Drop Bear","rarity":"Legendary"}, {"name":"Dingo Alpha","rarity":"Legendary"}, {"name":"Dreamtime Serpent","rarity":"Mythic"}, {"name":"Boomerang Spirit","rarity":"Mythic"}, {"name":"Opal Kangaroo","rarity":"Chroma"}, {"name":"Rainbow Serpent","rarity":"Chroma"}, {"name":"Ancient Bunyip","rarity":"Immortal"}, {"name":"Outback Deity","rarity":"Godly"}, {"name":"Void Dingo","rarity":"Abyssal"}
    ],
    "Pirate Pack": [
        {"name":"Cabin Boy","rarity":"Common"}, {"name":"Sailor","rarity":"Common"}, {"name":"Deckhand","rarity":"Common"}, {"name":"Ship's Cook","rarity":"Common"}, {"name":"Pirate","rarity":"Uncommon"}, {"name":"Parrot","rarity":"Uncommon"}, {"name":"Navigator","rarity":"Uncommon"}, {"name":"Powder Monkey","rarity":"Uncommon"}, {"name":"Treasure Chest","rarity":"Rare"}, {"name":"First Mate","rarity":"Rare"}, {"name":"Cannon Master","rarity":"Rare"}, {"name":"Buccaneer","rarity":"Rare"}, {"name":"Pirate Ship","rarity":"Epic"}, {"name":"Kraken Hunter","rarity":"Epic"}, {"name":"Ghost Ship","rarity":"Epic"}, {"name":"Pirate King","rarity":"Legendary"}, {"name":"Admiral","rarity":"Legendary"}, {"name":"Cursed Treasure","rarity":"Mythic"}, {"name":"Black Pearl","rarity":"Mythic"}, {"name":"Jeweled Galleon","rarity":"Chroma"}, {"name":"Golden Compass","rarity":"Chroma"}, {"name":"Flying Dutchman","rarity":"Immortal"}, {"name":"Sea God","rarity":"Godly"}, {"name":"Abyssal Corsair","rarity":"Abyssal"}
    ],
    "Tropical Pack": [
        {"name":"Coconut","rarity":"Common"}, {"name":"Pineapple","rarity":"Common"}, {"name":"Palm Tree","rarity":"Common"}, {"name":"Hibiscus","rarity":"Common"}, {"name":"Toucan","rarity":"Uncommon"}, {"name":"Flamingo","rarity":"Uncommon"}, {"name":"Tree Frog","rarity":"Uncommon"}, {"name":"Chameleon","rarity":"Uncommon"}, {"name":"Monkey","rarity":"Rare"}, {"name":"Jaguar","rarity":"Rare"}, {"name":"Sloth","rarity":"Rare"}, {"name":"Anaconda","rarity":"Rare"}, {"name":"Tiki Mask","rarity":"Epic"}, {"name":"Parrot","rarity":"Epic"}, {"name":"Volcano Spirit","rarity":"Epic"}, {"name":"Island Spirit","rarity":"Legendary"}, {"name":"Beach Guardian","rarity":"Legendary"}, {"name":"Golden Tiki","rarity":"Mythic"}, {"name":"Tropical Crown","rarity":"Mythic"}, {"name":"Rainbow Macaw","rarity":"Chroma"}, {"name":"Sunset Paradise","rarity":"Chroma"}, {"name":"Eternal Paradise","rarity":"Immortal"}, {"name":"Jungle God","rarity":"Godly"}, {"name":"Shadow Rainforest","rarity":"Abyssal"}
    ],
    "Candy Pack": [
        {"name":"Gummy Bear","rarity":"Common"}, {"name":"Lollipop","rarity":"Common"}, {"name":"Jawbreaker","rarity":"Common"}, {"name":"Cotton Candy","rarity":"Common"}, {"name":"Chocolate Bar","rarity":"Uncommon"}, {"name":"Candy Cane","rarity":"Uncommon"}, {"name":"Taffy","rarity":"Uncommon"}, {"name":"Jelly Bean","rarity":"Uncommon"}, {"name":"Cupcake","rarity":"Rare"}, {"name":"Ice Cream","rarity":"Rare"}, {"name":"Macaron","rarity":"Rare"}, {"name":"Fudge","rarity":"Rare"}, {"name":"Birthday Cake","rarity":"Epic"}, {"name":"Rainbow Candy","rarity":"Epic"}, {"name":"Chocolate Fountain","rarity":"Epic"}, {"name":"Unicorn Swirl","rarity":"Legendary"}, {"name":"Candy Castle","rarity":"Legendary"}, {"name":"Enchanted Candy","rarity":"Mythic"}, {"name":"Sweet Dream","rarity":"Mythic"}, {"name":"Hypnotic Swirl","rarity":"Chroma"}, {"name":"Prismatic Sugar","rarity":"Chroma"}, {"name":"Everlasting Gobstopper","rarity":"Immortal"}, {"name":"Sugar Deity","rarity":"Godly"}, {"name":"Dark Chocolate Void","rarity":"Abyssal"}
    ],
    "Fantasy Pack": [
        {"name":"Fairy","rarity":"Common"}, {"name":"Elf","rarity":"Common"}, {"name":"Pixie","rarity":"Common"}, {"name":"Sprite","rarity":"Common"}, {"name":"Dwarf","rarity":"Uncommon"}, {"name":"Centaur","rarity":"Uncommon"}, {"name":"Gnome","rarity":"Uncommon"}, {"name":"Nymph","rarity":"Uncommon"}, {"name":"Griffin","rarity":"Rare"}, {"name":"Wizard","rarity":"Rare"}, {"name":"Pegasus","rarity":"Rare"}, {"name":"Minotaur","rarity":"Rare"}, {"name":"Unicorn","rarity":"Epic"}, {"name":"Phoenix","rarity":"Epic"}, {"name":"Hydra","rarity":"Epic"}, {"name":"Dragon","rarity":"Legendary"}, {"name":"Wyvern","rarity":"Legendary"}, {"name":"Ancient Dragon","rarity":"Mythic"}, {"name":"Dragon's Eye","rarity":"Mythic"}, {"name":"Celestial Phoenix","rarity":"Chroma"}, {"name":"Rainbow Unicorn","rarity":"Chroma"}, {"name":"Immortal Sorcerer","rarity":"Immortal"}, {"name":"Creator Dragon","rarity":"Godly"}, {"name":"Void Dragon","rarity":"Abyssal"}
    ]
};

// --- GAME STATE VARIABLES ---
let tokens = 100, pendingPack = { name: "", cost: 0 }, autoOpenMode = false, collectedCards = new Set(), allCardsUnlocked = false, currentUser = null, isCollectionView = false;
let userDatabase = getFromStorage('blecket_users') || {};

// Storage Helpers
function saveToStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } 
    catch(e) { return false; }
}
function getFromStorage(key) {
    try { const item = localStorage.getItem(key); return item ? JSON.parse(item) : null; } 
    catch(e) { return null; }
}

// User & Auth Functions
function updateProfilePicture() {
    const profilePic = document.getElementById('profilePicture');
    if (currentUser) {
        profilePic.textContent = currentUser.charAt(0).toUpperCase();
        profilePic.style.display = 'flex';
    } else {
        profilePic.style.display = 'none';
    }
}

function saveUserData() {
    if (!currentUser) return;
    userDatabase[currentUser].tokens = tokens;
    userDatabase[currentUser].collected = Array.from(collectedCards);
    saveToStorage('blecket_users', userDatabase);
}

function loadUserData() {
    if (userDatabase[currentUser]) {
        tokens = userDatabase[currentUser].tokens || 100;
        collectedCards = new Set(userDatabase[currentUser].collected || []);
        updateTokens();
    }
}

function updateTokens() {
    document.getElementById('tokenCount').textContent = tokens;
    if (currentUser) saveUserData();
}

// --- WEIGHTED PROBABILITY LOGIC ---
function getRandomCard(boxName) {
    const cardsInPack = packBlooks[boxName] || packBlooks["Aquatic Pack"];
    
    // Sum total weights for this specific pack
    let totalWeight = 0;
    cardsInPack.forEach(card => {
        totalWeight += chances[card.rarity];
    });

    // Generate a random number between 0 and totalWeight
    let randomNum = Math.random() * totalWeight;
    let currentWeight = 0;

    // Iterate through cards and check threshold
    for (let card of cardsInPack) {
        currentWeight += chances[card.rarity];
        if (randomNum <= currentWeight) {
            return card;
        }
    }
    return cardsInPack[0]; // Fallback just in case
}

// Pack Interactions
function handlePackClick(boxName, cost) {
    if (tokens < cost) return;
    if (autoOpenMode) {
        tokens -= cost;
        updateTokens();
        revealBlookPopup(boxName);
    } else {
        showConfirmation(boxName, cost);
    }
}

function showConfirmation(boxName, cost) {
    pendingPack = { name: boxName, cost: cost };
    document.getElementById('confirmPackName').textContent = boxName;
    document.getElementById('confirmPackPrice').textContent = cost;
    document.getElementById('confirmOverlay').classList.add('active');
}

function confirmPurchase() {
    document.getElementById('confirmOverlay').classList.remove('active');
    tokens -= pendingPack.cost;
    updateTokens();
    revealBlookPopup(pendingPack.name);
}

function revealBlookPopup(boxName) {
    let card = getRandomCard(boxName);
    collectedCards.add(card.name);
    saveUserData();
    
    let html = `
        <div class="blook-result-card ${card.rarity}">
            <div>${card.name}</div>
            <div class="rarity ${card.rarity}">${card.rarity}</div>
            <div style="margin-top:7px;color:#888;font-size:.95rem;">from: <b>${boxName}</b></div>
        </div>`;
    document.getElementById('blookRevealContainer').innerHTML = html;
    document.getElementById('blookOverlay').classList.add('active');
}

function renderCollection() {
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = '';
    let allCards = [];
    for (let pack in packBlooks) {
        allCards = allCards.concat(packBlooks[pack]);
    }
    
    allCards.forEach(card => {
        const isCollected = collectedCards.has(card.name);
        const cardDiv = document.createElement('div');
        cardDiv.className = 'collection-card' + (isCollected ? '' : ' locked');
        if (isCollected) {
            cardDiv.innerHTML = `<div class="card-name">${card.name}</div><div class="card-rarity rarity ${card.rarity}">${card.rarity}</div>`;
        } else {
            cardDiv.innerHTML = `<div class="lock-icon">🔒</div><div class="card-name">${card.name}</div><div class="card-rarity">???</div>`;
        }
        grid.appendChild(cardDiv);
    });
}

// Tooltips Logic
let packHoldTimer = null, isHoldingPack = false;
const HOLD_DURATION = 1000;

function calculatePackChances(packName) {
    const pack = packBlooks[packName];
    if (!pack) return null;
    const count = {}, total = pack.length;
    pack.forEach(card => count[card.rarity] = (count[card.rarity] || 0) + 1);
    
    const percentages = {};
    for (let rarity in count) {
        percentages[rarity] = ((count[rarity] / total) * 100).toFixed(2);
    }
    return percentages;
}

function showPackTooltip(event, packName) {
    const tooltip = document.getElementById("packTooltip");
    const percentages = calculatePackChances(packName);
    if (!percentages) return;
    
    document.getElementById("tooltipTitle").textContent = packName + " Chances";
    let html = "";
    Object.entries(percentages)
        .sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))
        .forEach(([rarity, percent]) => {
            html += `<div class="tooltip-item"><span class="tooltip-rarity ${rarity}">${rarity}</span><span class="tooltip-percent">${percent}%</span></div>`;
        });
        
    document.getElementById("tooltipContent").innerHTML = html;
    
    const targetCard = event.target.closest(".pack-card");
    if (targetCard) {
        const rect = targetCard.getBoundingClientRect();
        tooltip.style.left = rect.right + 20 + "px";
        tooltip.style.top = rect.top + "px";
    }
    tooltip.classList.add("show");
    isHoldingPack = true;
}

function hidePackTooltip() {
    document.getElementById("packTooltip").classList.remove("show");
}

function initPackTooltips() {
    document.querySelectorAll(".pack-card").forEach(card => {
        const packName = card.dataset.packName;
        const packCost = parseInt(card.dataset.packCost);

        card.addEventListener("click", () => {
            if(!isHoldingPack) handlePackClick(packName, packCost);
        });

        card.addEventListener("mousedown", e => {
            isHoldingPack = false;
            packHoldTimer = setTimeout(() => showPackTooltip(e, packName), HOLD_DURATION);
        });
        card.addEventListener("mouseup", () => {
            clearTimeout(packHoldTimer);
            setTimeout(() => isHoldingPack = false, 50); 
            hidePackTooltip();
        });
        card.addEventListener("mouseleave", () => {
            clearTimeout(packHoldTimer);
            hidePackTooltip();
            isHoldingPack = false;
        });
    });
}

// --- DAILY REWARD SYSTEM ---
function checkDailyReward() {
    if (!currentUser) return; 
    const storageKey = "lastDailyReward_" + currentUser;
    const lastRewardStr = localStorage.getItem(storageKey);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!lastRewardStr) {
        giveDailyReward();
        return;
    }

    const lastRewardDate = new Date(parseInt(lastRewardStr));
    lastRewardDate.setHours(0, 0, 0, 0);

    if (today > lastRewardDate) {
        giveDailyReward();
    }
}

function giveDailyReward() {
    tokens += 100; 
    updateTokens();
    localStorage.setItem("lastDailyReward_" + currentUser, Date.now().toString());
    
    const overlay = document.getElementById("dailyRewardOverlay");
    const popup = document.getElementById("dailyRewardPopup");
    overlay.classList.add("show");
    popup.classList.add("show");
    
    setTimeout(() => {
        overlay.classList.remove("show");
        popup.classList.remove("show");
    }, 3000);
}

// Event Listeners (Replaces inline HTML calls)
document.getElementById('collectionToggle').addEventListener('click', () => {
    isCollectionView = !isCollectionView;
    const marketView = document.getElementById('marketView');
    const collectionView = document.getElementById('collectionView');
    const toggleBtn = document.getElementById('collectionToggle');
    
    if (isCollectionView) {
        marketView.style.display = 'none';
        collectionView.classList.add('active');
        toggleBtn.textContent = 'Market';
        renderCollection();
    } else {
        marketView.style.display = 'grid';
        collectionView.classList.remove('active');
        toggleBtn.textContent = 'Collection';
    }
});

document.getElementById('toggleBtn').addEventListener('click', () => {
    autoOpenMode = !autoOpenMode;
    const btn = document.getElementById('toggleBtn');
    btn.textContent = autoOpenMode ? 'Auto Open' : 'Confirm';
    btn.classList.toggle('auto-mode', autoOpenMode);
});

// Profile / Auth UI Toggles
document.getElementById('profilePicture').addEventListener('click', () => {
    document.getElementById('profileIconLarge').textContent = currentUser.charAt(0).toUpperCase();
    document.getElementById('profileUsername').textContent = currentUser;
    document.getElementById('profileTokens').textContent = tokens;
    document.getElementById('profileCards').textContent = collectedCards.size;
    document.getElementById('profileCreated').textContent = userDatabase[currentUser].createdDate || 'Unknown';
    document.getElementById('profileOverlay').classList.add('active');
});

document.getElementById('closeProfileBtn').addEventListener('click', () => document.getElementById('profileOverlay').classList.remove('active'));
document.getElementById('profileOverlay').addEventListener('click', () => document.getElementById('profileOverlay').classList.remove('active'));
document.getElementById('profileModal').addEventListener('click', e => e.stopPropagation());

// Login / Signup Handling
document.getElementById('showSignupBtn').addEventListener('click', () => {
    document.getElementById('loginView').style.display='none';
    document.getElementById('signupView').style.display='block';
});
document.getElementById('showLoginBtn').addEventListener('click', () => {
    document.getElementById('loginView').style.display='block';
    document.getElementById('signupView').style.display='none';
});

document.getElementById('submitSignupBtn').addEventListener('click', () => {
    let username = document.getElementById('signupUsername').value.trim();
    let password = document.getElementById('signupPassword').value;
    let confirm = document.getElementById('signupConfirmPassword').value;
    
    if(!username || !password) return document.getElementById('signupError').textContent = 'Please fill all fields';
    if(password !== confirm) return document.getElementById('signupError').textContent = 'Passwords do not match';
    if(userDatabase[username]) return document.getElementById('signupError').textContent = 'Username already exists';
    
    userDatabase[username] = { password: password, tokens: 100, collected: [], createdDate: new Date().toLocaleDateString() };
    saveToStorage('blecket_users', userDatabase);
    saveToStorage('blecket_last_user', username);
    
    currentUser = username;
    tokens = 100;
    collectedCards = new Set();
    
    document.getElementById('authOverlay').classList.remove('active');
    updateProfilePicture();
    document.getElementById('logoutBtn').style.display = 'block';
    updateTokens();
    checkDailyReward();
});

document.getElementById('submitLoginBtn').addEventListener('click', () => {
    let username = document.getElementById('loginUsername').value.trim();
    let password = document.getElementById('loginPassword').value;
    
    if(!username || !password) return document.getElementById('loginError').textContent = 'Please fill all fields';
    if(!userDatabase[username] || userDatabase[username].password !== password) return document.getElementById('loginError').textContent = 'Invalid username or password';
    
    currentUser = username;
    saveToStorage('blecket_last_user', username);
    loadUserData();
    
    document.getElementById('authOverlay').classList.remove('active');
    document.getElementById('logoutBtn').style.display = 'block';
    updateProfilePicture();
    checkDailyReward();
});

// Reset Account
document.getElementById('confirmResetBtn').addEventListener('click', () => document.getElementById('resetOverlay').classList.add('active'));
document.getElementById('cancelResetBtn').addEventListener('click', () => document.getElementById('resetOverlay').classList.remove('active'));
document.getElementById('approveResetBtn').addEventListener('click', () => {
    tokens = 100;
    collectedCards.clear();
    saveUserData();
    updateTokens();
    document.getElementById('resetOverlay').classList.remove('active');
    document.getElementById('profileOverlay').classList.remove('active');
});

// Pack Confirmations
document.getElementById('cancelPurchaseBtn').addEventListener('click', () => document.getElementById('confirmOverlay').classList.remove('active'));
document.getElementById('approvePurchaseBtn').addEventListener('click', confirmPurchase);

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => document.getElementById('logoutOverlay').classList.add('active'));
document.getElementById('cancelLogoutBtn').addEventListener('click', () => document.getElementById('logoutOverlay').classList.remove('active'));
document.getElementById('approveLogoutBtn').addEventListener('click', () => {
    saveUserData();
    saveToStorage('blecket_last_user', null);
    currentUser = null;
    document.getElementById('logoutOverlay').classList.remove('active');
    document.getElementById('authOverlay').classList.add('active');
    document.getElementById('logoutBtn').style.display = 'none';
    updateProfilePicture();
});

// Blook Popup
document.getElementById('blookOverlay').addEventListener('click', () => document.getElementById('blookOverlay').classList.remove('active'));

// Initialization
window.addEventListener('load', () => {
    initPackTooltips(); // Load tooltips directly
    const lastUser = getFromStorage('blecket_last_user');
    if (lastUser && userDatabase[lastUser]) {
        currentUser = lastUser;
        loadUserData();
        document.getElementById('authOverlay').classList.remove('active');
        updateProfilePicture();
        document.getElementById('logoutBtn').style.display = 'block';
        setInterval(checkDailyReward, 60000);
        setTimeout(checkDailyReward, 500);
    }
});