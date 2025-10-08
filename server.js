// 🔊 Простая звуковая система
let soundEnabled = true;
let audioContext;

function initAudio() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.log('Web Audio API not supported');
    soundEnabled = false;
  }
}

function playSound(type) {
  if (!soundEnabled || !audioContext) return;
  
  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    let frequency = 200;
    let duration = 0.1;
    
    switch(type) {
      case 'click':
        frequency = 150;
        duration = 0.05;
        break;
      case 'caseOpen':
        frequency = 300;
        duration = 0.3;
        break;
      case 'caseScroll':
        frequency = 400;
        duration = 0.5;
        break;
      case 'win':
        frequency = 600;
        duration = 0.8;
        break;
    }
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
    
  } catch (error) {
    console.log('Sound error:', error);
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.querySelector('.audio-btn');
  btn.textContent = soundEnabled ? '🔊' : '🔇';
  showNotification(soundEnabled ? '🔊 Звук включен' : '🔇 Звук выключен');
}

// Данные о кейсах с РАБОЧИМИ картинками
const casesData = {
  prisma: {
    name: "Prisma Case",
    price: 75,
    image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f",
    description: "Кейс содержит коллекцию оружия из набора Prisma с уникальными скинами.",
    items: [
      { name: "AK-47 | The Empress", rarity: "legendary", price: 1500, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "M4A1-S | Nightmare", rarity: "legendary", price: 1200, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "USP-S | Cortex", rarity: "mythical", price: 300, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "Desert Eagle | Mecha Industries", rarity: "rare", price: 100, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "AWP | Atheris", rarity: "ancient", price: 2500, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" }
    ]
  },
  gamma: {
    name: "Gamma Case",
    price: 120,
    image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f",
    description: "Кейс содержит коллекцию оружия из набора Gamma с уникальными скинами.",
    items: [
      { name: "AK-47 | Fuel Injector", rarity: "legendary", price: 1800, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "M4A4 | Desolate Space", rarity: "legendary", price: 1500, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "USP-S | Kill Confirmed", rarity: "ancient", price: 3000, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "Glock-18 | Water Elemental", rarity: "rare", price: 80, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" },
      { name: "AWP | Hyper Beast", rarity: "ancient", price: 2800, image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH_t26q4yZlvDmJ4Tdn2xZ18l4j_vT8oWk2wXn_0E6Z2r2J4Wccw45YVvQ-lO_xr3p15-70ZvJzn5i6XMn5XqOmUPkgV9HMMUY0LIcOJH69r-BTA/360fx360f" }
    ]
  }
};

// Промокоды
const promoCodes = {
  'ZXC': { bonus: 1000, used: false },
  'WELCOME': { bonus: 500, used: false },
  'CSGO': { bonus: 300, used: false }
};

// Переменные состояния
let balance = 1000;
let inventory = [];
let openedCases = 0;
let totalSpent = 0;
let currentUser = null;
let currentPaymentMethod = 'card';
let currentCaseAmount = 1;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  initAudio();
  createBackgroundAnimation();
  checkAuthStatus();
  renderCases();
});

// Остальной код остается таким же как в предыдущей версии...
// (функции createBackgroundAnimation, checkAuthStatus, showMainInterface и т.д.)
