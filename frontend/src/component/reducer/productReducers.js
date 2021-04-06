import { PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REVIEW_SAVE_FAIL, PRODUCT_REVIEW_SAVE_REQUEST, PRODUCT_REVIEW_SAVE_RESET, PRODUCT_REVIEW_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from "../../constant/productConstant";

export const productListReducer=(state={createdProducts:[]},action)=>{
switch(action.type){
    case PRODUCT_LIST_REQUEST:
        return {loading:true ,createdProducts:[]};
        case PRODUCT_LIST_SUCCESS:
            return{loading:false,createdProducts:action.payload};
            case PRODUCT_LIST_FAIL:
                return {loading:false,error:action.payload}
                default:
                    return state;
}
}

export const productDetailsReducer=(state={product:{} },action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true};
            case PRODUCT_DETAILS_SUCCESS:
                return{loading:false,product:action.payload};
                case PRODUCT_DETAILS_FAIL:
                    return {loading:false,error:action.payload}
                    default:
                        return state;
    }
    }

export const productDeleteReducer=(state={product:{} },action)=>{
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading:true};
            case PRODUCT_DELETE_SUCCESS:
                return{loading:false,success:true,product:action.payload};
                case PRODUCT_DELETE_FAIL:
                    return {loading:false,error:action.payload}
                    default:
                        return state;
    }
    }


export const productSaveReducer=(state={product:{} },action)=>{
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return {loading:true};
            case PRODUCT_SAVE_SUCCESS:
                return{loading:false,success:true,product:action.payload};
                case PRODUCT_SAVE_FAIL:
                    return {loading:false,error:action.payload}
                    default:
                        return state;
    }
    }


   export   function productReviewSaveReducer(state = {}, action) {
        switch (action.type) {
          case PRODUCT_REVIEW_SAVE_REQUEST:
            return { loading: true };
          case PRODUCT_REVIEW_SAVE_SUCCESS:
            return { loading: false, review: action.payload, success: true };
          case PRODUCT_REVIEW_SAVE_FAIL:
            return { loading: false, errror: action.payload };
          case PRODUCT_REVIEW_SAVE_RESET:
            return {};
          default:
            return state;
        }
      }
      
 
      