import React from 'react'
import './WorkWrapper.css'
import ScopeOfWork from './ListItem/scopeOfWork'
import { scopeOfWorkData } from '../../data/scopeOfWork'

const ScopeOfWorkWrapper = () => (
    <ul className="scopeOfWorkWrapper__wrapper">
        {scopeOfWorkData.map(item => (
            <ScopeOfWork key={item.title} {...item} />
        ))}
    </ul>
)
export default ScopeOfWorkWrapper;