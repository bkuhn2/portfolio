import React, { useEffect, useState } from 'react'

//NOT CURRENTLY USING: MAY KEEP FOR FUTURE ADDITIONAL FEATURES...

interface ref {
  current: any
}

const useIsVisible = (ref: ref) => {
  const [isIntersecting, setInterSecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]: any) => 
      setInterSecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref])

  return isIntersecting;
}

export default useIsVisible
