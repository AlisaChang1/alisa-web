import React from "react";
import { ProfileHeader } from "../../constants/index";
import { Background, Header } from "./styles";
import WorkExperience from "./components/WorkExperience";

const Profile = () => {
  return (
    <>
      <Background />
      <Header>{ProfileHeader}</Header>
      <WorkExperience />
    </>
  );
};

export default Profile;
