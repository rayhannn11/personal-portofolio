import useThemeStore from '../hooks/themeStore';

export default function ThemeProvider({ children }) {
  const { theme } = useThemeStore();
  return (
    <div
      className={`min-h-screen ${
        theme === 'light'
          ? 'bg-[#fff] text-gray-700 ' // Light theme classes
          : 'bg-[#10172A] text-gray-200' // Dark theme classes
      }`}>
      {children}
    </div>
  );
}
