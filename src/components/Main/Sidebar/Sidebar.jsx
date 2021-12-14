import React from 'react';
import { StoreContext } from '../../../storeContext';
import { SidebarStateless } from "./SidebarStateless";

const Sidebar = () => {
    return (
        <StoreContext.Consumer>
            {
                store => (<SidebarStateless sidebar={store.getState().sidebar} />)
            }
        </StoreContext.Consumer>
    )
};

export { Sidebar };