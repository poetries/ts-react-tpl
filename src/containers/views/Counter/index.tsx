import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { ComponentExt } from '@utils/reactExt';

interface IGlobalStore {
    increase: ()=> void,
    decrease: ()=> void,
    num: number
}

interface IProps {
    globalStore: IGlobalStore
}

@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> {
    increase = () => {
        this.props.globalStore.increase()
    }
    decrease = () => {
        this.props.globalStore.decrease()
    }
    render() {
        const {num} = this.props.globalStore
        return (
            <div>
                <div>{num}</div>
                <button onClick={this.increase}>增加</button>
                <button onClick={this.decrease}>减少</button>
            </div>
        )
    }
}

export default Counter