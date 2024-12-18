export const dynamic = 'force-dynamic';

import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Login`,
  description: '',
};

export default async function Auth() {
  return <Login />;
}
