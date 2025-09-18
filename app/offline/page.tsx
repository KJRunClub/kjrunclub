import { Metadata } from 'next';
import { RetryButton } from './retry-button';

export const metadata: Metadata = {
  title: 'Offline - KJ Run Club',
  description: 'You are currently offline. Please check your connection.',
};

export default function Offline() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="font-bebas text-6xl uppercase mb-4">Offline</h1>
        <p className="font-mono text-lg mb-8">
          Connection lost. Even champions need to reconnect sometimes.
        </p>
        <RetryButton />
      </div>
    </main>
  );
}
