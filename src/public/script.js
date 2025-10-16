async function chargerCitation() {

  const el = document.getElementById('citation');
  el.innerText = "Chargement..."
  
  const response = await fetch('https://zenquotes.io/api/random');
  const data = await response.json();
        el.textContent = `${data[0].q} — ${data[0].a}`;
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('nouvelle').addEventListener('click', chargerCitation);
      chargerCitation(); // charge une citation au démarrage
    });