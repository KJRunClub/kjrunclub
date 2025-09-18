import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merch - KJ Run Club',
  description: 'Official KJ Run Club merchandise. Represent the club with premium running gear.',
};

export default function Merch() {
  const products = [
    {
      id: 'KJRC-TEE-001',
      name: 'Training Tee',
      price: 'RM 85',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: 'Moisture-wicking performance tee with club logo',
      buyUrl: '#'
    },
    {
      id: 'KJRC-SHORTS-001', 
      name: 'Racing Shorts',
      price: 'RM 65',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: '5-inch inseam with built-in compression liner',
      buyUrl: '#'
    },
    {
      id: 'KJRC-CAP-001',
      name: 'Training Cap',
      price: 'RM 45',
      image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: 'Lightweight cap with reflective details',
      buyUrl: '#'
    },
    {
      id: 'KJRC-JACKET-001',
      name: 'Wind Jacket',
      price: 'RM 145',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: 'Packable wind-resistant shell for all weather',
      buyUrl: '#'
    },
    {
      id: 'KJRC-BOTTLE-001',
      name: 'Water Bottle',
      price: 'RM 25',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: '750ml insulated stainless steel bottle',
      buyUrl: '#'
    },
    {
      id: 'KJRC-SOCKS-001',
      name: 'Racing Socks',
      price: 'RM 35',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      description: 'Merino wool blend with cushioned sole',
      buyUrl: '#'
    }
  ];

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="MERCH-STORE" />
          </div>
          
          <AnimatedHeadline 
            text="OFFICIAL GEAR" 
            className="mb-8"
          />
          
          <p className="text-lg leading-relaxed max-w-3xl">
            Represent the club with premium running gear designed for performance 
            and built to last. Every piece tested by our athletes in the most 
            demanding conditions.
          </p>
        </AngledPanel>

        {/* Products Grid */}
        <AngledPanel className="p-8 md:p-16" angle="both">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="brutal-border bg-white group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover img-brutal"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bebas text-xl uppercase mb-1">{product.name}</h3>
                      <p className="font-mono text-lg font-medium">{product.price}</p>
                    </div>
                    <Barcode label={product.id} width={1} height={20} />
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-6">{product.description}</p>
                  
                  <a
                    href={product.buyUrl}
                    className="btn-brutal w-full text-center block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AngledPanel>

        {/* Size Guide */}
        <AngledPanel className="p-8 md:p-16 mt-8" angle="tl">
          <h2 className="font-bebas text-4xl uppercase mb-8 text-center">
            Size Guide
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full brutal-border-thin">
              <thead>
                <tr className="bg-black text-white">
                  <th className="font-mono text-sm uppercase tracking-wider p-4 text-left">Size</th>
                  <th className="font-mono text-sm uppercase tracking-wider p-4 text-left">Chest</th>
                  <th className="font-mono text-sm uppercase tracking-wider p-4 text-left">Waist</th>
                  <th className="font-mono text-sm uppercase tracking-wider p-4 text-left">Length</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'XS', chest: '86-89cm', waist: '71-74cm', length: '66cm' },
                  { size: 'S', chest: '91-94cm', waist: '76-79cm', length: '68cm' },
                  { size: 'M', chest: '96-99cm', waist: '81-84cm', length: '70cm' },
                  { size: 'L', chest: '104-107cm', waist: '89-92cm', length: '72cm' },
                  { size: 'XL', chest: '112-115cm', waist: '97-100cm', length: '74cm' },
                ].map((row, index) => (
                  <tr key={row.size} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="font-mono font-medium p-4">{row.size}</td>
                    <td className="font-mono text-sm p-4">{row.chest}</td>
                    <td className="font-mono text-sm p-4">{row.waist}</td>
                    <td className="font-mono text-sm p-4">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <Barcode label="SIZE-GUIDE" />
          </div>
        </AngledPanel>

      </div>
    </main>
  );
}