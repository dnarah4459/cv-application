import { useContext } from "react";
import { ResumeReferenceContext } from "../App";

export default function Resume({
  firstName,
  lastName,
  age,
  educationList,
  experiencesList,
  skillsList,
  email,
  phone,
  linkedin,
  gitHub,
  website,
  professionalSummary,
}) {
    const resumeDivRef = useContext(ResumeReferenceContext); 

  return (
    <div className="flex-grow border-r-2 border-black overflow-x-scroll overflow-y-scroll p-6 pt-7 flex justify-around max-h-screen overflow-scroll bg-[#ede4dd]">
      <div className="bg-white box-border relative min-w-[816px] w-[816px] min-h-[1056px] text-black flex flex-col gap-10 pl-5" ref = {resumeDivRef}>
        <div className="p-4 self-center">
          {firstName == "" && lastName == "" ? (
            <div className="text-[21px] font-[670]">Full Name</div>
          ) : (
            <h1 className="text-[21px] font-[670]">
              {firstName} {lastName}
            </h1>
          )}
        </div>

        <div className="flex flex-col ml-1">
          <div>
            <h1 className="text-[18px]">Education</h1>
            <hr className="h-[3px] bg-blue-500 w-[60px] relative top-[4px] left-[1px]" />
          </div>
          <div className="flex flex-col gap-4 m-4">
            {educationList.map((element) => {
              return (
                <div
                  className="flex gap-[60px] bg-white p-4 rounded-lg shadow-md"
                  key={element.key}
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      University
                    </h2>
                    <p className="text-[14px] text-gray-700">
                      {element.university}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      Degree
                    </h2>
                    <p className="text-[14px] text-gray-700">
                      {element.degree}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      From
                    </h2>
                    <p className="text-[14px] text-gray-700">{element.from}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      To
                    </h2>
                    <p className="text-[14px] text-gray-700">{element.to}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 ml-1">
          <div className="flex flex-col">
            <h1 className="text-[18px]">Professional Summary</h1>
            <hr className="h-[3px] bg-blue-500 w-[140px] relative top-[4px] left-[1px]" />
          </div>
          <p className="text-[15px] m-1">{professionalSummary}</p>
        </div>

        <div className="flex flex-col ml-1">
          <div>
            <h1 className="text-[18px]">Experiences</h1>
            <hr className="h-[3px] bg-blue-500 w-[70px] relative top-[4px] left-[1px]" />
          </div>

          <div className="flex flex-col gap-4 m-4">
            {experiencesList.map((element) => {
              return (
                <div
                  className="flex gap-[60px] bg-white p-4 rounded-lg shadow-md"
                  key={element.key}
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      Company
                    </h2>
                    <p className="text-[14px] text-gray-700">
                      {element.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      Title
                    </h2>
                    <p className="text-[14px] text-gray-700">{element.title}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      From
                    </h2>
                    <p className="text-[14px] text-gray-700">{element.from}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[16px] font-semibold text-blue-600">
                      To
                    </h2>
                    <p className="text-[14px] text-gray-700">{element.to}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col ml-1">
          <div>
            <h1 className="text-[18px]">Skills</h1>
            <hr className="h-[3px] bg-blue-500 w-[30px] relative top-[4px] left-[1px]" />
          </div>

          <div className="flex flex-wrap gap-2 p-2">
            {skillsList.map((element) => {
              return (
                <div className="p-2" key={element.key}>
                  {element.skill}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[18px]">Contact</h1>
            <hr className="h-[3px] bg-blue-500 w-[45px] relative top-[4px] left-[1px]" />
          </div>

          <div className="p-3 flex flex-col gap-6 bg-gray-300 mr-4">
            <div className="flex gap-20">
              <div className="flex flex-col gap-1">
                <h1 className="text-[17px] font-[600]">Email</h1>
                <p className="text-[14px]">{email}</p>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-[17px] font-[600]">Phone</h1>
                <p className="text-[14px]">{phone}</p>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-[17px] font-[600]">Linkedin</h1>
                <p className="text-[14px]">{linkedin}</p>
              </div>
            </div>

            <div className="flex gap-[65px]">
              <div className="flex flex-col gap-1">
                <h1 className="text-[17px] font-[600]">GitHub</h1>
                <p className="text-[14px]">{gitHub}</p>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[17px] font-[600]">Website</h1>
                <p className="text-[14px]">{website}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
