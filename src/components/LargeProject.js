import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function LargeProject({largeProjects}) {  
    return (
        <Row className='m-2 justify-content-center'>
            {largeProjects.map((project) => (
                <Card className="card m-4 col-5">
                    <Card.Img src={project.image} variant="top" alt={project.title} />
                    <Card.Body>
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <Button href={project.repo} variant="secondary" className="m-2" target="_blank">GitHub Repo</Button>
                        <Button href={project.deployedLink} variant="info" className="m-2" target="_blank">Deployed Site</Button>
                    </Card.Body>
                </Card>
            ))}
      </Row>
    );

  };
  
