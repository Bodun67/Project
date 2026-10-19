const catButton = document.querySelector('#cat-button');
const catSpeech = document.querySelector('#cat-speech');
const bonusFill = document.querySelector('#bonus-fill');
const bonusLabel = document.querySelector('#bonus-label');
const bonusKey = 'osinnia-kava-bonus-date';
const today = new Date().toISOString().slice(0, 10);

function updateBonus() {
  const claimed = localStorage.getItem(bonusKey) === today;
  bonusFill.style.width = claimed ? '100%' : '0%';
  bonusLabel.textContent = claimed ? '1 / 1 бонус — готово!' : '0 / 1 бонус сьогодні';
  catSpeech.textContent = claimed ? 'Твій бонус чекає на касі ✨' : 'Погладь мене — отримай бонус ☕';
}

catButton.addEventListener('click', () => {
  if (localStorage.getItem(bonusKey) === today) {
    catSpeech.textContent = 'Завтра я знову чекатиму тебе 🐾';
    return;
  }
  localStorage.setItem(bonusKey, today);
  updateBonus();
  catSpeech.textContent = 'Мур-мур! -10% на каву сьогодні ✨';
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Дякуємо! Ми відповімо вам за чашкою кави.';
  event.target.reset();
});

updateBonus();
