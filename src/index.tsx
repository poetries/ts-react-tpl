import * as React from 'react'
import * as ReactDOM from 'react-dom'
import  * as styles from './index.scss'

const render = () => {
    ReactDOM.render(
        <div className={styles.test}>123</div>,
        document.querySelector('#app')
    )
}
render()