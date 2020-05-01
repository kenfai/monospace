import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Introduction from "../components/Introduction"
import Footer from "../components/Footer"
import NoteList from "../components/LatestNote/noteList"

export default () => {
    return (
        <>
            <Layout pathname="/">
                <Header />
                <Navigation />
                <Introduction />
                <NoteList />
            </Layout>
            <Footer />
        </>
    )
}