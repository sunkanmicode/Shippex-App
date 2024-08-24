import { useQuery } from "@tanstack/react-query";
import { getShipment } from ".";

export const useGetShipment = () => {
  return useQuery({
    queryKey: ["get-getShipment-list"],
    queryFn: getShipment,
  });
};
