"use client";
import { Button } from "@progress/kendo-react-buttons";

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <Button onClick={() => window.location.href = "/home"}>Go to Home</Button>
        </div>
    );
}
