import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Table, Button, Container, Modal, ModalBody, FormGroup, Input, ModalFooter, ModalHeader, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import swal from 'sweetalert'

export const ListCategory = () => {
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [lastId, setLastId] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const initialForm = {
        name: '',
        description: '',
        imageName: '',
        price: '',
        urlImage: '',
        categoria: '',
        eliminado: false,
        esEnOferta: false,
        unidadesDisponibles: '',
        brand: ''
    };

    const [form, setForm] = useState(initialForm)

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };


    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)



    const handleChange = useCallback(({ target: { name, value, type, checked } }) => {
        const inputValue = type === 'checkbox' ? checked : value;
        setForm({
            ...form,
            [name]: value,
            [name]: inputValue,
        })
    }, [form]);

    const handleBlur = useCallback((e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }, [form, handleChange]);

    const showSuccessAlert = () => {
        swal({
            title: "Enviando Formulario",
            icon: "success",
            button: "Acepted"
        });
    }

    const showWarningAlert = () => {
        swal({
            title: "Errores del Formulario",
            icon: "warning",
            button: "Acepted"
        });
    }

    const showErrorAlert = () => {
        swal({
            title: "Debes llenar el formulario",
            icon: "error",
            button: "ok"
        });
    }

    const ocultarModalInsertar = () => {
        setModalInsertar(false);
        limpiarFormulario();
    };

    const mostrarModalEditar = (id) => {
        fetchProduct(id);


    };

    const ocultarModalEditar = () => {
        setModalEditar(false);
    };

    const { query } = useParams();
    const [products, setProductos] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [query]);

    const fetchProducts = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/product/all`)
            .then(response => {
                setProductos(response.data);
                const maxId = response.data.reduce((max, product) => Math.max(max, product.id), 0);
                setLastId(maxId);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchProduct = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/${id}`);
            setLastId(response.data.id);
            form.name = response.data.name;
            form.description = response.data.description;
            form.imageName = response.data.imageName;
            form.price = response.data.price;
            form.urlImage = response.data.urlImage;
            form.categoria = response.data.categoria;
            form.eliminado = response.data.eliminado;
            form.esEnOferta = response.data.esEnOferta;
            form.unidadesDisponibles = response.data.unidadesDisponibles;
            form.brand = response.data.brand;
            setModalEditar(true);
        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        fetchCategorias();
    }, []);

    const fetchCategorias = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/`)
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const validateForm = (form) => {
        let errors = {};

        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;

        if (typeof form.name === 'string' && !form.name.trim()) {
            errors.name = "El campo 'nombre' es requerido";
        } else if (typeof form.name === 'string' && !regexName.test(form.name.trim())) {
            errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
        }

        if (typeof form.description === 'string' && !form.description.trim()) {
            errors.description = "El campo 'descripcion' es requerido";
        }

        if (typeof form.imageName === 'string' && !form.imageName.trim()) {
            errors.imageName = "El campo 'descripcion de la imagen' es requerido";
        }

        if (typeof form.urlImage === 'string' && !form.urlImage.trim()) {
            errors.urlImage = "El campo 'URL de la imagen' es requerido";
        } else if (typeof form.urlImage === 'string' && !regexUrl.test(form.urlImage.trim())) {
            errors.urlImage = "El campo 'URL de la imagen' no es válido";
        }

        if (typeof form.price === 'string' && !form.price.trim()) {
            errors.price = "El campo 'precio' es requerido";
        } else if (isNaN(form.price)) {
            errors.price = "El campo 'precio' debe ser un número";
        }

        if (typeof form.categoria === 'string' && !form.categoria.trim()) {
            errors.categoria = "El campo 'categoria' es requerido";
        }

        if (typeof form.unidadesDisponibles === 'string' && !form.unidadesDisponibles.trim()) {
            errors.unidadesDisponibles = "El campo 'unidades disponibles' es requerido";
        } else if (isNaN(form.unidadesDisponibles)) {
            errors.unidadesDisponibles = "El campo 'unidades disponibles' debe ser un número";
        }

        if (typeof form.brand === 'string' && !form.brand.trim()) {
            errors.brand = "El campo 'marca' es requerido";
        }

        return errors;
    };
    const limpiarFormulario = () => {
        setForm(initialForm);
    };
    const insertarProducto = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            setLoading(true);

            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/product/add`, form, {
                    headers: { 'Content-Type': 'application/json' }
                });

                console.log(res.data);
                ocultarModalInsertar();
                fetchProducts();
                setLoading(false);
                setResponse(true);
                limpiarFormulario();
                showSuccessAlert();
                swal("¡Éxito!", "El producto se ha agregado correctamente", "success");
            } catch (err) {
                console.error(err);
                showWarningAlert();
            }
        } else {
            swal("¡Éxito!", "El producto se ha agregado correctamente", "success");
        }
    };





    const updateProduct = () => {
        const productToUpdate = {
            ...form
        };

        axios.put(`${process.env.REACT_APP_API_URL}/api/product/${lastId}`, productToUpdate)
            .then(response => {

                setLoading(false);
                setModalEditar(false);

                fetchProducts();
                swal("¡Éxito!", "El producto se ha actualizado correctamente", "success");
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                swal("¡Error!", "Ocurrió un error al actualizar el producto", "error");
            });

            
        limpiarFormulario();
    };



    const deleteProduct = (productId) => {
        swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, no podrás recuperar este producto",
            icon: "warning",
            buttons: ["Cancelar", "Eliminar"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/api/product/${productId}`)
                        .then(response => {
                            setResponse(response.data);
                            fetchProducts();
                            swal("¡Éxito!", "El producto se ha eliminado correctamente", "success");
                        })
                        .catch(error => {
                            console.error(error);
                            swal("¡Error!", "Ocurrió un error al eliminar el producto", "error");
                        });
                }
            });
    };
    return (
        <Container>
            <h1>Lista de productos</h1>

            <Button color="success" onClick={mostrarModalInsertar}>Agregar Producto</Button>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (

                        <tr key={product.id}>


                            <td>{product.id}</td>
                            <td><img src={product.urlImage} style={{ maxHeight: "200px" }} alt={product.imageName}></img></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.unidadesDisponibles}</td>
                            <td><span>$</span>{product.price}</td>
                            <td>{product.categoria.name}</td>
                            <td>
                                <Button color='primary' onClick={() => mostrarModalEditar(product.id)}>Editar</Button>
                                {product.eliminado ? (
                                  null // <Button color='success' onClick={() => handleActivar(product.id)}>Activar</Button>
                                ) : (
                                    <Button color='danger' onClick={() => deleteProduct(product.id)}>Eliminar</Button>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>



            {/* Modal para insertar */}
            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Agregar Producto</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>ID:</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={lastId + 1}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre:</label>
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.name}
                        />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Descripción:</label>
                        <input
                            className="form-control"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.description}
                        />
                        {errors.description && <p className="text-danger">{errors.description}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen:</label>
                        <input
                            className="form-control"
                            name="imageName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.imageName}
                        />
                        {errors.imageName && <p className="text-danger">{errors.imageName}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen Url:</label>
                        <input
                            className="form-control"
                            name="urlImage"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.urlImage}
                        />
                        {errors.urlImage && <p className="text-danger">{errors.urlImage}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Precio:</label>
                        <input
                            className="form-control"
                            name="price"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.price}
                        />
                        {errors.price && <p className="text-danger">{errors.price}</p>}
                    </FormGroup>

                    <FormGroup>
                        <div>
                            <label>Categoria:</label>

                            <select name='categoria' value={form.categoria.id} onChange={handleChange} onBlur={handleBlur}>
                                <option value="">Seleccione una categoría</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                ))}
                            </select>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <label>Unidades Disponibles:</label>
                        <input
                            className="form-control"
                            name="unidadesDisponibles"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.unidadesDisponibles}
                        />
                        {errors.unidadesDisponibles && <p className="text-danger">{errors.unidadesDisponibles}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Marca:</label>
                        <input
                            className="form-control"
                            name="brand"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.brand}
                        />
                        {errors.brand && <p className="text-danger">{errors.brand}</p>}
                    </FormGroup>
                    <FormGroup>
                        <label>Oferta:</label>

                        <input

                            name="esEnOferta"
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={form.esEnOferta}
                        />
                    </FormGroup>

                    
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={insertarProducto}>Agregar</Button>
                    <Button className="btn btn-danger" onClick={ocultarModalInsertar}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            {/* Modal para editar */}
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>EditarProducto</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>ID:</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={lastId}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre:</label>
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.name}
                        />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Descripción:</label>
                        <input
                            className="form-control"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.description}
                        />
                        {errors.description && <p className="text-danger">{errors.description}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen:</label>
                        <input
                            className="form-control"
                            name="imageName"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.imageName}
                        />
                        {errors.imageName && <p className="text-danger">{errors.imageName}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Imagen Url:</label>
                        <input
                            className="form-control"
                            name="urlImage"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.urlImage}
                        />
                        {errors.urlImage && <p className="text-danger">{errors.urlImage}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Precio:</label>
                        <input
                            className="form-control"
                            name="price"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.price}
                        />
                        {errors.price && <p className="text-danger">{errors.price}</p>}
                    </FormGroup>

                    <FormGroup>
                        <div>
                            <label>Categoria:</label>

                            <select name='categoria' value={form.categoria.id} onChange={handleChange} onBlur={handleBlur}>
                                <option value="">Seleccione una categoría</option>
                                {categorias.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                ))}
                            </select>
                        </div>
                    </FormGroup>




                    <FormGroup>
                        <label>Unidades Disponibles:</label>
                        <input
                            className="form-control"
                            name="unidadesDisponibles"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.unidadesDisponibles}
                        />
                        {errors.unidadesDisponibles && <p className="text-danger">{errors.unidadesDisponibles}</p>}
                    </FormGroup>

                    <FormGroup>
                        <label>Marca:</label>
                        <input
                            className="form-control"
                            name="brand"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.brand}
                        />
                        {errors.brand && <p className="text-danger">{errors.brand}</p>}
                    </FormGroup>

                    <FormGroup>
                        <Label>Oferta:</Label>
                        <Input
                            className="form-control"
                            name="esEnOferta"
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={form.esEnOferta}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>eliminado:</label>

                        <input

                            name="eliminado"
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={form.eliminado}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={updateProduct}>Agregar</Button>
                    <Button className="btn btn-danger" onClick={ocultarModalEditar}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ProductoLista;
