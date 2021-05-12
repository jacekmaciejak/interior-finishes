import React from 'react'
import './Hero.css'
import '../../App.css'


export default function Hero({ children, hero }) {
    return <header className={hero}>{children}</header>;
}
Hero.defaultProps = {
    hero: "hero__container"
};
