/* eslint-disable react/prop-types */
import React from 'react'
import { Typography } from 'antd'

export function ModalTabs (props) {

    const { allNamesFillngs, changeCurrentFillingTypeOnClick } = props;

    const tabs = allNamesFillngs.map((item, index) => {
        return ( 
            <Typography.Title
                level={4}
                key={index}
                onClick={() => changeCurrentFillingTypeOnClick(item.name)}    
            >
                { item.title }
            </Typography.Title>
        )
    })

    return (
        <div className='Modal-Tabs'>{tabs}</div>
    )
}
