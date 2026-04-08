import { BlogItem } from "./Blog";

type CardProps = {
    blog: BlogItem;
};

const BlogCard = ({ blog }: CardProps) => {
    const { heading, slug, category, date } = blog;

    return (
        <a
            href={slug}
            target="_blank"
            className="group block border-b border-white/10 py-8 lg:py-10 transition hover:bg-white/[0.02]"
        >
            <div className="flex items-center justify-between gap-6">

                {/* LEFT META */}
                <div className="w-[20%] hidden md:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        {category}
                    </p>
                    <p className="text-sm text-white/40 mt-2">{date}</p>
                </div>

                {/* MAIN HEADING */}
                <div className="flex-1">
                    <h2 className="text-[24px] sm:text-[36px] lg:text-[40px] leading-[1.1] font-semibold text-white tracking-tight group-hover:text-white/80 transition">
                        {heading.length > 60 ? heading.slice(0, 60) + '...' : heading}
                    </h2>
                </div>

                {/* RIGHT ARROW */}
                <div className="w-[60px] flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white transition transform group-hover:translate-x-1">
                        →
                    </div>
                </div>
            </div>
        </a>
    );
};

export default BlogCard;






// import { BlogItem } from "./Blog";

// type CardProps = {
//   Card: BlogItem;
// };

// const themes = [
//   "from-[#020617] via-[#0f172a] to-black",
//   "from-[#020617] via-[#111827] to-black",
//   "from-[#020617] via-[#0a0f1f] to-black",
// ];

// const BlogCard = ({ Card }: CardProps) => {
//   const { heading, slug, category, date } = Card;

//   const bg = themes[heading.length % themes.length];

//   return (
//     <a
//       href={slug}
//       target="_blank"
//       className={`group relative block h-[360px] rounded-2xl overflow-hidden border border-white/10 p-8 flex flex-col justify-between ${bg} bg-gradient-to-br`}
//     >
//       {/* TOP: CATEGORY */}
//       <div className="flex justify-between items-start">
//         <span className="text-xs uppercase tracking-[0.2em] text-white/50">
//           {category}
//         </span>

//         <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white transition">
//           →
//         </div>
//       </div>

//       {/* CENTER: BIG HEADING */}
//       <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.1] font-semibold text-white tracking-tight">
//         {heading}
//       </h2>

//       {/* BOTTOM: DATE */}
//       <div className="flex justify-between items-end">
//         <p className="text-sm text-white/40">{date}</p>

//         <span className="text-sm text-white/50 group-hover:text-white transition">
//           Read more
//         </span>
//       </div>

//       {/* HOVER GLOW */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

//       {/* SUBTLE OVERLAY */}
//       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />
//     </a>
//   );
// };

// export default BlogCard;