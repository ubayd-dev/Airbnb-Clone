import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../type/listingTypes";

export const listingListReducer = (state = { listings: [] }, action) => {
  switch ((action.type)) {
    case LISTING_LIST_REQUEST:
      return { loading: true, listings: [] };
    case LISTING_LIST_SUCCESS:
      return { loding: false, listings: action.payload };
    case LISTING_LIST_FAIL:
      return { loding: false, error: action.payload };

    default:
      return state;
  }
};
