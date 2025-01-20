/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PersonalInformation from "./SidebarComponents/PersonalInformation";
import Education from "./SidebarComponents/Education";
import ProfessionalSummary from "./SidebarComponents/ProfessionalSummary";
import Experiences from "./SidebarComponents/Experiences";
import Skills from "./SidebarComponents/Skills";
import Contact from "./SidebarComponents/Contact";

export default function Sidebar({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  educationList,
  setEducationList,
  professionalSummary,
  setProfessionalSummary,
  experiencesList,
  setExperiencesList,
  skillsList,
  setSkillsList,
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
  gitHub,
  setGitHub,
  website,
  setWebsite,
}) {
  return (
    <div className="flex flex-col gap-2 border-2 border-black border-t-0 max-w-[300px] min-w-[300px] bg-[#EEEEEE] max-h-screen overflow-y-scroll">
      <h1 className="p-2 text-[23px] font-[650] border-b-2 border-black">Add or Edit Information</h1>
      <PersonalInformation firstName = {firstName} lastName = {lastName} age = {age} setFirstName = {setFirstName} setLastName = {setLastName} setAge = {setAge}/>
      <Education educationList = {educationList} setEducationList = {setEducationList}/>
      <ProfessionalSummary professionalSummary = {professionalSummary} setProfessionalSummary={setProfessionalSummary}/>
      <Experiences experiencesList = {experiencesList} setExperiencesList = {setExperiencesList}/>
      <Skills skillsList = {skillsList} setSkillsList = {setSkillsList}/>
      <Contact email = {email} setEmail = {setEmail} phone = {phone} setPhone = {setPhone} linkedin = {linkedin} setLinkedin = {setLinkedin} gitHub = {gitHub} setGitHub = {setGitHub} website = {website} setWebsite = {setWebsite} />
    </div>
  );
}
