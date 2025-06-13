'use client';
import Typewriter from 'typewriter-effect';
import React from 'react'

export default function TypeWriterText() {
  return (
    <Typewriter
      options={{
        strings: ['Welcome to Persona Finance AI'],
        autoStart: true,
        loop: true,
        delay: 100,
      }}
    />
  )
}
