import React from 'react'
import './ActionPlanWrapper.css'
import ActionPlanItem from './ActionPlanItem/ActionPlanItem'
import { actionPlanItems } from '../../data/actionPlanItems'

function ActionPlanWrapper() {

    return (
        <div className="action__container">
            {actionPlanItems.map(item => (
                <ActionPlanItem key={item.title2} {...item}
                />
            ))}
        </div>
    )
}

export default ActionPlanWrapper
