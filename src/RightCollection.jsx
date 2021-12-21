import { useSelector , useDispatch} from "react-redux";
import { deleteCollection } from "./redux/colorSlide";
import { Link } from "react-router-dom";
function RightCollection() {
    const { myCollection } = useSelector(state => state.colorhunt);
    const dispatch = useDispatch()
    return <div className="likes" style={{ display: myCollection.length > 0 ? "block" : "none" }}>
        <div className="flex">
            <Link to="/collection" className="title">Collection</Link>
        </div>
        <div className="likesList">
            {myCollection.map(code =>
                <div key={code} className="palette">
                    <div className="place c3" style={{ backgroundColor: ' #' + code.slice(18, 24) }}></div>
                    <div className="place c2" style={{ backgroundColor: ' #' + code.slice(12, 18) }}></div>
                    <div className="place c1" style={{ backgroundColor: ' #' + code.slice(6, 12) }}></div>
                    <div className="place c0" style={{ backgroundColor: ' #' + code.slice(0, 6) }}></div>
                    <div className="x" onClick={()=>dispatch(deleteCollection(code))}>✕</div>
                </div>
            )}
        </div>
    </div>
}
export default RightCollection