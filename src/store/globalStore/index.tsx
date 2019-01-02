import {observable, action} from 'mobx'


export class GlobalStore {
    @observable
    num: number = 0

    @action
    increase = (num: number) =>{
        this.num += 1
    }

    @action 
    decrease = (num: number) => {
        this.num -= 1
    }
}

// 导出这个类的实例
export default new GlobalStore