import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function SmallProject({smallProjects}) {  
    return (
      <Row className='m-1 justify-content-center'>
          {smallProjects.map((project) => (
                <Card className="card m-3 col-3">
                    <Card.Img src={project.image} variant="top" alt={project.title} />
                    <Card.Body>
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <Button href={project.repo} variant="secondary" className="m-2" target="_blank">GitHub Repo</Button>
                        <Button href={project.deployedLink} variant="info" className="m-2" target="_blank">Deployed Site</Button>
                    </Card.Body>
                </Card>
                ))      
          }
      </Row>
    );

  };
  
