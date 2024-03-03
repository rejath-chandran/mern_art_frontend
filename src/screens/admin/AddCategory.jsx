import { useRef, useState } from "react"
import { useForm } from "react-hook-form"

const AddCategory = ({create}) => {
    const imageRef=useRef('')
    const [modal,ShowModal]=useState(false)
    const [url,SetUrl]=useState("")
    const {
        handleSubmit,
        register,
        formState:{errors},
        clearErrors,
        resetField
    }=useForm()
  const ClearForm=()=>{
    SetUrl('')
    resetField('name')
    resetField('sample_img')
    resetField('desc')
  }
  const FinalSubmit=(data)=>{

    let newdata={
        url:url,
        name:data.name,
        desc:data.desc
    }
   create(newdata)
   SetUrl('')
   ShowModal(false)
   ClearForm()
   }

   const uploadimage = () => {
    const data = new FormData();
    data.append("file", imageRef.current);
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
  return (
    <>
    <button className="btn btn-success" onClick={()=>ShowModal(true)}>ADD NEW CATEGORY</button>
{
    modal&&<>
    
    <dialog id="my_modal_2" className="modal modal-open">
  <div className="modal-box">
    <div className="w-full h-full">
    <>
              {url !== "" && (
                <img
                  src={url}
                  class="h-56 w-full object-contain bg-white rounded border"
                  alt="..."
                />
              )}
    </>

    <span className="label">NAME:</span>
    <input type="text" placeholder="Type here" className="input input-bordered w-full"
    {...register('name',{required:true})}
    />
    {errors.name&&<span className="text-error"> name is needed</span>}
    <span className="label">IMAGE:</span>
    <input type="file" className="file-input w-full" 
    {...register('sample_img',{required:true})}
     onChange={(e) => {
        imageRef.current = e.target.files[0];
        uploadimage();
      }}
    />
    {errors.sample_img&&<span className="text-error"> image is needed</span>}

    <span className="label">DESC:</span>
    <input type="text" placeholder="Type here" className="input input-bordered w-full"
    {...register('desc',{required:true})}
    />
   <div>
   {errors.desc&&<span className="text-error"> desc is needed</span>}
   </div>
    <button className="btn btn-primary mt-3"
    onClick={handleSubmit(FinalSubmit)}
    >CREATE</button>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button
        onClick={()=>{
            ClearForm()
            ShowModal(false)
        }}
    >close</button>
  </form>
</dialog>
    
    </>
}
</>
  )
}

export default AddCategory