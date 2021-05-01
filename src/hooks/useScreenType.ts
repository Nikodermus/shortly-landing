import { useCallback, useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import { BREAKPOINTS } from '../constants/styled';

const mediaSize = `(min-width: ${BREAKPOINTS.desktop}rem)`;

const useScreenType = (): { isDesktop: boolean; isMobile: boolean } => {
  const [isDesktop, setIsDesktop] = useState(false);

  const sizeChanged = useCallback(() => {
    const isNowDesktop = window.matchMedia(mediaSize).matches;
    if (isNowDesktop !== isDesktop) {
      setIsDesktop(isNowDesktop);
    }
  }, [isDesktop]);

  const debouncedSizeChange = debounce(sizeChanged, 200);

  useLayoutEffect(() => {
    sizeChanged();
    window.addEventListener('resize', debouncedSizeChange);

    return () => window.removeEventListener('resize', debouncedSizeChange);
  }, [debouncedSizeChange, sizeChanged]);

  return {
    isDesktop,
    isMobile: !isDesktop,
  };
};

export default useScreenType;
