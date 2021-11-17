import userAPI from "../api/userAPI";
import { $ } from "../utils";
const Header = {
    render() {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
           if(token.user.role!==0){
            return `
                <header class="  bg-white shadow-lg  border-b-0 border-gray-400 ">
                <div class="container   h-32 mx-auto">
                    <div class="grid grid-cols-3 gap-0.5">
                        <div class="col-span-1 space-y-1">
                            <a href="/#/" target="_blank"><img src="http://tradydaddy.com/wp-content/uploads/2021/03/cropped-tradydaddy-2048x1222.png" class="h-24 pt-4"></a>
                        </div>
                        <div class="col-span-2 flex justify-self-end items-center">
                            <div class="ml-10 flex items-baseline space-x-4 py-12">
                                <a href="/#/"  class=" text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trang chủ</a>
    
                                <a href="/#/product"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cửa hàng</a>
    
                                <a href="/#/about"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Giới thiệu</a>
    
                                <a href="/#/listproduct"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quản trị</a>
                            </div>
                            <div class="ml-10 flex justify-items-end items-baseline space-x-4 py-12">
                                <a href=""  class="text-black-500 text-3xl px-3 py-2 rounded-md text-sm font-medium"><i class="fa fa-cog" aria-hidden="true"></i></a>
    
                                <a href="/#/cart"  class="text-black-700 text-3xl   px-3 py-2 rounded-md text-sm font-medium">
                                <i class="fas fa-shopping-bag"></i>
                                </a>
    
                                <label href=""  class="text-black-700 text-base   px-3 py-2 rounded-md text-sm font-medium">Hi ${name}<i class="text-3xl fas fa-user"></i> 
    
                                </label> <button id="btn_signout">Dang xuat</button>
    
    
                            </div>
                        </div> 
                    </div>
                </div>
            </header> 
            `;
           }else{
               return `
               
                    <header class="  bg-white shadow-lg  border-b-0 border-gray-400 ">
                    <div class="container   h-32 mx-auto">
                        <div class="grid grid-cols-3 gap-0.5">
                            <div class="col-span-1 space-y-1">
                                <a href="/#/" target="_blank"><img src="http://tradydaddy.com/wp-content/uploads/2021/03/cropped-tradydaddy-2048x1222.png" class="h-24 pt-4"></a>
                            </div>
                            <div class="col-span-2 flex justify-self-end items-center">
                                <div class="ml-10 flex items-baseline space-x-4 py-12">
                                    <a href="/#/"  class=" text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trang chủ</a>

                                    <a href="/#/product"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cửa hàng</a>

                                    <a href="/#/about"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Giới thiệu</a>
                                </div>
                                <div class="ml-10 flex justify-items-end items-baseline space-x-4 py-12">
                                    <a href=""  class="text-black-500 text-3xl px-3 py-2 rounded-md text-sm font-medium"><i class="fa fa-cog" aria-hidden="true"></i></a>

                                    <a href="/#/cart"  class="text-black-700 text-3xl   px-3 py-2 rounded-md text-sm font-medium">
                                    <i class="fas fa-shopping-bag"></i>
                                    </a>

                                    <label href=""  class="text-black-700 text-base   px-3 py-2 rounded-md text-sm font-medium">Hi ${name}<i class="text-3xl fas fa-user"></i> 

                            </label><button id="btn_signout">Dang xuat</button>


                                </div>
                            </div> 
                        </div>
                    </div>
                </header> 
               `
           }
        } else {
                   return `
                        <header class="  bg-white shadow-lg  border-b-0 border-gray-400 ">
                    <div class="container   h-32 mx-auto">
                        <div class="grid grid-cols-3 gap-0.5">
                            <div class="col-span-1 space-y-1">
                                <a href="/#/" target="_blank"><img src="http://tradydaddy.com/wp-content/uploads/2021/03/cropped-tradydaddy-2048x1222.png" class="h-24 pt-4"></a>
                            </div>
                            <div class="col-span-2 flex justify-self-end items-center">
                                <div class="ml-10 flex items-baseline space-x-4 py-12">
                                    <a href="/#/"  class=" text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trang chủ</a>

                                    <a href="/#/product"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cửa hàng</a>

                                    <a href="/#/about"  class="text-black-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Giới thiệu</a>
                                </div>
                                <div class="ml-10 flex justify-items-end items-baseline space-x-4 py-12">
                                    <a href=""  class="text-black-500 text-3xl px-3 py-2 rounded-md text-sm font-medium"><i class="fa fa-cog" aria-hidden="true"></i></a>

                                    <a href="/#/cart"  class="text-black-700 text-3xl   px-3 py-2 rounded-md text-sm font-medium">
                                    <i class="fas fa-shopping-bag"></i>
                                    </a>

                                    <a href="/#/signin"  class="text-black-700 text-3xl   px-3 py-2 rounded-md text-sm font-medium"><i class="fas fa-user"></i></a>

                                </div>
                            </div> 
                        </div>
                    </div>
                </header> 
                        `
        }
    },
    async afterRender() {
        console.log(1);
        $('#btn_signout').addEventListener("click", (e) => {
            // e.prevenDefault();
            localStorage.clear();
            window.location.hash = "/"
        })
    }
}
export default Header;