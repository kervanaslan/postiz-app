export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { AfterActivate } from '@gitroom/frontend/components/auth/after.activate';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} - Activate your account`,
  description: '',
};

export default async function Auth() {
  return <AfterActivate />;
}
