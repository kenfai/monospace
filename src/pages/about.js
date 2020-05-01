import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import TimelineItem from "../components/Timeline"
import Footer from "../components/Footer"
import ProfileImg from "../images/ken_portrait.jpg"

export default () => {
    return (
        <>
        <Layout pathname="/about">
            <Header />
            <Navigation />
            <Title>Who?</Title>
                <div className="note">
                    <img className=" w-56 sm:float-left mr-12 mb-8" src={ProfileImg} alt="Ken Profile"/>
                    <p>My name is Ken.</p>
                    <p>I'm a programmer based in Kuala Lumpur, Malaysia. I was born in the late 80’s, and grew up fascinated by science & technology, particularly the computer.</p>
                </div>
                <div className="clearfix"></div>
                <h2 className="py-8 text-2xl font-semibold">Timeline</h2>
                <TimelineItem date="1998" title="First Computer">
                    <ul className="list-inside list-disc">
                        <li>I got my first ever computer - an <a href="https://en.wikipedia.org/wiki/PC1512" target="_blank" rel="noopener noreferrer">Amstrad PC1512</a>.</li>
                        <li>It came together with a bunch of software on 5 1⁄4-inch floppy disks.</li>
                        <li>I remember playing a few classics on it - Maniac Mansion, Alley Cat, Golden Axe, amongst other games.</li>
                        <li>It is also capable of loading the <a href="https://en.wikipedia.org/wiki/GEM_(desktop_environment)" target="_blank" rel="noopener noreferrer">GEM OS</a> on the system.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2000" title="Access To The Internet">
                    <ul className="list-inside list-disc">
                        <li>Got my 2nd PC at the turn of the millennium - A Pentium III 600Mhz system which came installed with a modern Windows 98 OS and a built-in 56k dial-up modem.</li>
                        <li>Made first contact with the Internet. This event marks the beginning of my exploration, and I was hooked ever since.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2001" title="The Web & Flash">
                    <ul className="list-inside list-disc">
                        <li>The Internet has provided me with access to a vast amount of resources that I had never imagined. It has made self-learning on any topics possible.</li>
                        <li>Started learning to build webpages using HTML on notepad.</li>
                        <li>Discovered Macromedia Flash and was immediately got attracted by its multimedia capabilities.</li>
                        <li>Bought my first programming book - O'Reilly's ActionScript The Definitive Guide by Colin Moock and read it from cover to cover. This book has formed the coding foundation in me.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2002" title="Discovering">
                    <ul className="list-inside list-disc">
                        <li>Discovered Macromedia Dreamweaver because of Flash.</li>
                        <li>Started learning about CSS thanks to the webpage code output by Dreamweaver.</li>
                        <li>Modelled my first Counter-Strike map using Valve Hammer Editor.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2003" title="Learning">
                    <ul className="list-inside list-disc">
                        <li>Learned about PHP to add data loading capabilities into Flash.</li>
                        <li>Discovered JavaScript from downloadable DHTML components.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2005" title="Experimenting">
                    <ul className="list-inside list-disc">
                        <li>Replaced my ageing Pentium III with an AMD Athlon64 system.</li>
                        <li>The increasing popularity of cel-shading in Flash animation has encouraged me to learn about the basic of 3D concept by trying out various 3D applications such as 3DSMax, Lightwave 3D, modo, Blender, etc.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2007" title="Computer Science">
                    <ul className="list-inside list-disc">
                        <li>Got myself an NEC Core Duo laptop that ended up surviving for 9 years.</li>
                        <li>Started my undergraduate studies in Computer Science at the University of Malaya.</li>
                        <li>Started learning Java through one of the core degree subjects.</li>
                        <li>Learned about video editing using Adobe software suites from various University events.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2009" title="The Real World">
                    <ul className="list-inside list-disc">
                        <li>Had my first taste of the real world by interning at a web development company.</li>
                        <li>Performed my first web development activity on an E-commerce website.</li>
                        <li>Attended my first tech event at an Open Source conference.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2010" title="First Startup">
                    <ul className="list-inside list-disc">
                        <li>Started a small business operation by providing website development services with a few friends.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2011" title="Applying Knowledge">
                    <ul className="list-inside list-disc">
                        <li>Successfully graduated from my Computer Science undergraduate degree.</li>
                        <li>Dived deeper into web development and went niche in E-commerce support and services.</li>
                        <li>Made my first $buck$ on the Internet.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2013" title="Dawn of Mac">
                    <ul className="list-inside list-disc">
                        <li>Inherited a second-hand Macbook Pro.</li>
                        <li>Started experiencing Mac OS system as my secondary machine alongside Windows.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2014" title="Hackathons & Events">
                    <ul className="list-inside list-disc">
                        <li>Joined my first Startup Weekend event.</li>
                        <li>Participated in a Hackathon event for the first time.</li>
                        <li>Volunteered for the first time at a TEDxKL conference.</li>
                        <li>Took my first flight.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2015" title="Growth & Networking">
                    <ul className="list-inside list-disc">
                        <li>Curated a TEDxYouth@KL conference event for the first time.</li>
                        <li>Co-organised an AngelHack hackathon event for the first time.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="2018" title="Open Source Contribution">
                    <ul className="list-inside list-disc">
                        <li>Contributed significant code to an Open Source library for the first time.</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="????" title="To be continued..">
                    <ul className="list-inside list-disc">
                        <li>The pace of advancement in technologies and the Internet continue to accelerate exponentially over the years. Yet after all these years, I'm still looking for my footing in the world, trying to search for the domain that will truly define who I am.</li>
                    </ul>
                </TimelineItem>
            </Layout>
            <Footer />
        </>
    )
}