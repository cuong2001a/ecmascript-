import { $ } from "../utils"

 const signout ={
    render(){
            localStorage.clear();
            window.location.hash('/')
   
    }
}
export default signout;