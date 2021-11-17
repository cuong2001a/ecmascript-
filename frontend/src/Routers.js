import HomePage from './pages/home';
import ProductPage from './pages/Product';
import AboutPage from './pages/about';
import AdminProductPage from './pages/Admin/AdminProduct';
import AdminAddProductPage from './pages/Admin/AdminAddProduct';
import AdminEditProduct from './pages/Admin/AdminEditProduct';
import ProductDetailPage from './pages/detailProduct';
import CategoryPage from './pages/CategoryPage';
import AdminCategory from './pages/Admin/AdminCategory';
import AdminAddCategory from './pages/Admin/AdminAddCategory';
import AdminEditCategory from './pages/Admin/AdminEditCategory';
import cartPage from './pages/cart';
import AdminCustomer from './pages/Admin/AdminCustom';
import AdminAddCustom from './pages/Admin/AdminAddCustom';
import signin from './pages/signin';
import signup from './pages/signup';
const Routers = {
    '/': HomePage,
    '/product': ProductPage,
    '/about': AboutPage,
    '/listproduct': AdminProductPage,
    '/addproduct': AdminAddProductPage,
    '/editproduct/:id': AdminEditProduct,
    '/detailproduct/:id': ProductDetailPage,
    '/category/:id': CategoryPage,
    '/listcategories': AdminCategory,
    '/addcategory': AdminAddCategory,
    '/editcategory/:id': AdminEditCategory,
    '/cart': cartPage,
    '/customer': AdminCustomer,
    '/addcustom' : AdminAddCustom,
    '/signin': signin,
    '/signup': signup,
}
export default Routers;
