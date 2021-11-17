import { axiosClient } from './axiosClient'
import { isAuthenticated } from '../utils';
const userId = isAuthenticated().user
const categoryAPI = {
    list() {
        const url = `/category`;
        return axiosClient.get(url)
    },
    read(id) {
        const url = `/category/${id}/${userId._id}`;
        return axiosClient.get(url)
    },
    remove(id) {
        const url = `/category/${id}/${userId._id}`;
        return axiosClient.delete(url)
    },
    add(category) {
        const url = `/category/create/${userId._id}`;
        return axiosClient.post(url, category);
    },
    update(id, data) {
        const url = `/category/${id}/${userId._id}`
        return axiosClient.put(url, data);
    }
}
export default categoryAPI;