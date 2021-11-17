import { $ } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import customerAPI from '../../api/customerAPI';
const AdminAddCustom = {

 async   render() {
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

<header x-data="{ isOpen: false }" class="w-full bg-sidebar py-5 px-6 sm:hidden">
    <div class="flex items-center justify-between">
        <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
        <button @click="isOpen = !isOpen" class="text-white text-3xl focus:outline-none">
            <i x-show="!isOpen" class="fas fa-bars"></i>
            <i x-show="isOpen" class="fas fa-times"></i>
        </button>
    </div>

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
        <a href='/#/' class='text-blue-500'> -->Về trang chủ</a>
        </div>

        <form id="form-add" action="" class="form bg-white p-6 my-10 relative">
            <div class="form-group my-5">
               <label for="">Tên Khách Hàng</label>
               <input type="text" placeholder="" id="name" class="my-5 py-1 px-1 border text-gray-900 outline-none block h-full w-2/3" /> 
               <span></span>
            </div>
            
            <div class="form-group my-5">
              <label for="">Địa chỉ</label>
              <input type="text" placeholder="" id="address" class="my-5 py-1 px-1 border text-gray-900 outline-none block h-full w-2/3" />
              <span></span>  
            </div>
            
            <div class="form-group my-5">
             <label for="">Email</label>
             <input type="email" placeholder="" id="email" class="my-5 py-1 px-1 border text-gray-900 outline-none block h-full w-2/3" /> 
             <span></span>  
            </div>
            
            <div class="form-group my-5">
               <label for="">Số điện thoại</label>
               <input type="text" placeholder="" id="phone" class="my-5 py-1 px-1 border text-gray-900 outline-none block h-full w-2/3" /> 
               <span></span>
            </div>
            
            <input class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
             type="submit" value="Tạo khách hàng" />
        </form>
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
        const date = new Date();
             $('#form-add').addEventListener('submit', async e => {
            e.preventDefault();
            
            let address = document.querySelectorAll('#address').value;
            let email = document.querySelectorAll('#email').value;
            let phone = document.querySelectorAll('#phone').value;
                        const newCustom = {
                        id: uuidv4(),
                        name: $('#name').value,
                        address: $('#address').value,
                        email: $('#email').value,
                        phone_number: $('#phone').value,
                        create_date: date,
                        status : false
                    };
                    console.log(newCustom);
                 await customerAPI.add(newCustom);
                    window.location.hash = '/customer';
                    
                    
        })
        // }
       
    }
}
export default AdminAddCustom;
