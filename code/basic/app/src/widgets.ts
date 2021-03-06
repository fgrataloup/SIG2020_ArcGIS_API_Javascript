// Widgets
import LayerList from 'esri/widgets/LayerList';
import Legend from 'esri/widgets/Legend';
import Test from './widgets/Test';

import esri = __esri;

export function initWidgets(view: esri.MapView | esri.SceneView) {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  const test = new Test({ view });

  view.ui.add(legend, 'bottom-left');
  view.ui.add(layerList, 'top-right');
  view.ui.add(test, 'bottom-right');
  return view;
}
