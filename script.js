document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const contents = document.querySelectorAll('.content');

    sidebar.addEventListener('click', function (event) {
      const target = event.target;
      const parentListItem = target.closest('li');
      if (parentListItem) {
        const subOptions = parentListItem.querySelector('.sub-options');
        if (subOptions) {
          event.preventDefault(); // Empêche le lien de naviguer directement
          subOptions.style.display = subOptions.style.display === 'block' ? 'none' : 'block';
        } else {
          contents.forEach(content => {
            content.style.display = 'none'; // Masque tous les contenus
          });
          const contentId = target.getAttribute('href');
          const selectedContent = document.querySelector(contentId);
          if (selectedContent) {
            selectedContent.style.display = 'block'; // Affiche le contenu sélectionné
          }
        }
      }
    });
  });
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const label = checkbox.parentElement;
      if (checkbox.checked) {
        label.style.backgroundColor = '#007bff'; // Bleu si sélectionné
        label.style.color = '#fff'; // Texte blanc si sélectionné
      } else {
        label.style.backgroundColor = '#f8f9fa'; // Gris clair sinon
        label.style.color = '#333'; // Texte noir sinon
      }
    });
  });

  function sendConfirmationCode() {
    // Ici, vous pouvez envoyer un code de confirmation par email
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  }

  function checkConfirmationCode() {
    // Ici, vérifiez le code de confirmation
    const confirmationCode = document.getElementById('confirmationCode').value;
    if (confirmationCode === '1234') { // Code de confirmation fictif
      document.getElementById('step2').style.display = 'none';
      document.getElementById('step3').style.display = 'block';
    } else {
      document.getElementById('codeError').style.display = 'block';
    }
  }

  function sendConfirmationCodeToNewEmail() {
    // Ici, vous pouvez envoyer un code de confirmation à la nouvelle adresse email
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
  }

  function checkNewEmailConfirmationCode() {
    // Ici, vérifiez le code de confirmation envoyé à la nouvelle adresse email
    const newEmailConfirmationCode = document.getElementById('newEmailConfirmationCode').value;
    if (newEmailConfirmationCode === '4321') { // Code de confirmation fictif
      document.getElementById('step4').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    } else {
      document.getElementById('newEmailCodeError').style.display = 'block';
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('newEmail');
    const confirmEmailInput = document.getElementById('confirmNewEmail');
    const confirmEmailBtn = document.getElementById('confirmEmailBtn');
    const errorMessage = document.getElementById('emailError');

    // Fonction de vérification de l'adresse e-mail
    function isValidEmail(email) {
      const validDomains = ['@gmail.com', '@yahoo.com', '@icloud.com'];
      return validDomains.some(domain => email.endsWith(domain));
    }

    // Ajouter un événement de clic au bouton de confirmation
    confirmEmailBtn.addEventListener('click', function (event) {
      const email = emailInput.value.trim();
      const confirmEmail = confirmEmailInput.value.trim();

      if (isValidEmail(email) && email === confirmEmail) {
        // Adresse email valide et confirmation correspondante
        errorMessage.style.display = 'none'; // Cacher le message d'erreur
        alert('Adresse email mise à jour !');
      } else {
        // Afficher un message d'erreur
        errorMessage.style.display = 'block';
      }

      // Empêcher le formulaire de se soumettre
      event.preventDefault();
    });
  });
  function checkCredentials() {
    // Récupérer les valeurs des champs
    const oldEmail = document.getElementById('oldEmail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifier si les informations sont correctes (simulation ici)
    if (oldEmail === 'ancien@email.com' && username === 'utilisateur' && password === 'motdepasse') {
      document.getElementById('step1').style.display = 'none';
      document.getElementById('step2').style.display = 'block';
    } else {
      document.getElementById('errorMessage').style.display = 'block';
    }
  }

  function confirmCode() {
    // Vérifier le code de confirmation (simulation ici)
    const confirmationCode = document.getElementById('confirmationCode').value;
    if (confirmationCode === '123456') {
      document.getElementById('step2').style.display = 'none';
      document.getElementById('step3').style.display = 'block';
    } else {
      document.getElementById('codeErrorMessage').style.display = 'block';
    }
  }

  function updateEmail() {
    // Mettre à jour l'adresse e-mail (simuler ici)
    const newEmail = document.getElementById('newEmail').value;
    const confirmNewEmail = document.getElementById('confirmNewEmail').value;

    if (newEmail !== confirmNewEmail) {
      alert("Les nouvelles adresses e-mail ne correspondent pas.");
    } else {
      // Envoyer la nouvelle adresse e-mail au backend pour mise à jour
      alert("Adresse e-mail mise à jour avec succès !");
    }
  }
  const codeInputs = document.querySelectorAll('.code-input');
  codeInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 1) {
        input.nextElementSibling.focus();
      }
    });
  });

  function checkCredentials() {
    // Récupérer les valeurs des champs
    const oldEmail = document.getElementById('oldEmail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifier si les informations sont correctes (simulation ici)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(oldEmail)) {
      alert("L'adresse e-mail n'est pas valide.");
      return;
    }

    if (password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      alert("Le nom d'utilisateur ne doit contenir que des caractères alphanumériques.");
      return;
    }

    if (oldEmail === 'ancien@email.com' && username === 'utilisateur' && password === 'motdepasse') {
      document.getElementById('step1').style.display = 'none';
      document.getElementById('step2').style.display = 'block';
    } else {
      document.getElementById('errorMessage').style.display = 'block';
    }
  }

  function checkConfirmationCode() {
    // Vérifier le code de confirmation (simulation ici)
    const confirmationCode = document.getElementById('confirmationCode').value;
    if (confirmationCode === '123456') {
      document.getElementById('step2').style.display = 'none';
      document.getElementById('step3').style.display = 'block';
    } else {
      alert("Le code de confirmation est incorrect.");
    }
  }

  function updateEmail() {
    // Mettre à jour l'adresse e-mail (simulation ici)
    const newEmail = document.getElementById('newEmail').value;
    const confirmNewEmail = document.getElementById('confirmNewEmail').value;

    if (newEmail !== confirmNewEmail) {
      alert("Les nouvelles adresses e-mail ne correspondent pas.");
    } else {
      document.getElementById('step3').style.display = 'none';
      document.getElementById('step4').style.display = 'block';
    }
  }

  function confirmNewEmail() {
    // Vérifier le code de confirmation de la nouvelle adresse e-mail (simulation ici)
    const newEmailConfirmationCode = document.getElementById('newEmailConfirmationCode').value;
    if (newEmailConfirmationCode === '654321') {
      document.getElementById('step4').style.display = 'none';
      alert("L'adresse e-mail a été mise à jour avec succès.");
    } else {
      alert("Le code de confirmation est incorrect.");
    }
  }
  function verifyOldPassword() {
  const oldPassword = document.getElementById('oldPassword').value;
  // Vérifier si le mot de passe est correct (simulation ici)
  if (oldPassword === 'ancienMotDePasse' || oldPassword === 'yasser') {
    document.getElementById('stepp1').style.display = 'none';
    document.getElementById('stepp2').style.display = 'block';
  } else {
    document.getElementById('oldPasswordError').style.display = 'block';
  }
}
function updatePassword() {
  
  var newPassword = document.getElementById('newPassword').value;
  console.log('newPassword')
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  if (newPassword !== confirmNewPassword) {
    document.getElementById('passwordMatchError').style.display = 'block';
  } else {
    // Mettre à jour le mot de passe (simuler ici)
    document.getElementById('stepp2').style.display = 'none';
    document.getElementById('stepp3').style.display = 'block';
    console.log(newPassword)
  }
}

