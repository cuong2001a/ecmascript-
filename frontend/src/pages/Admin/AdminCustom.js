import customerAPI from "../../api/customerAPI";
import { $,reRender } from "../../utils";

const AdminCustomer = {
    async render(){
        const {data :customer} = await customerAPI.list();
        const result = customer.map(item =>{
            return /*html*/`
            <tr class="py-5">
            <td class=" text-left py-3 px-4">${item.id}</td>
            <td class=" text-left py-3 px-4">${item.name}</td>
            <td class="text-left py-3 px-4">${item.address}</td>
            <td class=" text-left py-3 px-4">${item.email}</td>
            <td class=" text-left py-3 px-4">${item.phone_number}</td>
            <td class="text-left py-3 px-4">${item.create_date}</td>
            <td class="text-left py-3 px-4">${item.status}</td>
            <td>
                <a data-id='${item.id}' class='btn inline-block px-6 py-2 my-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none waves-effect'>Xoá</a>
                <a href='/#/detailcustom/${item.id}' class='inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none waves-effect'>Chi tiet</a>
            </td>
            </tr>
            `
        }).join("");
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

            <!-- Dropdown Nav -->
            <nav :class="isOpen ? 'flex': 'hidden'" class="flex flex-col pt-4">
                <a href="index.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i class="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
                <a href="blank.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-sticky-note mr-3"></i>
                    Blank Page
                </a>
                <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-table mr-3"></i>
                    Tables
                </a>
                <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-align-left mr-3"></i>
                    Forms
                </a>
                <a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-tablet-alt mr-3"></i>
                    Tabbed Content
                </a>
                <a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-calendar mr-3"></i>
                    Calendar
                </a>
                <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-cogs mr-3"></i>
                    Support
                </a>
                <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-sign-out-alt mr-3"></i>
                    Sign Out
                </a>
                <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
                </button>
            </nav>
           
        </header>
    
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <div class="flex justify-between items-center">
                <h1 class="text-3xl text-black pb-6">Danh sách Khách hàng</h1>  
                <a href='/#/' class='text-blue-500'> -->Về trang chủ</a>
                </div>
                <div class="w-full mt-12">
                    <a href='/#/addcustom' class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect mb-3">Thêm mới</a>
                    <div class="bg-white overflow-auto">
                        <table  class="min-w-full bg-white table-products">
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Tên Khách hàng</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Địa chỉ</th>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                    <th class=" text-left py-3 px-4 uppercase font-semibold text-sm">Số điện thoại</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Ngày tạo</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Trạng thái</th>

                                    
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Active</th>
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
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        console.log(btns);
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                console.log(id)
                const question = confirm("Ban co muon xoa hay khong");
                if (question) {
                    await customerAPI.remove(id);
                    await reRender(AdminCustomer, '#main-content'); // nghia la render ca cai component AdminProductPage vao vi. tri nao
                }

            })
        })
    }
}
export default AdminCustomer;