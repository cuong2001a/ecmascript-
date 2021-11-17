import Cart from '../models/cart';

export const addToCart = (req,res) =>{
    let cart = new Cart(req.body);
    cart.save((err,data)=>{
        if(err){
            res.status(400).json({
                errors:"Khong them duoc vào gio hang"
            })
        }
        res.json(data)
    })

}
export const listToCart = (req,res) =>{
    Cart.find((err,data)=>{
        if(err){
            return res.status(400).json({
                error: "Khong tim thay gio hang"
            })
        }else{
            res.json(data)
        }
    })
}