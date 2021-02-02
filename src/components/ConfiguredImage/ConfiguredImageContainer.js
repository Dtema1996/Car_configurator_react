import { connect } from 'react-redux';
import { getChosenColour, getChosenModel } from '../../reducers/facet-selectors';

import ConfiguredImage from './ConfiguredImage';

const mapStateToProps = state => (
  {
    chosenModel: getChosenModel(state.facets),
    chosenColour: getChosenColour(state.facets),
  }
);

const ConfiguredImageContainer = connect(
  mapStateToProps,
  () => ({}),
)(ConfiguredImage);

export default ConfiguredImageContainer;
