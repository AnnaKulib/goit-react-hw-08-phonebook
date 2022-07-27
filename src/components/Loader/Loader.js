import s from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.container}>
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
