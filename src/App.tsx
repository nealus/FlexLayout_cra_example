import {Layout, Model, TabNode, IJsonModel} from 'flexlayout-react';
import './App.css';
import 'flexlayout-react/style/light.css';

var json : IJsonModel= {
    global: {},
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                weight: 50,
                children: [
                    {
                        type: "tab",
                        name: "One",
                        component: "button",
                    }
                ]
            },
            {
                type: "tabset",
                weight: 50,
                children: [
                    {
                        type: "tab",
                        name: "Two",
                        component: "button",
                    }
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function App() {

  const factory = (node: TabNode) => {
    var component = node.getComponent();
    if (component === "button") {
      return <button>{node.getName()}</button>;
    }
  }

  return (
    <Layout
      model={model}
      factory={factory} />
  );
}

export default App;
