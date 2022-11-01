import {request} from "./request";


export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getDetailRecommendData(){
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
      this.iid = itemInfo.iid;
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop{
  constructor(shopInfo){
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
  }
}

// export function debounce (fun, delay) {
//   let timer = null
//   // 接收调用函数时传入的参数的值 ...args 可多个
//   return function (...args) {
//     if (timer) return
//     timer = setTimeout(() => {
//       fun.apply(this, args)
//     }, delay);
//   }
// }