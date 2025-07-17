"use client";
import { useState, useRef, useContext } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { Button } from '@progress/kendo-react-buttons';

import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Popup } from '@progress/kendo-react-popup';
import { userIcon, cartIcon } from '@progress/kendo-svg-icons';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';

import { CartContext } from '../../../context/CartContext';
// import SignIn from "./SignIn"; // Adjust the import path as necessary

const AppBarCmp = () => {
    const router = useRouter();
    const anchor = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    const { products } = useContext(CartContext);

    const handleClick = () => {
        setShow(!show);
    };
    return (
        <>
            <AppBar themeColor="primary">
                <AppBarSection className="title">
                    <h1 className="title">Local to Global market</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                <AppBarSpacer />
                <AppBarSection>
                    <div ref={anchor}>
                        <Button fillMode="flat" type="button" onClick={handleClick}>
                            <SvgIcon icon={userIcon} size={'xlarge'} />
                        </Button>
                    </div>
                    <Button fillMode="flat" type="button" onClick={() => router.push('/home/products/cart')}>
                        <BadgeContainer>
                            <SvgIcon icon={cartIcon} size={'xlarge'} />
                            <Badge>{products.length}</Badge>
                        </BadgeContainer>
                    </Button>
                    {/* <SignIn/> */}
                    {show && (
                        <Popup anchor={anchor.current} show={show} style={{ marginLeft: -10 }}>
                            <div className="content">
                                <ul>

                                    <li><Link href="/home/profile">
                                        <span>My Profile</span></Link>
                                    </li>


                                    <li><Link href="/home/about">
                                        <span>About us</span></Link>
                                    </li>

                                </ul>
                            </div>
                        </Popup>
                    )}
                </AppBarSection>
            </AppBar>
        </>
    );
};

export default AppBarCmp;
