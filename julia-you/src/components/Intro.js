import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../styles/Intro.css";

class Intro extends React.Component {
    handleType = (count) => {
        console.log(count)
    }

    handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    render() {
        return (
            <>
                <div className='intro-section' >
                    <div className='intro-content'>
                        <h1>
                            <span className="intro-greeting">
                                <Typewriter
                                    words={['Hello,', 'Bonjour,', '你好,',]}
                                    loop={Infinity}
                                    cursor
                                    typeSpeed={150}
                                    deleteSpeed={100}
                                    delaySpeed={1800}
                                    onLoopDone={this.handleDone}
                                    onType={this.handleType}
                                />
                            </span>
                            <span className="intro-name" >Julia</span>
                            <span> here! 👋</span>
                        </h1>

                        <p className="font-monospace" >
                            I'm a third-year Computer Science student passionate about <br></br>creating and contributing to technologies that better serve our communities.
                        </p>

                        {/* Icons */}
                        <div className="social-icons">
                            <a href="https://github.com/julyou" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/juliahyou" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="...">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div >

                    {/* <div className="separator"></div> */}
                </div >
               
            </>
        )
    }
}

export default Intro;
