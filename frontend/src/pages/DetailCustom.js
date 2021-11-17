import customerAPI from "../api/customerAPI";
import { parseRequestUrl } from "../utils";

const DetailCustom ={
    async render(){
        const {id} = parseRequestUrl();
        const {data : custom} = await customerAPI.read(id);
        
    }
    

}
export default DetailCustom;