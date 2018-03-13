import React, { Component } from "react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Layout from "../../components/Layout";
import { Button, Form, Input } from "semantic-ui-react";
import { Message } from "semantic-ui-react";
import { Router } from "../../routes";

class New extends Component {
  state = {
    minimumContribution: "",
    errMessage: "",
    loading: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    try {
      this.setState({ loading: true, errMessage: "" });
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
      this.setState({ loading: false });
      Router.pushRoute("/");
    } catch (err) {
      console.log(err);
      this.setState({ errMessage: err.message, loading: false });
    }
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              placeholder="Minimum Contribution"
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={e =>
                this.setState({ minimumContribution: e.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops" content={this.state.errMessage} />
          <Button type="submit" primary loading={!!this.state.loading}>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default New;
