import React from 'react';

export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}