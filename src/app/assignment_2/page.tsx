
function assignment_2(): JSX.Element {
  return (
    <section className="flex flex-col h-full">
      <div className="flex flex-row justify-center items-center gap-5 p-2 h-full">
        <div className="h-52 w-1/2 border-2 border-white"><img src="/recipegen.png" alt="" className="h-full w-full"/></div>
        <div className="h-52 w-1/2 border-2 border-white"><img src="/nutri.png" alt="" className="h-full w-full"/></div>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 p-2">
        <div className="border-2 border-white"><img src="/recipegen.png" alt="" className="w-full"/></div>
        <div className="border-2 border-white"><img src="/nutri.png" alt=""className="w-full" /></div>
        <div className="border-2 border-white"><img src="/recipegen.png" alt="" className="w-full"/></div>
      </div>
    </section>
  );
};

export default assignment_2;