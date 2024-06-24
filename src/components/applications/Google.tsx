import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface GoogleProps extends WindowAppProps { }

const GoogleApp: React.FC<GoogleProps> = (props) => {
    return (
        <Window
            top={10}
            left={10}
            width={800}
            height={600}
            windowBarIcon="google"
            windowTitle="Google"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://oldgoogle.neocities.org/2010/"
                    title="google"
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

export default GoogleApp;
