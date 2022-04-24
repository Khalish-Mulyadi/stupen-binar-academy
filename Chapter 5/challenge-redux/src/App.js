import { connect } from "react-redux";
import Content from "./component/Content/Content";
import Detail from "./component/Detail/Detail";
import Search from "./component/Search/Search";
import TopNavbar from "./component/TopNavbar/TopNavbar";
import Footer from "./component/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <TopNavbar />
      <Search />
      {props.showContent ? <Content /> : null}
      {props.showDetail ? <Detail /> : null}
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    showDetail: state.carReducer.showDetail,
    showContent: state.carReducer.showContent,
  };
};

export default connect(mapStateToProps)(App);
