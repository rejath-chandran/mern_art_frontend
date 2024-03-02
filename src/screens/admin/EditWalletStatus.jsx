import { useState } from "react"
import QRCode from "react-qr-code"
import { AdminWalletChangeStatus } from "../../services/AdminQry"
import { useQueryClient } from "@tanstack/react-query"
function EditWalletStatus({data}) {
    const client=useQueryClient()
    const wallet=AdminWalletChangeStatus(client)

    const [modal,showModal]=useState(false)
    const Submit=(id)=>{
        let data={
            id:id
        }
        wallet.mutate(data)
    }
  return (
    <div>
<button className="btn btn-success" onClick={()=>showModal(true)}>PAY</button>
<>{
modal&&<>
    <dialog id="my_modal_3" className="modal modal-open">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>showModal(false)}
      >✕</button>
    </form>
    
   <div className="w-full h-full flex items-center justify-center">

<div>
    <span className="label text-slate-600 font-bold">UPI: {data.upi}</span>
    <span className="label text-slate-600 font-bold">AMOUNT: {parseInt(data.withdraw)- parseInt(data.amount)}</span>
   <QRCode value={`upi://pay?pa=${data.upi}&cu=INR}`}/>
   <button className="btn btn-secondary mt-2 w-full"
   
   onClick={()=>Submit(data._id)}
   >PAYMENT DONE</button>
</div>
   </div>
  </div>
</dialog>
    
    
    </>
}
</>    
    </div>
  )
}

export default EditWalletStatus