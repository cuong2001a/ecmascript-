import { $, isAuthenticated } from '../../utils';
import productAPI from '../../api/productAPI';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase';
import categoryAPI from '../../api/categoryAPI';
const AdminAddProductPage = {

    async render() {
        const { data: category } = await categoryAPI.list();
        console.log(category);
        const listOption = category.map(option => {
            return `

                <option value="${option._id}">${option.name}</option>
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
        <h1 class="text-3xl text-black pb-6">Thêm mới sản phẩm</h1>  
        <a href='/#/' class='text-blue-500'> -->Về trang chủ</a>
        </div>

        <form id="form-add" action="" class="form bg-white p-6 my-10 relative">
        <div class="flex space-x-5 mt-3">
            <input type="text" name="" id="name" placeholder="Tên Sản Phẩm" class="border p-2  w-1/2">
            <input type="number" name="" id="price" placeholder="Giá sản phẩm" class="border p-2 w-1/2">
           
        </div>
        <div class="flex space-x-5 mt-3">
        <select id="category_id" class="border">
                ${listOption}
        </select>
        <input type="file" name="" id="image"  class="border  w-2/3 mt-2 h-10">
        </div>
        <textarea name="" id="describe" cols="10" rows="3" placeholder="Mô tả sản phẩm" class="border p-2 mt-3 w-full"></textarea>
        <label for="" id="errors" class="text-red-600 text-xl" ></label>
        <input type="submit" value="Tạo sản phẩm" id="submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">

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
        var metadata = {
            contentType: 'image/jpeg',
        };
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();
            const name = $('#name').value;
            console.log(name)
            const price = $('#price').value;
            const description = $('#describe').value;
            const images = $('#image').value;
            console.log(images)
            if (name == "") {
                document.getElementById('errors').innerHTML = "Ban phai nhap ten san pham"
            } else if (price == "") {
                document.getElementById('errors').innerHTML = "Ban phai nhap gia san pham"
            } else if (description == "") {
                document.getElementById('errors').innerHTML = "Ban phai nhap mo ta san pham"
            } else if (images == "") {
                document.getElementById('errors').innerHTML = "Ban phai chen anh san pham"
            } else {
                const productImage = $('#image').files[0];
                console.log(productImage.length);
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                console.log(productImage, storageRef)
                storageRef.put(productImage, metadata).then(function () {
                    console.log("upload thành công ");
                    storageRef.getDownloadURL().then((url) => {
                        const product = {
                            name: $('#name').value,
                            price: $('#price').value,
                            category: $('#category_id').value,
                            description: $('#describe').value,
                            images: url
                        };
                        console.log(product)
                        productAPI.add(product);
                        window.location.hash = '/listproduct';
                    })
                })
            }


        })
    }
}
export default AdminAddProductPage;
