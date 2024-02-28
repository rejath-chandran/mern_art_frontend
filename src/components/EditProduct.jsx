import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function EditProduct({ data, EditSubmit, category_list }) {
  const category = category_list.data;

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(false);
  const imageRef = useRef("");

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
        clearErrors("sample_img");
        imageRef.current = data.url;
        setImage(false);
      });
  };

  const CompletSubmit = async (data) => {
    setImage(false);
    setOpen(false);

    let newdata = {
      url: imageRef.current,
      name: data.name,
      desc: data.desc,
      _id: data._id,
      category: data.category,
      price: data.price,
    };

    EditSubmit(newdata);
  };

  const {
    register,
    handleSubmit,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm();

  const ClearInputs = () => {
    imageRef.current = "";
    setImage(false);
    setOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-outline btn-accent"
        onClick={() => setOpen(true)}
      >
        EDIT
      </button>
      {open && (
        <>
          <dialog id="my_modal_2" className="modal modal-open">
            <div className="modal-box text-black">
              <input type="text" value={data._id} hidden {...register("_id")} />

              {image ? (
                <>
                  <input
                    defaultValue={""}
                    {...register("sample_img", {
                      required: "image is required.",
                    })}
                    type="file"
                    accept="image/*"
                    className="file-input file-input-bordered w-full my-1"
                    onChange={(e) => {
                      let image = e.target.files[0];
                      uploadimage(image);
                    }}
                  />
                  {errors.sample_img && (
                    <span className="text-error">select a image</span>
                  )}
                </>
              ) : (
                <div className="indicator">
                  <span
                    className="indicator-item indicator-center indicator-middle badge badge-secondary cursor-pointer"
                    onClick={() => setImage(true)}
                  >
                    Click to Edit
                  </span>
                  <img
                    src={imageRef.current != "" ? imageRef.current : data.image}
                    class="h-56 w-full object-contain bg-white rounded border"
                    alt="..."
                  />
                </div>
              )}

              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                {...register("name", { required: "name is required." })}
                type="text"
                defaultValue={data.name}
                className="input input-bordered w-full"
              />

              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("category", { required: "category is required." })}
              >
                {category.map((o) => {
                  if (o.name == data.category) {
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

              <div className="label">
                <span className="label-text">Describe</span>
              </div>
              <input
                {...register("desc")}
                type="text"
                defaultValue={data.desc}
                className="input input-bordered w-full"
              />
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price")}
                type="number"
                defaultValue={parseInt(data.price)}
                className="input input-bordered w-full"
              />
              <button
                className="mt-2 btn btn-outline"
                onClick={handleSubmit(CompletSubmit)}
              >
                SUBMIT
              </button>
            </div>

            <form
              method="dialog"
              className="modal-backdrop"
              onSubmit={ClearInputs}
            >
              <button>close</button>
            </form>
          </dialog>
        </>
      )}
    </>
  );
}

export default EditProduct;
