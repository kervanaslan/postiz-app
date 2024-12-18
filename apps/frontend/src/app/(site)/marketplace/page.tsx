export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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
  const currentCookie = cookies()?.get('marketplace')?.value;
  return redirect(
    currentCookie === 'buyer' ? '/marketplace/buyer' : '/marketplace/seller'
  );
}
