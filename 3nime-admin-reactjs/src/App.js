import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import UnAuthLayout from 'components/layout/unAuth';
import axiosClient from 'utils/axiosClient';

import './App.css';

import Layout from 'components/layout/auth';
import UserPage from 'pages/UserPage';
import NotFoundPage from 'pages/NotFoundPage';
import CustomerPage from 'pages/customers';
import EmployeePage from 'pages/employees';
import ProductPage from 'pages/products';
import CategoryPage from 'pages/categories';
import SupplierPage from 'pages/suppliers';
import OrderPage from 'pages/orders';
import DashboardPage from 'pages/duringConstruction/dashboard';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = window.localStorage.getItem('TOKEN');

  useEffect(() => {
    if (!token && location.pathname !== '/register') {
      navigate('/login');
    } else {
      axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [navigate, token, location.pathname ]);

  return (
    <>
      {
        !token ? (
          <Routes>
            <Route path={'/'} element={<UnAuthLayout />} >
              <Route path={'/login'} element={<LoginPage />} />

              <Route path={'/register'} element={<RegisterPage />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path={'/'} element={<Layout />}>
              <Route path={'/'} element={<UserPage />} />
              <Route path={'/register'} element={<RegisterPage />} />
              <Route path={'/user'} element={<UserPage />} />
              <Route path={'/customer'} element={<CustomerPage />} />
              <Route path={'/employee'} element={<EmployeePage />} />
              <Route path={'/product'} element={<ProductPage />} />
              <Route path={'/category'} element={<CategoryPage />} />
              <Route path={'/supplier'} element={<SupplierPage />} />
              <Route path={'/order'} element={<OrderPage />} />
              <Route path={'/dashboard'} element={<DashboardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        )
      }
    </>
  );
}

export default App;
