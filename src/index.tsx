import * as React from 'react'
import * as ReactDOM from 'react-dom'
import  * as styles from './index.scss'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import Test from '@components/Test'
import * as store from './store'
import Counter from '@views/Counter'
import App from '@shared/App'

configure({enforceActions: 'observed'})

const render = () => {
    ReactDOM.render(
        <Provider {...store}>
            <div>
                <Test /><br />
                <Counter /><br />
                <App />
            </div>
        </Provider>,
        document.querySelector('#app')
    )
}
render()