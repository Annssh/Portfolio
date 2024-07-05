import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Online Voting app using Blockchain",
    img: "/OVS1.jpg",
    desc: "This full stack application helps to organize polling or voting in decentralized way. Only registered candidate can vote and admin can see result in visualization form. User Authentication and Authorization, Voter registration, User-friendly interface, Anonymous voting, Auditing and Verification. Blockchain make every transaction of vote very safe and authenticate with decentralized system and servers, so there is a safety layer of blockchain for every transaction of vote from user to contestant",
  },
  {
    id: 2,
    title: "Video Conferencing App",
    img: "/Wave.jpg",
    desc: "Wave is a video conferencing application in which multiple users can make a room and did a meeting with video and audio facility.This also provide facility of recording and storing it. Video and audio call is done with help of Stream JS library and validation of user is done by clerk authentication. This application is made with vibrant technology Next-Js.",
  },
  {
    id: 3,
    title: "Doctor Appointment Booking Application ",
    img: "/DABA.jpg",
    desc: "This application helps patient to make contact with doctors and help them to book an appointment.	Here all interaction is private, safe and secure with authorization. Doctor Availability Management, Patient records management, Appointment remainders, Payment processing using Rayzor Pay.",
  },
  {
    id: 4,
    title: "Chat Application ",
    img: "/TAT.jpg",
    desc: "Created an application having functionality of one-to-one chat, group chat, create new group and many more. Functionality of Video call, Voice call in app. User Authentication, Real-time messaging, File sharing, Search functionality.	Responsive and user-friendly interface.",
  },
];

const Single = ({ item }) => {
  // const handleClick = (e) => {
  //   window.open(e, "_blank");
  // };
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYprogress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYprogress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
