/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
export function forwardRefWithStatic(render) {
    return React.forwardRef(render);
}
