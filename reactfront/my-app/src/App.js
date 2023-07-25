import React from 'react';
import CreateFeedback from './components/CreateFeedback';
// import Notification from './components/notification';


function App() {

return(<div>
  <CreateFeedback/>
 
  </div>
 )  
}

export default App;






 // const [received, setReceived] = useState([]);

  // useEffect(() => {
  //   socket.on('newNotification', (data) => {
  //     setReceived((previousNotification) => {
  //       const dataExists = previousNotification.some(
  //         (item) => item._id === data._id
  //       );
  //       if (!dataExists) {
  //         return [...previousNotification, data];
  //       }
  //      return previousNotification;
  //     });
  //   });
  // }, []);
  // return (
  //   <div>
  //   <h1>New_Notification:</h1>
  //   {received.map((item, index) => (
  //     <div key={index}>
        
  //       <ul>
  //         {Object.entries(item).map(([key, value]) => (
  //           <li key={key}>
  //             {key}: {value.toString()}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   ))}
  //   {/* <button>Remove Notification</button> */}
  // </div>
  // );