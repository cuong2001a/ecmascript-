import axios from "axios";
import userAPI from "../api/userAPI";
import { $ } from "../utils";

const signin = {
    async render() {
        return  /*html*/`
    <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Đăng nhập</h1>
                <p class="text-gray-500 dark:text-gray-400">Đăng nhập để truy cập vào tài khoản của bạn</p>
            </div>
            <div class="m-7">
                <form id="signin"  action="">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email </label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        <p class="error_email text-red-500"></p>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Mật khẩu</label>
                            <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Quên mật khẩu?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        <p class="error_password text-red-500"></p>
                    </div>
                    <div class="mb-6">
                        <input type="submit" value="Đăng nhập" class="event w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    </div>
                    <p class="text-sm text-center text-gray-400">Bạn chưa có tài khoản ? <a href="/#/signup" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
                </form>
            </div>
        </div>
    </div>
    </div>


        `
    },
    async afterRender() {
        const btn = $('#signin');

        btn.addEventListener("submit", async (e) => {
            e.preventDefault();
            let email = $('#email').value;
            let password = $('#password').value;
            if (email == "") {
                document.querySelector('.error_email').innerHTML = "Ban phai nhap email";
            } else if (password === "") {
                document.querySelector('.error_password').innerHTML = "Ban phai nhap password";
            } else {
                const user = {
                    email: email,
                    password: password
                }
                try {
                    const { data } = await userAPI.signin(user);
                    console.log(data);
                    if (data.user.role == 0) {
                        window.location.hash = `/`
                    } else {
                        window.location.hash = '/'
                    }
                    const token = localStorage.setItem("token", JSON.stringify(data))
                    // console.log(token);
                } catch (error) {
                    console.log(error.message)
                }
                console.log(user);
            }


        })
    }
}
export default signin;