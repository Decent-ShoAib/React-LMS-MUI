import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Students",
    children: [
      { name: "Student Add/Edit Screen", path: "/students-add" },
      { name: "Student List Screen", path: "/studentsList" },
    ],
  },
  {
    title: "Teacher",
    children: [
      { name: "Teacher Add/Edit Screen", path: "/teachers-add" },
      { name: "Teacher List Screen", path: "/teachersList" },
    ],
  },
  {
    title: "School",
    children: [{ name: "Registration", path: "/schoolRegistration" }],
  },
  {
    title: "Syllabus",
    children: [
      { name: "Syllabus Form", path: "/syllabusForm" },
      { name: "Syllabus List Screen", path: "/syllabusList" },
    ],
  },
  {
    title: "Classes",
    children: [
      { name: "Class Form Screen", path: "/classForm" },
      { name: "Class List Screen", path: "/classList" },
    ],
  },
  {
    title: "Fees",
    children: [
      { name: "Fee Structure Screen", path: "/feeStructure" },
      { name: "Fee Submission Screen", path: "/feeSubmission" },
      { name: "Fee Voucher Screen", path: "/feeVoucher" },
    ],
  },
  {
    title: "Admission",
    children: [{ name: "Admission Screen", path: "/admission" }],
  },
  {
    title: "Exams",
    children: [
      { name: "Exam Schedule Screen", path: "/examSchedule" },
      { name: "Exam Result Screen", path: "/examResult" },
    ],
  },
  {
    title: "Subjects",
    children: [
      { name: "Subject Add/Edit Screen", path: "/subjectAdd" },
      { name: "Subject List Screen", path: "/subjectList" },
    ],
  },
];

export default function LmsScreen() {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState(null); // ✅ Correct state variable

  const toggleMenu = (title) => {
    setOpenMenus((prev) => (prev === title ? null : title)); // ✅ Correct function name
  };

  return (
    <div style={{ width: "25vw", height: "100vh", display: "flex" }}>
      <List
        sx={{
          width: "300px",
          bgcolor: "white",
          color: "black",
          padding: 3,
          margin: 0,
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
          left: 0,
          top: "64px",
          bottom: 0,
          zIndex: 1300,
          boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
        }}
      >
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={() => toggleMenu(item.title)} sx={{ pl: 0 }}>
              <ListItemText primary={item.title} />
              {openMenus === item.title ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMenus === item.title} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 0 }}>
                {item.children.map((child, idx) => (
                  <ListItemButton key={idx} sx={{ pl: 2 }} onClick={() => navigate(child.path)}>
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ fontSize: 8, color: "green" }} />
                    </ListItemIcon>
                    <ListItemText primary={child.name} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}
