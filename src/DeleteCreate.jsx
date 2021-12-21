import { deleteColor } from "./redux/colorSlide";
import { useDispatch } from "react-redux";
function DeleteCreate(props){
    const dispatch = useDispatch();
    return <div onClick={()=>dispatch(deleteColor(props.code))} className="button like"  status="on">
        {props.children}
    </div>
}
export default DeleteCreate;