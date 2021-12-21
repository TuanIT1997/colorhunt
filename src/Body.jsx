import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Collection from "./Collection";
import Palettes from "./Palettes";
import SideBar from "./SideBar"
import Create from "./Create";
import About from "./About";
import ColorItem from "./ColorItem";
function Body() {
    return (
        <div className="wrap main flex">
            <Switch>
                <Route path={["/palettes/:filled", "/:page", "/"]}>
                    <SideBar/>
                </Route>
            </Switch>
            <Switch>
                <Route path={"/palette/color/:color"}>
                    <ColorItem/>
                </Route>
                <Route path="/create">
                    <Create/>
                </Route>
                <Route path="/collection">
                    <Collection />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <Palettes/>
                </Route>
            </Switch>
        </div>

    )
}
export default Body;

