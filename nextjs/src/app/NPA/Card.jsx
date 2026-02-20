

import Image from "next/image";

export default function MetricCard() {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        
        {/* Image Section */}
        {/* <div className="bg-blue-900 p-5 flex justify-center">
          <Image
            src="https://via.placeholder.com/350x180"
            alt="Metric Tech"
            width={350}
            height={180}
            className="w-full h-44 object-contain rounded-lg"
          />
        </div> */}

        <div className="p-6 text-center">
          
          <h2 className="text-xl font-bold text-gray-800">
            METRIC TECH
          </h2>

          <p className="text-sm font-semibold text-gray-600 mt-1">
            Technical Foundation Program
          </p>

          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Metric Tech provides students with essential technical knowledge
            and a strong academic base for future learning and growth.
          </p>

          <button className="mt-5 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            View Program
          </button>

        </div>
      </div>
    </div>
  );
}