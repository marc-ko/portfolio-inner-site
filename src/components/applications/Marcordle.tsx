import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface MarcordleAppProps extends WindowAppProps {}

const MarcordleApp: React.FC<MarcordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Marcordle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={''}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default MarcordleApp;
