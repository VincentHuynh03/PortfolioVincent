import React from "react";
import Link from "next/link";
import Avatar from "./avatar";

const Profile = () => {
  return (
    <div className="h-fullflex w-full text-white text-wrap " id="profile">
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full">
          <div className="flex-1 flex flex-wrap justify-center p-5 space-x-10">
            <Avatar></Avatar>

            <div className="md:px-12  w-full py-10 space-y-4">
              <p>
                Versatile trilingual computer science student proficient in
                Java, JavaScript, Python, C#, SQL, and more. Experienced in
                diverse projects such as a financial hospital reports website
                and a hotel reservation site. Proactive team member with strong
                problem-solving skills and effective communication abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
