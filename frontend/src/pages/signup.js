import userAPI from "../api/userAPI";
import { $ } from '../utils';
const signup = {
    render() {
        return/*html*/`
        <div class="container max-w-full mx-auto md:py-24 px-6">
        <div class="max-w-sm mx-auto px-6">
              <div class="relative flex flex-wrap">
                  <div class="w-full relative">
                      <div class="md:mt-6">
                          <div class="text-center font-semibold text-black">
                              Lorem ipsum dolor
                          </div>
                          <div class="text-center font-base text-black">
                              Sed ut perspiciatis unde?
                          </div>
                          <form class="mt-8" id="signup" x-data="{password: '',password_confirm: ''}">
                              <div class="mx-auto max-w-lg ">
                                  <div class="py-1">
                                      <span class="px-1 text-sm text-gray-600">Họ và Tên</span>
                                      <input placeholder="" id="name" type="text"
                                             class="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                                  </div>
                                  <div class="py-1">
                                      <span class="px-1 text-sm text-gray-600">Email</span>
                                      <input placeholder="" id="email" type="email"
                                             class="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                                  </div>
                                  <div class="py-1">
                                      <span class="px-1 text-sm text-gray-600">Password</span>
                                      <input placeholder="" id="password" type="password" x-model="password"
                                             class="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                                  </div>
                                  <div class="py-1">
                                      <span class="px-1 text-sm text-gray-600">Password Confirm</span>
                                      <input placeholder="" id="password_confirm" type="password" x-model="password_confirm"
                                             class="text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                                  </div>
                                  <p class="text-lg text-red-500" id="error"></p>
                                  <button type="submit" class="mt-3 text-lg font-semibold
                  bg-gray-800 w-full text-white rounded-lg
                  px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                      Register
                                  </button>
                              </div>
                          </form>
      
                          <div class="text-sm font-semibold block sm:hidden py-6 flex justify-center">
                              <a href="#"
                                 class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?
                                  <span class="text-black font-semibold">
                  Login
                </span>
                              </a>
                          </div>
      
                      </div>
                  </div>
              </div>
          </div>
      </div>
        `
    },
    afterRender() {
        const btn = $('#signup');
        btn.addEventListener("submit", async (e) => {
            e.preventDefault();
            let name = $('#name').value;
            let email = $('#email').value;
            let password = $('#password').value;
            let password_confirm = $('#password_confirm').value;
            if (name == "" || email == "" || password == "" || password_confirm == "") {
                document.getElementById("error").innerText = "Ban phai nhap du thong tin nguoi dung"
            }else if(password !== password_confirm){
                document.getElementById("error").innerText = "Mật khẩu không trùng khớp"
            }else{
                const user ={
                    name: name,
                    email: email,
                    password: password
                }
                try {
                    const {data} = await userAPI.signup(user);
                    console.log(data);
                    window.location.hash = '/#/signin'
                } catch (error) {
                    console.log(error.message)
                }
            }
        })
    }
}
export default signup;