import { axiosClient } from "./axiosClient";

// const { user: { _id } } = JSON.parse(localStorage.getItem("token"));

const userAPI = {
    signin(user) {
        const url = '/signin';
        return axiosClient.post(url, user);
    },
    signup(user) {
        const url = '/signup';
        return axiosClient.post(url, user);
    },
    signout() {
        const url = `/signout`;
        return axiosClient.get(url)
    }
}
export default userAPI