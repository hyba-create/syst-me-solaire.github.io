document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoi d'un email de confirmation (simulé ici par un log dans la console)
    console.log(`Un email de confirmation a été envoyé à ${email}`);
    alert('Un email de confirmation a été envoyé à ' + email);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validation de la connexion (simulé ici par un log)
    if (email === 'test@example.com' && password === 'password123') {
        alert('Connexion réussie');
    } else {
        alert('Email ou mot de passe incorrect');
    }
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resetEmail = document.getElementById('resetEmail').value;

    // Simulation de l'envoi d'un email pour réinitialiser le mot de passe
    console.log(`Un email pour réinitialiser le mot de passe a été envoyé à ${resetEmail}`);
    alert('Un email pour réinitialiser le mot de passe a été envoyé à ' + resetEmail);
});
