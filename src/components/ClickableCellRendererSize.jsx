import React from 'react';
import { withRouter } from 'react-router-dom';

const getRightSize = (size) => {
  const sizes = [ 'B', 'KB', 'MB', 'GB', 'TB' ];
  if (size === 0) return '0 B';

  const i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
  return Math.round(size / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const Cell = props => {
  const [indexHTML,] = React.useState(null);

  if (indexHTML !== null) {
    return (
      <span tabIndex='0' title={props.value}>
        {/* {getRightSize(props.data.size)} */}-
      </span>
    );
  }

  return <ClickableCellRendererSize {...props} />;
};

const ClickableCellRendererSize = props => {

  const GetLink = () => {

    if (props.value === 'BackToParent') {
      return ('');
    } else if (!props.data.onkohakemisto) {
      return (
        <span tabIndex='0' title={props.value}>
          {getRightSize(props.data.size)}
          {/* {props.data.size} */}
        </span>
      );
    }
    return (
      <span tabIndex='0' title={props.value}>
        {getRightSize(props.data.size)}
        {/* {props.data.size} */}
      </span>
    );
  };

  return <div className='data-wrapper'>{GetLink()}</div>;
};

export default withRouter(Cell);