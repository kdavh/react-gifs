import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';
import classNames from 'classnames';

import DraggableTypes from '../constants/DraggableTypes';
import './GifSwatch.scss';

@DragSource(DraggableTypes.GIF, {
    beginDrag(props, monitor, component) {
      return props.gif;
    }
  },
  function registerWithDnD(connect, monitor) {
    return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    };
  }
)

export default class GifSwatch extends Component {
  static propTypes = {
    gif: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { connectDragSource, gif } = this.props;

    const classes = classNames("GifSwatch", {
      "GifSwatch-dragging": this.props.isDragging
    })

    return connectDragSource(
      <div className={classes}>
        <img
          className="GifSwatch_image"
          src={ gif.thumbnailStillUrl }
        />
        <img
          className="GifSwatch_secondImage"
          src={ gif.thumbnailUrl }
        />
      </div>
    );
  }
}
