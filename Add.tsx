import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Add() {
  return (
    <div>
      <Link to="/">
        <button>향이 언니 하이</button>
      </Link>
    </div>
  );
}
