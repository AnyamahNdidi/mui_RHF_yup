import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Todo from "./component/Todo"
import {ThemeProvider} from "@mui/material/styles"
import {theme} from "./component/ButTheme"
import Test2 from "./component/Test2"
import Test1 from './component/Test1';
import {QueryClient, QueryClientProvider} from "react-query"
import Project1 from './component/Project1';
import Body2 from './component/Body2';
import Body3 from './component/Body3';
import Body from './component/Body';
import Formyup from './component/Formyup';
import SatAuth from './component/SatAuth';
import Create from './component/Create';
import View from './component/View';
import EditPage from './component/EditPage';
import {AppProvider} from "./component/Global"


function App() {
  const queryClient = new QueryClient();
  return (

    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <AppProvider>
   <Router>
     {/* <Header/> */}
     <Project1/>
     <Routes>
       <Route path="" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="Todo" element={<Todo/>}/>
       <Route path="test2" element={<Test2/>}/>
       <Route path="test1" element={<Test1/>}/>
       <Route path="body" element={<Body/>}/>
       <Route path="body2" element={<Body2/>}/>
       <Route path="body3" element={<Body3/>}/>
       <Route path="project1" element={<Project1/>}/>
       <Route path="formyup" element={<Formyup/>}/>
       <Route path="satauth" element={<SatAuth/>}/>
       <Route path="create" element={<Create/>}/>
       <Route path="view" element={<View/>}/>  
       <Route path="edit/:id" element={<EditPage/>}/>  
     </Routes>
   </Router>
   </AppProvider>
   </ThemeProvider>
   </QueryClientProvider>
  );
}

export default App;
