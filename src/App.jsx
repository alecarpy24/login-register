import React from 'react';
import {SignUp} from './components/SignUp';
import {LogIn} from './components/LogIn';
import {LogOut} from './components/LogOut';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Supabase + Vite</h1>
      <SignUp />
      <LogIn />
      <LogOut />
    </div>
  );
}

export {App};
