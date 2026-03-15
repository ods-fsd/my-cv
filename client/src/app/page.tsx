'use client'

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Resume from '@/components/Resume/Resume';
import Footer from '@/components/Footer/Footer';
import EmailModal from '@/components/EmailModal/EmailModal';

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="layout-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="main-wrapper" id="resume">
        <Resume />
      </main>
      
      <Footer />
      
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
