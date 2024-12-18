export const dynamic = 'force-dynamic';

import { BillingComponent } from '@gitroom/frontend/components/billing/billing.component';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Billing`,
  description: '',
};

export default async function Page() {
  return <BillingComponent />;
}
