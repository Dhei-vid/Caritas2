const Slogan = () => {
  return (
    <section className="bg-primary-500 p-16 mb-28 px-5 md:px-20">
      <p className="text-xs uppercase tracking-widest text-white/50 font-semibold text-center mb-12">
        The Foundation Slogan
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
        {/* SAY */}
        <div className="flex flex-col items-center md:items-end md:pr-12 gap-2">
          <p className="text-sm uppercase tracking-widest text-white/60 font-bold">
            Say
          </p>
          <p className="text-7xl md:text-9xl font-black text-white uppercase tracking-tight leading-none">
            Caritas
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 md:my-0 md:mx-14 flex md:flex-col items-center gap-2">
          <div className="w-16 md:w-px h-px md:h-16 bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-16 md:w-px h-px md:h-16 bg-white/20" />
        </div>

        {/* RESPONSE */}
        <div className="flex flex-col items-center md:items-start md:pl-12 gap-2">
          <p className="text-sm uppercase tracking-widest text-white/60 font-bold">
            Response
          </p>
          <p className="text-3xl md:text-5xl font-black text-white/90 leading-snug text-center md:text-left">
            One Lord <span className="text-white/30 font-light">·</span> One Faith{" "}
            <span className="text-white/30 font-light">·</span> One Baptism
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
