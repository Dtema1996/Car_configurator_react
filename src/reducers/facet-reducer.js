import { OPTIONSELECTED } from '../actions/index';
import {
  FACETMODELKEY,
  FACETWHEELKEY,
  FACETCOLOURKEY,
  FACETENGINEKEY,
  FACETPACKAGENKEY,
} from './constants';

const initialState = {
  data: {
    [FACETMODELKEY]: {
      facetName: 'Model',
      bodyText: 'Please choose your model: ',
      options: [
        { val: 1, desc: 'Model X', extraCost: 53000, spec: 'x' },
        { val: 2, desc: 'Model S', extraCost: 43000, spec: 's' },
        { val: 3, desc: 'Model Y', extraCost: 4000, spec: 'y' },
        { val: 4, desc: 'Model 3', extraCost: 0, spec: '3' },
      ],
      selectedOption: 0,
    },
    [FACETPACKAGENKEY]: {
      facetName: 'Package',
      bodyText: 'Please choose your package: ',
      options: [
        { val: 1, desc: 'Basic', extraCost: 0 },
        { val: 2, desc: 'Basic+', extraCost: 2000 },
        { val: 3, desc: 'Comfort', extraCost: 10000 },
      ],
      selectedOption: 0,
    },
    [FACETENGINEKEY]: {
      facetName: 'Engine',
      bodyText: 'Please choose your engine: ',
      options: [
        { val: 1, desc: 'Standard Range Drive', extraCost: 0 },
        { val: 2, desc: 'Long Range', extraCost: 15000 },
        { val: 3, desc: 'Performance', extraCost: 25000 },
      ],
      selectedOption: 0,
    },
    [FACETWHEELKEY]: {
      facetName: 'Wheels',
      bodyText: 'Please select your wheels set',
      options: [
        { val: 1, desc: '18 Aero Wheels', extraCost: 0 },
        { val: 2, desc: '19 Aero Wheels', extraCost: 1500 },
      ],
      selectedOption: 0,
    },
    [FACETCOLOURKEY]: {
      facetName: 'Colour',
      bodyText: 'What colour do you want?',
      options: [
        { val: 1, desc: 'Red' },
        { val: 2, desc: 'Blue' },
        { val: 3, desc: 'Black' },
      ],
      selectedOption: 0,
    },
  },
  selections: {
    [FACETMODELKEY]: 4,
    [FACETPACKAGENKEY]: 0,
    [FACETENGINEKEY]: 0,
    [FACETWHEELKEY]: 0,
    [FACETCOLOURKEY]: 0,
  },
};

const getUpdatedFacets = (state, action) => {
  const newSelections =
    Object.assign({}, state.selections, { [action.value.facetId]: action.value.optionId });
  return { data: state.data, selections: newSelections };
};

const facetReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPTIONSELECTED:
      return getUpdatedFacets(state, action);

    default:
      return state;
  }
};

export default facetReducer;

