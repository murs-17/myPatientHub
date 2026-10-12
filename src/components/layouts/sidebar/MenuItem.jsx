
import { NavLink } from 'react-router-dom';

const MenuItem = ({ title, icon: Icon, collapsed, path }) => {
  return (
    <NavLink
      to={path}
      className="flex w-full items-center gap-3 rounded-lg py-1 text-sm"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
        <Icon size={20} />
      </div>

      {collapsed && title}
    </NavLink>
  );
};

export default MenuItem;
