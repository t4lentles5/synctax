import { settingsNavItems } from '@lib/data/navigation';
import { SettingsNavItem } from './SettingsNavItem';

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const SettingsNav = ({ activeTab, onTabChange }: Props) => {
  return (
    <nav className='flex grow flex-col gap-3 md:grow-0'>
      {settingsNavItems.map((item) => (
        <SettingsNavItem
          icon={item.icon}
          tab={item.tab}
          key={item.tab}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      ))}
    </nav>
  );
};
