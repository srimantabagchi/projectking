import { firestore } from "../../config/firebase"

export const createProject = (project) => {
  return (dispatch, getState) => {
    const profile = getState().firebase.profile;
    console.log("The profile is " + JSON.stringify(profile))
    const authorId = getState().firebase.auth.uid;
    console.log("The auth is " + authorId)
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};