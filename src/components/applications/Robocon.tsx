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
            windowTitle="Hong Kong Robocon 2024 Scoreboard"
            windowBarColor="#941d13"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <div style={styles.disclaimerTab} className='disclaimerTab'>
                    <textarea>I lost this year if you wish to know
                    </textarea>
                </div>

                <iframe
                    src="https://robocon2024.yuetau.net"
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
        </Window >
    );
};

const styles: StyleSheetCSS = {
    disclaimerTab: {
        display: 'grid',
        zIndex: 5,
        position: 'absolute',
        width: '100%',
    },
}

export default RoboconApp;
