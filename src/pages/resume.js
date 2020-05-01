import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

import RowItem from "../components/Resume/rowItem"
import BookItem from "../components/Resume/bookItem"

import ProfileImg from "../images/ken_resume.jpg"

// Books Cover Images
import Book1984GeorgeOrwell from "../images/books/1984-george-orwell.jpg"
import BookAShortHistoryOfNearlyEverything from "../images/books/a-short-history-of-nearly-everything.jpg"
import BookAnimalFarm from "../images/books/animal-farm.jpg"
import BookBraveNewWorld from "../images/books/brave-new-world.jpg"
import BookCodeCharlesPetzold from "../images/books/code-charles-petzold.jpg"
import BookDavidAndGoliath from "../images/books/david-and-goliath-malcolm-gladwell.jpg"
import BookFahrenheit451 from "../images/books/fahrenheit-451.jpg"
import BookHowToWinFriendsAndInfluencePeople from "../images/books/how-to-win-friends-and-influence-people.jpg"
import BookWhoSaysElephantsCantDance from "../images/books/ibm-who-says-elephants-cant-dance.jpg"
import BookMastery from "../images/books/mastery-robert-greene.jpg"
import BookMcdBehindArches from "../images/books/mcd-behind-arches.jpg"
import BookRework from "../images/books/rework.jpg"
import BookRoundTheWorldIn80Days from "../images/books/round-the-world-in-80-days.jpg"
import BookTheEMyth from "../images/books/the-e-myth.jpg"
import BookHitchHikersGuideToTheGalaxy from "../images/books/the-hitchhikers-guide-to-the-galaxy.jpg"
import BookTheJaunt from "../images/books/the-jaunt-stephen-king.jpg"
import BookTheTippingPoint from "../images/books/the-tipping-point.jpg"
import BookWorldIsFlat from "../images/books/world-is-flat.jpg"

