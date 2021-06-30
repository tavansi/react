import axios from 'axios';
import { axiosClient} from './axiosClient';

const ProductAPI = {
    getAll(){
        const url = `/product`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url =`/product`;
        return axiosClient.post(url,data);
    
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/product/${id}`;
        return axiosClient.put(url, data);
    }
}
export default ProductAPI;