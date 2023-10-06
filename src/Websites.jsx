import React from 'react';
import { Tooltip } from 'react-tooltip';
//import 'react-tooltip/dist/react-tooltip.css'

const Websites = () => {
  return (
    <div>
      <a data-tooltip-className="my-tooltip" data-tooltip-content="Hello world!"><h1>hii</h1>
</a>
      <Tooltip className="my-tooltip" />
    </div>
  );
};

export default Websites;
