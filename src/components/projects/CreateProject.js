import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect, useHistory } from "react-router-dom";

const CreateProject = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [project, setProject] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(project));
    history.push("/");
  };
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input
            type="text"
            id="title"
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={(e) =>
              setProject({ ...project, content: e.target.value })
            }
          ></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
