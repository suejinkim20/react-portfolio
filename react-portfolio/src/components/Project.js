import React from 'react';

const Project = ({ project }) => {  
    return (
      <div>
        <div className="flex-row justify-space-between my-4">
          {project &&
            project.map((project) => (
              <div key={project} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
export default Project;