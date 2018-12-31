import * as React from 'react'

@log
export default class Test extends React.Component {
    render() {
        return (
            <div>test component</div>
        )
    }
}

function log(target:any) {
    console.log(target)
}