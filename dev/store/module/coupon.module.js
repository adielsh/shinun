/**
 * Created by elad on 20 נובמבר 2016.
 */
import CouponService from "../../services/CouponService";

const types = {
    FETCH: "Coupon/fetch",
    GET: "Coupon/get",
    REMOVE: "Coupon/remove",
    CREATE: "Coupon/create",
    UPDATE: "Coupon/update",
    UpdateNowCoupon: "Coupon/updateNowCoupon",
    InitNowCoupon: "Coupon/initNowCoupon",
    UploadImage: "Coupon/uploadImage",

}
const Service = new CouponService

const state = {
    coupons: [],
    nowCoupon: {status: 0}
}


const mutations = {
    [types.FETCH] (state, coupons) {
        console.log(coupons)
        state.coupons = coupons;
    },
    [types.GET] (state, coupons) {
        state.coupons = coupons;
    },
    [types.REMOVE] (state, coupon) {
        CouponService.removeFromArry(state.coupons, coupon)
    },
    [types.CREATE](state, coupon){
        state.coupons.push(coupon)
        state.nowCoupon = coupon
    },
    [types.UPDATE](state, coupon){
        CouponService.UpdateArrayById(state.coupons, coupon)
        state.nowCoupon = coupon
    },
    [types.UpdateNowCoupon](state, Coupon){
        Object.assign(state.nowCoupon, Coupon)
    },
    [types.InitNowCoupon](state){
        state.nowCoupon = {status: 0}
    }
}

const actions = {
    [types.FETCH](context){
        return Service.fetch().then((data) => {
            context.commit(types.FETCH, data)
            return data

        })
    },
    [types.GET](context, id){
        return Service.get(id).then(data => {

            console.log(data)
            context.commit(types.GET, data)
            return data
        })
    },
    [types.SAVE](context, user){
    },
    [types.REMOVE](context, coupon){

        return Service.remove(coupon.id).then(data => {
            console.log(data)
            context.commit(types.REMOVE, coupon)
            return data
        })
    },
    [types.UploadImage](context, image){
    },


    [types.CREATE](context, coupon){
        return Service.create(coupon).then(
            (data) => {
                console.log(data)
                if (data.success) {
                    context.commit(types.CREATE, data.data);
                }
            });
    },
    [types.UPDATE](context, coupon){
        console.log(coupon)
        return Service.update(coupon, coupon.id).then(
            (data) => {
                if (data.success) {
                    context.commit(types.UPDATE, coupon);
                }
                return data;
            });

    },
}
export default
{
    state,
    // getters,
    actions,
    mutations,
    types,

}
