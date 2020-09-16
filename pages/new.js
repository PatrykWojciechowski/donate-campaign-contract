import React, { Component } from "react";
import Layout from "../components/Layout";
import { Form, Button, Input } from "semantic-ui-react";

class CampaignNew extends Component {
  state = {
    minimumContribution: "0.2",
  };

  render() {
    return (
      <Layout>
        <h1>New Campaign!</h1>
        <Form>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>

          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
