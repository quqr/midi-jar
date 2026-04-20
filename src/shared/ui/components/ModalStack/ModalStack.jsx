import React from 'react';
import { getChildRef, useMergeRef } from '../../utils/refUtils';
import { useModalStack } from './useModalStack';
/**
 * Registers his child element to the modal stack
 */
export const ModalStack = ({ children, hideOnStack, disableStacking, }) => {
    const modalRef = useModalStack({
        hideOnStack,
        disableStacking,
    });
    const mergedRef = useMergeRef(getChildRef(children), modalRef);
    return React.isValidElement(children) && React.Children.only(children)
        ? React.cloneElement(children, {
            ref: mergedRef,
        })
        : null;
};
export default ModalStack;
