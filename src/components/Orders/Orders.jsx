import axios from 'axios'
import { useQuery } from 'react-query'
import jwtDecode from 'jwt-decode'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { Helmet } from 'react-helmet'



export default function Orders() {

  

  const {id} =  jwtDecode(localStorage.getItem('userToken'))
 

  function getAllOrders(){
    try {
       return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
          .then((res)=> res.data)
          .catch((err)=> err)
    } catch (error) {
      console.log('error',error)
    }

  }

const {data,isLoading,isError} =useQuery('getAllOrders',getAllOrders)


  return  <>
  <Helmet>
    <title>All Orders</title>
  </Helmet>
      {isLoading ? <Loading/> :''}

      
      {data  ? <div className="container my-5">
        {data &&data?.reverse().map((element,index)=>{
         return <div key={element._id} className="row g-2 my-3 bg-main-light border border-3 border-success rounded-2">
         <p className='text-center mb-3 h5' >Order Number : <span className='text-main fw-bold'>{data?.length -index}</span> </p>
         <hr  className='mb-3'/>
        <div className=" col-sm-5">
          <p className="mb-3">Phone: <span className='text-main fw-bold'>{data&& element?.shippingAddress.phone}</span>  </p>
          <p className="mb-3">City: <span className='text-main fw-bold'>{data&& element?.shippingAddress.city}</span>  </p>
          <p className="mb-3">Comment: <span className='text-main fw-bold'>{data&& element?.shippingAddress.details}</span>  </p>
          <p className="mb-3">Payment Method: <span className='text-main fw-bold'>{data&& element?.paymentMethodType}</span>  </p>
          <p className="mb-3">Paid Status: <span className='text-main fw-bold'>{data&& element?.isPaid == true ? "True 🥰" : "false ❗" }</span>  </p>
          <p className="mb-3">Deliverey Status: <span className='text-main fw-bold'>{data&& element?.isDelivered == true ? "True " : "false" }</span>  </p>
          <p className="mb-3">Order Created At : <span className='text-main fw-bold'>{data&& element?.createdAt.split("-").slice(0,2).join(' ') }</span>  </p>
        </div>
        <div className="col-sm-7"> 
        {data&& element?.cartItems.map((item)=>{
          return <div key={item._id} className="row g-4 my-1 align-items-center">
            <div className="col-md-3">
              <img className=' w-75 mb-2 ' src={item.product.imageCover} alt="" />
              <p className=' text-main fw-bold' >{item.product.title.split(' ').splice(0,2).join(' ')}</p>
            </div>
            <div className="col-md-9 ">
              <p className="m-2">Count: <span className='fw-bold text-main'>{data &&item?.count}</span> </p>
              <p className="m-2">Category: <span className='fw-bold text-main'>{data &&item?.product.category.name}</span> </p>
              <p className="m-2">Brand: <span className='fw-bold text-main'>{data &&item?.product.brand.name}</span> </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="m-2">Price: <span className="fw-bold text-main">{data&& item?.price} EGP</span></div>
                <div className="m-2"> <span className="fw-bold text-main">{data&& item?.product.ratingsAverage} <i className='fas fa-star rating-color' ></i> </span></div>

              </div>

            </div>
          </div>
        })}


        </div>
        <hr className='m-0' />
        <h5 className='text-center m-0 p-1 text-white  ' style={{backgroundColor:"#999"}}>Total Order <span style={{color:'#040'}} className=" fw-bold">{element.totalOrderPrice} EGP</span> </h5>
         </div> 
        })}


      </div> :<>
        <div className="container">
        <div className="bg-main-light rounded-2 py-5 my-5 w-100 rounder-2 d-flex justify-content-center align-items-center">
              <h2 className='text-danger'>No Orders Yet <i className="fas fa-sad-tear"></i></h2>


            </div>
        </div>
      
      
      
      </>
      
    
    }
     {isError ?<Error/> :""}


    </>

}
