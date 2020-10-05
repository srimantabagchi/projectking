import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams, Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const projects = useSelector((state) => state.firestore.data.projects);
  const { id } = useParams();
  const project = projects ? projects[id] : null;

  useFirestoreConnect([
    {
      collection: "projects",
    },
  ]);

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

export default ProjectDetails;
