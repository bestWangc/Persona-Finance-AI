'use client';
import Typewriter from 'typewriter-effect';
import React from 'react'

export default function TypeWriterText() {
  return (
    <Typewriter
      options={{
        strings: ['self-evolving AI Agent','market makers','liquidity miners','quant developers','algo traders','bot traders','cross-chain staking','researchers'],
        autoStart: true,
        loop: true,
        delay: 100,
      }}
    />
  )
}
