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
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      ...restProps
    } = this.props;
    const style = { ...restProps.style, cursor: "move", };

    let { className, } = restProps;
    if (isOver) {
      if (restProps.index > dragingIndex) {
        className += " drop-over-downward";
      }
      if (restProps.index < dragingIndex) {
        className += " drop-over-upward";
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    );
  }
}

const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      index: props.index,
    };
  },
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveRow(dragIndex, hoverIndex);
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
