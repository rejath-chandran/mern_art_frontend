import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { GetSystemDetails, PostSystemDetail } from "../../services/AdminQry";

function AdminSettings() {
  const { data, isLoading } = GetSystemDetails();
  const [edit, SetEdit] = useState(true);
  const [range, SetRange] = useState(0);
  const update = PostSystemDetail();
  const [image, SetImge] = useState(false);

  const ImageRef = useRef("");

  const finalsubmit = (data) => {
    let newdata = { ...data, logo: ImageRef.current };
    update.mutate(newdata);
    SetEdit((prev) => !prev);
  };

  const uploadimage = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ozsvqkpu");
    data.append("cloud_name", "de3x0wuhw");
    fetch("https://api.cloudinary.com/v1_1/de3x0wuhw/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // clearErrors("sample_img");
        ImageRef.current = data.url;
        SetImge((prev) => !prev);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : (
        <div className="w-screen h-screen text-white p-12 bg-slate-800 overflow-auto">
          <div className="join join-vertical w-full">
            <div className="label">
              <span className="label-text text-2xl text-white">APP NAME:</span>
            </div>
            <input
              defaultValue={data.name}
              type="text"
              placeholder="Type here"
              className="input  text-black input-bordered w-full max-w-xs"
              {...register("name")}
              disabled={edit}
            />
            <div className="label">
              <span className="label-text text-2xl text-white">
                WELCOME TEXT:
              </span>
            </div>
            <input
              defaultValue={data.home}
              type="text"
              placeholder="Type here"
              className="input  text-black input-bordered w-full max-w-xs"
              {...register("home")}
              disabled={edit}
            />

            <div className="label">
              <span className="label-text text-2xl text-white">APP LOGO:</span>
            </div>

            <div className="avatar">
              <div className="w-24 my-4 rounded">
                <img src={ImageRef.current || data.logo} />
              </div>
            </div>

            <input
              disabled={edit}
              type="file"
              className="file-input text-black w-full max-w-xs"
              onChange={(e) => uploadimage(e.target.files[0])}
            />

            <div className="label">
              <span className="label-text text-2xl text-white">
                COMMISSION: {range || data.com}%
              </span>
            </div>
            <div className="w-[50vw]">
              <input
                defaultValue={data.data}
                {...register("com")}
                disabled={edit}
                type="range"
                min={0}
                max="100"
                // defaultValue="0"
                onChange={(e) => SetRange(e.target.value)}
                className="range bg-white [--range-shdw:yellow] "
                step="25"
              />
              <div className="w-full flex justify-between text- px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>

              <label className="form-control text-black">
                <div className="label">
                  <span className="label-text text-white text-2xl">
                    ABOUT US :
                  </span>
                </div>
                <textarea
                  defaultValue={data.about}
                  {...register("about")}
                  disabled={edit}
                  className="textarea textarea-bordered h-24"
                  placeholder="write something..."
                ></textarea>
              </label>
              {edit ? (
                <>
                  <button
                    onClick={() => SetEdit(false)}
                    className="mt-3 btn-success btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  >
                    EDIT
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSubmit(finalsubmit)}
                    className="mt-3 btn-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  >
                    UPDATE
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminSettings;
