'use client';

import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { INDUSTRIES } from '../../../config/industries';

// Dynamic imports for all templates
const templateMap = {
  restaurant: dynamic(() => import('../../../templates/dynamic/RestaurantTemplate')),
  healthcare: dynamic(() => import('../../../templates/dynamic/HealthcareTemplate')),
  'real-estate': dynamic(() => import('../../../templates/dynamic/RealEstateTemplate')),
  education: dynamic(() => import('../../../templates/dynamic/EducationTemplate')),
  fitness: dynamic(() => import('../../../templates/dynamic/FitnessTemplate')),
  technology: dynamic(() => import('../../../templates/dynamic/TechnologyTemplate')),
  legal: dynamic(() => import('../../../templates/dynamic/LegalTemplate')),
  photography: dynamic(() => import('../../../templates/dynamic/PhotographyTemplate')),
  'salon-spa': dynamic(() => import('../../../templates/dynamic/SalonSpaTemplate')),
  construction: dynamic(() => import('../../../templates/dynamic/ConstructionTemplate')),
};

export default function PreviewPage() {
  const params = useParams();
  const industryId = params.industry;
  const industry = INDUSTRIES[industryId];

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Industry Not Found</h1>
          <p className="mt-4 text-gray-600">
            Available: {Object.keys(INDUSTRIES).join(', ')}
          </p>
          <a href="/" className="mt-6 inline-block text-blue-600 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const TemplateComponent = templateMap[industryId];

  if (!TemplateComponent) {
    return <div>Template not found for: {industryId}</div>;
  }

  // Render with default props (template has its own defaults)
  return <TemplateComponent />;
}
