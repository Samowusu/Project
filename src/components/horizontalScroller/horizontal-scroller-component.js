import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
//apply visibility context if we encounter any issues with performance
//https://codesandbox.io/s/drag-by-mouse-forked-qb11u?file=/src/index.tsx
import useDrag from '../../hooks/useDrag';
import classes from '../popularSearches/PopularSearches.module.css'

function HorizonralScroller({
  RenderItemList,
  parentClass//css module class name at the very least
}) {
	const { dragStart, dragStop, dragMove, dragging } = useDrag();

	const handleDrag =
		({ scrollContainer }) =>
		(ev) =>
			dragMove(ev, (posDiff) => {
				if (scrollContainer.current) {
					scrollContainer.current.scrollLeft += posDiff;
				}
			});

	const handleItemClick = (clickHandler) => {
    console.log('called item click')
		if (dragging) {
			return false;
		}
    clickHandler && clickHandler()
	};

	return (
			<div
				onMouseLeave={dragStop}
				style={{
					borderWidth: 2.55,
				}}
			>
				<ScrollMenu
					onWheel={onWheel}
					onMouseDown={() => dragStart}
					onMouseUp={() => dragStop}
					onMouseMove={handleDrag}
          wrapperClassName={parentClass ?? ''}
				>
					{RenderItemList(handleItemClick)}
				</ScrollMenu>
			</div>
	);
}

function onWheel(apiObj, ev) {
	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

	if (isThouchpad) {
		ev.stopPropagation();
		return;
	}

	if (ev.deltaY < 0) {
		apiObj.scrollNext();
	} else if (ev.deltaY > 0) {
		apiObj.scrollPrev();
	}
}

export default HorizonralScroller;
