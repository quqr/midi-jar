import React from 'react';
export declare function forwardRefWithStatic<T, P = {}, S = unknown>(render: React.ForwardRefRenderFunction<T, React.PropsWithoutRef<P>>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>> & S;
