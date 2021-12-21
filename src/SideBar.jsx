import { useSelector ,useDispatch} from "react-redux";
import { setTime } from "./redux/colorSlide";
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
function SideBar() {
    const { collections, time } = useSelector(state => state.colorhunt)
    const dispatch = useDispatch()
    let { page } = useParams();
    let { filled } = useParams();
    return (
        <div className="left" style={{ display: page != undefined && (page == "about" || page=="create" ) ? "none" : "" }}>
            <Link
                className="tab button" tab="new"
                status={
                    filled != undefined ? "off" : (
                        page == undefined ? "on" : (
                            page == "palettes" ? "on" : "off"
                        )
                    )
                }
                to="/"
            >
                <div className="icon" icon="new"></div>
                New
            </Link>
            <Link
                className="tab button" tab="popular"
                status={page == "popular" ? "on" : "off"}
                to="/popular"
                onClick={()=>dispatch(setTime("month"))}
            >
                <div className="icon" icon="popular"></div>
                Popular
            </Link>
            <div className="timeframe hide" style={{ display: page == "popular" ? "flex" : "" }}>
                <div className="button small" onClick={()=>dispatch(setTime("month"))} status={time == "month" ? "on" : "off"}>Month</div>
                <div className="button small" onClick={()=>dispatch(setTime("year"))} status={time == "year" ? "on" : "off"}>Year</div>
                <div className="button small" onClick={()=>dispatch(setTime("alltime"))} status={time == "alltime" ? "on" : "off"}>All time</div>
            </div>
            <Link
                className="tab button" tab="random"
                status={page == "random" ? "on" : "off"}
                to="/random"
            >
                <div className="icon" icon="random"></div>
                Random
            </Link>
            <Link
                className="tab button" tab="collection"
                status={page == "collection" ? "on" : "off"}
                to="/collection"
            >
                <div className="icon" icon="like"></div>
                Collection
            </Link>
            <div className="line"></div>
            <div className="tags">
                {
                    collections.map(c =>
                        <Link
                            key={c}
                            to={"/palettes/" + c + "-"}
                            className="tab button small tag"
                            tab={c}
                            status={filled == (c + "-") ? "on" : "off"}
                        >
                            {c}
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
export default SideBar;