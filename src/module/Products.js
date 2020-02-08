import {
   list,
   call
} from './../services/index'

// module should be seperated
export const getProducts = () => {
   return new Promise((resolve, reject) => {
      call({ url: list.getProducts, method: 'get'}).then(e => {
         return resolve(e.products);
      }).catch(() => reject());
   })
}

export const getProductsStyles = () => {
   return new Promise((resolve, reject) => {
      call({ url: list.getProducts, method: 'get'}).then(e => {
         return resolve(e.furniture_styles);
      }).catch(() => reject());
   })
}