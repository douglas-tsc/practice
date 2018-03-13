import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class Home extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a className="item">
              <Button
                content="Create Campaign"
                icon="add"
                primary
                floated="right"
              />
            </a>
          </Link>
          <Card.Group centered items={items} />
        </div>
      </Layout>
    );
  }
}

export default Home;
