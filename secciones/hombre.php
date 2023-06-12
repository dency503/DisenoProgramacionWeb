<?php
   require '../config/config.php';
   require '../config/database.php';
    $db = new Database();
    $con = $db->conectar(); 
 
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../logos/Group 5.png">
    <link rel="stylesheet" href="../css/estilo.css">
    <title>Variedades Mary Cruz</title>
    <link rel="stylesheet" href="../css/mediak.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- ********************** CABECERA DE LA WEB ******************************************** -->
    <header id="cajacabecera">
        <div id="cabecera">
           <figure id="logo">
                <a href=""><img src="../logos/Frame 2.png" alt="logo Variedades Mary Cruz"></a>
            </figure> 
            <!-- *******************************************MENÚ******************************************* -->
                     <input type="checkbox" id="btn-menu">
                    <label for="btn-menu" id="mmovil"><i class="fa-solid fa-bars"></i></label>  
                <nav class="menu">
                <ul>
                    <li class="menum"><a href="../index.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">INICIO</a></li>
                    <li class="menum"><a href="../nosotros.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">NOSOTROS</a></li>
                    <li class="menum"><a href="../cuenta.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CUENTA</a></li>
                    <li class="menum"><a href="../contactenos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>"">CONTACTENOS</a></li>
     <!-- *******************************************SUB MENÚ******************************************* -->
                  <li class="menum" ><a href="categorias"><i class="fa-solid fa-caret-down"></i>CATEGORIAS</a>
                        <ul>
                            <li class="ccategoria"><a href="../categorias/faldas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">FALDAS</a></li>
                            <li class="ccategoria"><a href="../categorias/pantalones.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">PANTALONES</a></li>
                            <li class="ccategoria"><a href="../categorias/zapatos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">ZAPATOS</a></li>
                            <li class="ccategoria"><a href="../categorias/vestidos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">VESTIDOS</a></li>
                            <li class="ccategoria"><a href="../categorias/blusas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">BLUSAS</a></li>
                            <li class="ccategoria"><a href="../categorias/camisas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CAMISAS</a></li>
                            <li class="ccategoria"><a href="../categorias/accesorios?token=<?php echo hash('sha1', KEY_TOKEN); ?>">ACCESORIOS</a></li>
                            <li class="ccategoria"><a href="../categorias/bolsos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">BOLSOS</a></li>
                        </ul>
                </li>
                <li><a href="carrito" class="carro"> <i class="fa-solid fa-cart-shopping"></i>Carrito</a></li>
                </ul>
            </nav>
        </div>
    </header>  
     <!-- *******************************************CARRUSEL******************************************* -->

    <div class="slider-frame">
   <div class="slides">
         <input type="radio" name="radio-btn" id="radio1">
        <input type="radio" name="radio-btn" id="radio2">
        <input type="radio" name="radio-btn" id="radio3">
        <input type="radio" name="radio-btn" id="radio4">
        <div class="slide first">
            <img src="../imagenCarrusel/img1.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../imagenCarrusel/img2.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../imagenCarrusel/img3.jpg" alt="">
        </div>
        <div class="slide">
            <img src="../imagenCarrusel/img4.jpg" alt="">
        </div>
        </div>
        <div class="nav-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
       </div>
   </div> 
     <!-- *******************************************PRODUCTOS******************************************* -->
     <main>
        <div id="p-mujer" >
        <?php
            $sql = $con->prepare("SELECT idProducto, producto, precio, detalles FROM productos WHERE cantidad=1 AND seccion='Hombre' OR seccion='Unisex' ");
            $sql->execute();
            $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);  
        ?>
            <h1>HOMBRE</h1>
            <div class="respon">
            <?php foreach($resultado as $row){ ?>
                <div class="container">
                    <div class="imagenProducto">
                    <?php
                        $id= $row['idProducto'];
                        $imagen = "../imagenes/productos/$id/img1.jpg";

                        if(!file_exists($imagen)){
                            $imagen = "../imagenes/no-imagen.jpg";
                        } 
                        ?>
                        <img src="<?php echo $imagen; ?>"> 
                    </div> 
                    <div class="ADetallesProductos">
                        <h5 class="nombre"> <?php  echo $row['producto']; ?></h5>
                        <h4 class="precio"> $ <?php echo $row['precio']; ?> </h4>
                    </div>
                    <div class="botones">
                        <div class="detallesMas"><a href="../details.php?idProducto=<?php echo $row['idProducto']; ?>&token=<?php echo hash_hmac('sha1', $row['idProducto'], KEY_TOKEN); ?>">Detalles</a></div>
                        
                        <div class="Agregar"><a href="">Agregar</a></div>
                    </div> 
                </div>
                <?php } ?>
            </div>
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
  <script src="js/main.js"></script>
</body>
</html>