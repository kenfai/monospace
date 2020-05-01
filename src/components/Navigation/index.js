import React from "react"
import NavItem from "./navItem"

export default () => {
    return (
        <nav className="mt-4 mb-8 font-mono border-4 border-gray-800">
            <ul className="flex flex-wrap">
                <NavItem href="/notes">NOTES</NavItem>
                <NavItem href="/tags">TOPICS</NavItem>
                <NavItem href="/lab">LAB</NavItem>
                <NavItem href="/art">ART</NavItem>
                <NavItem href="/resources/">RESOURCES</NavItem>
                <NavItem href="/resume">RESUMÉ</NavItem>
                <NavItem href="/about">ABOUT</NavItem>
            </ul>
        </nav>
    )
}