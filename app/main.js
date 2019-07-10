import React from 'react';
import ReactDOM from 'react-dom';
import '@progress/kendo-theme-material/dist/all.css';

import { Upload } from '@progress/kendo-react-upload';

const UploadWrapper = () => <Upload
  batch={false}
  multiple={true}
  defaultFiles={[]}
  withCredentials={false}
  saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
  removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
/>

ReactDOM.render(
  <UploadWrapper />,
  document.querySelector('my-app')
);
