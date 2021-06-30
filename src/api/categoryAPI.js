import { axiosClient , axiosClient2 } from './axiosClient';
const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosClient2.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient2.get(url);
    },
    add(data){
        const url =`/category`;
        return axiosClient2.post(url, data);
    },
    remove(id){
        const url = `/category/${id}`;
        return axiosClient2.delete(url);
    },
    update(id, data){
        const url = `/category/${id}`;
        return axiosClient2.put(url, data);
    }
}
export default CategoryAPI;