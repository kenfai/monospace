import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Footer from "../components/Footer"

import Project from "../components/Lab/projectItem"

import ProjectInsideGov from "../images/lab/inside-gov.png"

export default () => {
    return (
        <>
            <Layout pathname="/lab">
                <Header />
                <Navigation />
                <Title>Lab</Title>
                <p className="pb-8">A space to showcase projects and experiments that I have done.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Project url="https://inside.my/gov" title="COVID-19 Government Social Media Directory" imgSrc={ProjectInsideGov}>
                        A static website directory that contains all social media accounts used by the Malaysian Government and officers during the COVID-19 pandemic.
                    </Project>
                </div>
            </Layout>
            <Footer />
        </>
    )
}