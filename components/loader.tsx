import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  const styles = {
    div: {
      display: 'flex',
    }
  }

  return (
    <div style={styles.div}>
      <RotatingLines strokeColor="grey" width="30" />
    </div>
  );
};

export default Loader;