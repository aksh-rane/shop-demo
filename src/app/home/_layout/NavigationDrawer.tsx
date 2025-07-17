"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

import { Drawer, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { homeIcon, cartIcon, userIcon, stickyNoteIcon, infoCircleIcon } from '@progress/kendo-svg-icons';
import { signOut } from 'next-auth/react';

const items = [
    { text: 'Home', svgIcon: homeIcon, selected: false, route: '/home' },
    { text: 'Products', svgIcon: cartIcon, selected: false, route: '/home/products' },
    { separator: true },
    { text: 'Profile', svgIcon: userIcon, route: '/home/profile' },
    { text: 'About', svgIcon: infoCircleIcon, route: '/home/about' },
    { text: 'Settings', svgIcon: stickyNoteIcon, route: '/home/settings' },
];

const NavigationDrawer = () => {
    const router = useRouter();
    const pathName = usePathname();
    const [selected, setSelected] = useState(items.findIndex((x) => pathName === x.route));

    const onSelect = (e: DrawerSelectEvent) => {
        setSelected(e.itemIndex);
        if (items[e.itemIndex].route === 'signout') {
            signOut();
        } else {
            router.push(items[e.itemIndex].route);
        }
    };

    return (
        <div>
            <Drawer
                expanded={true}
                position={'start'}
                mode={'push'}
                mini={true}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected
                }))}
                onSelect={onSelect}
            />
        </div>
    );
};

export default NavigationDrawer;

