import React from "react";

const Education = () => {
  const edu = [
    {
      id: 1,
      degree: "BCA",
      inst: "ROFEL BCA College",
      yr: 2017,
      p: 80,
    },
    {
      id: 2,
      degree: "Intermediate",
      inst: "Hirapara Kanya Vidhyalaya",
      yr: 2014,
      p: 80,
    },
    {
      id: 3,
      degree: "High School",
      inst: "Hirapara Kanya Vidhyalaya",
      yr: 2012,
      p: 62,
    },
  ];
  return (
    <>
      <div
        name="education"
        className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800  text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl  font-bold inline border-b-4 border-gray-500 mx-auto my-auto mb-2">
              Education
            </p>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto divide-y divide-gray-600 my-8">
                        <thead className="bg-transparent text-white">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            >
                              Degree
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-3 text-xs text-center font-medium uppercase tracking-wider"
                            >
                              Institution
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                            >
                              Year
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                            >
                              Percentage
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {edu.map(({ id, degree, inst, yr, p }) => (
                            <tr key={id} className="bg-transparent">
                              <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                <div className="text-sm font-medium">
                                  {degree}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm justify-center items-center">
                                  {inst}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm">{yr}</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm">{p}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;