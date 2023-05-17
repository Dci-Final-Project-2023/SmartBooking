import { Star } from "@mui/icons-material";
import React from "react";
import profiles from "../../../store/profiles";

const Card = ({ profile, index }) => {
  return (
    <div className="shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 space rounded-sm overflow-hidden m-2 w-64">
      <img
        className="h-40 w-full object-cover"
        src={profile.profileImage}
        alt={profile.profileName}
      />
      <div className="p-3">
        <p className="text-gray-700 text-base mb-2 text-left border border-blue-400 bg-blue-400 rounded-lg inline-block px-2 left-0">
          #{profile.id}
        </p>
        <h2 className="text-xl mb-2">{profile.profileName}</h2>
        <p className="text-gray-700 text-base mb-2">Stadt: {profile.city}</p>
        <p className="text-gray-700 text-base mx-20 py-1 flex justify-center align-middle bg-gray-300 rounded-md">
          <Star className="text-orange-400 mr-1" />
          {profile.rating}
        </p>
      </div>
    </div>
  );
};

const ProfileList = () => {
  return (
    <div className="text-center p-8 bg-slate-300">
      <h1 className="text-4xl">Top 10 Autoren des Monats</h1>
      <p className="text-lg text-gray-500 mt-2 mb-4">
        Bewertung basierend auf Kundenrezensionen
      </p>
      <div className="flex flex-wrap justify-center ">
        {profiles.map((profile, index) => (
          <Card key={index} profile={profile} />
        ))}
      </div>
      {/* <div className="my-6">
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-3xl mr-3">
          Show me more
        </button>
        <button className="bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-3xl">
          Become a host
        </button>
      </div> */}
    </div>
  );
};

export default ProfileList;
