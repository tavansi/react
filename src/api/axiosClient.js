import axios from 'axios';
import { API } from '../config'

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    'Content-Type': 'application/form-data',
  },
});
export const axiosClient2 = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosClient2.interceptors.response.use((response) =>{
//   if(response && response.data){
//     return response.data
//   }
// },(error) =>{
//   throw error
// })
// const [state, setstate] = useState({loading:false,data:[]});//1

// useEffect(() => {
//     ///3
    
//     (async() =>{
//       let {categories}= await ApiCate.getAll();
//         // console.log(categories)
//       setTimeout(() => {
//         setstate({loading:true,data:[...categories]})
//       }, 500);
//     })()
   
// }, [])
{/* <tbody>

{state.loading ? 
 state.data.map((category, index) => (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{category.name}</td>
      
        <td>
            <Link to={`/admin/category/edit/${category._id}`} className="btn btn-primary">Update</Link>
        </td>
        <td>
            <button className="btn btn-danger btn-sm"
                onClick={() => props.onDelete(category._id)}
            >Delete</button>
        </td>
    </tr>
)) :
<div className="spinner-border" role="status">
<span className="visually-hidden">Loading...</span>
</div>
   }
</tbody> */}