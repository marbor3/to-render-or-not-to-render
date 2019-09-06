import React from 'react';

const style = {
    width: '100%',
    height: '800px',
    border: '0',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: 'auto',
};

const Iframe = ({ sandboxId }) => (
    <iframe
        src={`https://codesandbox.io/embed/${sandboxId}?expanddevtools=1&fontsize=18&hidenavigation=1&module=%2Fsrc%2Fwishlist.jsx`}
        title="wishlist-0"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        style={style}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
    </iframe>
);

export default Iframe;