/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {  Card, Typography } from 'antd'
import React from 'react'

// import { MyContext } from '../context/context'

export function ModalContentWithCurrentFilling (props) {
    const { currentFillingType, allFillings } = props;

    let body = allFillings[currentFillingType].map((item, index) => {
        return(
            <div key={index}>
                <Card
                    hoverable
                    style={{ width: 140 }}
                    cover={<img alt={item.name} src={ item.image } />}
                >
                    <Typography.Title level={4}>{item.name}</Typography.Title>
                    <Typography.Title level={4}>Price: {item.price} </Typography.Title>
                    
                </Card>
            </div>
        )
    })

    return (
        <div className='Modal-Cart'>
            {body}
        </div>
    )
    
}