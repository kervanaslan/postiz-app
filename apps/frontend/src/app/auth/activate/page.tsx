export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { Activate } from '@gitroom/frontend/components/auth/activate';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} - Activate your account`,
  description: '',
};

export default async function Auth() {
  return <Activate />;
}
