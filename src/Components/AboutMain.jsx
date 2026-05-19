import React from "react";
import chooseImage from "../assets/Home/igweabout.jpeg";

const AboutMain = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-20 text-center text-black">
          About Us
        </h2>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:h-1/2 mr-6">
            <h2 className="text-3xl font-bold mb-4 px-4 lg:px-0">
              His Imperial Majesty, Dr. (Amb) Prosper Chukwuka  <span className="text-red-500">EzeIgboigburuburu II</span>
            </h2>
            <p className="max-w-lg px-4 lg:px-0">
              (Eze Omeiheukwu)The Custodian of Igbo Culture Worldwide and Sovereign Philanthropist; On the historic day of November 10, 2024, a new dawn broke over the horizon of heritage and hope. His Imperial Majesty, Dr. (Amb) Prosper Chukwuka EzeIgboigburuburu II, ascended the throne of his ancestors, taking up the mantle of Eze Omeiheukwu—the one whose great deeds echo louder than words. Beside him stands his anchor and heartbeat, the beautiful Lolo Ugoeze, sharing a shared vision of a modern, prosperous kingdom rooted in timeless values.
            </p>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">A Sanctuary for the Forgotten</h3>
              <p className="text-xs">
                For Ezeigboigburuburu II, the true measure of a crown is how low it can bow to lift the fallen. Propelled by a deep humanitarian heartbeat, he walks into the darkest corners of society to bring light. Through groundbreaking prison reform initiatives, the King routinely secures the release of non-violent, indigent inmates—paying their debts and breaking their chains. He does not just open prison doors; he opens doors to a future, providing these individuals with a clean slate, comprehensive vocational skills, and a path back to dignity.
              </p>
            </div>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">The Symphony of Compassion and Knowledge</h3>
              <p className="text-xs">
                His reign is a living testament to the belief that no one should be left behind. Through his global foundations, the King orchestrates sweeping welfare programs that feed the poor, ensuring the vulnerable find nourishment and comfort. Recognizing that education is the ultimate weapon against poverty, he scatters seeds of hope across the globe by issuing thousands of academic scholarships. Brilliant, underprivileged youth are given the wings to fly, turning their dreams into reality from local villages to international universities.
              </p>
            </div>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">Guardian of the Eternal Flame</h3>
              <p className="text-xs">
                As the global custodian of Igbo culture and tradition, His Imperial Majesty bridges the ancient world with the modern era. He breathes vibrant life into the ancestral legacy, ensuring that the Igbo language, arts, and philosophies do not just survive, but thrive across continents. From the homeland to the diaspora, he unites the Igbo nation, keeping the eternal flame of their identity burning bright on the world stage.Together with Lolo Ugoeze, Dr. (Amb) Prosper Chukwuka EzeIgboigburuburu II is writing a living epic—a story of a modern monarchy where royalty is defined by integrity, relentless service, boundless empathy, and an unbreakable love for the people.
              </p>
            </div>
          </div>
          <div className="mt-6 mb-8 lg:mb-0 lg:mt-0 px-4 lg:px-0 w-full lg:h-1/2 justify-center">
            <img
              src={chooseImage}
              alt=""
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
