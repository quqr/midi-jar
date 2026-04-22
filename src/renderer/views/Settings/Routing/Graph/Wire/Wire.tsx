import React, { useMemo } from 'react';
import { getBezierPath, EdgeProps } from 'react-flow-renderer';

import { ApiMidiWire } from 'main/types/api';

import { Icon } from 'renderer/components';

const FOREIGN_OBJECT_SIZE = 32;

type Props = EdgeProps<{
  wire: ApiMidiWire;
  onDelete: (wire: ApiMidiWire) => void;
}>;

const CustomEdge: React.FC<Props> = ({
  id,
  data,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const { x: positionX, y: positionY } = useMemo(() => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'd', edgePath);
    const position = path.getPointAtLength(path.getTotalLength() * 0.75);
    path.remove();
    return position;
  }, [edgePath]);

  const onClick = () => data && data.onDelete && data.onDelete(data.wire);

  return (
    <>
      <path id={id} style={style} className="react-flow__edge-path stroke-[2]" d={edgePath} />
      <foreignObject
        width={FOREIGN_OBJECT_SIZE}
        height={FOREIGN_OBJECT_SIZE}
        x={positionX - FOREIGN_OBJECT_SIZE / 2}
        y={positionY - FOREIGN_OBJECT_SIZE / 2}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className="w-full h-full bg-transparent flex justify-center items-center">
          <button
            type="button"
            className="appearance-none w-[20px] h-[20px] bg-[#5c5c5c] border-none text-white cursor-pointer rounded-full text-[8px] leading-1 z-[10] transition-all duration-300 ease-in-out hover:bg-[#d89845] hover:shadow-[0_0_6px_2px_rgba(216,152,69,0.4)]"
            onClick={onClick}
          >
            <Icon name="cross" />
          </button>
        </div>
      </foreignObject>
    </>
  );
};

export default CustomEdge;
