export const MoreOptionsButton = () => {
  return (
    <button className='hover:bg-background-hover flex w-56 cursor-pointer items-center gap-2 rounded-lg px-5 py-3 transition-colors duration-300 ease-in-out'>
      <span
        className='icon-[stash--burger-classic] size-6'
        role='img'
        aria-hidden='true'
      />
      <span
        className='icon-[stash--burger-classic-light] size-6'
        role='img'
        aria-hidden='true'
      />
      <span className='text-lg'>More</span>
    </button>
  );
};
