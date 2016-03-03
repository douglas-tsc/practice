import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import EntryList from './containers/EntryList.js';
import Entry from './containers/Entry.js';
import NewEntry from './containers/NewEntry.js';
export default function (injectDeps, {FlowRouter}) {
 const MainLayoutCtx = injectDeps(Layout);
 FlowRouter.route('/', {
  name: 'items.list',
  action() {
   mount(MainLayoutCtx, {
    content: () => (<EntryList />)
   });
  }
 });
 FlowRouter.route('/entry/:entryId', {
  name: 'entries.single',
  action({entryId}) {
   mount(MainLayoutCtx, {
    content: () => (<Entry entryId={entryId}/>)
   });
  }
 });
FlowRouter.route('/new-entry', {
  name: 'newEntry',
  action() {
   mount(MainLayoutCtx, {
    content: () => (<NewEntry/>)
   });
  }
 });

 FlowRouter.route('/register', {
  name: 'users.new',
  action() {
   mount(MainLayoutCtx, {
    content: () => (<NewUser />)
   });
  }
 });
FlowRouter.route('/login', {
  name: 'users.login',
  action() {
   mount(MainLayoutCtx, {
    content: () => (<Login />)
   });
  }
 });
FlowRouter.route('/logout', {
  name: 'users.logout',
  action() {
   Meteor.logout();
   FlowRouter.go('/');
  }
 });
}
