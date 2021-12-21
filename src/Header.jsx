import tongue from './data/color-hunt-logo-tongue.svg'
import face from './data/color-hunt-logo-face.svg'
import chrome from './data/color-hunt-icon-chrome.png'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
function LittleMenu() {
    const { page } = useParams()
    function handleShow(el) {
        el.stopPropagation();
        if (document.getElementsByClassName("colorpicker").length > 0) {
            document.getElementsByClassName("colorpicker")[0].classList.add("hide")
            document.getElementsByClassName("filterWindow")[1].classList.add("hidden");
        }
        if (document.getElementsByClassName("littleMenu")[0].classList.contains("hidden")) {
            document.getElementsByClassName("littleMenu")[0].classList.remove("hidden");
            document.getElementsByClassName("filterWindow")[0].classList.add("hidden");
        } else {
            document.getElementsByClassName("littleMenu")[0].classList.add("hidden");
        }
        window.addEventListener('click', () => {
            document.getElementsByClassName("littleMenu")[0].classList.add("hidden");
        })
    }
    return (
        <div className="right flex">
            <a target="_blank" href="https://chrome.google.com/webstore/detail/color-tab/hchlgfaicmddilenlflajnmomalehbom" className="button addToChrome">
                <img src={chrome} className="icon" alt="" />
                Add to Chrome
            </a>
            <div className="kebab button iconButton" onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={"littleMenu dropdown card hidden"} onClick={(el => el.stopPropagation())}>
                <Link onClick={handleShow} status={(page == "palettes" || page == undefined) ? "on" : "off"} className="button tab small" to="/">Palettes</Link>
                <Link onClick={handleShow} status={page == "create" ? "on" : "off"} className="button tab small" to="/create">Create</Link>
                <Link onClick={handleShow} status={page == "collection" ? "on" : "off"} className="button tab small" to="/collection">Collection</Link>
                <div className="line"></div>
                <Link onClick={handleShow} status={page == "about" ? "on" : "off"} className="button tab small" to="/about">About</Link>
                <a className="tab button small" target="_blank" href="https://www.instagram.com/">Instagram</a>
                <div className="line"></div>
                <a className="tab button small" target="_blank" href="https://twitter.com/thegalshir">Made by Gal Shir</a>
            </div>
        </div>
    )
}
function FilledInput() {
    let { filled } = useParams()
    const { colors, collections } = useSelector((state) => state.colorhunt)
    return (
        <>
            {
                filled != undefined ?
                    (
                        filled.split("-")).map(f => {
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
                                <Link to={"/palettes/" + filled.replace(f + "-", "")} key={f} className="button tag" status="on" tag={f} type={type}>
                                    {f}
                                    <span className="x">✕</span>
                                </Link>
                            )
                        })
                    : null
            }
        </>
    )
}
function FilterContainer() {
    const [search, setSearch] = useState("");
    let { filled } = useParams()
    const { colors, collections } = useSelector((state) => state.colorhunt)
    function handlefilterWindow(el) {
        el.stopPropagation();
        if (document.getElementsByClassName("colorpicker").length > 0) {
            document.getElementsByClassName("colorpicker")[0].classList.add("hide")
            document.getElementsByClassName("filterWindow")[1].classList.add("hidden");
        }
        document.getElementsByClassName("filterWindow")[0].classList.remove("hidden");
        document.getElementsByClassName("littleMenu")[0].classList.add("hidden");
        window.addEventListener('click', () => {
            document.getElementsByClassName("filterWindow")[0].classList.add("hidden");
        })
    }
    return (
        <div className="middle filterContainer">
            <div className="inputContainer flex">
                <FilledInput />
                <input onClick={handlefilterWindow} type="text"
                    placeholder={
                        filled != undefined ?
                            ((filled == "popular" || filled == "random" || filled == "collection") ? "Search palettes" : "Add tag")
                            : "Search palettes"}
                    className={
                        filled != undefined ?
                            ((filled == "popular" || filled == "random" || filled == "collection") ? "" : "filled")
                            : ""}
                    onChange={(el) => setSearch(el.target.value)}
                    value={search}
                />
                <div className="searchIcon icon"></div>
                <Link to="/" className="clear">✕</Link>
            </div>
            <div className={"filterWindow dropdown card hidden"} onClick={el => el.stopPropagation()}>
                <div className="color section">
                    <div className="title">Colors</div>
                    {colors.map(c => {
                        if (c.indexOf(search) < 0) return null;
                        let status = "off";
                        let toPath = ""
                        if (filled != undefined) {
                            toPath = filled;
                            if (filled.indexOf(c) != -1) {
                                status = "on"
                                toPath = toPath.replace(c + "-", "")
                            }
                            else {
                                toPath = toPath + c + "-";
                            }
                        } else {
                            toPath = c + "-";
                        }
                        return (
                            <Link
                                onClick={() => setSearch("")}
                                to={"/palettes/" + toPath}
                                key={c}
                                className="button tag"
                                status={status}
                                tag={c}
                                type="color"
                            >
                                {c}
                            </Link>
                        )
                    })}
                </div>
                <div className="line"></div>
                <div className="section collection">
                    <div className="title">Collections</div>
                    {collections.map(c => {
                        if (c.indexOf(search) < 0) return null;
                        let status = "off";
                        let toPath = ""
                        if (filled != undefined) {
                            toPath = filled;
                            if (filled.indexOf(c) != -1) {
                                status = "on"
                                toPath = toPath.replace(c + "-", "")
                            }
                            else {
                                toPath = toPath + c + "-";
                            }
                        } else {
                            toPath = c + "-";
                        }
                        return (
                            <Link
                                onClick={() => setSearch("")}
                                to={"/palettes/" + toPath}
                                key={c}
                                className="button tag"
                                status={status}
                                tag={c}
                                type=""
                            >
                                {c}
                            </Link>
                        )
                    })}
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
}
function Header() {
    return (
        <header className="header">
            <div className="wrap flex">
                <div className="left">
                    <Link to="/" className="logo flex">
                        <img className="tongue" src={tongue} />
                        <img src={face} alt="" />
                        <span className="mobileHide">Color Hunt</span>
                    </Link>
                </div>
                <FilterContainer />
                <LittleMenu />
                <div className="line bottom"></div>
            </div>
        </header>
    )
}
export default Header