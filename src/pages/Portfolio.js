import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { largeProjectData, smallProjectData } from '../projectData'
import LargeProject from '../components/LargeProject'
import SmallProject from '../components/SmallProject'

export default function Portfolio() {
    const largeProjects = largeProjectData
    const smallProjects = smallProjectData
    return (
        <div className="mt-5">
        <h1 className="text-center">My Work</h1>
        <Container fluid className="portfolio-cards">
            {/* large projects */}
            <LargeProject largeProjects={largeProjects} />
            
            
            <SmallProject smallProjects={smallProjects} />

        </Container>       
        </div>
    )
}