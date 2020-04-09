import React from 'react'
import App from 'next/app';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient, GitMediaStore } from '@tinacms/git-client';
import Gun from 'gun/gun';
import '../estil/estil.scss';

// Create Gun instance and Context
const gunPeers = ["https://prova-gun.herokuapp.com/gun"]; // S'utilitzarà quan hi hagi sistema d'usuaris.
const gun = Gun();
export const gunContext = React.createContext();
gunContext.displayName = "gunContext";

const gunObject = {
  gun,
  nomGraph: "prova-docs"
}

class theApp extends App {
  constructor() {
    super();
    this.cms = new TinaCMS({
      sidebar: {
        hidden: process.env.NODE_ENV === 'production',
      },
    });
    const client = new GitClient('http://localhost:3000/___tina');
    this.cms.registerApi('git', client);
    this.cms.media.store = new GitMediaStore(client);

  }

  render() {
    const { Component, pageProps } = this.props
      return (
        <gunContext.Provider value={gunObject}>
          <Tina cms={this.cms}>    
              <Component {...pageProps} />      
          </Tina>
        </gunContext.Provider>
      )
  }
}

export default theApp