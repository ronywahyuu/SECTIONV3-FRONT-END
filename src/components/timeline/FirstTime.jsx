const FirstTime = () => {
  return (
    <div className={`flex flex-col animate-fade-in-right `}>
      <div className="flex flex-col">
        <p className="font-bold">Section Talks #1</p>
        <h1 className="text-4xl fonet-bold">Basic Financial Planning</h1>
        <p className="text-white font-medium">22 Desember 2022</p>
      </div>
      <div className="lg:flex hidden flex-col items-center justify-center  mt-5">
        <p className="text-base">
          lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor.
        </p>
      </div>
    </div>
  );
};

export default FirstTime;
