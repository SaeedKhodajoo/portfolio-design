import React from 'react';

export default function FooterCol({heading = 'col heading'}) {
  return (
    <div>
      <h1 className="heading">{heading}</h1>
    </div>
  );
}
