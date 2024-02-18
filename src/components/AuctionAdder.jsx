import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { AllCategory } from "../services/AdminQry";
import { setHours, setMinutes } from "date-fns";

import { ErrorMessage } from "@hookform/error-message";

function AuctionAdder({ name, submit }) {
  const { data } = AllCategory();

  const image = useRef("");
  const [url, SetUrl] = useState("");
  const {
    control,
    register,
    handleSubmit,
    resetField,
    clearErrors,
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
        clearErrors("sample_img");
        SetUrl(data.url);
      });
  };

  const ClearTheFrm = () => {
    SetUrl("");
    resetField("name");
    resetField("category");
    resetField("price");
    resetField("desc");
    resetField("sample_img");
    resetField("date");
  };

  const FrmSubmit = (data) => {
    // const time =( (new Date(data.date) - new Date()) / 1000);

    let new_data = {
      name: data.name,
      desc: data.desc,
      category: data.category,
      price: data.price,
      url: url,
      time: data.date,
    };

    submit(new_data);

    document.getElementById("my_modal_2").close();
  };

  return (
    <>
      <button
        className="btn bg-green-300 text-bold text-md "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {name}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <>
            <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              image
            </label>
            <>
              {url !== "" && (
                <img
                  src={url}
                  class="h-56 w-full object-contain bg-white rounded border"
                  alt="..."
                />
              )}
            </>
            <input
              defaultValue={""}
              {...register("sample_img", { required: "image is required." })}
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full my-1"
              onChange={(e) => {
                image.current = e.target.files[0];
                uploadimage();
              }}
            />
            <div className="w-full my-1 text-red-500">
              <ErrorMessage errors={errors} name="sample_img" />
            </div>
            <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Name
            </label>

            <input
              defaultValue={""}
              {...register("name", { required: "name is required." })}
              type="text"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />

            <div className="w-full my-1 text-red-500">
              <ErrorMessage errors={errors} name="name" />
            </div>

            <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Category
            </label>
            <select
              {...register("category", { required: "select category" })}
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              {data?.map((o) => (
                <option value={o._id}>{o.name}</option>
              ))}
            </select>
            <div className="w-full my-1 text-red-500">
              <ErrorMessage errors={errors} name="category" />
            </div>

            <label class="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              price
            </label>
            <input
              {...register("price", { required: "price required" })}
              type="number"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <div className="w-full my-1 text-red-500">
              <ErrorMessage errors={errors} name="price" />
            </div>

            <input
              {...register("desc", { required: "describe about art" })}
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Desc"
            ></input>

            <div className="w-full my-1 text-red-500">
              <ErrorMessage errors={errors} name="desc" />
            </div>

            <div className="flex justify-center items-center w-full">
              <Controller
                render={({ field }) => (
                  <DatePicker
                    className="bg-black text-white p-2 h-12 rounded-md"
                    minDate={new Date()}
                    minTime={setHours(
                      setMinutes(new Date(), new Date().getMinutes()),
                      new Date().getHours(),
                    )}
                    maxTime={setHours(setMinutes(new Date(), 45), 23)}
                    timeIntervals={15}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeSelect
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    placeholderText={"Select a Date"}
                  />
                )}
                rules={{ required: true }}
                name="date"
                control={control}
              />
              <div className="w-full my-1 px-3 text-red-500">
                {errors.date && <span>Date required</span>}
              </div>

              <button
                className="ml-2 btn btn-active"
                onClick={handleSubmit(FrmSubmit)}
              >
                SUBMIT
              </button>
            </div>
          </>
        </div>
        <form method="dialog" className="modal-backdrop" onSubmit={ClearTheFrm}>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AuctionAdder;
