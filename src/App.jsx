import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" exact element={<VideoDetail />}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetail />}></Route>
          <Route
            path="/search/:searchTerm"
            exact
            element={<SearchFeed />}
          ></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
