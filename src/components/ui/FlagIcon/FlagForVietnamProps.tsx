type FlagForVietnamProps = {
  size: string | number;
};

const FlagForVietnam = ({ size }: FlagForVietnamProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 64 64"
  >
    <path
      fill="#ec1c24"
      d="M64 44c0 6.075-3.373 11-10 11H10C3.373 55 0 50.075 0 44V22c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11v22"
    />
    <path
      fill="#f9cb38"
      d="m45.43 28.963l-9.997.015l-3.103-10.114l-3.08 10.114l-10.01-.015l8.106 6.157l-3.14 10.05l8.13-6.241l8.147 6.241l-3.147-10.05z"
    />
  </svg>
);

export default FlagForVietnam;
