import { connect } from "react-redux";
import NavBar from "./NavBar";
import { useDispatch as dispatch } from "react-redux";

/*   Action Creators Started   */
const toHome = () => ({ type: "toHome" });
const toTestPic = (target) => ({ type: "toTestPic", payload: `${target}` });
/*   Action Creators Ended     */

const mapStateToProps = (getStateFromStore) => ({ location: state.location });
const mapDispatchToProps = (dispatchActions) => ({
  toHome: () => dispatch(toHome()),
  toTestPic: () =>
    dispatch(toTestPic("TempPRI6dfc6b53-7db9-4fc1-a1d4-a33477944979")),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
