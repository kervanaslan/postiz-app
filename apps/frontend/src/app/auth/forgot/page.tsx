export const dynamic = 'force-dynamic';

import { Forgot } from '@gitroom/frontend/components/auth/forgot';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Forgot Password`,
  description: '',
};

export default async function Auth() {
  return <Forgot />;
}
