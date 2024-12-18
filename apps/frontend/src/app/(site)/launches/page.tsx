export const dynamic = 'force-dynamic';

import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Calendar`,
  description: '',
};

export default async function Index() {
  return <LaunchesComponent />;
}
