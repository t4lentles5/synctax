'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { SettingsNav } from './SettingsNav';
import { AccountSettings } from './AccountSettings';
import { AppearanceSettings } from './AppearanceSettings';
import { ProfileSettings } from './ProfileSettings';
import { SecuritySettings } from './SecuritySettings';

const validTabs = ['profile', 'account', 'security', 'appearance'];

export const SettingsView = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get('tab') || 'profile';

  const handleTabChange = (tab: string) => {
    router.push(`/settings?tab=${tab}`);
  };

  useEffect(() => {
    if (!validTabs.includes(activeTab)) {
      router.replace('/settings?tab=profile');
    }
  }, [activeTab, router]);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'appearance':
        return <AppearanceSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className='flex flex-col gap-10 md:flex-row'>
      <SettingsNav activeTab={activeTab} onTabChange={handleTabChange} />

      <div className='border-border grow rounded-lg border p-8'>
        {renderContent()}
      </div>
    </div>
  );
};
