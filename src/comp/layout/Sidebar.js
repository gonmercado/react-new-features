import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className={ 'sidebar' }>
    <ul>
      <Link to={ '/hook-state' }><li>Hooks state</li></Link>
      <Link to={ '/page-1' }><li>Page 1</li></Link>
      <Link to={ '/page-2' }><li>Page 2</li></Link>
      <Link to={ '/page-3' }><li>Page 3</li></Link>
      <Link to={ '/context-1' }><li>Context pagina 1</li></Link>
      <Link to={ '/context-2' }><li>Context pagina 2</li></Link>
      <Link to={ '/context-3' }><li>Context pagina 3</li></Link>
    </ul>
  </div>
);

export default Sidebar;