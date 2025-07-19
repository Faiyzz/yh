import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import FloridaHurricaneMoldRemoval from '@/components/blogs/FloridaHurricaneMoldRemoval';
import FloridaRoofReplacementVsRepair from '@/components/blogs/FloridaRoofReplacementVsRepair';
import BathroomRemodelingTips from '@/components/blogs/BathroomRemodelingTips';
import KitchenRemodelingTips from '@/components/blogs/KitchenRemodelingTips';
import OutdoorKitchenLanai from '@/components/blogs/OutdoorKitchenLanai';
import LoadBearingVsNonLoadBearing from '@/components/blogs/LoadBearingVsNonLoadBearing';
import ConcreteFoundationGazeboShed from '@/components/blogs/ConcreteFoundationGazeboShed';
import Blog8 from '@/components/blogs/Blog8';
import GarageEntryDoorFlorida from '@/components/blogs/Blog9';
import Blog10 from '@/components/blogs/Blog10';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const blogMetadata: Record<string, { title: string; description: string; image?: string }> = {
  'florida-hurricane-flood-remediation-mold-removal': {
    title: 'Florida Hurricane / Flood Remediation & Mold Removal',
    description: 'Essential guide to protecting your home from hurricane damage and preventing mold growth in Florida\'s humid climate.',
    image: '/lovable-uploads/b1n1.jpg'
  },
  'florida-hurricane-roof-replacement-vs-repair': {
    title: 'Florida Hurricane Roof Replacement vs Repair',
    description: 'When to repair and when to replace your roof after hurricane damage - a comprehensive guide for Florida homeowners.',
    image: '/lovable-uploads/0558b537-c818-4b1b-b263-278aa10d4c7a.png'
  },
  'bathroom-remodeling-tips-florida': {
    title: 'Bathroom Remodeling Tips and Tricks for Florida Homeowners',
    description: 'Transform your bathroom with Florida-specific considerations for humidity, materials, and design trends.',
    image: '/lovable-uploads/f285936d-a7b6-40fd-b669-9bde63ff0c06.png'
  },
  'kitchen-remodeling-tips-florida': {
    title: 'Kitchen Remodeling Tips and Tricks for Florida Homeowners',
    description: 'Create your dream kitchen while navigating Florida\'s unique building codes and climate considerations.',
    image: '/lovable-uploads/24ddca78-b823-40fc-9122-89a82c5975b0.png'
  },
  'outdoor-kitchen-lanai-florida': {
    title: 'How to Build an Outdoor Kitchen in Your Florida Lanai',
    description: 'Maximize your outdoor living space with a custom kitchen addition designed for Florida\'s year-round outdoor lifestyle.',
    image: '/lovable-uploads/403cae62-d6da-49cf-830c-f9546cc4c987.png'
  },
  'load-bearing-vs-non-load-bearing-walls': {
    title: 'How to Distinguish Load-Bearing vs. Non-Load-Bearing Walls',
    description: 'Learn to identify structural walls and understand the differences between metal studs vs wood studs in construction.',
    image: '/lovable-uploads/ad619d3b-6c34-4eec-ac27-c99115e40002.png'
  },
  'concrete-foundation': {
    title: 'New Concrete Driveway Installation Guide',
    description: 'Everything you need to know about installing a durable concrete driveway that withstands Florida weather.',
    image: '/lovable-uploads/b7n1.jpeg'
  },
  'blog8': {
    title: 'New Concrete Slabs for Florida Gazebos and Sheds',
    description: 'Proper foundation techniques for outdoor structures in Florida\'s sandy soil and hurricane-prone environment.',
    image: '/lovable-uploads/b8n1.jpeg'
  },
  'blog9': {
    title: 'How to Create New Exterior/Entry Door in Garage',
    description: 'Step-by-step guide to adding convenient access doors to your garage while maintaining structural integrity.',
    image: '/lovable-uploads/b9n1.jpeg'
  },
  'blog10': {
    title: 'How to Create an Efficiency in Your Home to Rent Out',
    description: 'Convert unused space into rental income with this comprehensive guide to creating legal rental units.',
    image: '/lovable-uploads/b10n1.jpeg'
  },
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = params;
  const meta = blogMetadata[slug];
  
  if (!meta) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : undefined,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: meta.image ? [meta.image] : undefined,
    },
  };
}

export default function BlogDetailsPage({ params }: BlogPageProps) {
  const { slug } = params;

  if (!slug || typeof slug !== 'string') return notFound();

  switch (slug) {
    case 'florida-hurricane-flood-remediation-mold-removal':
      return <FloridaHurricaneMoldRemoval />;
    case 'florida-hurricane-roof-replacement-vs-repair':
      return <FloridaRoofReplacementVsRepair />
    case 'bathroom-remodeling-tips-florida':
      return <BathroomRemodelingTips />
    case 'kitchen-remodeling-tips-florida':
      return <KitchenRemodelingTips />
    case 'outdoor-kitchen-lanai-florida':
      return <OutdoorKitchenLanai />
    case 'load-bearing-vs-non-load-bearing-walls':
      return <LoadBearingVsNonLoadBearing />
    case 'concrete-foundation':
      return <ConcreteFoundationGazeboShed />
    case 'blog8':
      return <Blog8 />
    case 'blog9':
      return <GarageEntryDoorFlorida />
    case 'blog10':
      return <Blog10 />
    default:
      return notFound();
  }
}