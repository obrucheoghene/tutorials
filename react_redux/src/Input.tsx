import React, { forwardRef, useRef } from "react";

interface ChildProps {
    label?: string;
}
const Child = forwardRef<HTMLInputElement, ChildProps>((props, ref) => {
    return <input ref={ref} placeholder="Name" />;
});
const Parent = () => {
    const childRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        childRef.current?.focus();
    };
    return (
        <>
            <Child ref={childRef} />
            <button onClick={handleFocus}>Focus</button>
        </>
    );
};

export default Parent;
