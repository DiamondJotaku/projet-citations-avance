async function chargerCitation() { 
  const response = await fetch('https://zenquotes.io/api/random');
  const data = await response.json();
  document.getElementById('citation').innerText = `${data.content} — ${data.author}`;
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.onload = chargerCitation;