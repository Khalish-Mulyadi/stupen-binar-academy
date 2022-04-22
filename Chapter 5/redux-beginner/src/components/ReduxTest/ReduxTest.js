import React from "react";
import { connect } from "react-redux";
const ReduxTest = (props) => {
  return (
    <div>
      <h1>Nilai: {props.nilai} </h1>
      <button onClick={props.kurang}>Kurang</button>
      <button onClick={props.tambah}>Tambah</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    nilai: state.totalNilai,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambah: () => dispatch({ type: "ADD_NILAI" }),
    kurang: () => dispatch({ type: "REDUCE_NILAI" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
