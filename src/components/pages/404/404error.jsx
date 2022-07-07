import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../index'
import pixar from '../../../images/pixar.png'
import './404.css'

const UndefinedPage = () => {

    let navigate = useNavigate()
    const backToHome = () => {
      navigate('/')
    }

    return (
        <section className='section__padding'>
            <div className='error-header'>
                <p>404<span>error</span></p>
            </div>
            <div className='error'>
                <div className='error__picture'>
                    <img src={pixar} alt="404page" />
                </div>
                <div className='error__content'>
                    <h2>Ooops... <br /><span>Page not found</span></h2>
                    <p>
                        We are very sorry for inconvenience. It looks you're trying to access a page
                        that either has been deleted or never existed
                    </p>
                    <div className='error__content-button'>
                        <PrimaryButton label={`Back to home`} onClick={() => { backToHome() }} />
                    </div>
                </div>
            </div>
            <div className='error-footer'>
                <p>404<span>error</span></p>
            </div>
        </section>
    )
}

export default UndefinedPage