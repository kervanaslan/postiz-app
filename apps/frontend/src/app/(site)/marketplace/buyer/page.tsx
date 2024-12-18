import { Buyer } from '@gitroom/frontend/components/marketplace/buyer';

export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Marketplace`,
  description: '',
};
export default async function Index({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  return <Buyer />;
}
