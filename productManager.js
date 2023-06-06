
//Se define la clase productManager
class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products: []
        }

        //Aquí el control de flujo creará un id a la instancia 'products' una vez que se instancee 'addProducts'
        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products [this.products.length-1 ].id + 1
        }

        this.products.push(product);
    }

    getProductById = (idProduct) => {
        //Para utilizar el método 'findIndex' debemos pasar una 'testing function'. Esto va a devolver el primer elemento que cumpla con el testeo de la función (en este caso será el primer idex).
        const productIndex = this.products.findIndex(product => product.id === idProduct);

        //Si el método 'findIndex' no encuentra ningun elemento, entonces retornará '-1' como resultado.
        if(productIndex === -1) {
            console.log('Not Found');
            return;
         } 

        this.products[productIndex].products.push(idProduct)
    }
}

const productHandler = new ProductManager();

productHandler.addProduct('Producto 1', 'Producto 1', 10, 'Sin Imagen', 'Codigo Producto 1', 30);
productHandler.addProduct('Producto 2', 'Producto 2', 10, 'Sin Imagen', 'Codigo Producto 2', 30);
productHandler.addProduct('Producto 3', 'Producto 3', 10, 'Sin Imagen', 'Codigo Producto 3', 30);

productHandler.getProductById(1);
productHandler.getProductById(2);
productHandler.getProductById(3);

console.log(productHandler.getProducts());