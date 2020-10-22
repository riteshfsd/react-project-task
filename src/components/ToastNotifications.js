import React from 'react';
// Importing toastify module
import {toast} from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

 // toast-configuration method,
 // it is compulsory method.


const CustomToast = ({ closeToast }) => {
  return (
    <div>
     abc Something wrong here ! bbsbsbsbb
    <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()



function ToastNotifications() {
  const notify = () => {

    //toast('Basic taost message', {position: toast.POSITION.TOP_LEFT})

    /*toast('Basic taost message', {position: toast.POSITION.TOP_LEFT})
    toast('Basic taost message', {position: toast.POSITION.TOP_CENTER})
    toast('Basic taost message', {position: toast.POSITION.TOP_RIGHT})
    toast('Basic taost message', {position: toast.POSITION.BOTTOM_LEFT})
    toast('Basic taost message', {position: toast.POSITION.BOTTOM_RIGHT})*/

    /*toast('Basic taost message', {position: toast.POSITION.TOP_LEFT})
    toast.success('success taost message', {position: toast.POSITION.TOP_CENTER})
    toast.error('Error taost message', {position: toast.POSITION.TOP_RIGHT})
    toast.info('info taost message', {position: toast.POSITION.BOTTOM_LEFT})
    toast.warn('Warn taost message', {position: toast.POSITION.BOTTOM_RIGHT})*/


    /*toast('Basic taost message', {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
    toast.success('success taost message', {position: toast.POSITION.TOP_CENTER, autoClose: false})*/

    toast.success(<CustomToast />, {position: toast.POSITION.BOTTOM_RIGHT})

  }
    return(
      <div className="App">
        <button onClick={notify}>Notify !</button>
      </div>
    )
}
export default ToastNotifications;
