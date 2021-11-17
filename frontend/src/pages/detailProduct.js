import { $, parseRequestUrl } from '../utils'
import Header from '../component/header'
import Footer from '../component/footer'
import productAPI from '../api/productAPI'
const ProductDetailPage = {
    async render() {
        const {id} = parseRequestUrl();
        const { data: item} = await productAPI.read(id);   
        
        const { data:products } = await productAPI.limit5();
        const result = products.map(product =>{
            return `
            <a class="block px-8 py-5 border-b border-gray-500 hover:bg-gray-400" href='/#/detailproduct/${product._id}'> 
                <div class="flex justify-between gap-5 items-center">
                    <img class="w-20 h-20" src="${product.image}"/>
                    <div>
                        <span>${product.name}</span>
                        <span>${product.price}</span>

                    </div>
                    
                </div>
            </a>
            `
        })
        return /*html**/`
            ${Header.render()}
            <div class="container mx-auto my-24">
                <div class="grid grid-cols-12 gap-5">
                    <div class='col-span-3'>
                        <div class="rounded-md bg-gray-100 pt-4 m-2 overflow-hidden">
                        <h1 class="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 bg-gray-200 rounded-md">Sản phẩm hot</h1>
                            <div class=" items-center px-3 py-2 text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                                ${result}
                            </div>
                    
                        </div>
                    </div>
                    <div class='col-span-9'>
                        <div class='grid grid-cols-12 gap-4'>
                            <div class='col-span-6'>
                                <img class="w-full h-80 object-cover" src='${item.images}'/>
                            </div>
                            <div class="col-span-6">
                                
                                <span class='block text-2xl mb-4'>${item.name}</span> 
                                <span class=' block text-base text-blue-500'>${item.price}đ</span>
                                    <p class='text-sm my-6'>
                                    ${item.description}
                                    </p>
                                <span class="flex gap-5">
                                <label for="" class='text-sm'>Số lượng </label> 
                                    <input type="number" class='quanity border border-2 border-black border-solid w-28 h-7' start="1"/>
                                </span>
                                <div class=' my-6 flex gap-5'>
                                    <a id="buy"  class="btn flex w-max px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                        <span>Thêm vào giỏ hàng</span>
                                    </a>
                                    <a class="flex px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Mua hàng</span>
                                </a>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            ${Footer.render()}
        `
    },
    async afterRender(){
        const {id} = parseRequestUrl();
        console.log(id);
        let cart = [];
        $('#buy').addEventListener('click',async e =>{
            e.preventDefault();
            let quanity = document.querySelector(".quanity").value;
            let a =quanity*1;
           
            let storage = localStorage.getItem('id');
            if(storage){
                cart = JSON.parse(storage);
                
            }
            console.log(cart)
            const {data :product} = await productAPI.read(id);
            console.log(product)
            const item = cart.find(item=> item._id == id);
            console.log(item)
            if(item){
                item.quantity +=1;
                alert("Thêm vào giỏ hàng thành công");
            }else{
                cart.push(product);
                alert("Thêm vào giỏ hàng thành công");
            }
            localStorage.setItem("id",JSON.stringify(cart));
        })
    }
}
export default ProductDetailPage