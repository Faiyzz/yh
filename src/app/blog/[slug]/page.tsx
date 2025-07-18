'use client';

import { notFound, useParams } from 'next/navigation';
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

const BlogDetailsPage = () => {
      const params = useParams(); // ✅ Safe for Client Components
  const slug = params?.slug;

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
};

export default BlogDetailsPage;
