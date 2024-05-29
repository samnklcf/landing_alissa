let headerComponent = `

<!-- Start Navigation -->
<nav class="navbar navbar-default navbar-fixed-light attr-border navbar-fixed dark no-background bootsnav">

    <!-- Start Top Search -->
    <div class="container">
        <div class="row">
            <div class="top-search">
                <div class="input-group">
                    <form action="#">
                        <input type="text" name="text" class="form-control" placeholder="Search">
                        <button type="submit">
                            <i class="ti-search"></i>
                        </button>  
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Top Search -->

    <div class="container">

        <!-- Start Atribute Navigation -->
        <div class="attr-nav">
            <ul>
                <li class="side-menu"><a href="#"><i class="ti-menu-alt"></i></a></li>
            </ul>
        </div>        
        <!-- End Atribute Navigation -->

        <!-- Start Header Navigation -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index.html">
                <div style="display: flex; ">
                    <img src="assets/img/logo/logoB.png" class="logo" alt="Logo" width="40" height="40"> 
                    <p style="margin: 1px; align-self: center; line-height: 15px;">Alissa <span style="color: #FEB95F;">ia</span></p>
                </div>
            </a>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">

                <li >
                    <a href="./index.html">Accueil</a>  
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Alissa IA</a>
                    <ul class="dropdown-menu">
                        <li><a href="apropos.html">À Propos</a></li>
                        <li><a target="_blank" href="#">Être donnateur</a></li>
                        <!-- <li><a href="404.html">Error Page</a></li> -->
                    </ul>
                </li>
                <li >
                    <a href="services.html" class="dropdown-toggle" data-toggle="dropdown" >Services</a>
                    
                </li>
               
                <li>
                    <a href="contact.html">Contact</a>
                </li>

                <!-- LOGIN AND SIGN UP BUTTONS -->
        

                

                <!-- END LOGIN AND SIGN UP BUTTONS -->
            </ul>
        </div><!-- /.navbar-collapse -->
    </div>

   <!-- Start Side Menu -->
<div class="side">
    <a href="#" class="close-side"><i class="ti-close"></i></a>
    <div class="widget">
        <h4 class="title" style="color: #232323;">Nous contacter</h4>
        <ul class="contact">
            <li>
                <div class="icon">
                    <i class="flaticon-email"></i>
                </div>
                <div class="info" style="color: rgb(170, 170, 170)">
                    <span>Email</span> alissa.ia.ga@gmail.com
                </div>
            </li>
            <li>
                <div class="icon">
                    <i class="flaticon-call-1"></i>
                </div>
                <div class="info" style="color: rgb(170, 170, 170)">
                    <span>Téléphone</span> +241 74 57 00 40 <br> +241 74 88 02 67
                </div>
            </li>
            <li>
                <div class="icon">
                    <i class="flaticon-countdown"></i>
                </div>
                <div class="info" style="color: rgb(170, 170, 170)">
                    <span>Heures d'ouverture</span> Lun - Sam : 9:00 - 17:00
                </div> 
            </li>
        </ul>
    </div>
    
    <div class="widget social">
        <h4 class="title" style="color: #232323;">Nos Réseaux</h4>
        <ul class="link">
            <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
</div>
<!-- End Side Menu -->
</nav>
<!-- End Navigation -->


<!-- End Header -->
`
let header = document.getElementById('header');
header.innerHTML = headerComponent
