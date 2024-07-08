import React from 'react';
// import DesktopShortcut from '../os/DesktopShortcut';
import Window from '../os/Window';

export interface BlogProps extends WindowAppProps { }

const BlogApp: React.FC<BlogProps> = (props) => {
    return (
        <Window
            top={20}
            left={20}
            width={1100}
            height={800}
            windowBarIcon="windowGameIcon"
            windowTitle="marc-ko.github.io - Blog"
            windowBarColor="#941d13"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">

                <iframe
                    src="https://marc-ko.github.io/"
                    title="blog"
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


export default BlogApp;
