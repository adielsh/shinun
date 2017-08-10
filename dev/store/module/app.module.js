/**
 * Created by elad on 20 נובמבר 2016.
 */
import AppService from "../../services/AppService";

const types = {
    FETCH: "app/fetch",
    GET: "app/get",
    REMOVE: "app/remove",
    CREATE: "app/create",
    UPDATE: "app/update",
    UpdateNowApp: "app/updateNowApp",
    InitNowApp: "app/initNowApp",
    UploadImage: "app/uploadImage",

}
const Service = new AppService

const state = {
    apps: [],
    nowApp: {status: 0}
}


const mutations = {
    [types.FETCH] (state, apps) {
        console.log(apps)
        state.apps = apps;
    },
    [types.GET] (state, app) {
        state.nowApp = app;
    },
    [types.REMOVE] (state, user) {
    },
    [types.CREATE](state, app){
        state.apps.push(app)
        state.nowApp = app
    },
    [types.UPDATE](state, app){
        AppService.UpdateArrayById(state.apps, app)
        state.nowApp = app
    },
    [types.UpdateNowApp](state, app){
        Object.assign(state.nowApp, app)
    },
    [types.InitNowApp](state){
        state.nowApp = {status: 0}
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
            context.commit(types.GET, data)
            return data
        })
    },
    [types.SAVE](context, user){
    },
    [types.REMOVE](context, user){
    },
    [types.UploadImage](context, image){

    },


    [types.CREATE](context, app){
        return Service.create(app).then(
            (data) => {
                console.log(data)
                if (data.success) {
                    context.commit(types.CREATE, data.data);
                }
            });
    },
    [types.UPDATE](context, app){

        return Service.update(app, app.id).then(
            (data) => {
                if (data.success) {
                    context.commit(types.UPDATE, app);
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
