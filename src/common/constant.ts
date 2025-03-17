import {
  IProjects,
  IImageData,
  IMembers,
  INav,
  ICaritasHistory,
} from "./types";
import JosephEtukImg from "@/assets/images/members/joseph_etuk.png";
import FelicitaImg from "@/assets/images/members/MaFelicita.png";
import GerardInohIimg from "@/assets/images/members/gerard_inoh.png";
import EkobokeImg from "@/assets/images/members/Mr._Ekeboke_Francis.png";

export const ImageDataList: Array<IImageData> = [
  {
    id: 1,
    imageLink:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "Books on a table",
  },
  {
    id: 2,
    imageLink:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Kid reading",
  },
  {
    id: 3,
    imageLink:
      "https://images.unsplash.com/photo-1591253363983-41adcdba3ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5vbiUyMHByb2ZpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description: "protesting for a better cause",
  },
  {
    id: 4,
    imageLink:
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
    description: "Humanitarian aid",
  },
  {
    id: 5,
    imageLink:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "Food packages",
  },
  {
    id: 6,
    imageLink:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNodXJjaCUyMGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    description: "Smiling children",
  },
  {
    id: 7,
    imageLink:
      "https://images.unsplash.com/photo-1622037022630-9fd9c076e565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9nZXRoZXJuZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    description: "togetherness",
  },
  {
    id: 8,
    imageLink:
      "https://plus.unsplash.com/premium_photo-1661602481757-f9e91fb2d3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvZ2V0aGVybmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description: "people together",
  },
  {
    id: 9,
    imageLink:
      "https://images.unsplash.com/photo-1544390409-8b6412683bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpdmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description: "out in the beach",
  },
];

