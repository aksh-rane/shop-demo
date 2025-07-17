import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import AppBarCmp from "./_layout/AppBar"
import NavigationDrawer from "./_layout/NavigationDrawer"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        <GridLayout
            rows={[{ height: "60px" }, { height: '100%' }]}
            gap={{ rows: 1, cols: 1 }}
        >
            <GridLayoutItem col={1} row={1} style={{ padding: '4px' }}><AppBarCmp /></GridLayoutItem>
            <GridLayoutItem col={1} row={2} style={{ padding: '4px' }}>
                <GridLayout
                    rows={[{ height: '100%' }]}
                    cols={[{ width: "10%" }, { width: '90%' }]}
                >
                    <GridLayoutItem col={1} row={1} colSpan={1} style={{ padding: '4px' }}><NavigationDrawer /></GridLayoutItem>
                    <GridLayoutItem col={2} row={1} colSpan={2} style={{ padding: '4px' }}>{children}</GridLayoutItem>
                </GridLayout>
            </GridLayoutItem>
        </GridLayout>
    </>
}