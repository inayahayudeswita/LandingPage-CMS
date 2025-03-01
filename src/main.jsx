import React from 'react';
import ReactDOM from 'react-dom/client';  // Jika kamu menggunakan React 18, gunakan `ReactDOM.createRoot`
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter untuk routing
import App from './App';  // Mengimpor komponen App

// Membungkus komponen App dengan BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
