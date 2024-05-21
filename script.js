document.getElementById('bouton').addEventListener('click', function() {
    var texte = document.getElementById('texte');
    var couleurs = ['#ff5733', '#33ff57', '#3357ff', '#ff33a6', '#a633ff'];
    var couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    texte.style.color = couleurAleatoire;
});
