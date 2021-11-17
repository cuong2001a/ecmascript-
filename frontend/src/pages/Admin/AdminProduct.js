import { $, reRender } from '../../utils';
import productAPI from '../../api/productAPI'
const AdminProductPage = {

    async render() {
        try {

            const { data: products } = await productAPI.list();
            console.log(products);
            const result = products.map(product => {
                return /*html*/`
                <tr >
                <td class=" text-left py-3 px-4">${product._id}</td>
                <td class=" text-left py-3 px-4">${product.name}</td>
                <td class=" text-left py-3 px-4">${product.category.name}</td>
                <td class="text-left py-3 px-4"><img src="${product.images}" height= 300px ; width= 400px;/></td>
                <td class="text-left py-3 px-4"><p>${product.price}</p></td>
                <td>
                    <button data-id='${product._id}' class='btn inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none waves-effect'>Xóa</button>
                    <a href='/#/editproduct/${product._id}' class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none waves-effect'>Sửa</a>
                </td>
                </tr>
            `
            }).join('');

            return /*html*/` 
        <div class="flex">
        <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6">
            <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
          
        </div>
        <nav class="text-white text-base font-semibold pt-3">
            <a href="/#/listproduct" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
                Sản Phẩm 
            </a>
            <a href="/#/listcategories" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i class="fas fa-sticky-note mr-3"></i>
                Danh mục
            </a>
            <a href="/#/customer" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i class="fas fa-sticky-note mr-3"></i>
             Khách Hàng
             </a>
        
        </nav>
      
    </aside>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div x-data="{ isOpen: false }" class="relative w-1/2 flex justify-end">
                <button @click="isOpen = !isOpen" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400">
                </button>
                <button x-show="isOpen" @click="isOpen = false" class="h-full w-full fixed inset-0 cursor-default"></button>
                <div x-show="isOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                    <a href="#" class="block px-4 py-2 account-link hover:text-white">Account</a>
                    <a href="#" class="block px-4 py-2 account-link hover:text-white">Support</a>
                    <a href="#" class="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                </div>
            </div>
        </header>

        <!-- Mobile Header & Nav -->
        <header x-data="{ isOpen: false }" class="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div class="flex items-center justify-between">
                <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
                    <i x-show="!isOpen" class="fas fa-bars"></i>
                    <i x-show="isOpen" class="fas fa-times"></i>
                </button>
            </div>
           
        </header>
    
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <div class="flex justify-between items-center">
                <h1 class="text-3xl text-black pb-6">Danh sách sản phẩm</h1>  
                <a href='/#/' class='text-blue-500'> -->Về trang chủ</a>
                </div>
                <div class="w-full mt-12">
                    <div class="flex justify-between items-center">
                        <a href='/#/addproduct' class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect mb-3">Thêm mới</a> 
                        <div class="flex items-center">
                            <div class="form-group mx-4">
                              <label for="" class="font-bold">Sắp xếp </label>
                              <select class="form-control border  border-black text-base" name="" id="select">
                                <option value="-1">Giảm dần</option>
                                <option value="0">Tăng dần </option>
                              </select>
                            </div>
                            <div class="flex items-center">
                                <input type="text" id="search" class="border h-8 border-gray-400 rounded-md text-base pl-2" placeholder="Tìm kiếm"/>
                                <button  id="submit_search" class="border border-indigo-500 bg-indigo-500 text-white px-2 py-1 rounded-md m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </div>
                   
                    <div class="bg-white overflow-auto">
                        <table  class="min-w-full bg-white table-products">
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Name Product</th>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Category</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Image</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Service</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700" id="list-products">
                               
                                   ${result}
                               
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
    
            <footer class="w-full bg-white text-right p-4">
                Built by <a target="_blank" href="https://davidgrzyb.com" class="underline">David Grzyb</a>.
            </footer>
        </div>
        
    </div>
    </div>
        `
        }
        catch (error) {
            console.log(error);
        }
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        if (btns.length > 1) {
            btns.forEach(btn => {
                const id = btn.dataset.id;
                btn.addEventListener('click', async function () {
                    console.log(id)
                    const question = confirm("Ban co muon xoa hay khong");
                    if (question) {

                        const res = await productAPI.remove(id);
                        console.log(res);
                        await reRender(AdminProductPage, '#main-content')
                    }

                })
            })
        } else {
            btns.addEventListener('click', async function () {
                const id = btns.dataset.id
                console.log(id);
                const question = confirm("Ban co muon xoa hay khong");
                if (question) {
                    const res = await productAPI.remove(id);
                    console.log(res);
                    await reRender(AdminProductPage, '#main-content')
                }

            })
        }

        $('#submit_search').addEventListener("click", async () => {
            console.log(1);
            const search = $('#search').value;
            const { data } = await productAPI.search(search);
            console.log(data);
            const productSearch = data.map(product => {
                return /*html*/`
                <tr >
                <td class=" text-left py-3 px-4">${product._id}</td>
                <td class=" text-left py-3 px-4">${product.name}</td>
                <td class=" text-left py-3 px-4">${product.category.name}</td>
                <td class="text-left py-3 px-4"><img src="${product.images}" height= 300px ; width= 400px;/></td>
                <td class="text-left py-3 px-4"><p>${product.price}</p></td>
                <td>
                    <button data-id='${product._id}' class='btn inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none waves-effect'>Xóa</button>
                    <a href='/#/editproduct/${product._id}' class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none waves-effect'>Sửa</a>
                </td>
                </tr>
            `
            }).join('');
            $("#list-products").innerHTML = productSearch;
            const btns = $('#list-products .btn');
            btns.addEventListener('click', async function () {
                const id = btns.dataset.id
                console.log(id);
                const question = confirm("Ban co muon xoa hay khong");
                if (question) {
                    const res = await productAPI.remove(id);
                    console.log(res);
                    await reRender(AdminProductPage, '#main-content')
                }

            })


        })

    },
    async ListProduct() {
        const { data: product } = await productAPI.list();
        const listProducts = $('#list-products');
        $('#select').addEventListener('change', function (e) {
            if (e.target.value === "-1") {
                const asc = product.sort((a, b) => a.price - b.price);
                console.log(asc);
                listProducts.innerHTML = asc.map(product => {
                    return `
                    <tr >
                    <td class=" text-left py-3 px-4">${product._id}</td>
                    <td class=" text-left py-3 px-4">${product.name}</td>
                    <td class=" text-left py-3 px-4">${product.category.name}</td>
                    <td class="text-left py-3 px-4"><img src="${product.images}" height= 300px ; width= 400px;/></td>
                    <td class="text-left py-3 px-4"><p>${product.price}</p></td>
                    <td>
                        <button data-id='${product._id}' class='btn inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none waves-effect'>Xóa</button>
                        <a href='/#/editproduct/${product._id}' class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none waves-effect'>Sửa</a>
                    </td>
                    </tr>
                    `
                })
                const btns = $('#list-products .btn');
                console.log(btns.length)
                btns.forEach(btn => {
                    const id = btn.dataset.id;
                    btn.addEventListener('click', async function () {
                        console.log(id)
                        const question = confirm("Ban co muon xoa hay khong");
                        if (question) {

                            const res = await productAPI.remove(id);
                            console.log(res);
                            await reRender(AdminProductPage, '#main-content')
                        }

                    })
                })
            } else {
                const desc = product.sort((a, b) => b.price - a.price);
                listProducts.innerHTML = desc.map(product => {
                    return `
                    <tr >
                    <td class=" text-left py-3 px-4">${product._id}</td>
                    <td class=" text-left py-3 px-4">${product.name}</td>
                    <td class=" text-left py-3 px-4">${product.category.name}</td>
                    <td class="text-left py-3 px-4"><img src="${product.images}" height= 300px ; width= 400px;/></td>
                    <td class="text-left py-3 px-4"><p>${product.price}</p></td>
                    <td>
                        <button data-id='${product._id}' class='btn inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none waves-effect'>Xóa</button>
                        <a href='/#/editproduct/${product._id}' class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none waves-effect'>Sửa</a>
                    </td>
                    </tr>
                    `
                })
                const btns = $('#list-products .btn');
                btns.forEach(btn => {
                    const id = btn.dataset.id;
                    btn.addEventListener('click', async function () {
                        console.log(id)
                        const question = confirm("Ban co muon xoa hay khong");
                        if (question) {

                            const res = await productAPI.remove(id);
                            console.log(res);
                            await reRender(AdminProductPage, '#main-content')
                        }

                    })
                })
            }

        })
    }

}
export default AdminProductPage;
