
import { useRef, useState } from 'react'
import {useForm} from 'react-hook-form'

function EditProduct({ data }) {

    const [open,setOpen]=useState(false)
    const {register}=useForm()
    const ClearInputs=()=>setOpen(false)

  return (
    <>
      <button
        className="btn btn-outline btn-accent"
        onClick={()=>setOpen(true)}
      >
        EDIT
      </button>
      {open&&<>
        <dialog id="my_modal_2" className="modal modal-open">
        <div className="modal-box text-black">

        <div className="label">
        <span className="label-text">Name</span>
        </div>
        <input type="text" defaultValue={data.name} className="input input-bordered w-full" />


        <div className="label">
        <span className="label-text">Category</span>
        </div>
        <input type="text" defaultValue={data.category} className="input input-bordered w-full" />
  
        <div className="label">
        <span className="label-text">Describe</span>
        </div>
        <input type="text" defaultValue={data.desc} className="input input-bordered w-full" />


        </div>
        <form method="dialog" className="modal-backdrop" onSubmit={ClearInputs}>
          <button>close</button>
        </form>
      </dialog>
    </>}
    </>
  );
}

export default EditProduct;
