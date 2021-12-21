import { useSelector } from "react-redux";
import Copied from "./Copied";
import ButtonLike from "./ButtonLike";
import { Link } from "react-router-dom";
import DeleteCreate from "./DeleteCreate"
function Collection() {
    const { myCollection, myCreates } = useSelector((state) => state.colorhunt);
    return <div className="page">
        <div className="contentPage likesPage">
            <div className="meta">
                <h1>
                    My collection
                    <span>6 palettes</span>
                </h1>
                <div className="line"></div>
            </div>
            <div className="center noLikes" style={{ display: (myCollection.length + myCreates.length == 0) ? "block" : "" }}>
                <div className="icon big" icon="like"></div>
                <h1>No palettes in collection</h1>
                <p>You haven't liked anything yet!</p>
                <p>
                    <Link to="/popular" className="button">Find beautiful palettes</Link>
                </p>
            </div>
            <div className="likesGrid feed">
                {myCreates.map(c => {
                    return (
                        <div key={c.code} className="item">
                            <div className="palette">
                                <div className="place c3" style={{ backgroundColor: ' #' + c.code.slice(18, 24) }}>
                                    <Link to={"/palette/color/" + c.code}></Link>
                                    <Copied colorID={"#" + c.code.slice(18, 24)} />
                                </div>
                                <div className="place c2" style={{ backgroundColor: ' #' + c.code.slice(12, 18) }}>
                                    <Link to={"/palette/color/" + c.code}></Link>
                                    <Copied colorID={"#" + c.code.slice(12.18)} />
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
                            <div className="flex">
                                <div className="actions flex">
                                    <DeleteCreate code={c.code}>
                                        <div className="icon" icon="like"></div>
                                        Delete
                                    </DeleteCreate>
                                </div>
                                <div className="date"></div>
                            </div>
                        </div>
                    )
                })}
                {myCollection.map(c => {
                    return (
                        <div key={c} className="item">
                            <div className="palette">
                                <div className="place c3" style={{ backgroundColor: ' #' + c.slice(18, 24) }}>
                                    <Link to={"/palette/color/" + c}></Link>
                                    <Copied colorID={"#" + c.slice(0, 6)} />
                                </div>
                                <div className="place c2" style={{ backgroundColor: ' #' + c.slice(12, 18) }}>
                                    <Link to={"/palette/color/" + c}></Link>
                                    <Copied colorID={"#" + c.slice(6, 12)} />
                                </div>
                                <div className="place c1" style={{ backgroundColor: ' #' + c.slice(6, 12) }}>
                                    <Link to={"/palette/color/" + c}></Link>
                                    <Copied colorID={"#" + c.slice(12, 18)} />
                                </div>
                                <div className="place c0" style={{ backgroundColor: ' #' + c.slice(0, 6) }}>
                                    <Link to={"/palette/color/" + c}></Link>
                                    <Copied colorID={"#" + c.slice(18, 24)} />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="actions flex">
                                    <ButtonLike code={c}>
                                        <div className="icon" icon="like"></div>
                                        Like
                                    </ButtonLike>
                                </div>
                                <div className="date"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
}
export default Collection;