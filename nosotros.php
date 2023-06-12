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
                    <li class="menum"><a href="#nosotros?token=<?php echo hash('sha1', KEY_TOKEN); ?>">NOSOTROS</a></li>
                    <li class="menum"><a href="cuenta.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CUENTA</a></li>
                    <li class="menum"><a href="contactenos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CONTACTENOS</a></li>
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
        <div class="pnosotros">
        <p id="nosotros">
        En Variedades Mary Cruz, nos enorgullece ofrecerte una amplia variedad de productos de moda que 
        seguramente satisfarán tus necesidades y estilo personal. Nos dedicamos a brindar una experiencia 
        de compra única, donde podrás encontrar una extensa selección de camisas, vestidos, pantalones, 
        accesorios, bolsas y mucho más. Nuestro objetivo es ayudarte a expresar tu personalidad a través de 
        la moda, brindándote opciones de calidad y estilo a precios accesibles.
            <br><br>
        Creemos que la moda no se trata solo de seguir tendencias, sino de encontrar tu propia identidad y 
        comodidad. Nos esforzamos por ofrecerte productos que se ajusten a tu estilo de vida y te hagan sentir 
        confianza en cada ocasión. Trabajamos con marcas reconocidas y diseñadores emergentes para ofrecerte 
        una amplia gama de opciones que se adapten a diferentes gustos y preferencias. Ya sea que estés 
        buscando una prenda elegante para una ocasión especial o ropa casual para el día a día, estamos aquí 
        para ayudarte a encontrar lo que necesitas.
        <br><br>
        Nos esforzamos por mantenernos al día con las últimas tendencias y novedades en el mundo de la moda, 
        para que siempre encuentres opciones frescas y actualizadas en nuestra tienda. Queremos ser tu destino 
        favorito para descubrir nuevas piezas de moda y accesorios que te inspiren a crear tus propios looks 
        únicos.
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