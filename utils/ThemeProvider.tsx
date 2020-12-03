import React, {ReactNode, useEffect, useState} from "react";

const themes = ['light', 'dark'];
export default function ThemeProvider({children}: {children: ReactNode}) {
    const [themeID, setTheme] = useState(0);
    const [keysPressed, setKeys] = useState<string[]>([]);

    const handleKeyDown = (event: KeyboardEvent) => {
        setKeys(pressed => [...pressed, event.code]);
        if (keysPressed.includes('ControlLeft') && event.code === 'KeyT') {
            setTheme(themeID === themes.length - 1 ? 0 : themeID + 1);
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        setKeys(pressed => pressed.filter(k => k !== event.code));
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    useEffect(() => {
        if (themeID === 0) {
            document.body.style.setProperty('background', '#ffe4e1');
            document.body.style.setProperty('color', '#333');
        } else {
            document.body.style.setProperty('background', '#333');
            document.body.style.setProperty('color', '#ffe4e1');
        }
    }, [themeID]);

    return (
        <div className={themes[themeID]}>
            {children}
        </div>
    );
}
