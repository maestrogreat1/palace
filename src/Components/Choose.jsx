import React from "react";
import chooseImage from "../assets/Home/sits.jpeg";

const Choose = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:h-1/2 mr-8">
            <h2 className="text-3xl font-bold mb-4 px-4 lg:px-0">
              Why you should get <span className="text-red-500">involved</span>
            </h2>
            <p className="max-w-lg px-4 lg:px-0">
              Walking with His Imperial Majesty, Dr. (Amb) Prosper Chukwuka
              EzeIgboigburuburu II, means aligning yourself with a leader who
              merges ancient honor with modern impact.Here is why walking with
              this King is a powerful journey:
            </p>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">
                You Partner with Practical Compassion
              </h3>
              <p className="text-xs">
                <span className="font-bold text-red-500">
                  Tangible Justice:
                </span>{" "}
                He does not just preach reform; he actively unlocks prison gates
                for the forgotten. <br />{" "}
                <span className="font-bold text-red-500">
                  Empowered Futures:
                </span>
                Walking with him means helping turn former inmates into skilled,
                productive citizens. <br />{" "}
                <span className="font-bold text-red-500">Direct Aid:</span> His
                welfare programs directly feed vulnerable families who have no
                other safety net.
              </p>
            </div>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">
                You Invest in the Future of Leadership
              </h3>
              <p className="text-xs">
                <span className="font-bold text-red-500">
                  Breaking Poverty:
                </span>
                His scholarship initiatives level the playing field for
                brilliant, underprivileged students. <br />{" "}
                <span className="font-bold text-red-500">Global Impact:</span>{" "}
                By supporting his vision, you help build a network of future
                leaders educated at top global institutions.
              </p>
            </div>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">
                You Protect and Celebrate Global Identity
              </h3>
              <p className="text-xs">
                <span className="font-bold text-red-500">
                  Cultural Anchor:
                </span>
                As the global custodian of Igbo tradition, he keeps a rich cultural legacy alive for generations to come. <br />{" "}
                <span className="font-bold text-red-500">Diaspora Unity:</span>{" "}
                He bridges the gap between the homeland and the global diaspora, creating a powerful, unified community network.
              </p>
            </div>
            <div className="px-4 lg:px-0 mt-8 mb-6">
              <h3 className="text-xl font-bold">
                You Witness a Shared, Elegant Leadership
              </h3>
              <p className="text-xs">
                <span className="font-bold text-red-500">
                  Modern Vision:
                </span>
                 He proves that traditional royalty is not a relic of the past, but a progressive force for social good today. <br />{" "}
                <span className="font-bold text-red-500">Balanced Partnership</span>{" "}
                Beside him stands Lolo Ugoeze, ensuring the kingdom's leadership is balanced with grace, family values, and collaborative strength.
              </p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 px-4 lg:px-0 w-full lg:h-1/2 justify-center">
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

export default Choose;
