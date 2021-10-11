import React from 'react';

type Props = {
  children: React.ReactNode;
};
const Wrapper = React.forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
export default Wrapper;
