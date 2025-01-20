import { useState } from "react";
import Sidebar from "./Sidebar";
import Resume from "./Resume";

export default function MainComponent() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [age, setAge] = useState();
  let [educationList, setEducationList] = useState([]);
  let [professionalSummary, setProfessionalSummary] = useState("");
  let [experiencesList, setExperiencesList] = useState([]);
  let [skillsList, setSkillsList] = useState([]);
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [linkedin, setLinkedin] = useState("");
  let [gitHub, setGitHub] = useState("");
  let [website, setWebsite] = useState("");

  return (
    <div className="flex flex-grow">
      <Sidebar
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        age={age}
        setAge={setAge}
        educationList={educationList}
        setEducationList={setEducationList}
        professionalSummary={professionalSummary}
        setProfessionalSummary={setProfessionalSummary}
        experiencesList={experiencesList}
        setExperiencesList={setExperiencesList}
        skillsList={skillsList}
        setSkillsList={setSkillsList}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        linkedin={linkedin}
        setLinkedin={setLinkedin}
        gitHub={gitHub}
        setGitHub={setGitHub}
        website={website}
        setWebsite={setWebsite}
      />

      <Resume
        firstName={firstName}
        lastName={lastName}
        age={age}
        educationList={educationList}
        professionalSummary={professionalSummary}
        experiencesList={experiencesList}
        skillsList={skillsList}
        email={email}
        phone={phone}
        linkedin={linkedin}
        gitHub={gitHub}
        website={website}
      />
    </div>
  );
}

//we are bascially going to pass down these state variables down into sidebar, and then those state varibles down into the sdiebare componetns because it is gong to be lijke we change the valeus in that adn the n it comes back up here and then mian component rerneders with the resume
