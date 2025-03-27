import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  // Routing using react router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//---------------------------------------------------------Normalised Routing
// const {location}=window;
// const {pathname}=location;
// if(pathname=="/"){
//   return(<div>
//     <HomePage/>
//   </div>

//   )

// }else if(pathname=="/search"){
//   return(
//     <div>
//       <SearchPage/>
//     </div>
//   )
// }else{
//   return(
//     <div>
//       <h1>Page Not Found</h1>
//     </div>
//   )
// }

//---------------------------------------------------------


