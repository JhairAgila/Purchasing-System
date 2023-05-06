import { publicRequest, userRequest } from "../requestMethods";
import { createBill, failure } from "./cartRedux";
const createCart = async(dispatch, cart) => {
    try{
        console.log(cart);
        const res = await userRequest.post('/carts', cart);
        console.log(res.data);
        dispatch(createBill(cart));
        alert('Product created');
    }catch(error){
        dispatch(failure());
    }
}

export {createCart};