import React from "react";
import { ProfileHeader, ResumeParagraph } from "../../constants/index";
import { Background, Header, ParagraphContainer } from "./styles";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";

const Profile = () => {
  return (
    <>
      <Background />
      <Header>{ProfileHeader}</Header>
      {/* <Skills /> */}
      <ParagraphContainer>{ResumeParagraph}</ParagraphContainer>
      <WorkExperience />
    </>
  );
};

export default Profile;
