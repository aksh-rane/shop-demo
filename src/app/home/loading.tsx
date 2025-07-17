import { Loader } from '@progress/kendo-react-indicators';

export default function Loading() {
    return (
        <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader type="converging-spinner" />
            <h1>Products loading. Thanks for your patience...</h1>
        </div>
    );
}
