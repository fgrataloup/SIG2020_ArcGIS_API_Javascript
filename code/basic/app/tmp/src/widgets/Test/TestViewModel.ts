import esri = __esri;

import Accessor from 'esri/core/Accessor';

import { declared, property, subclass } from 'esri/core/accessorSupport/decorators';

import { whenDefinedOnce } from 'esri/core/watchUtils';

@subclass('app.widgets.Test.TestViewModel')
export default class TestViewModel extends declared(Accessor) {
  @property() view: esri.MapView | esri.SceneView;

  @property() name = 'Slagathor';

  constructor(params?: any) {
    super(params);
    whenDefinedOnce(this, 'view', this.init.bind(this));
  }
  
  init(view: esri.MapView | esri.SceneView) {
    console.log(view.scale);
  }
}
