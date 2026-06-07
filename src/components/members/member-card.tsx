import { FC, useState } from "react";
import { IMembers } from "@/common/types";
import {
  Calendar,
  Briefcase,
  Church,
  MapPin,
  Phone,
  Mail,
  Home,
  Plus,
  X,
} from "lucide-react";

interface IMemberCard {
  data: IMembers;
}

const MemberCard: FC<IMemberCard> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const initials = data.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const details = [
    { icon: Calendar, label: "Member since", value: data.yearJoined, href: undefined },
    { icon: Briefcase, label: "Profession", value: data.profession, href: undefined },
    { icon: Church, label: "Home Parish", value: data.homeParish, href: undefined },
    { icon: MapPin, label: "Domiciliary Parish", value: data.domParish, href: undefined },
    { icon: Home, label: "Address", value: data.Address, href: undefined },
    { icon: Phone, label: "Phone", value: data.phoneNumber, href: data.phoneNumber ? `tel:${data.phoneNumber}` : undefined },
    { icon: Mail, label: "Email", value: data.email, href: data.email ? `mailto:${data.email}` : undefined },
  ].filter((d) => d.value);

  return (
    <div className="drop-shadow-lg rounded-xl overflow-hidden relative hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
      {/* Photo or initials */}
      {data.img ? (
        <img
          src={data.img}
          alt={data.imgDescription}
          className="object-cover object-top w-full h-[25rem]"
        />
      ) : (
        <div className="w-full h-[25rem] bg-accent-100 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-primary-500 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-black text-white">{initials}</span>
          </div>
        </div>
      )}

      {/* Name footer */}
      <div className="flex flex-col gap-1 text-center p-3 bg-white">
        <h2 className="text-xl text-primary-500 font-bold">{data.name}</h2>
        <p className="text-sm uppercase font-light text-gray-400">
          {data.position}
        </p>
      </div>

      {/* Slide-up detail overlay */}
      <div
        className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        {/* Teal header */}
        <div className="bg-primary-500 px-5 py-5 flex-shrink-0 relative flex items-center gap-4 pr-14">
          {data.img ? (
            <img
              src={data.img}
              alt={data.imgDescription}
              className="w-16 h-16 rounded-full object-cover object-top border-2 border-white/60 shadow flex-shrink-0"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 shadow flex-shrink-0 flex items-center justify-center">
              <span className="text-xl font-black text-white">{initials}</span>
            </div>
          )}
          <div className="min-w-0">
            <p className="font-black text-white text-base leading-tight truncate">{data.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mt-1">
              {data.position}
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable details */}
        <div className="overflow-y-auto flex-1 px-4 py-4 bg-white flex flex-col gap-3">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="text-primary-500" size={14} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold leading-none mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="text-sm text-primary-500 font-medium break-words underline underline-offset-2">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-700 font-medium break-words">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plus button — hidden when no details or overlay is open */}
      {details.length > 0 && (
        <button
          onClick={() => setOpen(true)}
          className={`absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Plus className="text-primary-500" size={20} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default MemberCard;
