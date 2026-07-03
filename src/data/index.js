import indexContext from './pages/index_page';
import productosContext from './pages/productos_page';

export default (page)=>{
    switch(page){
        case '/index.html':
            return indexContext;
        case '/productos.html':
            return productosContext;
        default:
            return {};
    }
};