export const membersDataList: Array<IMembers> = [
  {
    id: 1,
    img: null,
    name: "Dr. Emmanuel Philip Effiong",
    imgDescription: "Dr. Emmanuel Philip Effiong",
    phoneNumber: "",
    position: "Eldest",
    profession: "Doctor",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 2,
    img: JosephEtukImg,
    name: "Sir. Joseph Michael Etuk",
    imgDescription: "Image of Joseph Michael Etuk",
    position: "Assistant Eldest",
    profession: "Town Planner",
    phoneNumber: "08023229907",
    email: "Jmet_al@yahoo.com",
    homeParish: "St James Parish, Ibam Edet, Akwa Ibom State, Nigeria",
    domParish: "St John, 72 Abak Road, Uyo,  Akwa Ibom State,  Nigeria",
    Address:
      "No 1 Bishop Moynagh Pastoral Centre Lane,Uyo Akwa Ibom State, Nigeria",
    yearJoined: "September, 1998",
  },
  {
    id: 3,
    img: null,
    name: "Obong Joseph Etim Ibok",
    imgDescription: "Image of Obong Joseph Etim Ibok",
    phoneNumber: "",
    position: "Secretary",
    profession: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 4,
    img: null,
    name: "Dr. Alfred Udo Udoh",
    imgDescription: "Image of Alfred Udoh",
    position: "Assitant Secretary",
    profession: "Agriculturist",
    phoneNumber: "0803 389 2976",
    email: "Udohfred7@gmail.com",
    homeParish: "St Anthony's, Mbiabong Ikot Udofia",
    domParish: "Sacred Heart Parish, Aka Offot Uyo",
    Address: "Ikot Akpan Abia, Ibesikpo Asutan",
    yearJoined: "March, 2015",
  },
  {
    id: 5,
    img: null,
    name: "Mr. Sylvester Okon Akpan",
    imgDescription: "Image of Mr. Sylvester Akpan",
    position: "Treasurer",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 6,
    img: GerardInohIimg,
    name: "Mr. Gerald Gordian Inoh",
    imgDescription: "Image of Gerald Gordian Inoh",
    phoneNumber: "08023352977",
    position: "Financial Secretary/ Public Relations Officer",
    profession: "Scientist",
    email: "",
    homeParish: "St. Theresa Parish, Ikot Edibon, Nsit Uboum",
    domParish: "St John, 72 Abak Road, Uyo,  Akwa Ibom State,  Nigeria",
    Address: "Cardinal Ekanem Road, Ik. Adaidem, Ibiono",
    yearJoined: "May, 2013",
  },
  {
    id: 7,
    img: null,
    name: "Mr. Dominic Udoette",
    imgDescription: "Image of Dominic Udoette",
    position: "provost",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 8,
    img: null,
    name: "Mr. Anthony Offiong",
    imgDescription: "Image of Mr. Anthony Offiong",
    position: "Wellface Officer",
    profession: "Treasurer",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 9,
    img: null,
    name: "Mr. Obong Anthony Okpon",
    imgDescription: "Image of Obong Anthony Okpo",
    position: "member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 10,
    img: null,
    name: "Prof. Emmanuel Udofia",
    imgDescription: "Image of Prof. Emmanuel Udofia",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 11,
    img: null,
    name: "Dr. Nsikan Linus Nkan",
    imgDescription: "Image of Dr. Nsikan Linus Nkan",
    position: "Member",
    profession: "Commissioner",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 12,
    img: null,
    name: "Mr. Oliver Udoukpo",
    imgDescription: "Image of Mr. Oliver Udoukpo",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 13,
    img: null,
    name: "Mr. Patrick Usanga",
    imgDescription: "Image of Mr. Patrick Usanga",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 14,
    img: null,
    name: "Mr. Ephraim Nkanga",
    imgDescription: "Image of Mr. Ephraim Nkanga",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 15,
    img: null,
    name: "Barr. Godwin Gabriel Umoh",
    imgDescription: "Image of Barr. Godwin Gabriel Umoh",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 16,
    img: null,
    name: "Mr. James Ukpong",
    imgDescription: "Image of Mr. James Ukpong",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
  {
    id: 17,
    img: FelicitaImg,
    name: "Professor Felicia S. Ekpu",
    imgDescription: "Image of Joseph Michael Etuk",
    position: "Member",
    profession: "Professor",
    phoneNumber: "08033283612",
    email: "effsatt@gmail.com",
    homeParish: "St. Peter Parish, Adiasim, Essien Udim LGA",
    domParish: "St John, 72 Abak Road, Uyo,  Akwa Ibom State,  Nigeria",
    Address: "Department of Human Kinetics, University of Uyo, Nigeria",
    yearJoined: "December, 2022",
  },
  {
    id: 18,
    img: EkobokeImg,
    name: "Mr.  Ekoboke Joseph",
    imgDescription: "Image of Ekoboke Joseph",
    position: "Member",
    profession: "",
    phoneNumber: "",
    email: "",
    homeParish: "",
    domParish: "",
    Address: "",
    yearJoined: "",
  },
];

export const ongoingProjects: Array<IProjects> = [
  {
    id: 1,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "24 Nwaniba, Uyo",
    image:
      "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
  {
    id: 2,
    header: "Renovate afagha church building",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "Ewet Housing, Uyo",
    image:
      "https://images.unsplash.com/photo-1682685794690-dea7c8847a50?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
  {
    id: 3,
    header: "Buy seats for St. John",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "Abak road, Uyo",
    image:
      "https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
  {
    id: 4,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
  {
    id: 5,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
  {
    id: 6,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: true,
  },
];

export const completedProjects: Array<IProjects> = [
  {
    id: 1,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "24 Nwaniba, Uyo",
    image:
      "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
  {
    id: 2,
    header: "Renovate afagha church building",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "Ewet Housing, Uyo",
    image:
      "https://images.unsplash.com/photo-1682685794690-dea7c8847a50?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
  {
    id: 3,
    header: "Buy seats for St. John",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "Abak road, Uyo",
    image:
      "https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
  {
    id: 4,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
  {
    id: 5,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
  {
    id: 6,
    header: "Feed Hungry Children",
    description:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    location: "St. Pauls nursery/primary school, Mkpatak",
    image:
      "https://images.unsplash.com/photo-1698793916605-d0e44deb650e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    inProgress: false,
  },
];

export const navItems: Array<INav> = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About Us",
    link: "/aboutus",
  },
  {
    id: 3,
    label: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    label: "Members",
    link: "/members",
  },
  {
    id: 5,
    label: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    label: "Contact Us",
    link: "/contactus",
  },
  // {
  //   id: 7,
  //   label: "Admin",
  //   link: "/admin",
  // },
];

export const caritasHistory: Array<ICaritasHistory> = [
  {
    id: 1,
    title: "Birth of the Foundation at St. John Parish, Uyo",
    paragraph:
      "The history of what is now known as Caritas Christian Elders Foundation began at St. John Parish, Abak Road, Uyo, in 1996. Ephraim Anthony Nkanga started hosting his Catholic friends — both priests and lay faithful — at his home on House of Assembly Road, Uyo, to ease the boredom of Easter Monday holidays. The original group included Dr. Emmanuel Philip Effiong, Mr. Boniface Udo Udo, Mr. Nsikan Linus Nkan, Dr. Emmanuel Peter Udofia, Barrister Godwin Gabriel Umoh, Mr. Patrick Dominic Usanga, Mr. Oliver Otu Udoukpo, Mr. Sylvester Okon Akpan, Barrister Christopher Michael Inwang, Mr. Iniobong Michael Eka, Mr. Patrick Udo, Mr. Michael Inyang, and Mr. Anthony Akpanobong (of Blessed Memory). Eventually, five pioneer members dropped out of the Foundation.",
    timeline: "1998",
    display: true,
  },
  {
    id: 2,
    title: "Formation of St. John Mass Centre",
    paragraph:
      "Shortly before the creation of St. John Mass Centre, the group, being senior members of the Youth Mass Centre, were selected to serve in the Church Council. When the Mass Centre was elevated to a Quasi-Parish, these members retained their roles.",
    timeline: "Late 1990s",
    display: true,
  },
  {
    id: 3,
    title: "Parish Conflict and Strengthened Brotherhood",
    paragraph:
      "After the Mass Centre became a full parish, the Council members were tasked with defending parish finances, which brought them into direct confrontation with the parish priest. The persecution that followed only strengthened the bond of brotherhood among the Council members, leading them to formalize their meetings with the goal of spreading the Catholic faith beyond the reach of the Irish missionaries.",
    timeline: "Early 2000s",
    display: false,
  },
  {
    id: 4,
    title: "The Name 'Elders Forum' is Born",
    paragraph:
      "When Bishop Joseph Ekuwem (then Bishop of Uyo) ruled in favor of the former Council members, the group adopted the name Elders Forum. The name came from Ephraim Anthony Nkanga and Patrick Dominic Usanga, who were already affectionately called “Elders” by parishioners for their active roles in the parish.",
    timeline: "Early 2000s",
    display: true,
  },
  {
    id: 5,
    title:
      "Registration with CAC — Official Naming of Caritas Christian Elders Foundation",
    paragraph:
      "During registration with the Corporate Affairs Commission (CAC), the group was officially named Caritas Christian Elders Foundation, which remains its name to this day.",
    timeline: "Mid 2010s",
    display: true,
  },
  {
    id: 6,
    title: "Leadership Milestones",
    paragraph:
      "In the early days, Dr. Emmanuel Philip Effiong led the Foundation while serving as Parish Council Chairman, but his demanding medical practice made it difficult to continue. The group then unanimously chose Mr. Boniface Udo Udo, known for his management expertise, to lead. He became the first to hold the title of “The Eldest of the Elders”, while Dr. Effiong stepped into the role of Assistant Eldest.",
    timeline: "Timeless",
    display: true,
  },
  {
    id: 7,
    title: "Meeting Locations",
    paragraph:
      "Initially, the Foundation held its meetings at Ephraim Anthony Nkanga’s residence on House of Assembly Road, Uyo. However, as membership grew, meetings were moved to Number 14, Akpan Etuk Street, where Elder Anthony Effiong Okpon prepared a dedicated meeting hall for the group.",
    timeline: "Mid 2000s",
    display: false,
  },
];
