declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

declare interface WindowAppProps {
    onClose: () => void;
    onInteract: () => void;
    onMinimize: () => void;
}

declare type DesktopWindows = {
    [key in string]: {
        zIndex: number;
        component: React.ReactElement;
        minimized: boolean;
        name: string;
        icon: IconName;
    };
};

/** In-browser terminal from public/zsh/zsh.js (loaded in index.html). */
declare interface ZshInstance {
    clear: () => void;
}

interface Window {
    ZSH: new (
        container: HTMLElement | string,
        statusbar?: HTMLElement | null,
        createHTML?: boolean
    ) => ZshInstance;
}
