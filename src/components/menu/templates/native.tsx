import { Component, Prop, h } from '@stencil/core';
import communityPlugins from '../data/native-plugins.json';

@Component({
  tag: 'docs-menu-native',
  styleUrl: 'native.css'
})
export class DocsMenuNative {

@Prop() category: 'community' | 'premier' = 'premier';

toggle(e: CustomEvent) {
  this.category = e.detail.value;
}

render() { return [
  <docs-nav items={ this.intro } />,

  <docs-menu-collapsible heading="Native Solutions">
    <docs-nav items={ this.nativeSolutions } />
  </docs-menu-collapsible>,

  <docs-menu-collapsible heading="Core Device">

    <ion-segment mode="ios"
                 value={this.category}
                 onIonChange={e => this.toggle(e) }
                 color="medium">
      <ion-segment-button value="community">
        <ion-label>Community</ion-label>
      </ion-segment-button>
      <ion-segment-button value="premier">
        <ion-label>Premier</ion-label>
      </ion-segment-button>
    </ion-segment>

    {this.category === 'community' ?
      <docs-nav items={this.communityPlugins} /> :
      <docs-nav items={this.nativePlugins} />
    }
  </docs-menu-collapsible>
]; }

intro = {
  'menu-native-paid': {
    'Home': '/docs/enterprise',
    'Community vs Premier': '/docs/enterprise'
  }
};

nativeSolutions = {
  '': {
    'Identity Vault': '/docs/enterprise/identity-vault',
    'Auth Connect': '/docs/enterprise/auth-connect',
    'Secure Storage': '/docs/enterprise/offline-storage'
  }
};

communityPlugins = {
  'menu-native-getting-started': {
    'Quickstart': '/docs/enterprise/quickstart'
  },
  'menu-native-plugins': Object.entries(communityPlugins).sort()
};

nativePlugins = {
  'menu-enterprise-getting-started': {
    'Quickstart': '/docs/enterprise/quickstart',
    'Setup': '/docs/enterprise/setup'
  },
  'menu-enterprise-integrated-services': {
    'Apple Payment Pass': '/docs/enterprise/apple-payment-pass',
    'Auth0': '/docs/enterprise/auth-connect/auth0',
    'AWS Amplify': '/docs/enterprise/aws-amplify',
    'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito',
    'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
    'Couchbase Lite': '/docs/enterprise/couchbase-lite',
    'mParticle': '/docs/enterprise/mparticle'
  },
  'menu-enterprise-common-device-features': {
    'Android Permissions': '/docs/enterprise/android-permissions',
    'App Rate': '/docs/enterprise/app-rate',
    'App Version': '/docs/enterprise/app-version',
    'Badge': '/docs/enterprise/badge',
    'Calendar': '/docs/enterprise/calendar',
    'Camera': '/docs/enterprise/camera',
    'Clipboard': '/docs/enterprise/clipboard',
    'Contacts': '/docs/enterprise/contacts',
    'Deep Links': '/docs/enterprise/deeplinks',
    'Device': '/docs/enterprise/device',
    'Dialogs': '/docs/enterprise/dialogs',
    'Email Composer': '/docs/enterprise/email-composer',
    'Filesystem': '/docs/enterprise/filesystem',
    'Geolocation': '/docs/enterprise/geolocation',
    'Globalization': '/docs/enterprise/globalization',
    'InAppBrowser': '/docs/enterprise/inappbrowser',
    'Keyboard': '/docs/enterprise/keyboard',
    'Media': '/docs/enterprise/media',
    'Media Capture': '/docs/enterprise/media-capture',
    'Native Storage': '/docs/enterprise/nativestorage',
    'Network Information': '/docs/enterprise/network-information',
    'Screen Orientation': '/docs/enterprise/screen-orientation',
    'Social Sharing': '/docs/enterprise/social-sharing',
    'Splash Screen': '/docs/enterprise/splashscreen',
    'Status Bar': '/docs/enterprise/statusbar',
    'Vibration': '/docs/enterprise/vibration'
  },
};
}
