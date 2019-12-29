import React from 'react'
import { Button, Icon } from 'antd'

import '../../css/ModalPrevNextBtns.css'

export function ModalPrevNextBtns () {

    return (
        <div className='ModalPrevNextBtns'>
            <Button>
                <Icon type='left' />
                Prev
            </Button>
            <Button>
                Next
                <Icon type='right' />
            </Button>
        </div>
    )
}
