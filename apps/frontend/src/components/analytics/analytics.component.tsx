'use client';

import { StarsAndForks } from '@gitroom/frontend/components/analytics/stars.and.forks';
import { FC, useCallback } from 'react';
import { StarsTableComponent } from '@gitroom/frontend/components/analytics/stars.table.component';
import useSWR from 'swr';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { LoadingComponent } from '@gitroom/frontend/components/layout/loading';

export const AnalyticsComponent: FC = () => {
  const fetch = useFetch();

  const load = useCallback(async (path: string) => {
    return await (await fetch(path)).json();
  }, []);

  const starsCallback = useCallback(async (path: string) => {
    return await (
      await fetch(path, {
        body: JSON.stringify({ page: 1 }),
        method: 'POST',
      })
    ).json();
  }, []);

  const { isLoading: isLoadingAnalytics, data: analytics } = useSWR(
    '/analytics',
    load
  );
  const { isLoading: isLoadingTrending, data: trending } = useSWR(
    '/analytics/trending',
    load
  );
  const { isLoading: isLoadingStars, data: stars } = useSWR(
    '/analytics/stars',
    starsCallback
  );

  if (isLoadingAnalytics || isLoadingTrending || isLoadingStars) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex gap-[24px] flex-1">
      <div className="flex flex-col gap-[24px] flex-1">
        <StarsAndForks list={analytics} stars={stars.stars} trending={trending} />
        <div className="flex flex-1 flex-col gap-[15px] min-h-[426px]">
          <h2 className="text-[24px]">Stars per day</h2>
          <div className="flex-1 bg-secondary">
            <StarsTableComponent stars={stars.stars} />
          </div>
        </div>
      </div>
      {/*<div className="w-[318px] bg-third mt-[-44px] p-[16px]">*/}
      {/*    <h2 className="text-[20px]">News Feed</h2>*/}
      {/*    <div className="my-[30px] flex h-[32px]">*/}
      {/*        <div className="flex-1 bg-forth flex justify-center items-center">*/}
      {/*            Global*/}
      {/*        </div>*/}
      {/*        <div className="flex-1 bg-primary flex justify-center items-center">*/}
      {/*            My Feed*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*        <div className="w-full flex-col justify-start items-start gap-4 inline-flex">*/}
      {/*            <div className="self-stretch justify-start items-start gap-2.5 inline-flex pb-[16.5px] border-b-[1px] border-[#28344F]">*/}
      {/*                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32"/>*/}
      {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">*/}
      {/*                    <div className="justify-center items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-white text-sm font-medium leading-tight">Nevo David</div>*/}
      {/*                        <div className="text-neutral-500 text-[10px] font-normal uppercase tracking-wide">05/06/2024</div>*/}
      {/*                    </div>*/}
      {/*                    <div className="self-stretch text-neutral-400 text-xs font-normal">O atual sistema político precisa mudar para valorizar o trabalho e garantir igualdade de oportunidad</div>*/}
      {/*                    <div className="self-stretch justify-start items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-[#E4B895] text-xs font-normal">See Tweet</div>*/}
      {/*                        <div className="w-4 h-4 relative"/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className="self-stretch justify-start items-start gap-2.5 inline-flex pb-[16.5px] border-b-[1px] border-[#28344F]">*/}
      {/*                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32"/>*/}
      {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">*/}
      {/*                    <div className="justify-center items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-white text-sm font-medium leading-tight">Nevo David</div>*/}
      {/*                        <div className="text-neutral-500 text-[10px] font-normal uppercase tracking-wide">05/06/2024</div>*/}
      {/*                    </div>*/}
      {/*                    <div className="self-stretch text-neutral-400 text-xs font-normal">O atual sistema político precisa mudar para valorizar o trabalho e garantir igualdade de oportunidad</div>*/}
      {/*                    <div className="self-stretch justify-start items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-[#E4B895] text-xs font-normal">See Tweet</div>*/}
      {/*                        <div className="w-4 h-4 relative"/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className="self-stretch justify-start items-start gap-2.5 inline-flex pb-[16.5px] border-b-[1px] border-[#28344F]">*/}
      {/*                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32"/>*/}
      {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">*/}
      {/*                    <div className="justify-center items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-white text-sm font-medium leading-tight">Nevo David</div>*/}
      {/*                        <div className="text-neutral-500 text-[10px] font-normal uppercase tracking-wide">05/06/2024</div>*/}
      {/*                    </div>*/}
      {/*                    <div className="self-stretch text-neutral-400 text-xs font-normal">O atual sistema político precisa mudar para valorizar o trabalho e garantir igualdade de oportunidad</div>*/}
      {/*                    <div className="self-stretch justify-start items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-[#E4B895] text-xs font-normal">See Tweet</div>*/}
      {/*                        <div className="w-4 h-4 relative"/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className="self-stretch justify-start items-start gap-2.5 inline-flex pb-[16.5px] border-b-[1px] border-[#28344F]">*/}
      {/*                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32"/>*/}
      {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">*/}
      {/*                    <div className="justify-center items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-white text-sm font-medium leading-tight">Nevo David</div>*/}
      {/*                        <div className="text-neutral-500 text-[10px] font-normal uppercase tracking-wide">05/06/2024</div>*/}
      {/*                    </div>*/}
      {/*                    <div className="self-stretch text-neutral-400 text-xs font-normal">O atual sistema político precisa mudar para valorizar o trabalho e garantir igualdade de oportunidad</div>*/}
      {/*                    <div className="self-stretch justify-start items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-[#E4B895] text-xs font-normal">See Tweet</div>*/}
      {/*                        <div className="w-4 h-4 relative"/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className="self-stretch justify-start items-start gap-2.5 inline-flex pb-[16.5px] border-b-[1px] border-[#28344F]">*/}
      {/*                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32"/>*/}
      {/*                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">*/}
      {/*                    <div className="justify-center items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-white text-sm font-medium leading-tight">Nevo David</div>*/}
      {/*                        <div className="text-neutral-500 text-[10px] font-normal uppercase tracking-wide">05/06/2024</div>*/}
      {/*                    </div>*/}
      {/*                    <div className="self-stretch text-neutral-400 text-xs font-normal">O atual sistema político precisa mudar para valorizar o trabalho e garantir igualdade de oportunidad</div>*/}
      {/*                    <div className="self-stretch justify-start items-center gap-1 inline-flex">*/}
      {/*                        <div className="text-[#E4B895] text-xs font-normal">See Tweet</div>*/}
      {/*                        <div className="w-4 h-4 relative"/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  );
};