import { useParams, Link } from "react-router-dom";
import Copied from "./Copied";
import ButtonLike from "./ButtonLike";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"
import DeleteCreate from "./DeleteCreate"
import { getResult } from "./redux/colorSlide";
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}
function ColorItem() {
    const { color } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }
    const location = useLocation();
    const { myCreates } = useSelector(state => state.colorhunt)
    return <>
        <div className="page">
            <div className="singe">
                <div className="singleItem">
                    <div className="item">
                        <div className="palette">
                            <div className="place c3" style={{ backgroundColor: ' #' + color.slice(18, 24) }}>
                                <Copied colorID={"#" + color.slice(18, 24)} />
                            </div>
                            <div className="place c2" style={{ backgroundColor: ' #' + color.slice(12, 18) }}>
                                <Copied colorID={"#" + color.slice(12, 18)} />
                            </div>
                            <div className="place c1" style={{ backgroundColor: ' #' + color.slice(6, 12) }}>
                                <Copied colorID={"#" + color.slice(6, 12)} />
                            </div>
                            <div className="place c0" style={{ backgroundColor: ' #' + color.slice(0, 6) }}>
                                <Copied colorID={"#" + color.slice(0, 6)} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="actions flex">
                                {myCreates.findIndex(c => c.code == color) > -1 ?
                                    <Link to="/" onClick={() => goBack()}>
                                        <DeleteCreate code={color}>
                                            <div className="icon" icon="like"></div>
                                            <span>Delete this palette</span>
                                        </DeleteCreate>
                                    </Link>
                                    : <ButtonLike code={color}>
                                        <div className="icon" icon="like"></div>
                                        <span>Like this palette</span>
                                    </ButtonLike>}
                                <div className="button link" onClick={() => { navigator.clipboard.writeText("https://colorhunt-amber.vercel.app" + location.pathname); }}>
                                    <div className="icon" icon="link"></div>
                                    Link
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="balls row">
                        <div className="ball" style={{ backgroundColor: ' #' + color.slice(18, 24) }}></div>
                        <div className="ball" style={{ backgroundColor: ' #' + color.slice(12, 18) }}></div>
                        <div className="ball" style={{ backgroundColor: ' #' + color.slice(6, 12) }}></div>
                        <div className="ball" style={{ backgroundColor: ' #' + color.slice(0, 6) }}></div>
                    </div>
                    <div className="line"></div>
                    <div className="hex row">
                        <div className="button">
                            <Copied colorID={"#" + color.slice(18, 24)} />
                        </div>
                        <div className="button">
                            <Copied colorID={"#" + color.slice(12, 18)} />
                        </div>
                        <div className="button">
                            <Copied colorID={"#" + color.slice(6, 12)} />
                        </div>
                        <div className="button">
                            <Copied colorID={"#" + color.slice(0, 6)} />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="rgb row mobileHide">
                        <div className="button">
                            <Copied colorID={"rgb(" + hexToRgb(color.slice(0, 6)) + ")"} />
                        </div>
                        <div className="button">
                            <Copied colorID={"rgb(" + hexToRgb(color.slice(6, 12)) + ")"} />
                        </div>
                        <div className="button">
                            <Copied colorID={"rgb(" + hexToRgb(color.slice(12, 18)) + ")"} />
                        </div>
                        <div className="button">
                            <Copied colorID={"rgb(" + hexToRgb(color.slice(18, 24)) + ")"} />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
        <div className="right"></div>
    </>
}
export default ColorItem;