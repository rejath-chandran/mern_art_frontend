import { useQuery, useMutation } from "@tanstack/react-query";

import {
  GetAllCategory,
  PostCategory,
  PutCategory,
  DeleteCategory,
} from "./AdminApi";

export function AllCategory() {
  return useQuery({
    queryKey: ["all-category"],
    queryFn: GetAllCategory,
  });
}

export function CreateCategory(client) {
  return useMutation({
    mutationFn: (data) => PostCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}
export function UpdateCategory(client) {
  return useMutation({
    mutationFn: (data) => PutCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}
export function RemoveCategory(client) {
  return useMutation({
    mutationFn: (data) => DeleteCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}
