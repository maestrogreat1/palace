import React from "react";
import ServiceBg from "../assets/Home/whitebg.png";
import philan from "../assets/Home/prison.jpeg";
import crown from "../assets/Home/igbomax.jpg";
import mask from "../assets/Home/server.jpeg";
import igwe from "../assets/Home/award1.jpeg";
import empower from "../assets/Home/empower.jpeg";
import { FaArrowRight } from "react-icons/fa";

const communities = [
  {
    id: 1,
    title: "Prison Decongestion",
    image: philan,
    link: "",
    description:
      "Through his strategic prison decongestion program, Ezeigboigburuburu II systematically paves way for the release for indigent, non-violent inmates, restoring their freedom, reuniting broken families, and offering comprehensive vocational rehabilitation.",
  },
  {
    id: 2,
    title: "Cultural Promotion",
    image: crown,
    link: "",
    description:
      "Ezeigboigburuburu II facilitates universal cultural promotion by funding global language centers, hosting international festivals, and using digital platforms to unite the diaspora, keeping Igbo heritage vibrant worldwide.",
  },
  {
    id: 3,
    title: "Public Service",
    image: mask,
    link: "",
    description:
      "Ezeigboigburuburu II transforms public service by collaborating with government agencies, funding community infrastructure, and training public servants, creating a highly efficient, accountable, and citizen-centered governance model.",
  },
  {
    id: 4,
    title: "Political Sensitization",
    image: igwe,
    link: "",
    description:
      "His Imperial Majesty actively strengthens the democratic fabric of society by championing civic education and political awareness. He believes that a stable democracy relies on an informed citizenry, and he works tirelessly to ensure his people understand their rights and responsibilities.",
  },
  {
    id: 5,
    title: "Rural Empowerment",
    image: empower,
    link: "",
    description:
      "His Imperial Majesty’s rural empowerment scheme acts as a vital economic engine, breathing new life into forgotten communities by transforming rural villages into self-sustaining hubs of industry. Through grants, micro-financing and rural infrastructure.",
  },
];

const Community = () => {
  return (
    <div
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url('${ServiceBg}')` }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Community Engagements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8 lg:px-0">
          {communities.map((community) => (
            <div key={community.id} className="bg-white rounded-lg shadow-md pb-4 hover:scale-105 transition-transform duration-300">
              <img
                src={community.image}
                alt={community.title}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-center items-center px-8">
                <h3 className="text-xl font-bold mb-2">{community.title}</h3>
                <p className="text-sm">{community.description}</p>
                <a href="" className="flex items-center mt-2s space-x-2 text-red-500 font-bold hover:underline"><span>More</span> <FaArrowRight className="text-xs"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default Community;
