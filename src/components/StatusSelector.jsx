import React from "react";
import { PostOrderUpdate } from "../services/AdminQry";
import { useQueryClient } from "@tanstack/react-query";

let options = ["processing", "shipped", "rejected", "delivered"];
function select_options(val){
 if(val==="placed"){
  return ["processing","rejected"]
 }
 else if(val==="processing"){
 return ["shipped"]
 }
 else if(val==="shipped"){
 return ["delivered"]
 }
 else{
  return []
 }
}
function StatusSelector({ getValue, orderId }) {
  const client = useQueryClient();
  const { mutate } = PostOrderUpdate(client);
  // let newoptions = options.filter((i) => i !== getValue);
  let newoptions = select_options(getValue)

  return (
    <select
      className="select select-info w-full max-w-xs bg-green-400 text-white"
      onChange={(e) => {
        const data = {
          orderId: orderId,
          status: e.target.value,
        };

        mutate(data);
      }}
    >
      <option disabled={true} selected>
        {getValue}
      </option>
      {newoptions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default StatusSelector;
