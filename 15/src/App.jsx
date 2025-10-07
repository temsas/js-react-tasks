import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0]
    }
  }
  setTheme = (theme) => {
    this.setState({
      theme: theme
    })
  }
  render() {

    let setTheme = this.setTheme.bind(this);
    let theme = this.state.theme;

    return (
        <ThemeContext.Provider value={{ themes, theme, setTheme }}>
          <Tabs>
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Profile />
            </Tab>
          </Tabs>
          <ThemeSwitcher />
        </ThemeContext.Provider>
    )
  }
  // END
}

export default App;
