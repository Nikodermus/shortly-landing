import { ReactElement, ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }): ReactElement | ReactPortal | null => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [setVisible]);

  return visible ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;
