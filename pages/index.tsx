import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NextLink from 'next/link';
import Navigation from '../views/Navigation'
import dynamic from 'next/dynamic'
import Other from '../views/Other'

const Home = dynamic(() => import('../views/Home'))
const Foo = dynamic(() => import('../views/Foo'))
const FooBar = dynamic(() => import('../views/FooBar'))
const NotFound = dynamic(() => import('../views/NotFound'))
// const Other = dynamic(() => import('../views/Other'))

export default function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Switch>
          <Route path='/dynamic/:id' render={(props) => {
            console.log('props', props)
            return <h1>What {props?.match?.params?.id}</h1>
          }} />
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/foo">
            <Foo />
          </Route>
          <Route exact path="/foo/bar">
            <FooBar />
          </Route>
          <Route exact path="/other">
            <Other />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Users() {
  return (
    <div style={{ margin: 20 }}>
      <nav>
        <Link to="/users/me">My Profile</Link>
      </nav>
      <Switch>
        <Route exact path="/users/">
          <div>User index</div>
        </Route>
        <Route exact path="/users/me">
          <div>User me</div>
        </Route>
        <Route path='/users/:userId' render={(props) => {
          console.log('props', props)
          return <h1>User profile {props?.match?.params?.userId}</h1>
        }} />
      </Switch>
    </div>
  )
}