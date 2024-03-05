import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditModal = ({ submit, openModal, details, selections }) => {
  const image = useRef("");
  const [url, SetUrl] = useState(details.image || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadimage = () => {
    const data = new FormData();
    data.append("file", image.current);
    data.append("upload_preset", "ozsvqkpu");
    data.append("cloud_name", "de3x0wuhw");
    fetch("https://api.cloudinary.com/v1_1/de3x0wuhw/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetUrl(data.url);
      });
  };

  return (
    <div class=" bg-transparent w-[80vw] h-[94vh] overflow-auto z-99  top-5 fixed">
      <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <form
          onSubmit={handleSubmit((d) => {
            console.log(d);
            if (url == "") {
              toast.error("image missing");
              return;
            }
            if (!Number.isInteger(parseInt(d.price))) {
              toast.error("price missing");
              return;
            }
            submit({ ...d, url });
            openModal(false);
          })}
          class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
        >
          <div class="w-full flex justify-start text-gray-600 mb-3"></div>
          <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            Details
          </h1>
          {Object.keys(details)?.map((i) =>
            i == "image" ? (
              <>
                <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  {i}:
                </label>
                <img
                  src={url || details[i]}
                  class="h-20 w-auto bg-white rounded border"
                  alt="..."
                />
                <input
                  type="file"
                  accept="image/*"
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  onChange={(e) => {
                    image.current = e.target.files[0];
                    uploadimage();
                  }}
                />
              </>
            ) : i == "phone" ? (
              <>
                <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  {i}:
                </label>
                <input
                  type="number"
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                />
              </>
            ) : i == "_id" ? (
              <>
                <input
                  defaultValue={details[i]}
                  type="text"
                  {...register(i)}
                  hidden
                />
              </>
            ) : i == "category" ? (
              <>
                <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  {i}:
                </label>
                <select
                  {...register(i, { required: true })}
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                >
                  {selections?.map((o) => {
                    if (o.name == details[i]) {
                      return (
                        <option value={o._id} selected>
                          {o.name}
                        </option>
                      );
                    } else {
                      return <option value={o._id}>{o.name}</option>;
                    }
                  })}
                </select>
              </>
            ) : (
              <>
                <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                  {i}:
                </label>
                <input
                  defaultValue={details[i]}
                  type="text"
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  {...register(i, { required: true })}
                />
              </>
            ),
          )}

          <div class="flex items-center justify-start w-full">
            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Submit
            </button>
            <button
              class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => openModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
