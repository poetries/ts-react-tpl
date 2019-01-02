import * as React from 'react'
import {message, notification} from 'antd'

// 这里使用到泛型来灵活化state和props的interface
export class ComponentExt<P = {}, S = {}>  extends React.Component<P, S> {
    $message = message 
    $notification = notification
}