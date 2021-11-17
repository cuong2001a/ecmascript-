
import { axiosClient } from './axiosClient';
import { isAuthenticated } from '../utils';
const userId = isAuthenticated().user
console.log(userId)
const productAPI = {
    list() {
        const url = '/products';
        return axiosClient.get(url)
    },
    read(id) {
        const url = `/products/${id}/${userId._id}`;
        return axiosClient.get(url)
    },
    remove(id) {
        const url = `/products/${id}/${userId._id}`;
        return axiosClient.delete(url)
    },
    add(product) {
        const url = `/products/create/${userId._id}`;
        return axiosClient.post(url, product);
    },
    update(id, data) {   
            const url = `/products/${id}/${userId._id}`;
            return axiosClient.put(url, data)

    },
    limit5() {
        const url = `/products/?_limit=3`;
        return axiosClient.get(url)
    },
    limit8() {
        const url = `/products/?_limit=8`;
        return axiosClient.get(url);
    },
    search(search) {
        const url = `/products/search?name_like=${search}`;
        return axiosClient.get(url);
    },
    pagination1() {
        const url = `/products?_page=1&_litmit=3`;
        return axiosClient.get(url);
    },
}
export default productAPI;