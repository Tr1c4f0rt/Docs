import App from 'next/app';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient, GitMediaStore } from '@tinacms/git-client';
import Gun from 'gun';
import '../estil/estil.scss';

// Gun Context
import GunContext, {gunPeers} from '../utils/MyGun';
let gun

if(typeof window !== undefined){

  gun = Gun();

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
      <Tina cms={this.cms}>
        <GunContext.Provider value={gun}>
          <Component {...pageProps} />
        </GunContext.Provider>
      </Tina>
    )
  }
}

export default theApp