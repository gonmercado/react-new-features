import React from 'react';
import { UserContext } from '../../userContext';
import { TitleContext } from '../../titleContext';

class Header extends React.Component {
  render() {
    return (
      <div className={'header'}>
        <TitleContext.Consumer>
          {
            titleContext => <span>{ titleContext.pageTitle }</span>
          }
        </TitleContext.Consumer>
        <UserContext.Consumer>
          {
            userContext => <span>{ userContext.userName }</span>
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

Header.contextType = UserContext;

export default Header;