export default () => {
    return (
        <>
            <Layout pathname="/resume">
                <Header />
                <Navigation />
                <div className="text-center">
                    <div className="my-4 pt-8">
                        <img className="w-48 h-48 mx-auto rounded-full" src={ProfileImg} alt="Ken Profile"/>
                    </div>
                    <div className="pt-4 pb-16">
                        <p className="pb-4 text-2xl font-semibold">Hi <span role="img" aria-label="waving hand">👋</span>, I'm KEN FAI.</p>
                        <p className="pb-4 text-xl text-gray-800 font-medium">PHP Web Backend Developer. E-commerce Practitioner. Hardware Maker.</p>
                        <p className="text-lg font-serif italic text-blue-800">"I believe the Web should remain as the open platform for experimenting new ideas."</p>
                    </div>
                    <div className="py-8 border rounded-md border-gray-400 shadow">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="speech balloon">💬</span> Reach out to me</h2>
                        <div className="flex flex-wrap justify-around"><div className="mx-4 mb-8 transition duration-200 ease-in-out transform hover:scale-110">
                                <a className="px-4 py-2 text-white transition duration-200 ease-in-out rounded-full bg-blue-400 hover:bg-blue-300 hover:shadow hover:no-underline" href="https://twitter.com/ngkenfai" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                                    <span className="">@ngkenfai</span>
                                </a>
                            </div>
                            <div className="mx-4 mb-8 transition duration-200 ease-in-out transform hover:scale-110">
                                <a className="px-4 py-2 text-white transition duration-200 ease-in-out rounded-full bg-blue-600 hover:bg-blue-500 hover:shadow hover:no-underline " href="https://www.linkedin.com/in/kenfai/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                    <span className="">Ng Ken Fai</span>
                                </a>
                            </div>
                            <div className="mx-4 mb-8 transition duration-200 ease-in-out transform hover:scale-110">
                                <a className="px-4 py-2 text-white transition duration-200 ease-in-out rounded-full bg-black hover:bg-gray-800 hover:shadow hover:no-underline" href="https://github.com/kenfai" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                    <span className="">@kenfai</span>
                                </a>
                            </div>
                            <div className="mx-4 mb-8 transition duration-200 ease-in-out transform hover:scale-110">
                                <a className="px-4 py-2 text-white transition duration-200 ease-in-out rounded-full bg-pink-600 hover:bg-pink-500 hover:shadow hover:no-underline" href="https://www.instagram.com/ngkenfai/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                    <span className="">@ngkenfai</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="py-16">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="fire">🔥</span> Current Focus</h2>
                        <RowItem year="2020" title="Product Building">To build a practical product that will ease a developer's workflow</RowItem>
                        <RowItem year="2020" title="AWS Certification">Aiming to get certified as an AWS Solutions Architect</RowItem>
                    </div>
                    <div className="px-4 sm:px-8 py-16 bg-indigo-100 rounded">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="rocket">🚀</span> Long-term Goals</h2>
                        <RowItem title="IT Security Expert">To excel and navigate in the increasingly important field of IT Security.</RowItem>
                        <RowItem title="Hardware Expert">To understand how hardware and electronics work inside-out.</RowItem>
                    </div>
                    <div className="py-16">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="desktop computer">🖥</span> Work</h2>
                        <RowItem year="Since 2011" title="Commercial E-commerce Modules">Built and maintained 11 high-quality plug-in modules for a popular open-source E-commerce platform.</RowItem>
                        <RowItem year="Since 2011" title="E-commerce Store Service & Support">Helped enhanced & supported over 3000+ online store owners running open-source E-commerce platform in 20+ different countries around the world.</RowItem>
                        <RowItem year="2018" title="Open Source Contribution"><a href="https://github.com/fzaninotto/Faker/pull/1403" target="_blank" rel="noopener noreferrer">Faker</a><br/>Contributed localization code to a widely-used Open Source PHP library.</RowItem>
                        <RowItem year="2019" title="E-commerce Backend System">Successfully built a PHP Laravel based E-commerce backend with custom CMS and deployed on AWS cloud services that serve both website and mobile apps for the travel industry.</RowItem>
                        <RowItem year="2020" title="COVID-19 Government Social Media Directory"><a href="https://inside.my/gov/" target="_blank" rel="noopener noreferrer">inside.my/gov</a><br/>A static website directory that contains all social media accounts used by the Malaysian Government and officers related to the COVID-19 pandemic.</RowItem>
                    </div>
                    <div className="px-4 py-16 sm:p-16 border rounded-md border-gray-400 shadow">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="hammer and spanner">🛠</span> Professional Skills</h2>
                        <RowItem title="Skills">
                            <span className="font-semibold">Experience Level</span>
                        </RowItem>
                        <RowItem title="HTML + CSS">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-orange-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-red-600"> </div>
                        </RowItem>
                        <RowItem title="PHP & Laravel">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-orange-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-red-600"> </div>
                        </RowItem>
                        <RowItem title="MySQL Database">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-orange-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-red-600"> </div>
                        </RowItem>
                        <RowItem title="JavaScript">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-orange-600"> </div>
                        </RowItem>
                        <RowItem title="VueJS">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                        </RowItem>
                        <RowItem title="ExpressJS / NodeJS">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                        </RowItem>
                        <RowItem title="Amazon Web Services (AWS)">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                        </RowItem>
                        <RowItem title="Adobe Photoshop / Illustrator">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-yellow-600"> </div>
                        </RowItem>
                        <RowItem title="Adobe Premiere Pro / After Effects">
                            <div className="inline-block w-1/6 h-2 mr-1 bg-blue-600"> </div>
                            <div className="inline-block w-1/6 h-2 mr-1 bg-green-600"> </div>
                        </RowItem>
                    </div>
                    <div className="py-16">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="yellow heart">💛</span> Work Traits</h2>
                        <RowItem title="Personality">INFJ - (I)ntroversion, I(N)tuition, (F)eeling, (J)udging</RowItem>
                        <RowItem title="Communication Languages">English, Malay, Chinese</RowItem>
                        <RowItem title="Location">Remote - Kuala Lumpur, Malaysia</RowItem>
                        <RowItem title="Workstation Environment">macOS - MacBook Pro</RowItem>
                        <RowItem title="Device Platform">iOS - iPhone</RowItem>
                    </div>
                    <div className="px-4 sm:px-8 py-16 bg-green-100">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="mushroom">🍄</span> Community Experiences</h2>
                        <RowItem year="2014 - 2016" title="TEDxKL & TEDxYouth@KL Ambassador">Volunteered as the organizing committee in TEDxKL 2014, 2015, and TEDxYouth@KL 2015, 2016.</RowItem>
                        <RowItem year="2015 - 2016" title="AngelHack KL Ambassador">Co-organized AngelHack KL 2015 & 2016 in Kuala Lumpur, Malaysia.</RowItem>
                        <RowItem year="2014" title="D3 Hackathon by MCMC">2nd Runner Up</RowItem>
                        <RowItem year="2017" title="Malaysia Airlines Hackathon">3rd Prize Winner</RowItem>
                        <RowItem year="2018" title="GIG Economy Hackathon by MOHE">Champion Team Mentor</RowItem>
                    </div>
                    <div className="py-16">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="books">📚</span> Books</h2>
                        <div className="flex flex-wrap justify-around">
                            <BookItem src={Book1984GeorgeOrwell} author="George Orwell">1984</BookItem>
                            <BookItem src={BookAShortHistoryOfNearlyEverything} author="Bill Bryson">A Short History of Nearly Everything</BookItem>
                            <BookItem src={BookAnimalFarm} author="George Orwell">Animal Farm</BookItem>
                            <BookItem src={BookBraveNewWorld} author="Aldous Huxley">Brave New World</BookItem>
                            <BookItem src={BookCodeCharlesPetzold} author="Charles Petzold">Code</BookItem>
                            <BookItem src={BookDavidAndGoliath} author="Malcolm Gladwell">David and Goliath</BookItem>
                            <BookItem src={BookFahrenheit451} author="Ray Bradbury">Fahrenheit 451</BookItem>
                            <BookItem src={BookHowToWinFriendsAndInfluencePeople} author="Dale Carnegie">How to Win Friends and Influence People</BookItem>
                            <BookItem src={BookWhoSaysElephantsCantDance} author="Louis V. Gerstner Jr.">Who Says Elephants Can't Dance?</BookItem>
                            <BookItem src={BookMastery} author="Robert Greene">Mastery</BookItem>
                            <BookItem src={BookMcdBehindArches} author="John F. Love">McDonald's: Behind The Arches</BookItem>
                            <BookItem src={BookRework} author="Jason Fried">Rework</BookItem>
                            <BookItem src={BookRoundTheWorldIn80Days} author="Jules Verne">Round the World in Eighty Days</BookItem>
                            <BookItem src={BookTheEMyth} author="Michael E. Gerber">The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It</BookItem>
                            <BookItem src={BookHitchHikersGuideToTheGalaxy} author="Douglas Adams">The Hitchhiker's Guide to the Galaxy</BookItem>
                            <BookItem src={BookTheJaunt} author="King, Stephen">The Jaunt. Travel</BookItem>
                            <BookItem src={BookTheTippingPoint} author="Malcolm Gladwell">The Tipping Point: How Little Things Can Make a Big Difference</BookItem>
                            <BookItem src={BookWorldIsFlat} author="Thomas L. Friedman">The World Is Flat: The Globalized World in the Twenty First Century</BookItem>
                        </div>
                    </div>
                    <div className="py-16 px-4 bg-gray-200 rounded">
                        <h2 className="pb-8 text-2xl font-semibold"><span role="img" aria-label="seedling">🌱</span> Favourite Quotes</h2>
                        <p className="font-serif italic py-4">“Learn something about everything, and everything about something.”</p>
                        <p className="font-serif italic py-4">“Today you, tomorrow me.”</p>
                    </div>
                </div>
            </Layout>
            <Footer />
        </>
    )
}