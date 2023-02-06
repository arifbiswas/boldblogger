import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Provider store={store} >
   <RouterProvider router={router}>
    
   </RouterProvider>
     <ToastContainer />
    </Provider>
  );
}

export default App;
