import Content from "./component/Content/Content";
import Search from "./component/Search/Search";
import { TopNavbar } from "./component/TopNavbar/TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Search />
      <Content />
    </div>
  );
}

export default App;
