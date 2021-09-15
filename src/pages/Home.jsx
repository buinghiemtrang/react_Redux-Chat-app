import React from 'react'

import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import BoxChat from '../components/BoxChat'
import InfoFiles from '../components/InfoFiles'

function Home() {
    return (
        <div className="layouts">
            <div className="section__sidebar">
                <Sidebar />
            </div>
            <div className="section__contact">
                <Contact />
            </div>
            <div className="section__boxchat">
                <BoxChat />
            </div>
            <div className="section__info">
                <InfoFiles />
            </div>
        </div>
    )
}

export default Home
