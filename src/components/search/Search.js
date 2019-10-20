import React, { Component } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import ImageResults from "../image-results/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    amount: "",
    apiUrl: "https://pixabay.com/api/",
    apiKey: "13994589-e0e8ce82bd5ca40a70b5b7171",
    images: []
  };

  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSearchButtonClick = () => {
    fetch(
      `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
      &image_type=photo&per_page=${this.state.amount}&safesearch=false`
    )
      .then(res => res.json())
      .then(data => this.setState({ images: data.hits }))
      .catch(err => alert(err));
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onFieldChange}
          label="Search for Images"
          fullWidth={true}
        />
        <br />
        <br />
        <Box
          display="flex"
          justifyContent="space-between"
          style={{ marginTop: "20px" }}
        >
          <FormControl>
            <InputLabel>Amount</InputLabel>
            <Select
              name="amount"
              value={this.state.amount}
              onChange={this.onFieldChange}
              style={{ width: "30vw" }}
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSearchButtonClick}
          >
            Search
          </Button>
        </Box>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Search;
