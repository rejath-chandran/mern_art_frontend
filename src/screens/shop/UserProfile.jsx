import React, { useRef, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { UserToSeller,GetUserAcccountDetails,UpdateAccountDetails } from "../../services/AdminQry";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
const UserProfile = () => {
  const client=useQueryClient()
  const ImageRef=useRef('')
  const {
    handleSubmit,
    register,
    formState:{errors}
  }=useForm()

  const [img,Setimg]=useState(null)

  const [edit,SetEdit]=useState(false)
  const seller = UserToSeller();
  const account=GetUserAcccountDetails()
  const update=UpdateAccountDetails(client)

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
        // ImageRef.current =data.url;
        Setimg(data.url);
      });
  };
  const finalSUbmit=(data)=>{
   let newdata={
    image:ImageRef.current.src,
    name:data.name
   }
   update.mutate(newdata)
    SetEdit(false)
  }
  return (
    <div>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
        <div className="mt-2 sm:col-span-2 sm:mt-0">
         {
          account.isFetched&&<>
          {
            account.data.role=="seller"?<>
            <NavLink to={'/seller'} className='btn btn-default'>LOGIN AS SELLER</NavLink>
            </>:<>
             <button
            className="p-2 bg-green-700 text-white hover:bg-green-500 rounded-md"
            onClick={() => seller.mutate()}
          >
            Click To Become Seller
          </button>
            
            </>
          }
          
          </>
         }
        </div>
      </div>
      {
        account.isLoading?<>loading...</>:<>
        <div>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  NAME
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                    disabled={!edit}
                      type="text"
                      {...register('name',{required:true})}
                     defaultValue={account.data.name}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      
                    />
                  </div>
                  
                </div>
              </div>
              {errors.name&&<span className="text-error">name required</span>}
              <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="flex items-center gap-x-3">
                  <div className="avatar">
  <div className="w-24 rounded-full">
    <img ref={ImageRef} src={img||(account.data.image==''?'https://www.svgrepo.com/show/170303/avatar.svg':account.data.image)} 
    
    />
  </div>
</div>
                    <input type="file" 
                    disabled={!edit}
                    onChange={e=>uploadimage(e.target.files[0])}
                     className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       {edit?<>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={()=>SetEdit(prev=>!prev)}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit(finalSUbmit)}
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
       
       </>:<>
       <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            
            onClick={()=>SetEdit(prev=>!prev)}
            className="text-sm  btn btn-primary font-semibold leading-6 text-gray-900"
          >
            EDIT
          </button>
         
        </div>
       
       
       </>}
      </div>
        
        
        </>
      }
    </div>
  );
};

export default UserProfile;
