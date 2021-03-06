import React from 'react';

import RegisterBackyardPageLayout from './RegisterBackyardPageLayout';
import FormComponent from './FormComponent';
import SuccessfulListingComponent from './SuccessfulListingComponent';

export default function RegisterBackyardPage({
  hostInfo,
  onClose,
  onSubmit,
  onEdit,
  onDelete,
  addListing
}) {
  //console.log(onEdit, 'fooooooo');
  return (
    <div className="RegisterBackyardPage">
      <RegisterBackyardPageLayout>
        {hostInfo
          ? <SuccessfulListingComponent
              hostInfo={hostInfo}
              onClose={onClose}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          : <FormComponent onSubmit={onSubmit} addListing={addListing} />}
      </RegisterBackyardPageLayout>
    </div>
  );
}
