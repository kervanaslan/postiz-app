import { Plugs } from '@gitroom/frontend/components/plugs/plugs';

export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Plugs`,
  description: '',
};

export default async function Index() {
  return (
    <>
      <Plugs />
    </>
  );
}
