import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Dialog
} from "@material-ui/core";

import ZoomInIcon from "@material-ui/icons/ZoomIn";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    let imageListContent;
    const { images } = this.props; //equivalent to const images = this.props.images
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt="" />
              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    By <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(img.largeImageURL)}
                  >
                    <ZoomInIcon color="primary" />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    const actions = [
      <Button variant="contained" color="secondary" onClick={this.handleClose}>
        Close
      </Button>
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <img
            src={this.state.currentImg}
            alt="img"
            style={{ width: "100%" }}
          />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
