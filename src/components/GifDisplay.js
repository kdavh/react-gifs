import React, {Component, PropTypes} from 'react';
import DraggableTypes from '../constants/DraggableTypes';
import {DropTarget} from 'react-dnd';
import classNames from 'classnames';

import './GifDisplay.scss';

@DropTarget(DraggableTypes.GIF, {
  drop(props, monitor, component) {
    component.props.onDrop(monitor.getItem());
  }
}, function registerWithDnD(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
})

export default class GifDisplay extends Component {
  static propTypes = {
    gif: PropTypes.object,
    onDrop: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  render() {
    const { connectDropTarget, isOver, canDrop, gif } = this.props;
    const classes = classNames("GifDisplay", {
      "GifDisplay-highlighted": isOver && canDrop
    });

    return connectDropTarget(
      <div className={classes}>
        { gif ? <img className="GifDisplay_image" src={gif.url} /> : null }
      </div>
    );
  }
}
