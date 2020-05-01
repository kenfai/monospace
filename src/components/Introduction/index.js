import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
        <div className="my-24">
            <h1 className="text-5xl">你好。</h1>
            <h2 className="text-3xl text-gray-600">(nǐ hǎo)</h2>

            <p className="my-8 text-xl text-gray-800">Hello. Thanks for dropping by.</p>
            <p className="my-8 text-xl text-gray-800">This website serves as the repository of all things that interest me, as I leave my footprints on the Internet. Everything you are about to find here has once sparked the excitement in me when I first came across them - be it an idea, a thought, a link, a piece of code, an art piece, a film, or a discovery of knowledge &amp; information.  I hope by sharing them here, you will find them as exciting as I did before, and continue to inspire others by sharing them to your peers.</p>
            <p className="mt-8 text-xl text-gray-800">I mean no harm. Enjoy your stay!</p>
            <p className="mt-4 text-xl text-gray-600 italic">- KenFai (<Link to="/about">biography</Link>)</p>
        </div>
    )
}