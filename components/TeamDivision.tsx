interface Person {
  name: string;
  role: string;
  avatar: string;
  instagram?: string;
  tiktok?: string;
}

interface TeamDivisionProps {
  division: string;
  people: Person[];
}

export function TeamDivision({ division, people }: TeamDivisionProps) {
  // Only show first two people for brutalist simplicity
  const displayPeople = people.slice(0, 2);
  
  return (
    <div className="brutal-border bg-white p-8 mb-8">
      <h3 className="font-bebas text-3xl uppercase mb-6">{division}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayPeople.map((person, index) => (
          <div key={index} className="text-center">
            <div className="mb-4">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-32 h-32 object-cover mx-auto brutal-border-thin img-brutal"
              />
            </div>
            
            <h4 className="font-bebas text-2xl uppercase mb-2">{person.name}</h4>
            <p className="font-mono text-sm uppercase tracking-wider text-gray-600 mb-4">
              {person.role}
            </p>
            
            <div className="flex justify-center space-x-4">
              {person.instagram && (
                <a
                  href={`https://instagram.com/${person.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider hover:underline focus-brutal"
                >
                  @{person.instagram}
                </a>
              )}
              {person.tiktok && (
                <a
                  href={`https://tiktok.com/@${person.tiktok}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider hover:underline focus-brutal"
                >
                  TT: @{person.tiktok}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}