<?php
   require 'config/config.php';
   require 'config/database.php';
    $db = new Database();
    $con = $db->conectar(); 
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="logos/Group 5.png">
    <link rel="stylesheet" href="css/estilo.css">
    <title>Variedades Mary Cruz</title>
    <link rel="stylesheet" href="css/mediak.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- ********************** CABECERA DE LA WEB ******************************************** -->
    <header id="cajacabecera">
        <div id="cabecera">
           <figure id="logo">
                <a href=""><img src="logos/Frame 2.png" alt="logo Variedades Mary Cruz"></a>
            </figure> 
            <!-- *******************************************MENÚ******************************************* -->
                     <input type="checkbox" id="btn-menu">
                    <label for="btn-menu" id="mmovil"><i class="fa-solid fa-bars"></i></label>  
                <nav class="menu">
                <ul>
                    <li class="menum"><a href="index.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">INICIO</a></li>
                    <li class="menum"><a href="nosotros.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">NOSOTROS</a></li>
                    <li class="menum"><a href="cuenta.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CUENTA</a></li>
                    <li class="menum"><a href="#contactenos?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CONTACTENOS</a></li>
     <!-- *******************************************SUB MENÚ******************************************* -->
                  <li class="menum" ><a href="categorias"><i class="fa-solid fa-caret-down"></i>CATEGORIAS</a>
                        <ul>
                            <li class="ccategoria"><a href="categorias/faldas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">FALDAS</a></li>
                            <li class="ccategoria"><a href="categorias/pantalones.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">PANTALONES</a></li>
                            <li class="ccategoria"><a href="categorias/zapatos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">ZAPATOS</a></li>
                            <li class="ccategoria"><a href="categorias/vestidos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">VESTIDOS</a></li>
                            <li class="ccategoria"><a href="categorias/blusas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">BLUSAS</a></li>
                            <li class="ccategoria"><a href="categorias/categorias/camisas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CAMISAS</a></li>
                            <li class="ccategoria"><a href="categorias/accesorios.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">ACCESORIOS</a></li>
                            <li class="ccategoria"><a href="categorias/bolsos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">BOLSOS</a></li>
                        </ul>
                </li>
                <li><a href="carrito" class="carro"> <i class="fa-solid fa-cart-shopping"></i>Carrito</a></li>
                </ul>
            </nav>
        </div>
    </header>  
 
     <!-- *******************************************PRODUCTOS******************************************* -->
    <main>
        <div class="pcontactenos">
        <p id="contactenos">
            <h4>¡Contáctenos y háganos saber su opinión!</h4>
        En Variedades Mary Cruz, valoramos la opinión de nuestros clientes y estamos aquí para responder a 
        cualquier pregunta o inquietud que puedas tener. Queremos asegurarnos de brindarte el mejor servicio 
        posible y ayudarte en todo lo que necesites. Si tienes alguna consulta sobre nuestros productos, 
        sugerencias para mejorar nuestra tienda en línea o simplemente deseas compartir tus comentarios, no 
        dudes en ponerte en contacto con nosotros. ¡Estamos ansiosos por escucharte!
            <br><br>
            Información de contacto adicional:
                <br>
            Número de teléfono: 503 2440 6032
            <br>
            Horario de atención al cliente: 9 a.m. - 4 p.m.
        <br><br>
            Siguenos también en nuestras redes sociales:
            <ul class="redes">
                <li><a href=""><i class="fa-brands fa-instagram"></i> MaryCruz</a></li>
                <li><a href=""><i class="fa-brands fa-facebook"></i> Variedades Mary Cruz</a></li>
                <li><a href=""><i class="fa-brands fa-whatsapp"></a></i> 503 6070 2346</li>
            </ul>
        </p>
        </div>
  </main>
 <footer id="piepagina">
        <p>Encuéntranos en:</p>
        <ul>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-whatsapp"></a></i></li>
        </ul>
        <p> © Variedades Mary Cruz. Todos los derechos reservados.</p>
 </footer>
</body>
</html>