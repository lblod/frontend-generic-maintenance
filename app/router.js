import EmberRouter from '@ember/routing/router';
import config from 'frontend-generic-maintenance/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact', { path: '/contact' });
  this.route('legal', { path: '/legaal' }, function () {
    this.route('disclaimer');
    this.route('cookiestatement', { path: '/cookieverklaring' });
    this.route('accessibilitystatement', {
      path: '/toegankelijkheidsverklaring',
    });
  });
  this.route('index', { path: '' });

  this.route('redirect', {
    path: '/*wildcard',
  });

});
