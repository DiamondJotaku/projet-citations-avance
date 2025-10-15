// src/public/script.js
async function chargerCitation() {
  const el = document.getElementById('citation');
  try {
    el.innerText = 'Chargement...';
    const response = await fetch('https://zenquotes.io/api/random');
    if (!response.ok) throw new Error('Erreur réseau');
    const data = await response.json();
    if (!Array.isArray(data) || !data[0]) throw new Error('Format inattendu');
    el.innerText = `${data[0].q} — ${data[0].a}`;
  } catch (err) {
    el.innerText = 'Impossible de charger la citation.';
    console.error(err);
  }
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.onload = chargerCitation;
