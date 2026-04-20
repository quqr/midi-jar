import { useRef } from 'react';
import { attemptFocus } from '../../utils/focusUtils';
import useRefEffect from '../useRefEffect';
import usePropsRef from '../usePropsRef';
import { useKeySearch } from '../useKeySearch';
const getPreviousIndex = (length, index) => {
    if (index === -1)
        return length - 1;
    return index - 1 < 0 ? length - 1 : index - 1;
};
const getNextIndex = (length, index) => {
    if (index === -1)
        return 0;
    return index + 1 >= length ? 0 : index + 1;
};
const defaultMatcher = () => true;
function defaultFocusItem(itemToFocus) {
    if (itemToFocus?.item) {
        attemptFocus(itemToFocus.item, true);
    }
}
/**
 * Recursive shit that focus the next non disabled item
 */
const exploreItems = (items, startIndex) => function getNext(getIndex, isMatching = defaultMatcher, currentIndex = startIndex, iteration = 0) {
    if (!items.length || iteration === items.length)
        return {};
    const nextIndex = getIndex(items.length, currentIndex);
    const nextItem = items?.[nextIndex];
    if (nextItem?.getAttribute('aria-disabled') ||
        nextItem?.getAttribute('disabled') ||
        !isMatching(nextItem)) {
        return getNext(getIndex, isMatching, nextIndex, iteration + 1);
    }
    return {
        item: nextItem,
        index: nextIndex,
    };
};
/**
 * Hook that manage the keyboard navigation inside a list
 */
export function useListNav(options) {
    const { itemQuerySelector, disableSearchNav, direction = 'vertical', onFocus = defaultFocusItem, containerEl, onEnter, } = options;
    const [getSearch, setSearch] = useKeySearch();
    const prevItem = useRef(null);
    const containerElRef = usePropsRef(containerEl);
    return useRefEffect((triggerEl) => {
        function doFocus(item) {
            onFocus(item, triggerEl);
            prevItem.current = item;
        }
        function handleKeyDown(e) {
            let prevent = false;
            const upKey = direction === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
            const downKey = direction === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
            const rootEl = containerElRef.current || triggerEl;
            const allItems = Array.from(rootEl.querySelectorAll(itemQuerySelector));
            const currentItem = e.target;
            const currentIndex = allItems?.indexOf(currentItem) || prevItem.current?.index || 0;
            const getNext = exploreItems(allItems, currentIndex);
            switch (e.key) {
                case downKey: {
                    doFocus(getNext(getNextIndex));
                    prevent = true;
                    break;
                }
                case upKey: {
                    doFocus(getNext(getPreviousIndex));
                    prevent = true;
                    break;
                }
                case 'End':
                case 'PageDown': {
                    const lastIndex = allItems.length - 1;
                    doFocus({
                        item: allItems[lastIndex],
                        index: lastIndex,
                    });
                    prevent = true;
                    break;
                }
                case 'Home':
                case 'PageUp': {
                    doFocus({
                        item: allItems[0],
                        index: 0,
                    });
                    break;
                }
                case 'Enter': {
                    if (onEnter) {
                        onEnter(currentIndex, triggerEl);
                        prevent = true;
                    }
                    break;
                }
                default: {
                    // search nav can be disabled
                    if (disableSearchNav)
                        break;
                    const text = getSearch(e.key);
                    // focus the next element containing the text
                    const nextSearched = getNext(getNextIndex, (element) => {
                        return (!!text && !!element?.textContent?.toUpperCase()?.startsWith(text?.toUpperCase()));
                    });
                    doFocus(nextSearched);
                    if (nextSearched?.item) {
                        prevent = true;
                    }
                    else {
                        setSearch('');
                    }
                    break;
                }
            }
            if (prevent) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
        triggerEl.addEventListener('keydown', handleKeyDown);
        return () => {
            triggerEl.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        itemQuerySelector,
        disableSearchNav,
        direction,
        onFocus,
        containerEl,
        onEnter,
        prevItem,
        containerElRef,
        getSearch,
        setSearch,
    ]);
}
export default useListNav;
