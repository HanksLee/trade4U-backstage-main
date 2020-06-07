import * as React from "react";
import { BaseReact } from "components/BaseReact";
import { DragSource, DropTarget } from "react-dnd";

let dragingIndex = -1;

interface ITableRowProps {
  isOver: boolean;
  connectDragSource: any;
  connectDropTarget: any;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  style?: any;
  className?: any;
  index: number;
}

class TableRow extends BaseReact<ITableRowProps> {
  render() {
    const {
      isSorting,
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      ...restProps
    } = this.props;
    let style = { ...restProps.style, };

    let { className, } = restProps;
    if (isOver && isSorting) {
      if (restProps.index > dragingIndex) {
        className += " drop-over-downward";
      }
      if (restProps.index < dragingIndex) {
        className += " drop-over-upward";
      }

      style = { ...style, cursor: "move", };
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    );
  }
}

const rowSource = {
  canDrag(props) {
    return props.isSorting;
  },
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      record: props.record,
      index: props.index,
    };
  },
};

const rowTarget = {
  canDrop(props, monitor) {
    const sourceRecord = monitor.getItem().record;
    const targetRecord = props.record;

    if (sourceRecord.parent !== targetRecord.parent) return false;
    return true;
  },
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveRow(dragIndex, hoverIndex, monitor.getItem().record);
    monitor.getItem().index = hoverIndex;
  },
};

const DragableTableRow = DropTarget("row", rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(
  DragSource("row", rowSource, connect => ({
    connectDragSource: connect.dragSource(),
  }))(TableRow)
);

export default DragableTableRow;
