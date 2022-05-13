import React from "react";
import { connect } from "react-redux";
import Content from "../../components/Content/Content";
import Detail from "../../components/Detail/Detail";
import Search from "../../components/Search/Search";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
const Homepage = (props) => {
  return (
    <div className="App">
      <TopNavbar />
      <Search />
      {props.showContent ? <Content /> : null}
      {props.showDetail ? <Detail /> : null}
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    showDetail: state.carReducer.showDetail,
    showContent: state.carReducer.showContent,
  };
};

export default connect(mapStateToProps)(Homepage);
