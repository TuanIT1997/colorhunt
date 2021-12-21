import ColorPiker from "./ColorPicker";
import { addCollection, addColor } from "./redux/colorSlide";
import CreateFilled from "./CreateFilled";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Create() {
    const dispatch = useDispatch();
    const [c3, setC3] = useState("#eeeeee");
    const [c2, setC2] = useState("#dddddd");
    const [c1, setC1] = useState("#cccccc");
    const [c0, setC0] = useState("#bbbbbb");
    const [index, setIndex] = useState(1);
    const handleSubmit = () => {
        let code = c3 + c2 + c1 + c0;
        while (code.indexOf("#") > -1) {
            code = code.replace("#", "")
        }
        dispatch(addColor({ code, filled }));
        setC3("#eeeeee");
        setC2("#dddddd");
        setC1("#cccccc");
        setC0("#bbbbbb");
        setFilled([]);
    }
    const [filled, setFilled] = useState([])
    const handleClick = (el, c) => {
        setIndex(c);
        el.stopPropagation();
        document.getElementsByClassName("filterWindow")[0].classList.add("hidden");
        document.getElementsByClassName("colorpicker")[0].classList.remove("hide");
        document.getElementsByClassName("littleMenu")[0].classList.add("hidden");
        window.addEventListener('click', () => {
            if (document.getElementsByClassName("colorpicker").length > 0)
                document.getElementsByClassName("colorpicker")[0].classList.add("hide");
        })
    }
    return <div className="page">
        <div className="contentPage createPage">
            <div className="center">
                <h1>New Color Palette</h1>
                <h2>Create a new palette and contribute to Color Hunt's collection</h2>
            </div>
            <div className="item">
                <div className="palette">
                    <div onClick={(el) => handleClick(el, 3)} className="place c3" style={{ backgroundColor: (c3) }}></div>
                    <div onClick={(el) => handleClick(el, 2)} className="place c2" style={{ backgroundColor: (c2) }}></div>
                    <div onClick={(el) => handleClick(el, 1)} className="place c1" style={{ backgroundColor: (c1) }}></div>
                    <div onClick={(el) => handleClick(el, 0)} className="place c0" style={{ backgroundColor: (c0) }}></div>
                </div>
                <div onClick={(el => el.stopPropagation())} className="colorpicker card hide">
                    {(index === 3) && <><ColorPiker color={c3} setColor={setC3} /> <div className="colorInput">{c3}</div></>}
                    {(index === 2) && <><ColorPiker color={c2} setColor={setC2} /> <div className="colorInput">{c2}</div></>}
                    {(index === 1) && <><ColorPiker color={c1} setColor={setC1} /> <div className="colorInput">{c1}</div></>}
                    {(index === 0) && <><ColorPiker color={c0} setColor={setC0} /> <div className="colorInput">{c0}</div></>}
                </div>
            </div>
            <CreateFilled filled={filled} setFilled={setFilled} />
            <div className="center buttonContainer">
                <div onClick={() => handleSubmit()} className="button submit">
                    <div className="icon" icon="send"></div>
                    Submit Palette
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br />
    </div>
}
export default Create;