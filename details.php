<?php
   require 'config/config.php';
   require 'config/database.php';
    $db = new Database();
    $con = $db->conectar(); 

    $id = isset($_GET['idProducto']) ? $_GET['idProducto'] : '';
    $token = isset($_GET['token']) ? $_GET['token'] : '';

    if($id == '' || $token == ''){
        echo 'Error';
        exit;
    } else{
        $token_tmp = hash_hmac('sha1', $id, KEY_TOKEN);
        if($token == $token_tmp){
            $sql = $con->prepare("SELECT count(idProducto) FROM productos WHERE idProducto=? AND cantidad=1");
            $sql->execute([$id]);
            if($sql->fetchColumn() > 0){
                $consulta = $con->prepare("SELECT p.producto, p.precio, p.detalles, t.talla FROM productos p, tallas t, tallasproductos tp WHERE p.idProducto=? AND p.idProducto = tp.idProducto AND t.idTalla = tp.idTalla AND p.Cantidad=1;");
                $consulta->execute([$id]); 
                $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC); 

                $sql = $con->prepare("SELECT producto, precio, detalles FROM productos WHERE idProducto=? AND cantidad=1 LIMIT 1;");
                $sql->execute([$id]);  
                $row = $sql->fetch(PDO::FETCH_ASSOC);  

                $producto = $row['producto'];
                $precio = $row['precio'];

                $detalles = $row['detalles'];
                $dir_images = 'imagenes/productos/' . $id . '/';

                $rutaImg = $dir_images . 'img1.jpg';
                $img2 = $dir_images . 'img2.jpg';
                $img3 = $dir_images . 'img3.jpg';

                if(!file_exists($rutaImg)){
                    $rutaImg = 'imagenes/no-imagen.jpg';
                }else if(!file_exists($img2)){
                    $img2 = 'imagenes/no-imagen.jpg';
                    if(!file_exists($img3)){
                        $img3 = 'imagenes/no-imagen.jpg';
                    }
                }
              /*   $imagenes = array();
                $dir = dir($dir_images);

                while(($archivo = $dir->read()) != false){
                    if($archivo != 'img1.jpg' && (strpos($archivo, 'jpg') || strpos($archivo, 'jpeg'))){
                        $imagenes[] =$dir_images . $archivo;
                    }
                }
                $dir->close(); */
            }
        } else {
            echo 'error';
            exit;
        }
    }
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="logos/Group 5.png">
    <link rel="stylesheet" href="css/details.css">
    <link rel="stylesheet" href="css/estilo.css">
    <title>Variedades Mary Cruz</title>
    <link rel="stylesheet" href="css/mediak.css">
    <link rel="stylesheet" href="css/mediadetails.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <!-- ********************** CABECERA DE LA WEB ******************************************** -->
   < <header id="cajacabecera">
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
                    <li class="menum"><a href="contactenos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CONTACTENOS</a></li> 
     <!-- *******************************************SUB MENÚ******************************************* -->
               <li class="menum" ><a href="categorias"><i class="fa-solid fa-caret-down"></i>CATEGORIAS</a>
                        <ul>
                            <li class="ccategoria"><a href="categorias/faldas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">FALDAS</a></li>
                            <li class="ccategoria"><a href="categorias/pantalones.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">PANTALONES</a></li>
                            <li class="ccategoria"><a href="categorias/zapatos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">ZAPATOS</a></li>
                            <li class="ccategoria"><a href="categorias/vestidos.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">VESTIDOS</a></li>
                            <li class="ccategoria"><a href="categorias/blusas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">BLUSAS</a></li>
                            <li class="ccategoria"><a href="categorias/camisas.php?token=<?php echo hash('sha1', KEY_TOKEN); ?>">CAMISAS</a></li>
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
     <div class="detalles" >
            <div class="respon2">
                <div class="contenedor">
                    <div class="imagenProduct">
                        <div id="foto1">
                             <img src="<?php echo $rutaImg; ?>"> 
                             <div class="flechas">
                                <a href="#foto3"><i class="fa-solid fa-arrow-left"></i></a>
                                <a href="#foto2"><i class="fa-solid fa-arrow-right"></i></a>
                             </div>
                        </div>
                        <div id="foto2">
                             <img src="<?php echo $img2; ?>"> 
                             <div class="flechas">
                                <a href="#foto1"><i class="fa-solid fa-arrow-left"></i></a>
                                <a href="#foto3"><i class="fa-solid fa-arrow-right"></i></a>
                             </div>                        
                        </div>
                        <div id="foto3">
                            <img src="<?php echo $img3; ?>"> 
                             <div class="flechas">
                                <a href="#foto2"><i class="fa-solid fa-arrow-left"></i></a>
                                <a href="#foto1"><i class="fa-solid fa-arrow-right"></i></a>
                             </div>                        
                        </div>
                    </div> 
                    <div class="DetallesProductos">
                        <h5 class="p-nombre"><?php echo $producto; ?></h5>
                        <h4 class="p-precio"> <?php echo MONEDA . number_format($precio, 2, '.', ','); ?> </h4>
                        <?php
                            /* $consulta = $con->prepare("SELECT p.producto, p.precio, p.detalles, t.talla FROM productos p, tallas t, tallasproductos tp WHERE p.idProducto = tp.idProducto AND t.idTalla = tp.idTalla");
                            $consulta->execute();
                            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);   */
                         ?> 
                        <p class="talle">Talla  
                            <div class="p-tallas"><?php foreach($resultado as $row){ ?>
                                <div class="tallas"> <?php echo   $talla = $row['talla']; ?>
                                </div><?php } ?>
                            </div>
                        </p> 
                        <p class="p-detalles"><?php echo $detalles; ?></p>
                        <div class="button">
                            <div class="comprarAhora"><a href="">Comprar ahora</a></div>
                            <div class="AgregarCarrito"><a href="">Agregar al carrito</a></div>
                        </div>
                    </div>
            </div>
        </div>
         <!-- *******************************************Más productos******************************************* -->
        <div class="Lo-nuevo" >
            <?php
                $sql = $con->prepare("SELECT idProducto, producto, precio FROM productos WHERE cantidad=1 AND month(fechaEntrada)=06 LIMIT 4");
                $sql->execute();
                $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);  
           ?> 
            <h1>Más productos</h1>
            <div class="respon">
            <?php foreach($resultado as $row){ ?>
                <div class="container">
                    <div class="imagenProducto">
                    <?php
                        $id= $row['idProducto'];
                        $imagen = "imagenes/productos/$id/img1.jpg";

                        if(!file_exists($imagen)){
                            $imagen = "imagenes/no-imagen.jpg";
                        } 
                        ?>
                        <img src="<?php echo $imagen; ?>"> 
                    </div>
                    <div class="ADetallesProductos">
                        <h5 class="nombre"> <?php  echo $row['producto']; ?></h5>
                        <h4 class="precio"> <?php echo MONEDA . number_format($row['precio'], 2, '.', ','); ?> </h4>
                    </div>
                    <div class="botones">
                    <div class="detallesMas"><a href="details.php?idProducto=<?php echo $row['idProducto']; ?>&token=<?php echo hash_hmac('sha1', $row['idProducto'], KEY_TOKEN); ?>">Detalles</a></div>

                        <button class="Agregar"><a href="">Agregar</a></button>
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
</body>
</html>