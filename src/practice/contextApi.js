import React from 'react';

import INFO_CONTEXT from './context';
import DemoComp from './demoComp';

const contextApi = () => {
  return (
    <INFO_CONTEXT.Provider value={INFO_CONTEXT}>
        <DemoComp />
    </INFO_CONTEXT.Provider>
  )
}

export default contextApi