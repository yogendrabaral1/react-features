import React, { useContext } from 'react';

import INFO_CONTEXT from './context';

const DemoComp = () => {
    return (
        <INFO_CONTEXT.Consumer>
            <p>Name: {info.name}</p>
            <p>Phone: {info.phone}</p>
        </INFO_CONTEXT.Consumer>
    )
}

export default DemoComp