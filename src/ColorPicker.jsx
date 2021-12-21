import { HexColorPicker } from "react-colorful";
function ColorPiker(props) {
    return <HexColorPicker color={props.color} onChange={props.setColor} />;
}
export default ColorPiker;