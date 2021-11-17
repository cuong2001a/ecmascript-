import Footer from "../component/footer"
import Header from "../component/header"
const cartPage = {
    async render() {
        let cart = [];
        let a = localStorage.getItem("id");
        if (a) {
            cart = JSON.parse(a)
        }
        console.log(cart)
        const total = cart.map(item => {
            return item.price * item.quantity;
        })

        const totalreduce = total.reduce((a,b) => a+b);
        // const total1= totalreduce.map(item =>{
        //     return `
        //         <td> ${item}</td>
        //     `
        // })
        const result = cart.map(item => {
            return /*html*/`
            <li class="my-4">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-4">
                    <img src="${item.images}" width= "100px" height="100px"/>
                </div>   
                <div class="col-span-8">
                    <div class="flex justify-between">
                        <div>
                        <h4 class="text-2xl font-bold">${item.name}</h4>
                        <p class="text-base"><strong>Số lượng: </strong>  ${item.quantity}</p>
                        <p class="text-base">Tổng tiền là:${item.price * item.quantity}đ</p> 
                        </div>
                        
                        <button class="remove" data-id='${item._id}' >X</button> 
                    </div>
                   
                </div>
            </div>
        </li> 
            `
        }).join("");
        return /*html*/`
            ${Header.render()}
                <section class="my-7">
                    <div class="container mx-auto">
                        <div class=" grid grid-cols-12 gap-5">
                         <div class="col-span-6">
                             <h3>Giỏ hàng</h3>  
                             <ul class="list-none">
                               ${result}
                             </ul>
                         </div> 
                         <div class="col-span-6">
                             
                             <table class="table bg-gray-300 w-2/3 h-56  px-10">
                                     <tr>
                                        <td class="pl-5" ><input type="text" class=" px-3 py-4" placeholder="Nhập mã giảm giá"/></td>
                                        <td scope="row" class="pr-4"><button class="px-2 py-3 bg-blue-400 border border-black rounded-md" type="">Áp dụng</button></td>
                                         
                                         
                                     </tr>
                                     <tr>
                                        <td class="text-xl pl-5 font-bold">Tổng giá trị đơn hàng </td>
                                        <td>${totalreduce}</td>
                                        
                                     </tr>
                               
                             </table>   
                             <a class="inline-block mt-8 w-2/3 px-6 py-2 text-xs font-medium leading-6 text-center
                             text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg
                              hover:bg-blue-800 focus:outline-none">Tiến hành thanh toán </a>
                         </div>  
                    </div>
                    </div>
                    
                </section>    
            ${Footer.render()}
        `
    },
    async afterRender() {
        let cart = [];
        document.querySelectorAll(".remove").addEventListener(e => {
            e.preventDefault();

        })
        // const removeItem = id =>{
        //     let storage =localStorage.getItem("id");
        //     if(storage){
        //         cart = JSON.parse(storage)
        //     }
        //     cart = cart.filter(item => item.id != id)
        //     localStorage.setItem('cart', JSON.stringify(cart));
        //     reRender(this.render());
        // }
    },
}
export default cartPage;