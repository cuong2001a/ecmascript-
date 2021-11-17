import { $ } from '../utils'
import Header from '../component/header';
import Footer from '../component/footer';
import categoryAPI from '../api/categoryAPI';
import productAPI from '../api/productAPI';
const HomePage = {
    async render() {
        const { data: categories } = await categoryAPI.list();
        console.log(categories);
        const { data: products } = await productAPI.limit8();
        console.log(products)
        const result_products = products.map(product => {
            return /*html*/`
             
            <div class="relative group overflow-hidden">
                <div
                    class="flex justify-center items-center transition duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-12">
                    <a href="/#/detailproduct/${product.id}">
                        <img src="${product.images}"
                            alt="">
                    </a>
                </div>
                <div class="transition duration-700 ease-in-out transform translate-y-0 group-hover:-translate-y-8">
                    <h4 class="text-xl font-bold"><a href="/#/detailproduct/${product._id}">${product.name}</a></h4>
                    <span class="flex">
                        
                        <p class="text-lg">${product.price} đ</p>
                    </span>
                </div>
                <div class="transition duration-1000 ease-in-out transform translate-y-64 group-hover:-translate-y-4 ">
                    <div class="flex justify-between">
                        <a href="#" class="md:px-5 md:py-2 px-2 py-1 bg-black rounded-md"><i
                                class="fas fa-heart text-white "></i></a>
                        <a href="#"
                            class="md:px-5 md:py-2 px-2 py-1 bg-black rounded-md text-white font-medium mx-2 uppercase">Add
                            to
                            card</a>
                        <a href="#" class="md:px-5 md:py-2 px-2 py-1 bg-black rounded-md"><i
                                class="fas fa-search text-white"></i></a>
                    </div>
                </div>
            </div>
       
        `
        }).join("");
        const result_category = categories.map(category => {
            return /*html*/`
        <div class="col-span-3">
        <div class="text-center">
            <div class="popular-img relative">
                <img src="${category.images}" style="width:-webkit-fill-available" alt="">
                <div class="absolute block w-full bottom-0 py-5 bg-gray-700 opacity-70 text-white text-2xl">
                    <span>${category.name}</span>
                </div>
                <div class="absolute  left-16 px-9 py-3 rounded-md  opacity-100 top-1/2 text-white bg-purple-700 mx-4">
                    <a href="/#/category/${category.id}" id="btn">Mua ngay</a>
                </div>
            </div>
        </div>
    </div>
        `
        }).join('');
        return /*html*/`
            ${Header.render()}
        <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-5 mt-9">
             ${result_category}
            </div>
         <div class="arial text-center mt-28">
                <div>
                    <h1 class="text-indigo-600 text-5xl font-serif font-bold">
                        Sản phẩm</h1>
                </div>
                <div class="container mx-auto mt-5 px-4 xl:px-0">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8">
                        ${result_products}
                    </div> 
                </div>
                
                 <div class="flex justify-center">
                    <a href="/#/product" class="px-5 py-2 mt-9 bg-white border-purple-500 border-2 text-2xl  font-serif text-purple-400">Xem thêm</a>
                </div>
                <div class="my-14 relative text-center">
                    <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/vach-da.jpg?is-pending-load=1" class="w-2/3 mx-auto h-auto relative" alt="">
                    <div class="absolute flex flex-col items-center top-1/4 ml-96  text-center">
                        <span class=" text-6xl uppercase text-white mb-5">collection houses <br> our
                            first-ever</span> <br><br>
                        <a href="/#/about" class="px-5 py-2 bg-purple-400 w-max text-2xl  font-serif text-white">About us</a>
                    </div>
                </div>
            </div>
        </div> 
        ${Footer.render()}
       `
    },
    async afterRender(){
        return `
            ${Header.afterRender()}
        `
    }
}
export default HomePage;