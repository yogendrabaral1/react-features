import React, {Suspense} from 'react';

const ReactBatching = React.lazy(() => import('./reactBatching'));

const reactLazyLoading = () => {
  return (
      <Suspense fallback={<div>Loading....</div>}>
        <ReactBatching />
      </Suspense>
  )
}

export default reactLazyLoading