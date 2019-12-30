/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Typography } from 'antd'

import { MyContext } from '../../context/context'

export function ModalTabs () {

    const context = useContext(MyContext);

    const tabsList = context.tabs.map((item, index) => {
        return ( 
            <Typography.Title
                level={4}
                key={index}
                onClick={() => context.changeCurrentFillingTypeOnClick(item.name, index)}    
            >
                { item.title }
            </Typography.Title>
        )
    })

    return (
        <div className='Modal-Tabs'>{tabsList}</div>
    )
}
