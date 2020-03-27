import React from 'react';
import {ButtonToggle, DropdownItem, DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const UserMenu = ({user,logout}) => {
    
    return (
        <UncontrolledDropdown className="text-dark ml-auto" nav inNavbar>
            <DropdownToggle className="text-dark "  nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <NavItem className="m-3" >
                        <ButtonToggle tag={RouterLink} to="/track_history" >Track history</ButtonToggle>{' '}
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem className="m-3" >
                        <ButtonToggle tag={RouterLink} to="/add_artist" >Add artist</ButtonToggle>{' '}
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem className="m-3" >
                        <ButtonToggle tag={RouterLink} to="/add_album" >Add album</ButtonToggle>{' '}
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem className="m-3" >
                        <ButtonToggle tag={RouterLink} to="/add_track" >Add track</ButtonToggle>{' '}
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};
export default UserMenu;