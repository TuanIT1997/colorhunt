import { useDispatch, useSelector } from "react-redux";
import { addCollection, deleteCollection } from "./redux/colorSlide";
function ButtonLike(props) {
    const { myCollection } = useSelector((state) => state.colorhunt)
    const dispatch = useDispatch()
    return <div
        onClick={(myCollection.findIndex(c => c == props.code) > -1) ? () => dispatch(deleteCollection(props.code)) : () => dispatch(addCollection(props.code))}
        className="button like"
        status={(myCollection.findIndex(c => c == props.code) > -1) ? "on" : "off"}>
        {props.children}
    </div>
}
export default ButtonLike;