import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  isMobile: false,
  importantNews: null,
  contentAboutPage: null,
  contentInformationPage: null,
  contentGalleryPage: null,
  instagramPosts: null,
  contentWorkshopPage: null,
};

export const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);