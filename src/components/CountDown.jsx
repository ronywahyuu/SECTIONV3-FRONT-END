const CountDown = ({
    days,
    hours,
    minutes,
    seconds,
}) => {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p>Hitung mundur sebelum penutupan pendaftaran</p>
      <div className="flex justify-between  w-full">
        <div className="flex flex-col items-center justify-center  rounded-lg w-24 h-24">
          <p className="md:text-7xl text-4xl font-bold">00</p>
          <p className="text-base">Hari</p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-lg w-24 h-24">
          <p className="md:text-7xl text-4xl font-bold">00</p>
          <p className="text-base">Jam</p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-lg w-24 h-24">
          <p className="md:text-7xl text-4xl font-bold">00</p>
          <p className="text-base">Menit</p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-lg w-24 h-24">
          <p className="md:text-7xl text-4xl font-bold">00</p>
          <p className="text-base">Detik</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
