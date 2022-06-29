import { useCallback, useContext } from "react";
import { usePaginatedAPI } from "./usePaginatedAPI";
import { fetchReticulumAuthenticated } from "../../utils/phoenix-utils";
import { AuthContext } from "../auth/AuthContext";

export function useListAvatar() {
  const auth = useContext(AuthContext); // Re-render when you log in/out.
  //https://adoptedbynature.net/api/v1/media/search?filter=featured&source=avatar_listings
  const getMoreRooms = useCallback(
    () => fetchReticulumAuthenticated(`/api/v1/media/search?filter=featured&source=avatar_listings`),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return usePaginatedAPI(getMoreRooms);
}
