import { useState ,useRef} from "react"
import { useForm } from "react-hook-form"

const AdminEditCategory = ({data,edit}) => {

    const imageRef=useRef('')
    const [modal,ShowModal]=useState(false)
    const [url,SetUrl]=useState(data.image)

    const {
        handleSubmit,
        register,
        formState:{errors},
        clearErrors,
        resetField
    }=useForm()

    

    const ClearForm=()=>{
        resetField('name')
        resetField('desc')
        ShowModal(false)
    }
    const FinalSubmit=(data)=>{
             ClearForm()
             let newdata={
                id:data.id,
                name:data.name,
                desc:data.desc,
                image:url
             }
            
            edit(newdata)
           
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
    <button className="btn mx-1" onClick={()=>ShowModal(true)}>EDIT</button>
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
                <input
                value={data._id}
                 {...register('id')} 
                 hidden={true}/>
    <span className="label text-black">NAME: {data.name}</span>
    <input type="text" placeholder="Type here" className="text-black input input-bordered w-full"
    defaultValue={data.name}
    {...register('name',{required:true})}
    />
    {errors.name&&<span className="text-error"> name is needed</span>}
    <span className="label text-black">IMAGE:</span>
    <input type="file" className="file-input w-full" 
    {...register('sample_img')}
     onChange={(e) => {
        imageRef.current = e.target.files[0];
        uploadimage();
      }}
    />
    {errors.sample_img&&<span className="text-error"> image is needed</span>}

    <span className="label text-black">DESC:</span>
    <input type="text" placeholder="Type here" className="text-black input input-bordered w-full"
    defaultValue={data.desc}
    {...register('desc',{required:true})}
    />
   <div>
   {errors.desc&&<span className="text-error"> desc is needed</span>}
   </div>
    <button className="btn btn-primary mt-3"
    onClick={handleSubmit(FinalSubmit)}
    >UPDATE</button>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button
    onClick={()=>ClearForm()}
    >close</button>
  </form>
</dialog>
    
    
    </>
}

</>
  )
}

export default AdminEditCategory