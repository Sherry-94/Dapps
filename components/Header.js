import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default (props) =>
{
  return(
    <Menu style={{marginTop: '15px'}}>
      <Link route="/">
        <a className='item'>CrowdCoin</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className='item'>Campaigns</a>
        </Link>

        <Link route="/Campaigns/new">
          <a className='item'>+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
