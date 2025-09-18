import { Metadata } from 'next';

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
        <button 
          onClick={() => window.location.reload()}
          className="btn-brutal"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}