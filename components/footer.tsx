import React from 'react';

interface FooterProps {
  footerText: string;
}

const Footer = ({footerText}: FooterProps) => {
  return (
    <div className='h-14 flex items-center justify-center w-full bg-slate-700 text-white'>
      <p>{footerText}</p>
    </div>
  );
};

export default Footer;
