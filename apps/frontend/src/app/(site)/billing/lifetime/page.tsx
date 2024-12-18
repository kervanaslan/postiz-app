import { LifetimeDeal } from '@gitroom/frontend/components/billing/lifetime.deal';

export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Lifetime deal`,
  description: '',
};

export default async function Page() {
  return <LifetimeDeal />;
}
