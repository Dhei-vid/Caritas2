import {
  IProjects,
  IImageData,
  IMembers,
  INav,
  ICaritasHistory,
} from "./types";
import JosephEtukImg from "@/assets/images/members/joseph_etuk.jpg";
import FelicitaImg from "@/assets/images/members/Prof. Felicitia Ekpu.jpg";
import GerardInohIimg from "@/assets/images/members/gerard_inoh.jpg";
import EkobokeImg from "@/assets/images/members/Mr. Ekeboke Francis.jpg";

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
    img: GerardInohIimg,
    name: "Mr. Gerald Gordian Inoh",
    imgDescription: "Image of Gerald Gordian Inoh",
    phoneNumber: "08023352977",
    profession: "Scientist",
    email: "Jmet_al@yahoo.com",
    homeParish: "St. Theresa Parish, Ikot Edibon, Nsit Uboum",
    domParish: "St John, 72 Abak Road, Uyo,  Akwa Ibom State,  Nigeria",
    Address: "Cardinal Ekanem Road, Ik. Adaidem, Ibiono",
    yearJoined: "May, 2013",
  },
  {
    id: 2,
    img: JosephEtukImg,
    name: "Sir. Joseph Michael Etuk",
    imgDescription: "Image of Joseph Michael Etuk",
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
    img: FelicitaImg,
    name: "Professor Felicia S. Ekpu",
    imgDescription: "Image of Joseph Michael Etuk",
    profession: "Professor",
    phoneNumber: "08033283612",
    email: "effsatt@gmail.com",
    homeParish: "St. Peter Parish, Adiasim, Essien Udim LGA",
    domParish: "St John, 72 Abak Road, Uyo,  Akwa Ibom State,  Nigeria",
    Address: "Department of Human Kinetics, University of Uyo, Nigeria",
    yearJoined: "December, 2022",
  },
  {
    id: 4,
    img: EkobokeImg,
    name: "Mr. Ekeboke Francis",
    imgDescription: "Image of Inoh Gerard Gordon",
    profession: "Manager",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Mr. Patrick Dominic Usanga",
    imgDescription: "Image of Patrick Usanga Dominic",
    profession: "Manager",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Mrs. Felicia Saturday Ekpu",
    imgDescription: "Image of Felicia Saturday Ekpu",
    profession: "Financial Secretary",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Prof. Emmanuel Peter Udofia",
    imgDescription: "Image of Emmanuel Peter Udofia",
    profession: "Treasurer",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Dr. Alfred Udoh",
    imgDescription: "Image of Alfred Udoh",
    profession: "Treasurer",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "OBONG James Etim Ukpong",
    imgDescription: "Image of Emmanuel Peter Udofia",
    profession: "Treasurer",
  },
  {
    id: 10,
    // img: `src\assets\images\members\Mr. Ekeboke Francis.jpg`,
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Mr. Ekeboke Luke Joseph",
    imgDescription: "Image of Ekeboke Luke Joseph",
    profession: "Treasurer",
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
