'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface AddressDisplayProps {
  address: string;
  className?: string;
  showCopyIcon?: boolean;
  prefixLength?: number;
  suffixLength?: number;
}

const AddressDisplay = ({ 
  address, 
  className = '',
  showCopyIcon = true,
  prefixLength = 6,
  suffixLength = 4
}: AddressDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const formatAddress = (addr: string) => {
    if (!addr || addr.length < prefixLength + suffixLength) return addr;
    return `${addr.slice(0, prefixLength)}...${addr.slice(-suffixLength)}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success('Address copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy address');
    }
  };

  if (!showCopyIcon) {
    return (
      <span className={`font-mono ${className}`} title={address}>
        {formatAddress(address)}
      </span>
    );
  }

  return (
    <button
      onClick={copyToClipboard}
      className={`text-neon-blue hover:text-neon-green transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group hover:bg-neon-blue/10 px-2 py-1 rounded-md ${className}`}
      title={`Click to copy: ${address}`}
    >
      <span className="font-mono text-sm">{formatAddress(address)}</span>
      <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} text-xs transition-all duration-300 ${
        copied 
          ? 'text-neon-green opacity-100 scale-110' 
          : 'text-neon-blue opacity-0 group-hover:opacity-100 group-hover:scale-110'
      }`}></i>
    </button>
  );
};

export default AddressDisplay;
