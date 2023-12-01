import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RedirectRoute extends Route {
  @service router;

  async beforeModel() {
    return this.router.replaceWith('index');
  }
}
