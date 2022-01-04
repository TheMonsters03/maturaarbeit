import * as React from 'react';
import Loader from '../structure/spin';
import './pages.css'

function LoadingPage() {
    return (
        <div className='container'>
            <div className='loading'>
                <Loader/>
                <h1>The content is being loaded</h1>
                <h3>Hang in there</h3>
            </div>
        </div>
    )
}

export default LoadingPage;