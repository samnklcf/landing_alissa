

const form = document.getElementById("form");
      const result = document.getElementById("result");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.innerHTML = '<div class="custom-loader"></div>';
        

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        })
          .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                    swal({
                        title: 'Envoyé avec succès',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    result.style.display = "none";
                
              
            } else {
              console.log(response);
              result.style.display = "none";
              
              swal({
                title: 'Erreur',
                text: "Une erreur s'est produite",
                icon: 'error',
                confirmButtonText: 'OK'
            });
            }
          })
          .catch((error) => {
            console.log(error);
            
            swal({
                title: 'Erreur',
                text: "Une erreur s'est produite",
                icon: 'error',
                confirmButtonText: 'OK'
            });
            result.style.display = "none";
          })
          .then(function () {
            form.reset();
            
            
          });
      });