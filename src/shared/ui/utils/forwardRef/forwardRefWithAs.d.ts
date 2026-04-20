import React from 'react';
import { As, OwnPropsWithAs, PropsWithAs, PropsType } from '../typeUtils';
export interface FunctionComponentWithAs<DefaultComponentType extends As, P extends PropsType> {
    /**
     * Inherited from React.FunctionComponent with modifications to support `as`
     */
    <AsType extends As = DefaultComponentType>(props: PropsWithAs<AsType, P>, context?: any): React.ReactElement<any, any> | null;
    /**
     * Inherited from React.FunctionComponent
     */
    displayName?: string;
    defaultProps?: Partial<OwnPropsWithAs<DefaultComponentType, P>>;
}
export interface ForwardRefWithAsRenderFunction<T extends As, P extends PropsType = Record<string, any>> {
    (props: React.PropsWithoutRef<OwnPropsWithAs<T, P>>, ref: React.Ref<React.ComponentRef<T>>): React.ReactNode;
    displayName?: string;
    /**
     * defaultProps are not supported on render functions
     */
    defaultProps?: never;
    /**
     * propTypes are not supported on render functions
     */
    propTypes?: never;
}
export declare function forwardRefWithAs<P extends PropsType, T extends As = 'div', S = unknown>(render: ForwardRefWithAsRenderFunction<T, P>): FunctionComponentWithAs<T, P> & S;
