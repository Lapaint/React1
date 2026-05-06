import {handlePlay, handleStop} from "./handle.jsx"
import ButtonCom from "./ButtonCom"
import style from "./ButtonCom.module.css"
import sampleVideo from "../../assets/galaxy.mp4";

export default function Toolbar() {
  return (
    <>
      <nav>
        <ButtonCom message="videoPlayer" handle={handlePlay} style={style.myButton}>
          Play
        </ButtonCom>
        &nbsp;
        <ButtonCom message="videoPlayer" handle={handleStop} style={style.myButton}>
          Stop
        </ButtonCom>
      </nav>
      <br />
      <section>
        <video id="videoPlayer" src={sampleVideo} controls width="350" />
      </section>
    </>
  );
}
