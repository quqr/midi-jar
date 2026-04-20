import React from 'react';
export function hasCurrentChildren(children, type) {
    let hasCurrent = false;
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === type && child.props.current) {
                hasCurrent = true;
            }
            if (!hasCurrent && child.props.children) {
                hasCurrent = hasCurrent || hasCurrentChildren(child.props.children, type);
            }
        }
    });
    return hasCurrent;
}
