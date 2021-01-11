import React, {Component} from "react";
import './index.css';

export default function Modal(props) {
    var defaultProps = {
        bg: 'rgba(0,0,0,.5)'
    };
    var datas = Object.assign({}, defaultProps, props);
    return <div className={'modal'}
                onClick={(e) => {
                    datas.onClose()
                }}
                style={{backgroundColor: datas.bg}}>
        <div className="modal-center" onClick={e => e.stopPropagation()}>
            {datas.children}
        </div>
    </div>
}
