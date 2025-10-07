import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext

    render() {
        const { themes, theme, setTheme } = this.context
        return (
            <ButtonGroup className="mb-2">
                {themes.map((them) => (
                    <ToggleButton
                        key={them.name}
                        type="radio"
                        variant="secondary"
                        checked={theme.name === them.name}
                        onClick={() => setTheme(them)}
                    >
                        {them.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        )
    }
}

  // END
export default ThemeSwitcher;
