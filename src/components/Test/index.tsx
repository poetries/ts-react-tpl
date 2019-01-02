import * as React from 'react'
import {Button} from 'antd'

import * as styles from '../../index.scss'
import {ComponentExt} from '@utils/reactExt'

@log
export default class Test extends ComponentExt {
    showMsg = ()=>{
        this.$message.success("这是一个通知")
    }
    render() {
        return (
            <div>
                <h1 className={styles.test}>test component</h1>
                <Button type="primary" onClick={this.showMsg}>Test Button</Button>
            </div>
        )
    }
}

function log(target:any) {
    console.log(target)
}