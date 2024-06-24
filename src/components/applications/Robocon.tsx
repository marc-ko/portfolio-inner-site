import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface RoboconProps extends WindowAppProps { }

const RoboconApp: React.FC<RoboconProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={1100}
            height={800}
            windowBarIcon="roboconSBoardIcon"
            windowTitle="Robocon 2024 Scoreboard"
            windowBarColor="#941d13"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://robocon2024.ustrobocon.win"
                    title="scoreboard"
                    width="100%"
                    height="100%"
                />
                {/* <div style={}>
                    <DesktopShortcut
                        icon="computerBig"
                        invertText
                        shortcutName={'Computer Details'}
                        onOpen={() => {}}
                    />
                </div> */}
            </div>
        </Window>
    );
};

export default RoboconApp;
