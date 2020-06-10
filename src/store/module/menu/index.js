import {observable, action} from 'mobx'

class menuStore {
    @observable menuList
    @observable routers

    constructor() {
        this.menuList = [];
        this.routers = [];
    }

    @action setMenu(menu){
        this.menuList = menu
    }
    @action setRoutes(routes){
        this.routers = routes
    }
}

export default new menuStore()