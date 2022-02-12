import React from 'react';

const NavHorizontal = (props) => {
  const {menu, active, onSelectMenu} = props;

  return (<div className="hope-menu">
    <nav>
      {menu.map((item) => {
        let __activeClasses = active == item._key ? '__active' : '';

        return <a 
          className={['hope-menu__item', __activeClasses].join(' ')} 
          href="#" 
          key={item._key}
          onClick={e => {
            if(onSelectMenu)
              onSelectMenu.call('', e, item);
          }}>{item.name}</a>
      })}
    </nav>
  </div>)
}

export default NavHorizontal;