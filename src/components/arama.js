import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = (event) => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Haber arayınız."
              name="haber"
              value={this.state.searchTopic}
              onChange={this.handleChange}
              style={{ width: 500 }}
            />
            <Button type="submit" color="blue">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
