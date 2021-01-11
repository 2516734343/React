import React, {Component} from "react";
import Modal from './index';

export default class TestModal extends Component {
    state = {
        visible: false,
    };

    hanldeClose() {
        this.setState({
            visible: false
        })
    }
    showModal() {
        this.setState(state => ({
            visible: true
        }));
    }

    render() {
        return <div>
            111
            {
                this.state.visible ?
                    <Modal onClose={() => this.hanldeClose()}>
                        <p>2222</p>
                    </Modal> : null

            }
            <button onClick={() => this.showModal()}>触发蒙层</button>
        </div>
    }
}
