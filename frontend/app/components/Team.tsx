'use client';

import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  icon: string;
  socialLinks: {
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex R. Vance',
    role: '首席协议架构师',
    bio: '前Chainlink Labs首席研究员，去中心化机器学习专家。在MIT Media Lab期间主攻基于区块链的AI系统。',
    icon: 'fas fa-brain',
    socialLinks: {
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Jamie K. Sato',
    role: '进化算法负责人',
    bio: '前OpenAI研究员，专注于强化学习在金融交易中的应用。拥有斯坦福计算金融博士学位。',
    icon: 'fas fa-dna',
    socialLinks: {
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Morgan Lee',
    role: '智能合约负责人',
    bio: '前Compound核心开发者，ERC-6551标准共同作者。参与开发多个DeFi核心协议。',
    icon: 'fas fa-code',
    socialLinks: {
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Taylor Reed',
    role: '策略研究总监',
    bio: '量化基金前首席策略官，拥有15年算法交易经验。专注于高维市场行为建模。',
    icon: 'fas fa-chart-line',
    socialLinks: {
      twitter: '#'
    }
  }
];

const Team = () => {
  return (
    <section className="py-16 px-[5%]" style={{ backgroundColor: 'rgba(0, 15, 34, 0.6)' }}>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl mb-6 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
          我们的基因工程团队
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-neon-blue/30 relative overflow-hidden transition-all duration-300 hover:border-neon-blue hover:-translate-y-2 text-white group"
              style={{ backgroundColor: 'rgba(0, 15, 34, 0.8)', backdropFilter: 'blur(10px)' }}
            >
              {/* Member Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-neon-blue/30">
                  <i className={member.icon}></i>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <div className="text-neon-blue text-sm font-medium mb-4">{member.role}</div>
                <p className="text-text-gray text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                    >
                      <i className="fab fa-github text-sm"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
