import React, { useEffect,  } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS for styling
import Cardtems from "./Cardtems";
import TeamMembers from '../data/teamMember'
// Define an array of 6 team members with additional information

function TeamList() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms (1 second)
  }, []);

  return (
    <div>
       
      <div className="flex py-32 h-full gap-7 flex-wrap justify-center">
        {TeamMembers.map((member, index) => (
          <Cardtems photo = {member.photo} index={index} role={member.role} bio ={member.bio} email={member.email} linkedin={member.linkedin} key ={index} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
