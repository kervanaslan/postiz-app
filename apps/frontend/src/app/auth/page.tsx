export const dynamic = 'force-dynamic';

import { Register } from '@gitroom/frontend/components/auth/register';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Register`,
  description: '',
};

export default async function Auth() {
  return <Register />;
}
