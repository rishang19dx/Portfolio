import {
    iitmd,
    deimos,
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    carrent,
    jobit,
    tripguide,
    threejs,
    ros2,
    moveit,
    arm,
    django,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ROS Developer",
      icon: web,
    },
    {
      title: "Django Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "ROS2",
      icon: ros2,
    },
    {
      name: "MoveIt",
      icon: moveit,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Winter Intern",
      company_name: "SCEE, IIT Mandi",
      icon: iitmd,
      iconBg: "#383E56",
      date: "December 2024 - Present",
      points: [
        "Working on the project - 'Cross modality Fusion using AI'",
        "Leveraged deep learning for stage-specific colon cancer analysis using morphometric features.",
        "Studying a multi-tasking U-Net model for segmentation and classification in histopathology.",
      ],
    },
    {
      title: "Software Team Member",
      company_name: "Team Deimos - Mars Rover Team, IIT Mandi",
      icon: deimos,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Developing a ROS based software stack for the Mars Rover.",
        "Implemented forward kinematics for the 6-DOF robotic arm.",
        "Currently working on autonomous typing using YOLOV8 and OpenCV.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Robotic Arm Simulation",
      description:
        "A 6-DOF robotic arm simulated using Gazebo and rViz that can be controlled using ROS and MoveIt. It can be used for autonmous typing, pick and place tasks. Worked in a team of 4, under team Deimos.",
      tags: [
        {
          name: "ros",
          color: "blue-text-gradient",
        },
        {
          name: "gazebo",
          color: "green-text-gradient",
        },
        {
          name: "moveit",
          color: "pink-text-gradient",
        },
      ],
      image: arm,
      source_code_link: "https://github.com/Team-Deimos-IIT-Mandi/Robotic_Arm",
    },
    {
      name: "Autonmous Navigation of turtlebot3",
      description:
        "A ROS based project where a turtlebot3 robot is made to navigate autonomously in a given environment using SLAM and AMCL.",
      tags: [
        {
          name: "ros",
          color: "blue-text-gradient",
        },
        {
          name: "gazebo",
          color: "green-text-gradient",
        },
        {
          name: "nav",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rishang19dx/Task_1_Autonomous_Navigation",
    },
    {
      name: "Aruco Marker Detection",
      description:
        "A ROS and OpenCV based project where a turtlebot3 robot is made to detect Aruco markers and navigate to them.",
      tags: [
        {
          name: "ros",
          color: "blue-text-gradient",
        },
        {
          name: "gazebo",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.https://github.com/rishang19dx/Task_3A_Aruco_Marker_Detection/",
    },
  ];
  
  export { services, technologies, experiences, projects };