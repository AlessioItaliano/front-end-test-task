import { ThreeCircles } from 'react-loader-spinner';

import * as s from './Loader.styled';

const Loader = () => {
  return (
    <s.LoaderStyle>
      <ThreeCircles
        height="100"
        width="100"
        color="#0B44CD"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </s.LoaderStyle>
  );
};

export default Loader;
