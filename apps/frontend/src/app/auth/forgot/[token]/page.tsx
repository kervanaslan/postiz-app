export const dynamic = 'force-dynamic';

import { ForgotReturn } from '@gitroom/frontend/components/auth/forgot-return';
import { Metadata } from 'next';
import { appNameServerSide } from '@gitroom/helpers/utils/app.name.server.side';

export const metadata: Metadata = {
  title: `${appNameServerSide()} Forgot Password`,
  description: '',
};
export default async function Auth(params: { params: { token: string } }) {
  return <ForgotReturn token={params.params.token} />;
}
