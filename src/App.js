import React from "react";
import * as Tone from "tone";

import { MusicalAddress } from "./components";

function App() {
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  const onClickMusicalAddress = () => {
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div id="wrapper">
      <div className="passport">
        <div className="passportLeftSide">
          <div className="citizenshipH3">
            <h3>Earth Citizehship</h3>
          </div>
          <div className="passportInfo">
            <div className="passportInfoCell">
              <p>el-nivvo</p>
            </div>
            <div className="passportInfoCell">
              <p>karma 🔮</p>
            </div>
            <div className="passportInfoCell">
              <p>addresses</p>
            </div>
          </div>
          <div className="lampContainer earthCitizenshipLamp">
            <div
              className="lamp leftWhiteLamp "
              style={{ borderRadius: "100px 0 0 0" }}
            ></div>
            <div className="leftWhitelight"></div>
          </div>
          <div className="lampContainer passportLeftLamp">
            <div
              className="lamp leftGreenLamp "
              style={{ borderRadius: "0 0 0 100px" }}
            ></div>
            <div className="leftGreenLight"></div>
          </div>
        </div>
        <div className="passportRightSide">
          <div className="passportAvatar">
            <div className="avatarContainer"></div>
          </div>
          <div className="passportIcons">
            <div className="atomIcon"></div>
            <div className="etheriumIcon"></div>
            <div className="bostromIcon"></div>
          </div>
          <div className="lampContainer passportRightLamp">
            <div className="lamp rightGreenLamp"></div>
            <div className="rightGreenLight"></div>
          </div>
        </div>
        <MusicalAddress onClick={() => onClickMusicalAddress()} />
      </div>
    </div>
  );
}

export default App;
