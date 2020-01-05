import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent: any) => {
  const Spinner = ({ isLoading, ...otherProps }: any) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer aria-live="polite" aria-busy="true" alia-lebel="loading..." />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};
export default WithSpinner;
