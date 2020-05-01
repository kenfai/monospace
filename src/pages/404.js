import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

import BGEmptyRoad from "../images/bg-empty-road.jpg"

export default () => {
    return (
        <>
            <Layout>
                <Header />
                <Navigation />
                <div className="text-center">
                    <p className="p-4 text-3xl font-bold">404 Page Not Found!</p>
                    <img src={BGEmptyRoad} className="w-2/3 mx-auto" alt="404 Page Not Found" />
                    <p className="font-serif italic text-gray-800">"Beep Beep?"</p>
                    <Link to="/" className="p-4 inline-block text-blue-600">Go Home</Link>
                </div>
            </Layout>
            <Footer />
        </>
    )
}