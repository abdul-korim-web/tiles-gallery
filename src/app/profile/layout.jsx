
import React from 'react';
export const metadata = {
  title: 'My Profile | TilesHub',
  description: 'This is a TilesHub profile page',
}
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Layout;
