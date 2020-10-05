import React from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const projects = useSelector((state) => state.firestore.ordered.projects);
  const auth = useSelector((state) => state.firebase.auth);
  const notifications = useSelector(
    (state) => state.firestore.ordered.notifications
  );
  useFirestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]);
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
