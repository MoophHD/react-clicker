import React from 'react'
import formatNum from '../gist/formatNum'
    

export default function FromattedNum(props) {
    return(<span>{formatNum(props.num)}</span>)
}