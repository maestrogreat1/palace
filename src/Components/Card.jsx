import React from "react";
import chooseImage from "../assets/Home/main4.jpeg";
import chooseImage1 from "../assets/Home/main3.jpeg";

const Card = () => {
  return (
    <div>
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:h-1/2 mr-8">
              <h2 className="text-3xl font-bold mb-4 px-4 lg:px-0">
                Philanthropy{" "}
                {/* <span className="text-red-500">involved</span> */}
              </h2>
              <p className="max-w-lg px-4 lg:px-0">
                His Imperial Majesty, Dr. (Amb) Prosper Chukwuka
                EzeIgboigburuburu II (Eze Omeiheukwu), drives a global
                humanitarian mission that transforms thousands of lives daily
                through structural reform, economic empowerment, and education.
              </p>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Prison Reform and Decongestion:
                </h3>
                <p className="text-xs">
                  He systematically pays court fines for indigent, non-violent
                  inmates, restoring their freedom, reuniting broken families,
                  and offering comprehensive vocational rehabilitation to
                  prevent reoffending.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">Educational Sponsorships:</h3>
                <p className="text-xs">
                  The King finances global academic scholarships and vocational
                  training, empowering brilliant, underprivileged youth to
                  attend top local and international universities.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">Rural Transformation:</h3>
                <p className="text-xs">
                  His empowerment scheme provides interest-free micro-loans to
                  women entrepreneurs, issues agrarian grants to smallholder
                  farmers, and installs vital infrastructure like solar grids
                  and clean water boreholes.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Universal Welfare & Peacebuilding:
                </h3>
                <p className="text-xs">
                  Alongside funding daily community feeding programs for
                  vulnerable families, he uses his platform to foster political
                  sensitization, civic education, and peaceful democratic
                  balance.
                </p>
              </div>
            </div>
            <div className="mt-3 lg:mt-0 mb-5 lg:mb-0 px-4 lg:px-0 w-full lg:h-1/4 justify-center">
              <img
                src={chooseImage}
                alt=""
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Main thing */}
          <div className="flex flex-col lg:flex-row">
            <div className="mt-3 mb-5 lg:mt-0 px-4 lg:px-0 w-full lg:h-1/4 justify-center">
              <img
                src={chooseImage1}
                alt=""
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-full lg:h-1/2 lg:ml-8">
              <h2 className="text-3xl font-bold mb-4 px-4 lg:px-0">
                Conflict Resolution and{" "}
                <span className="text-red-500">Peacebuilding</span>
              </h2>
              <p className="max-w-lg px-4 lg:px-0">
                His Imperial Majesty, Dr. (Amb) Prosper Chukwuka
                EzeIgboigburuburu II (Eze Omeiheukwu), utilizes divine wisdom
                and strategic diplomacy to untangle deep-rooted disputes,
                restoring lasting peace, stability, and unity across communities
                worldwide.
              </p>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Divine Wisdom and Insight:
                </h3>
                <p className="text-xs">
                  Guided by profound discernment, the King looks beyond surface
                  arguments to uncover the spiritual and emotional roots of
                  discord, offering solutions that bring true inner healing.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Political and Democratic Balance:
                </h3>
                <p className="text-xs">
                  Maintaining absolute neutrality, his palace serves as an
                  unbiased sanctuary where political factions, community
                  leaders, and rival groups can dialogue safely and defuse
                  tensions peacefully.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Restorative Justice and Unity:
                </h3>
                <p className="text-xs">
                  Instead of focusing on punishment, his arbitration methods
                  prioritize reconciliation, ensuring that broken relationships
                  are mended and communities emerge stronger and more unified.
                </p>
              </div>
              <div className="px-4 lg:px-0 mt-8 mb-6">
                <h3 className="text-xl font-bold">
                  Global Cultural Arbitration:
                </h3>
                <p className="text-xs">
                  As the custodian of Igbo tradition, he uses customary wisdom
                  to settle identity, land, and cultural disputes within the
                  homeland and across the global diaspora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
