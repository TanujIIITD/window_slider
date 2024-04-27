
import './Windows.css'
import {Panel, PanelGroup, PanelResizeHandle,} from "react-resizable-panels";
import Content from './Content';


const Windows = () => {
  return (
    <div className="container">
      <PanelGroup direction="vertical">

        <Panel>
          <PanelGroup direction="horizontal" className='hori'>

            {/* This is window-1 */}
            <Panel defaultSize={20} minSize={20} maxSize={75} >
              <Content number={1} name="window1" />
            </Panel>

            {/* To handel horizontal resizing */}
            <PanelResizeHandle />

            {/* This is window-2 */}
            <Panel defaultSize={50} minSize={20} maxSize={75}>
              <Content number={2} name="window2" />
            </Panel>

          </PanelGroup>
        </Panel>

        {/* To handel vertical resizing */}
        <PanelResizeHandle />

        {/* This is window-3 */}
        <Panel defaultSize={40} minSize={20} maxSize={75}>
          <Content number={3} name="window3" />
        </Panel>

      </PanelGroup>

    </div>
  );
};

export default Windows;