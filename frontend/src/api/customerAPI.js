import {axiosClient} from './axiosClient'

const customerAPI = {
    list() {
        const url = `/customer`;
        return axiosClient.get(url)
    },
    read(id) {
        const url = `/customer/${id}`;
        return axiosClient.get(url)
    },
    remove(id) {
        const url = `/customer/${id}`;
        return axiosClient.delete(url)
    },
    add(customer) { 
        const url = `/customer`;
        return axiosClient.post(url, customer);
    },
    update(){
        
    }
}
export default customerAPI;