import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <Layout>
      <ColorSchemeToggle />
      Placeholder in Index Page
    </Layout>
  );
}
