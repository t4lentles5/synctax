import { MobileSettingsNavItem, SettingsView } from '@features/settings';

export default function SettingsPage() {
  return (
    <div className='flex w-full max-w-3xl flex-col gap-5 p-10 lg:max-w-4xl'>
      <div>
        <h1 className='text-3xl font-medium'>Settings</h1>
        <h2 className='text-foreground-muted'>
          Manage your profile and preferences
        </h2>
      </div>

      <SettingsView />
      <MobileSettingsNavItem />
    </div>
  );
}
