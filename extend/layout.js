import React from 'react';

export default ({ config }) => {
  return {
    head: {
      content: [
        <link
          rel="stylesheet"
          type="text/css"
          href={config.antdMobile.cssUrl}
        />,
      ],
    },
  };
};
