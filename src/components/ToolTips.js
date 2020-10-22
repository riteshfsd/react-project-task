import React, {forwardRef} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const ColouredComponent = () => {
  return <span style={{color: "yello"}}>Color component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref = {ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  )
})

function ToolTips() {
    return(
        <div>
            <div style={{paddingBottom: '20px'}}>
              <Tippy placement = 'right' arrow = {false} deley = {1000} content="Basic ToolTips">
                <button>Hover</button>
              </Tippy>
            </div>
            <div style={{paddingBottom: '20px'}}>
              <Tippy content={<span style={{color: "orange"}}>Coloured</span>}>
                <button>Hover</button>
              </Tippy>
            </div>
            <div style={{paddingBottom: '20px'}}>
              <Tippy content={<ColouredComponent></ColouredComponent>}>
                <button>Hover</button>
              </Tippy>
            </div>

            <div style={{paddingBottom: '20px'}}>
              <Tippy content={<ColouredComponent></ColouredComponent>}>
                <CustomChild></CustomChild>
              </Tippy>
            </div>
        </div>
    )
}
export default ToolTips;
