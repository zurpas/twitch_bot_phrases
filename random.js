async function getRandomPhrase(category) {
  try {
    const response = await fetch('./phrases.json');
    const data = await response.json();
    const phrases = data[category];
    if (!phrases) {
      document.body.innerHTML = `Category "${category}" not found.`;
      return;
    }
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.body.innerHTML = randomPhrase;
  } catch (error) {
    document.body.innerHTML = 'Error loading phrases.';
  }
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('type');
getRandomPhrase(category);
