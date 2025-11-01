export const MoreOptionsButton = () => {
  return (
    <button className='flex rounded-lg py-3 px-5 transition-colors duration-300 ease-in-out hover:bg-background-hover items-center w-56 gap-2 cursor-pointer'>
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
