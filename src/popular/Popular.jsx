import React from 'react'

import Popularitem from './Popularitem'
import Recent from '../recent/Recent'
import Title from '../components/titles/Title'

const Popular = () => {
    return (
        <>

            <section className="py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 bg-white rounded">

                            <Title titleone="Popular Recipes" titletwo="Savor the Flavor, Share the Love"/>

                            <Popularitem name="By Hanabi" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
                            <Popularitem name="By Hhin Hin" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />
                            <Popularitem name="By Aung Aung" date="21/2/2023" title="Beef" text="Figma ipsum component variatn main layer. Text team line insert" />

                        </div>
                        <div className="col-md-4">

                            <Title titleone="Recent Recipes" titletwo="A Taste of Home in Every Byte"/>

                            <Recent/>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Popular