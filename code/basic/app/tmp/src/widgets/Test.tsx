import esri = __esri;

import { aliasOf, declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { renderable, tsx } from 'esri/widgets/support/widget';

import Widget from 'esri/widgets/Widget';

import TestViewModel from './Test/TestViewModel';

export interface TestProperties extends esri.WidgetProperties {
  name?: string;
  view?: esri.MapView | esri.SceneView;
}

const CSS = {
  base: 'esri-widget test-base'
};

@subclass('app.widgets.Test')
export default class Test extends declared(Widget) {

  @aliasOf('viewModel.view')
  view: esri.MapView | esri.SceneView;

  @aliasOf('viewModel.name')
  @renderable()
  name = '';

  @property({
    type: TestViewModel
  })
  @renderable()
  viewModel: TestViewModel = new TestViewModel();

  constructor(properties?: TestProperties) {
    super(properties);
  }

  render() {
    return (
      <div class={CSS.base}>
        <p>Welcome {this.name}!</p>
      </div>
    );
  }

}
