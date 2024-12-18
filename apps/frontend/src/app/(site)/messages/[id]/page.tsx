import { Messages } from '@gitroom/frontend/components/messages/messages';

export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Messages`,
  description: '',
};

export default async function Index() {
  return <Messages />;
}
