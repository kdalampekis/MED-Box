import React, { useState } from 'react';
import ReactModal from 'react-modal';

function Example() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                Open Modal
            </button>
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                onRequestClose={() => setIsOpen(false)}
            >
                This is the content of the modal.
            </ReactModal>
        </div>
    );
}

export default Example;