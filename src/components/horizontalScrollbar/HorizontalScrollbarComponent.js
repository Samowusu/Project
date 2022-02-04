import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import useDrag from "../../hooks/useDrag";

function HorizontalScrollbarComponent({ RenderItemsList, parentClass }) {
  const { dragStart, dragMove, dragStop, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (event) =>
      dragMove(event, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick = (clickHandler) => {
    if (dragging) {
      return false;
    }
    clickHandler && clickHandler();
  };

  return (
    <div onMouseLeave={dragStop}>
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        wrapperClassName={parentClass ?? ""}
      >
        {RenderItemsList(handleItemClick)}
      </ScrollMenu>
    </div>
  );
}

function onWheel(apiObj, event) {
  const isThouchpad =
    Math.abs(event.deltaX) !== 0 || Math.abs(event.deltaY) < 15;

  if (isThouchpad) {
    event.stopPropagation();
    return;
  }

  if (event.deltaY < 0) {
    apiObj.scrollNext();
  } else if (event.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
export default HorizontalScrollbarComponent;
