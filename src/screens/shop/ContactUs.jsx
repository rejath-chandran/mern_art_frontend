import { useForm } from "react-hook-form";
import { BackgroundBeams } from "../../ui/background-beams";
import { UserMakeSupport } from "../../services/AdminQry";
import {toast} from "react-toastify"
import { useQueryClient } from "@tanstack/react-query";
function ContactUs() {

  const support=UserMakeSupport()
  const {
    handleSubmit,
    register,
    resetField,
    formState:{errors}
  }=useForm()

  const FinalSubmit=(data)=>{
    resetField('message')
    resetField('email')
    let newdata={
      email:data.email,
      message:data.message
    }
    console.log(data)
    support.mutate(newdata)
    toast.success("message send")
  }

  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            CONTACT US
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            
          </p>
         <textarea
         {...register('message',{required:true})}
         placeholder="Write some message"
         className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
         />
         {errors.message&&<span className="text-error">message is needed</span>}
          <input
          {...register('email',{required:true ,pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}
            type="email"
            placeholder="your@email.com"
            className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
{errors.email&&<span className="text-error">email is needed</span>}
          <button className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          onClick={handleSubmit(FinalSubmit)}
          >
            SUBMIT
          </button>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}

export default ContactUs;
