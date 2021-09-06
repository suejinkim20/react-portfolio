import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function LargeProject({largeProjects}) {  

    return (
        <Row className='m-2 justify-content-center'>
            {largeProjects.map((project) => (
                <Card className="card m-4 col-lg-5 col-sm-12 p-0">
                    <Card.Img src={process.env.PUBLIC_URL + project.image} variant="top" alt={project.title}/>
                    <Card.Body>
                        <h5 className="card-title">{project.title}</h5>
                        <div className="card-text m-1 p-1">
                            <p className="m-0 p-0">{project.description}</p>
                            <p className="m-0 p-0">
                                <span className="fw-bold"> Role:</span> {project.role}
                            </p>
                            <p className="m-0 p-0">
                                <span className="fw-bold">Tech:</span> {project.tech}
                            </p>
                        </div>
                        <Button href={project.repo} variant="secondary" className="m-2" target="_blank">GitHub Repo</Button>
                        <Button href={project.deployedLink} variant="info" className="m-2" target="_blank">Deployed Site</Button>
                    </Card.Body>
                </Card>
            ))}
      </Row>
    );

  };
  
