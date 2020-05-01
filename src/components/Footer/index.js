import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import ProfileImg from "./ken_profile.jpg"

export default () => {
    return (
        <footer className="mt-12 py-12 bg-gray-800 bg-topology">
            <div className="max-w-screen-md mx-auto px-4 text-gray-100">
                <div className="sm:flex sm:items-center text-center sm:text-left">
                    <img className="w-12 h-12 rounded-full mx-auto sm:ml-0 sm:mr-2" src={ProfileImg} alt="Ken Profile"/>
                    <div>
                        <span className="text-3xl font-semibold mr-2">Follow me</span>
                        <br className="sm:hidden" />
                        <span className="text-3xl font-thin text-gray-300">I build stuff</span>
                    </div>
                </div>
                <div className="my-8 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center sm:text-left">
                    <div>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        <span className="text-lg">Twitter</span>
                        <br/>
                        <a className="text-blue-500 hover:text-blue-400" href="https://twitter.com/ngkenfai" target="_blank" rel="noopener noreferrer">@ngkenfai</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        <span className="text-lg">LinkedIn</span>
                        <br/>
                        <a className="text-blue-500 hover:text-blue-400" href="https://www.linkedin.com/in/kenfai/" target="_blank" rel="noopener noreferrer">Ng Ken Fai</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        <span className="text-lg">GitHub</span>
                        <br/>
                        <a className="text-blue-500 hover:text-blue-400" href="https://github.com/kenfai" target="_blank" rel="noopener noreferrer">@kenfai</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                        <span className="text-lg">Instagram</span>
                        <br/>
                        <a className="text-blue-500 hover:text-blue-400" href="https://www.instagram.com/ngkenfai" target="_blank" rel="noopener noreferrer">@ngkenfai</a>
                    </div>
                </div>
                <div className="mt-8 text-sm text-center sm:text-left">
                    <p>Copyright &copy; 2000-2020 <Link to="/about" className="text-blue-500 hover:text-blue-400">@ngkenfai</Link>.<br className="sm:hidden" /> All rights reserved.</p>
                    <p className="text-xs text-gray-500">Constructed on a mechanical keyboard • Rendered with GatsbyJS • Styled using Tailwind CSS • Hosted on AWS</p>
                </div>
            </div>
        </footer>
    )
}