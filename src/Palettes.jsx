import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Copied from "./Copied";
import { getResult } from "./redux/colorSlide";
import { useEffect } from "react";
import ButtonLike from "./ButtonLike";
import RightCollection from "./RightCollection";
import DeleteCreate from "./DeleteCreate";
function Palettes() {
    const { filled, page } = useParams();
    const { result } = useSelector((state) => state.colorhunt)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getResult({ page, filled }))
    }, [page, filled])
    return (
        <>
            <div className="page">
                <div
                    className="noResultsPage contentPage"
                    style={{ display: result.length == 0 ? "block" : "none" }}
                >
                    <div className="center">
                        <div className="icon big" icon="search"></div>
                        <h1>No results</h1>
                        <p>We couldn't find any palette matching your search</p>
                        <p>
                            <Link to="/" className="button">Back home</Link>
                        </p>
                    </div>
                </div>
                <div className="feed global">
                    {result.map(c => {
                        return (
                            <div key={c.code} className="item">
                                <div className="palette">
                                    <div className="place c3" style={{ backgroundColor: ' #' + c.code.slice(18, 24) }}>
                                        <Link to={"/palette/color/" + c.code}></Link>
                                        <Copied colorID={"#" + c.code.slice(18, 24)} />
                                    </div>
                                    <div className="place c2" style={{ backgroundColor: ' #' + c.code.slice(12, 18) }}>
                                        <Link to={"/palette/color/" + c.code}></Link>
                                        <Copied colorID={"#" + c.code.slice(12, 18)} />
                                    </div>
                                    <div className="place c1" style={{ backgroundColor: ' #' + c.code.slice(6, 12) }}>
                                        <Link to={"/palette/color/" + c.code}></Link>
                                        <Copied colorID={"#" + c.code.slice(6, 12)} />
                                    </div>
                                    <div className="place c0" style={{ backgroundColor: ' #' + c.code.slice(0, 6) }}>
                                        <Link to={"/palette/color/" + c.code}></Link>
                                        <Copied colorID={"#" + c.code.slice(0, 6)} />
                                    </div>
                                </div>
                                {c.likes === "Delete" ?
                                    <div className="flex">
                                        <div className="actions flex">
                                            <DeleteCreate code={c.code}>
                                                <div className="icon" icon="like"></div>
                                                <span>{c.likes}</span>
                                            </DeleteCreate>
                                        </div>
                                        <span className="date">{c.date}</span>
                                    </div> :
                                    <div className="flex">
                                        <div className="actions flex">
                                            <ButtonLike code={c.code}>
                                                <div className="icon" icon="like"></div>
                                                <span>{c.likes}</span>
                                            </ButtonLike>
                                        </div>
                                        <span className="date">{c.date}</span>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="right">
                <h1>Color Palettes for Designers and Artists</h1>
                <h2>Discover the newest hand-picked palettes of Color Hunt</h2>
                <div className="line"></div>
                <RightCollection />
            </div>
        </>
    )
}
export default Palettes;