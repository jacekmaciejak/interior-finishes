import React from 'react'
import MyMapComponent from './MyMapComponent'
import './MyFancyComponent.css'
import Address from '../Address/Address'


export default class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <div className="map">
                <Address />
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                />
            </div>

        )
    }
}
