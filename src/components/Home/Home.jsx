import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import FormName from './FormName'
import './Home.css'

const Home = ({ userName }) => {
    const wallpapers = [
        {
            500: 'https://i.imgur.com/pCbwPtN.jpg',
            1000: 'https://i.imgur.com/Jtgjuyd.jpg',
            1500: 'https://i.imgur.com/mGUldUX.jpg'
        },
        {
            500: 'https://i.imgur.com/wpueujU.jpg',
            1000: 'https://i.imgur.com/Zd4gGAv.jpg',
            1500: 'https://i.imgur.com/i53gRJN.jpg'
        },
        {
            500: 'https://i.imgur.com/8fDq9St.png',
            1000: 'https://i.imgur.com/jMqg5H5.png',
            1500: 'https://i.imgur.com/uFKtpL8.png',
        }
    ];
    const [visibleWallpaper, setVisibleWallpaper] = useState(0);

    useEffect(() => {
        const animationWallpaper = setInterval(() => {
            setVisibleWallpaper(visibleWallpaper => {
                if (visibleWallpaper === wallpapers.length - 1) return 0;
                return visibleWallpaper + 1;
            });
        }, 4000);

        return () => clearInterval(animationWallpaper);
    }, []);

    return (
        <div className='Home'>
            <div className="Home__carrusel">
                {wallpapers.map((el, i) => {
                    return (
                        <picture key={i} className={`Home__picture${visibleWallpaper === i ? ' Home__wallpaper--visible' : ''}`}>
                            <source srcSet={el[500]} media='(max-width: 500px)'/>
                            <source srcSet={el[1000]} media='(max-width: 1000px)'/>
                            <img src={el[1500]} className='Home__wallpaper' />
                        </picture>
                    )
                })}
            </div>
            <h1 className='Home__title'>Pokedex</h1>
            <h2 className='Home__subtitle'>¡Bienvenido entrenador!</h2>
            <p className='Home__paragraph'>Introduce tu nombre y sigue adelante</p>
            <FormName />
            {userName && <Navigate to='/pokedex'/>}
        </div>
    )
}

export default Home