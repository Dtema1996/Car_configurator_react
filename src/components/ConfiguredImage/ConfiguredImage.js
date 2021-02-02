import React from 'react';
import model3Red from '../../images/model_3_red.png';
import modelXRed from '../../images/model_x_red.png';
import modelYRed from '../../images/model_y_red.png';
import modelSRed from '../../images/model_s_red.png';
import model3Blue from '../../images/model_3_blue.png';
import modelXBlue from '../../images/model_x_blue.png';
import modelYBlue from '../../images/model_y_blue.png';
import modelSBlue from '../../images/model_s_blue.png';
import model3Black from '../../images/model_3_black.png';
import modelXBlack from '../../images/model_x_black.png';
import modelYBlack from '../../images/model_y_black.png';
import modelSBlack from '../../images/model_s_black.png';


const getImage = (options) => {
  console.log(options);
  const defaultImage = model3Red;
  switch (options.chosenModel) {
    case 'x':
      if (options.chosenColour === 'red') {
        return modelXRed;
      } else if (options.chosenColour === 'blue') {
        return modelXBlue;
      }
      return modelXBlack;
    case 's':
      if (options.chosenColour === 'red') {
        return modelSRed;
      } else if (options.chosenColour === 'blue') {
        return modelSBlue;
      }
      return modelSBlack;
    case 'y':
      if (options.chosenColour === 'red') {
        return modelYRed;
      } else if (options.chosenColour === 'blue') {
        return modelYBlue;
      }
      return modelYBlack;
    case '3':
      if (options.chosenColour === 'red') {
        return model3Red;
      } else if (options.chosenColour === 'blue') {
        return model3Blue;
      }
      return model3Black;

    default:
      return defaultImage;
  }
};

const ConfiguredImage = props => (
  <div className="card card--selected-image">
    <img alt="Configured car" className="configured-image responsive-img" src={getImage(props)} />
  </div>
);

export default ConfiguredImage;
