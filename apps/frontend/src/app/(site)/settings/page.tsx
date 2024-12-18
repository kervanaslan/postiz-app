export const dynamic = 'force-dynamic';

import { SettingsComponent } from '@gitroom/frontend/components/settings/settings.component';
import { internalFetch } from '@gitroom/helpers/utils/internal.fetch';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Settings`,
  description: '',
};
export default async function Index({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  if (searchParams.code) {
    await internalFetch('/settings/github', {
      method: 'POST',
      body: JSON.stringify({ code: searchParams.code }),
    });

    return redirect('/settings', RedirectType.replace);
  }

  return <SettingsComponent />;
}
