import { memo } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { useAppContext } from '$context';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Album from '../pages/Album';

export default memo(() => {
  const { state } = useAppContext();

  const authRoute = (element: JSX.Element) => {
    if (state.token?.access_token) return element;
    return <Auth />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={authRoute(<Dashboard />)} />
        <Route path="/album" element={authRoute(<Album />)} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
});
