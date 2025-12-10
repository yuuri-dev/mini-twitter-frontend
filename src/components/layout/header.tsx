import React from 'react';

type Props = {
  onToggleSidebar?: () => void;
};

const Header = ({ onToggleSidebar }: Props) => {
  return (
    <div className="w-full h-12 bg-blue-500 flex items-center justify-center px-4">
      {onToggleSidebar && (
        <button
          className="md:hidden absolute left-0 pl-3"
          onClick={onToggleSidebar}
        >
          {/* シンプルな3本線の例 */}
          <span className="block w-6 h-0.5 bg-black mb-1" />
          <span className="block w-6 h-0.5 bg-black mb-1" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
      )}
      <h1 className="text-xl text-white">Twitter</h1>
    </div>
  );
};

export default Header;
