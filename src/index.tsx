import * as React from 'react'
import * as ReactDOM from 'react-dom'
import  * as styles from './index.scss'

import Test from '@components/Test'

const render = () => {
    ReactDOM.render(
        <Test />,
        document.querySelector('#app')
    )
}
render()