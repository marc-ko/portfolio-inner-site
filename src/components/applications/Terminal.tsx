import React, { useEffect, useRef } from 'react';
import Window from '../os/Window';

export interface TerminalAppProps extends WindowAppProps { }

const TerminalApp: React.FC<TerminalAppProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el || typeof window.ZSH === 'undefined') {
            return;
        }
        new window.ZSH(el, undefined, true);
        return () => {
            el.innerHTML = '';
        };
    }, []);

    return (
        <Window
            top={20}
            left={20}
            width={1100}
            height={800}
            windowBarIcon="terminalIcon"
            windowTitle="Terminal"
            windowBarColor="#000000"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div
                className="site-page"
                style={{
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    minWidth: 0,
                }}
            >
                <div
                    ref={containerRef}
                    id="terminal-container"
                    style={{ width: '100%', height: '100%', minHeight: 0, minWidth: 0, flex: 1 }}
                />
            </div>
        </Window >
    );
};


export default TerminalApp;
