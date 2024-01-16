import React, { useRef, useState } from "react";
import EditModal from "./EditModal";

const Table = ({ submit, data, Delete, heads, selection }) => {
  const ValueRef = useRef({});
  const headings = heads || ["image", "name", "desc", "action"];

  const rows = data;

  const [modal, openModal] = useState(false);

  return (
    <div className="h-[82vh] w-[100%] overflow-auto z-1 absolute">
      <section class="relative  py-16 bg-blue-50">
        <div class="w-full mb-12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
      bg-stone-50 text-black"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 class="font-semibold text-lg text-slate-800">Tables</h3>
                </div>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    {headings.map((i) => (
                      <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-white text-black border-slate-200">
                        {i}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((i) => (
                    <tr>
                      {headings.map((h) =>
                        h === "image" ? (
                          <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                              src={i.image}
                              class="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            />
                          </th>
                        ) : h === "action" ? (
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0">
                            <button
                              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                              onClick={() => {
                                // let index=rows.indexOf(i)
                                ValueRef.current = i;

                                openModal(true);
                              }}
                            >
                              edit
                            </button>

                            <button
                              className="ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 mx-auto transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-1 sm:px-2 py-2 text-xs sm:text-sm"
                              onClick={() => Delete(i._id)}
                            >
                              delete
                            </button>
                          </td>
                        ) : (
                          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-0">
                            {i[h]}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {modal ? (
        <EditModal
          submit={submit}
          details={ValueRef.current}
          openModal={openModal}
          selections={selection}
        />
      ) : null}
    </div>
  );
};

export default Table;
