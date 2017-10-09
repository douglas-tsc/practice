import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { csv } from './source';
import { db } from './firebase';

class App extends Component {
  componentDidMount() {
    csv.map(item => {
      db
        .collection('users')
        .doc(item.UUID)
        .set({
          Date: item.Date,
          create_date: item.create_date,
          account_id: item.account_id,
          cookie_id: item.cookie_id,
          UUID: item.UUID,
          JumpshotPixel: item['Jumpshot pixel'],
          segment: item.segment,
          campaign_name: item.campaign_name,
          advertiser_id: item.advertiser_id,
          campaign_id: item.campaign_id,
          sequential_id: item.sequential_id,
          ip_address: item.ip_address,
          device_id: item.device_id,
          Time_Zone: item.Time_Zone,
          OS: item.OS,
          operating_system: item.operating_system,
          creative: item.creative,
          page_title: item.page_title,
          URL: item.URL,
          Clean_Domain: item.Clean_Domain,
          impression: item.impression,
          click: item.click
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
