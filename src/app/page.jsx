'use client';

import Link from 'next/link';
import { INDUSTRIES } from '../config/industries';

const industryList = Object.values(INDUSTRIES);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            AW Website Builder
          </h1>
          <p className="mt-2 text-gray-600">
            Pre-built templates for 10 industries. Select an industry to preview.
          </p>
        </div>
      </header>

      {/* Industry Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryList.map((industry) => (
            <Link
              key={industry.id}
              href={`/preview/${industry.id}`}
              className="group block"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${industry.heroImage})` }}
                >
                  <div className="h-full w-full bg-black/40 flex items-end p-6">
                    <h2 className="text-white text-xl font-bold">
                      {industry.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      Static
                    </span>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      Dynamic
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
