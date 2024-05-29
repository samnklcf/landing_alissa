let footer = 
`
<footer id="footerComponent">
<div class="container">
    <div class="f-items default-padding">
        <div class="row">
            <div class="equal-height col-lg-4 col-md-6 item">
                <div class="f-item about" style="display: flex; flex-direction: column; gap: 10px;">
                    <a class="navbar-brand" href="index.html">
                        <div style="display: flex; ">
                            <img src="assets/img/logo/logoB.png" class="logo" alt="Logo" width="50" height="50"> 
                            <p style="margin: 1px; align-self: center; line-height: 15px;">Alissa <span style="color: #FEB95F;">ia</span></p>
                        </div>
                    </a>
                    <p style="margin-left: 30px; margin-top: 10px;">
                        Nous vous remercions d'avoir pris le temps de visiter notre site de présentation.
                        Si vous avez des questions à nous poser, n'hésitez pas à prendre contact avec notre équipe !
                    </p>
                </div>
            </div>

            <div class="equal-height col-lg-2 col-md-6 item">
                <div class="f-item link">
                    <h4 class="widget-title">Liens Utiles</h4>
                    <ul>
                        <li>
                            <a href="index.html">Accueil</a>
                        </li>
                         
                        <li>
                            <a href="#">Être donnateur</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="equal-height col-lg-2 col-md-6 item">
                <div class="f-item link">
                    <h4 class="widget-title">Services</h4>
                    <ul>
                        <li>
                            <a href="chatbots.html">Création de Chatbots</a>
                        </li>
                        <li>
                            <a href="assistant.html">Création d'Assistants Virtuels</a>
                        </li>
                        <li>
                            <a href="forma-consulting.html">Formation & Consulting</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="equal-height col-lg-4 col-md-6 item">
                <div class="f-item contact">
                    <h4 class="widget-title">Restez Connectés</h4>
                    <p>
                         N'hésitez pas à nous suivre sur nos réseaux sociaux ou à
                         nous contacter via nos coordonnées ci-dessous
                    </p>
                    <div class="address">
                        <ul>
                            <li>
                                <strong>Email:</strong> alissa.ia.ga@gmail.com
                            </li>
                            <li>
                                <strong>Contacts:</strong> +241 74 57 00 40 / +241 74 88 02 67
                            </li>
                        </ul>
                    </div>
                    <ul class="social">
                        <li class="facebook">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="twitter">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="linkedin">
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="row">
            <div class="col-lg-6">
                <p>&copy; <span id="currentYear"></span> Alissa ia. Tous droits réservés.</p>
            </div>
            <div class="col-lg-6 text-right link">
                <ul>
                    <li>
                        <a href="#">Termes & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Politique de Confidentialité</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Shape -->
<div class="footer-shape" style="background-image: url(assets/img/shape/1.svg);"></div>
<!-- End Shape -->
</footer>
`

let footerComp = document.getElementById('footerComponent');
footerComp.innerHTML = footer

function updateCopyrightYear() {
    let currentYearSpan = document.getElementById('currentYear');
    let currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// For modern browsers
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', updateCopyrightYear);
} else if (document.attachEvent) { // For older IE
    document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            updateCopyrightYear();
        }
    });
} else { // As a last resort
    window.onload = updateCopyrightYear;
}