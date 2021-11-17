import { $ } from '../utils'
import Header from '../component/header';
import Footer from '../component/footer';
import productAPI from '../api/productAPI';
import categoryAPI from '../api/categoryAPI'
const ProductPage = {
    async render() { // co async thi phai co await -> nghia la cho du lieu tu api tra ve thi gan vao bien data
        try {

            const { data: categories } = await categoryAPI.list();
            console.log(categories);
            const result_category = categories.map(category => {
                return `
                        <a class="block px-8 py-5 border-b border-gray-500 hover:bg-gray-400" href='/#/category/${category._id}'> ${category.name}</a> 
                `
            }).join('');
            const { data: products } = await productAPI.list();
            console.log(products);
            const result = products.map(product => {
                return /*html*/`
                <div class="col-span-4">
                <div class= "single_arrival">
                    <div class="overflow-hidden relative">
                        <img width="268.85px" height="201.64px" src="${product.images}"/>
                    </div>
                    <div class="py-8">
                        <a href="/#/detailproduct/${product._id}">${product.name}</a>
                        <div class="rating mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span>${product.price}</span>
                    </div>
                </div>
                </div>
                `
            }).join("");
            return /*html*/`
            ${Header.render()}
            <section>
            <div class="bg-blue-100 container-fluid  mx-5 mb-24 py-3 text-center">
            <span class="text-gray-400"><a href="/#/">Home</a> / Shop</span> 
            </div>
            
            <div class="container mx-auto">
                <div class="text-title">
                    <h2 class="text-6xl font-serif font-medium mb-1">SHOP WITH US</h2>
                    <div class="flex justify-between">
                        <p class="text-base mb-4">Browse from 230 latest items</p>
                        <div class="flex">
                              <input type="text"
                                  class="form-control" name="" id="search" aria-describedby="helpId" placeholder="">
                               <input type="submit" value="tìm kiếm" id="submit_search" />
                        </div>
                    </div>
                    
                </div>
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-4">                      
                        <div class="">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                        <select id="filter" class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option>Sắp xếp theo</option>
                            <option value="all">Tất cả</option>
                            <option value="asc">Giá tăng dần</option>
                            <option value="desc">Giá giảm dần</option>
                        </select>
                
                        <div class="rounded-md bg-gray-100 pt-4 m-2 overflow-hidden">
                        <h1 class="px-3 py-2 mx-3 mb-2 font-bold text-gray-800 bg-gray-200 rounded-md">Danh mục sản phẩm</h1>
                        <div class=" items-center px-3 py-2 text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                           ${result_category}
                           </div>
                       
                           </div>
                      
                        </div>
                    </div>
                    <div class="col-span-8">
                            <div class="row dataRender ">
                            <div class="grid grid-cols-12 gap-5">                             
                                ${result}
                             
                            </div>
                            </div>
                        <div class="flex justify-center items-center my-6">
                            <a class="border border-purple-500 text-indigo-600 rounded-md px-10 py-4">Browse more</a>
                        </div>
                    </div>
                </div>
            </div>
          
            </section>
            
            ${Footer.render()}
       `
        }
        catch (error) {
            console.log(error)
        }

    },
    async afterRender() {
        const { data: products } = await productAPI.list();
        const dataRender = $('.dataRender')
        $('#filter').addEventListener('change', function (e) {
            if (e.target.value === 'asc') {
                const asc = products.sort((a, b) => a.price - b.price);
                console.log(asc);
                dataRender.innerHTML = asc.map(product => {
                    return `
                       
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-4">
                            <div class="overflow-hidden relative">
                            <img width="268.85px" height="201.64px" src="${product.image}"/>
                        </div>
                        <div class="py-8">
                            <a href="/#/detailproduct/${product.id}">${product.name}</a>
                            <div class="rating mb-3">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span>${product.price}</span>
                        </div>
                    </div>
                        </div>
                    </div>    
                  
                    `
                }).join('');

            }
            if (e.target.value === 'desc') {
                const desc = products.sort((a, b) => b.price - a.price);
                dataRender.innerHTML = desc.map(product => {
                    return `
                    <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-4">
                    <div class="overflow-hidden relative">
                            <img width="268.85px" height="201.64px" src="${product.image}"/>
                        </div>
                        <div class="py-8">
                            <a href="/#/detailproduct/${product._id}">${product.name}</a>
                            <div class="rating mb-3">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span>${product.price}</span>
                        </div>
                    </div>
                    </div>
                    </div>
                    `
                }).join('');
            }
            if (e.target.value === "all") {
                dataRender.innerHTML = products.map(product => {
                    return `
                    <div class="col-span-4">
                   
                        <div class="overflow-hidden relative">
                            <img class="w-full h-52 h-auto object-cover" src="${product.image}"/>
                        </div>
                        <div class="py-8">
                            <a href="/#/detailproduct/${product._id}">${product.name}</a>
                            <div class="rating mb-3">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span>${product.price}</span>
                        </div>
                   
                    </div>
                    `
                })
            }
        })

    },
    async search() {
        const { data: product } = await productAPI.search();
        const dataRender = $('.dataRender')
        $('#submit_search').addEventListener("click", () => {
            let a = $('search').value;
            product += product + `${a}`;
            //console.log(a)
            if (!product) {
                dataRender.innerHTML = product.map(products => {
                    return `
                    <div class="col-span-4">
                    <div class= "single_arrival">
                        <div class="overflow-hidden relative">
                            <img width="268.85px" height="201.64px" src="${products.image}"/>
                        </div>
                        <div class="py-8">
                            <a href="/#/detailproduct/${products.id}">${products.name}</a>
                            <div class="rating mb-3">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span>${products.price}</span>
                        </div>
                    </div>
                    </div>
                    `
                })
            } else {
                let a = `
                    <h1 class="text-2xl">Không tìm thấy sản phẩm này</h1
                `
                dataRender.innerHTML = a
            }
        })
    }
}
export default ProductPage;
//  ${Header.render()}

//         ${Footer.render()} 

