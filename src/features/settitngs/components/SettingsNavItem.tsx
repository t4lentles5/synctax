interface Props {
  icon: string;
  tab: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const SettingsNavItem = ({
  icon,
  tab,
  activeTab,
  onTabChange,
}: Props) => {
  return (
    <button
      onClick={() => onTabChange(tab)}
      className={`${activeTab === tab ? 'bg-primary text-foreground' : 'hover:bg-background-hover text-foreground-muted'} border-border md:border-background flex h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 transition-colors duration-300 ease-in-out md:w-52`}
    >
      <span className={`${icon} size-5`} role='img' aria-hidden='true' />
      <span className='font-medium capitalize'>{tab}</span>
    </button>
  );
};
