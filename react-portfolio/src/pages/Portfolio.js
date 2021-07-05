import React from 'react'
import Project from '../components/Project'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Portfolio() {
    return (
        <div>
        <h1>My Work</h1>
        <Container fluid className="portfolio-cards">
            
            {/* <!-- Project: Music Notes Project--> */}
            <Card style={{ width: '35rem' }} className="card m-4">
                <Card.Img src="./images/music-notes.png" variant="top" alt="Music Notes" />
                <Card.Body>
                    <h5 className="card-title">Music Notes</h5>
                    <p className="card-text">A web application to help music teachers easily manage their students. Features include managing schedules and sharing comments.</p>
                    <Button href="https://github.com/ntjohns1/Music-Notes" variant="secondary" className="m-2" target="_blank">GitHub Repo</Button>
                    <Button href="https://uncbootcampmusicnotes.herokuapp.com/" variant="info" className="m-2" target="_blank">Deployed Site</Button>
                </Card.Body>
            </Card>

            {/* <!-- Project: Tech Blog HW--> */}
            <Card style={{ width: '35rem' }} className="card m-4">
                <Card.Img src="./images/tech-blog.png" className="card-img-top" alt="Tech Blog" />
                <Card.Body>
                    <h5 className="card-title">Tech Blog</h5>
                    <p className="card-text">A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.</p>
                    <a href="https://thawing-scrubland-43977.herokuapp.com/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/suejinkim20/tech-blog" className="btn btn-secondary m-2" target="_blank">GitHub Repo</a>
                </Card.Body>
            </Card>

            {/* <!--Project: Fitness Tracker HW--> */}
            <Card style={{ width: '20rem' }} className="card m-4">
                <Card.Img src="./images/fitness-tracker.png" className="card-img-top" alt="Fitness Tracker" />
                <Card.Body>
                    <h5 className="card-title">Fitness Tracker</h5>
                    <p className="card-text">A web application that allows the user to track their workouts.</p>
                    <a href="https://shielded-bastion-63472.herokuapp.com/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/suejinkim20/fitness-tracker" className="btn btn-secondary m-2" target="_blank">GitHub Repo</a>
                </Card.Body>
            </Card>
        
            {/* <!--Project: Note Taker HW--> */}
            <Card style={{ width: '20rem' }} className="card m-4">
                <Card.Img src="./images/note-taker.png" className="card-img-top" alt="Note Taker" />
                <Card.Body>
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">This is a note-taking application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
                    <a href="https://guarded-caverns-55464.herokuapp.com/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/suejinkim20/note-taker" className="btn btn-secondary m-2" target="_blank">GitHub Repo</a>
                </Card.Body>
            </Card>

            {/* <!-- Project: Want a Dog Project--> */}
            <Card style={{ width: '20rem' }} className="card m-4">
                <Card.Img src="./images/WantADog.png" className="card-img-top" alt="Want a Dog" />
                <Card.Body>
                    <h5 className="card-title">I heard you want Doggo</h5>
                    <p className="card-text">A fun library of doggo pictures and random names to help users find the best doggo-doggo name combinations.</p>
                    <a href="https://abnertor.github.io/WantADog/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/AbnerTor/WantADog" className="btn btn-secondary m-2" target="_blank">GitHub Repo</a>
                </Card.Body>
            </Card>

            {/* <!--Project: Weather Dashboard HW--> */}
            <Card style={{ width: '20rem' }} className="card m-4">
                <Card.Img src="./images/weather-dashboard.png" className="card-img-top" alt="Weather Dashboard" />
                <Card.Body>
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">A simple weather display dashboard for scheduling your outdoor and travel activities.</p>
                    <a href="https://suejinkim20.github.io/weather-dashboard/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/suejinkim20/weather-dashboard" className="btn btn-secondary m-2">GitHub Repo</a>
                </Card.Body>
                
            </Card>

            {/* <!--Project: Workday Scheduler HW--> */}
            <Card style={{ width: '20rem' }} className="card m-4">
                <Card.Img src="./images/workday-scheduler.png" className="card-img-top" alt="Workday Scheduler" />
                <Card.Body>
                    <h5 className="card-title">Workday Scheduler</h5>
                    <p className="card-text">A simple daily planner application that allows a user to save events for each hour of the day.</p>
                    <a href="https://suejinkim20.github.io/Workday-Scheduler/" className="btn btn-secondary m-2" target="_blank">Deployed Site</a>
                    <a href="https://github.com/suejinkim20/Workday-Scheduler" className="btn btn-secondary m-2" target="_blank">GitHub Repo</a>
                </Card.Body>
                
            </Card>
            
        </Container>       
        </div>
    )
}