import { FACETCHANGE } from '../actions/index';
import { FACETMODELKEY } from './constants';

const initialState = {
  selectedFacetId: FACETMODELKEY,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACETCHANGE:
      return { selectedFacetId: action.value };
    default:
      return state;
  }
};

export default uiReducer;
