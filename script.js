document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('generateForm');
    const loader = document.getElementById('loader');
    const output = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');
    const saveButton = document.getElementById('saveButton');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      loader.classList.remove('hidden');
      output.textContent = '';
      
      const nom = document.getElementById('nom').value;
      const age = document.getElementById('age').value;
      const genre = document.getElementById('genre').value;
      // Retrieve other form fields here
  
      const requestData = {
        data: `
          Rédige moi une demande d'embauche avec les informations suivantes:
          Mon nom: ${nom},
          genre: ${genre},
          Mon âge: ${age} ans
          // Include other fields here
        `
      };
  
      fetch('https://alissabackfluid.onrender.com/api/alissa', { // Replace with your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      })
      .then(response => response.json())
      .then(data => {
        loader.classList.add('hidden');
        output.textContent = data;
        console.log(data) // Adjust based on API response structure
        copyButton.classList.remove('hidden');
        saveButton.classList.remove('hidden');
      })
      .catch(error => {
        loader.classList.add('hidden');
        output.textContent = 'Il y a un problème de connexion. Veuillez réessayer.';
      });
    });
  
    copyButton.addEventListener('click', function() {
      navigator.clipboard.writeText(output.textContent);
      copyButton.textContent = 'Copié !';
      setTimeout(() => {
        copyButton.textContent = 'Copier';
      }, 2000);
    });
  
    
  });