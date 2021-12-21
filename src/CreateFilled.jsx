import { useSelector } from "react-redux"
function CreateFilled({ filled, setFilled }) {
    const { collections } = useSelector(state => state.colorhunt)
    const { colors } = useSelector(state => state.colorhunt)
    const handleClick = (el) => {
        el.stopPropagation();
        document.getElementsByClassName("filterWindow")[0].classList.add("hidden");
        document.getElementsByClassName("littleMenu")[0].classList.add("hidden");
        document.getElementsByClassName("filterWindow")[1].classList.remove("hidden");
        window.addEventListener('click', () => {
            if (document.getElementsByClassName("filterWindow").length > 1) {
                document.getElementsByClassName("filterWindow")[1].classList.add("hidden");
            }
        })
    }
    return <div className="middle filterContainer">
        <div className="inputContainer flex">
            {filled.map(f => {
                let type = "null"
                for (let i = 0; i < colors.length; i++) {
                    if (f == colors[i]) {
                        type = "color"
                    }
                }
                for (let i = 0; i < collections.length; i++) {
                    if (f == collections[i]) {
                        type = ""
                    }
                }
                if (type == "null") return null;
                return (
                    <div key={f} onClick={() => setFilled(filled.filter(fed => fed != f))} className="button tag" status="on" tag={f} type={type}>
                        {f}
                        <span className="x">✕</span>
                    </div>
                )
            })}
            <input onClick={(el) => handleClick(el)} type="text" placeholder="Add tags" className={filled.length > 0 ? "filled" : ""} />
            {filled.length > -1 && <div className="searchIcon icon" icon="search"></div>}
        </div>
        <div className="filterWindow dropdown card hidden">
            <div className="color section">
                <div className="title">Colors</div>
                {colors.map(c => <div
                    status={filled.findIndex(fed => fed == c) > -1 ? "on" : "off"}
                    onClick={filled.findIndex(fed => fed == c) > -1 ?
                        () => setFilled(filled.filter(fed => fed != c)) :
                        () => setFilled([...filled, c])}
                    type="color"
                    tag={c}
                    key={c}
                    className="button tag">
                    {c}
                </div>)
                }
            </div>
            <div className="line"></div>
            <div className="collection section">
                <div className="title">Collections</div>
                {collections.map(c => <div
                    status={filled.findIndex(fed => fed == c) > -1 ? "on" : "off"}
                    onClick={filled.findIndex(fed => fed == c) > -1 ?
                        () => setFilled(filled.filter(fed => fed != c)) :
                        () => setFilled([...filled, c])}
                    type=""
                    tag={c}
                    key={c}
                    className="button tag">
                    {c}
                </div>)
                }
            </div>
            <div className="line"></div>
        </div>
    </div>
}
export default CreateFilled;