function forgotPassword() {
  document.getElementById('stepp1').style.display = 'none';
  document.getElementById('forgot-password-step').style.display = 'block';
}

function sendResetCode() {
  const email = document.getElementById('email').value;
  // Générer et envoyer le code par e-mail ou SMS (simuler ici)
  alert('Un code de réinitialisation a été envoyé à votre adresse e-mail.');
  document.getElementById('forgot-password-step').style.display = 'none';
  document.getElementById('verify-code-step').style.display = 'block';
}

function verifyResetCode() {
  const resetCode = document.getElementById('resetCode').value;
  // Vérifier si le code est correct (simuler ici)
  if (resetCode === '123456') {
    document.getElementById('verify-code-step').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } else {
    document.getElementById('codeVerificationError').style.display = 'block';
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const statusOptions = document.querySelectorAll('input[name="status"]');
  const statusMessage = document.getElementById('status-message');

  // Vérifiez si un statut a été sauvegardé précédemment
  const savedStatus = localStorage.getItem('userStatus');
  if (savedStatus) {
    statusMessage.textContent = `Statut actuel : ${savedStatus}`;
  } else {
    statusMessage.textContent = 'Veuillez choisir le statut de votre compte.';
  }

  // Ajoutez un écouteur d'événements pour chaque bouton radio
  statusOptions.forEach(option => {
    option.addEventListener('change', function() {
      const selectedStatus = document.querySelector('input[name="status"]:checked').value;
      statusMessage.textContent = `Statut actuel : ${selectedStatus}`;
      // Sauvegardez le statut dans le stockage local
      localStorage.setItem('userStatus', selectedStatus);
    });
  });
});

// Sélectionnez les éléments de langue à traduire
const languageTitle = document.getElementById('language-title');
const languageInstruction = document.getElementById('language-instruction');
const frButton = document.getElementById('fr-btn');
const enButton = document.getElementById('en-btn');
const arButton = document.getElementById('ar-btn');

// Écoutez les clics sur les boutons de langue
frButton.addEventListener('click', () => {
// Mettez à jour le contenu pour le français
languageTitle.textContent = 'Langue';
languageInstruction.textContent = 'Choisissez votre langue :';
});

enButton.addEventListener('click', () => {
// Mettez à jour le contenu pour l'anglais
languageTitle.textContent = 'Language';
languageInstruction.textContent = 'Choose your language:';
});

arButton.addEventListener('click', () => {
// Mettez à jour le contenu pour l'arabe
languageTitle.textContent = 'اللغة';
languageInstruction.textContent = 'اختر لغتك :';
});
function selectLanguage(langCode) {
  // Code pour sauvegarder la langue choisie (par exemple, dans un cookie ou localStorage)
  console.log('Langue sélectionnée : ' + langCode);
}

function darckMode() {
  document.getElementById('body').classList.remove("light")
}
function lightMode() {
  document.getElementById('body').classList.add("light")
}