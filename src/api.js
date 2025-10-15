// src/api.js
async function getCitation() {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    // API retourne un tableau ; on protège l'accès
    if (!Array.isArray(data) || !data[0] || !data[0].q) {
      throw new Error('Format d\'API inattendu');
    }
    return `${data[0].q} — ${data[0].a}`;
  } catch (err) {
    // Log + renvoyer message d'erreur lisible pour les tests/consommateurs
    console.error('getCitation error:', err.message);
    throw err;
  }
}

module.exports = getCitation;
