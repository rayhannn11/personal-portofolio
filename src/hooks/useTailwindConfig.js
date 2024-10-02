import useThemeStore from '../hooks/themeStore.js';

export default () => {
  const { theme } = useThemeStore();

  return {
    navbar: theme === 'light' ? 'bg-[#fff] border-b border-[#e2e2e2]' : 'bg-[#10172A]',
    highlightFont: theme === 'light' ? 'text-[#2C2C2C]' : 'text-[#8576EC]',
    lightMode: 'transition ease-in-out duration-350',
    darkMode: 'border-white-200 dark:border-gray-700',
  };
};
