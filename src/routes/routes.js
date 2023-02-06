
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import SingleContentCard from "../pages/pages/contentCard/SingleContentCard";
import AddContent from "../pages/pages/Dashboard/AddContent";
import AddTags from "../pages/pages/Dashboard/AddTags";
import AllContent from "../pages/pages/Dashboard/AllContent";
import UpdateContent from "../pages/pages/Dashboard/UpdateContent";
import Home from "../pages/pages/Home/Home";
import ReadingHistory from "../pages/pages/ReadingHistory/ReadingHistory";


export const router = createBrowserRouter([
    {
        path : "/" ,
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/content/:id",
                element : <SingleContentCard></SingleContentCard>
            },
            {
                path : "/readingHistory",
                element : <ReadingHistory></ReadingHistory>
            },
          
            {
                path : "/dashboard",
                element : <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path : "/dashboard",
                        element : <AllContent></AllContent>
                    },
                    {
                        path : "/dashboard/addContent",
                        element : <AddContent></AddContent>
                    },
                    {
                        path : "/dashboard/addTags",
                        element : <AddTags></AddTags>
                    },
                    {
                        path : "/dashboard/updateContent/:id",
                        element : <UpdateContent></UpdateContent>
                    },
                ]
            }
        ]
    }
])