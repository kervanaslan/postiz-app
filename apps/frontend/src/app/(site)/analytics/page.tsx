export const dynamic = 'force-dynamic';

import { AnalyticsComponent } from '@gitroom/frontend/components/analytics/analytics.component';
import { Metadata } from 'next';
import { PlatformAnalytics } from '@gitroom/frontend/components/platform-analytics/platform.analytics';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Analytics`,
  description: '',
};

export default async function Index() {
  return (
    <>
      {isGeneralServerSide() ? <PlatformAnalytics /> : <AnalyticsComponent />}
    </>
  );
}
