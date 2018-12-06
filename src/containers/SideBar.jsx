import React, { Component } from 'react';

import SideBarRender from '../components/SidebarRender/SidebarRender.jsx';

export default class Header extends Component {

    shouldComponentUpdate() {
        return false;
    };

    render() {
        const { renderModalWindow } = this.props;
        return(<SideBarRender renderModalWindow={renderModalWindow} />)
    };
};
