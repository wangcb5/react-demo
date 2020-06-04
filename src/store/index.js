import {observable, action} from 'mobx'

class appStore {
    @observable number

    constructor() {
        this.number = 0
    }

    @action.bound add(){
        console.log(this.number)
        this.number ++
    }
}

export default new appStore()