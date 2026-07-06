import indexContext from './pages/index_page';
import productosContext from './pages/productos_page';
import deportesContext from './pages/deportes_page';

export default (page)=>{
    switch(page){
        case '/index.html':
            return indexContext;
        case '/productos.html':
            return productosContext;
        case '/deportes.html':
            return deportesContext;
        default:
            return {};
    }
};