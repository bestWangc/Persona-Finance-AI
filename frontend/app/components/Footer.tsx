'use client';

import React from 'react';

interface FooterSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: '协议',
    links: [
      { name: '白皮书', href: '#' },
      { name: '技术文档', href: '#' },
      { name: '智能合约', href: '#' },
      { name: 'Github', href: '#' }
    ]
  },
  {
    title: '生态系统',
    links: [
      { name: '人格铸造器', href: '#' },
      { name: '基因交易市场', href: '#' },
      { name: '策略租赁池', href: '#' },
      { name: '治理中心', href: '#' }
    ]
  },
  {
    title: '开发者',
    links: [
      { name: 'API文档', href: '#' },
      { name: 'SDK工具包', href: '#' },
      { name: '测试网络', href: '#' },
      { name: '黑客马拉松', href: '#' }
    ]
  },
  {
    title: '社区',
    links: [
      { name: 'Twitter', href: '#' },
      { name: 'Discord', href: '#' },
      { name: '论坛', href: '#' },
      { name: '博客', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="py-16 px-[5%] border-t border-neon-blue/20" style={{ backgroundColor: 'rgba(0, 10, 25, 0.9)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-text-gray hover:text-neon-blue transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Section */}
        <div className="border-t border-neon-blue/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
                <i className="fas fa-dna text-white text-lg"></i>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  PFAI Protocol
                </div>
                <div className="text-text-gray text-sm">Persona Finance AI</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                <i className="fab fa-discord"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-neon-blue/20">
          <p className="text-text-gray text-sm">
            © 2025 Persona Finance AI Protocol. All digital assets are experimental. DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
