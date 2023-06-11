import { useContext } from 'react';
import Context from '../context';

const Notification = () => {
  const [alert] = useContext(Context);
  
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      marginBottom: 5
    }
    
    if (alert === null) return null;
  
    return (
      <div style={style}>
        {alert}
      </div>
    )
  }
  
  export default Notification;