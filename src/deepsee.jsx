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

// Menu ka data
const menuItems = [
  {
    title: "Students",
    children: ["Student Add/Edit Screen", "Student List Screen", "Transfer Student Screen"],
  },
  {
    title: "Teacher",
    children: ["Teacher Add/Edit Screen", "Teacher List Screen", "Teacher Allocation Screen"],
  },
  {
    title: "Fees",
    children: ["Fee Structure Screen", "Fee Submission Screen", "Fee Voucher Screen"],
  },
  {
    title: "Exams",
    children: ["Exam Schedule Screen", "Exam Result Screen"],
  },
  {
    title: "Subjects",
    children: ["Subject Add/Edit Screen", "Subject List Screen"],
  },
  // Aur bhi menu items yahan add kar sakte ho...
];

export default function ProductTree() {
  // State jo batayega ki kaun sa menu open hai
  const [openMenus, setOpenMenus] = useState({});

  // Function jo menu ko open/close karega
  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Function jo handle karega sub-item pe click
  const handleSubItemClick = (menuTitle, childText) => {
    console.log("Menu Title:", menuTitle);
    console.log("Child Text:", childText);

    // Har ek menu ke liye alag function call karo
    if (menuTitle === "Students") {
      handleStudentsClick(childText);
    } else if (menuTitle === "Teacher") {
      handleTeacherClick(childText);
    } else if (menuTitle === "Fees") {
      handleFeesClick(childText);
    } else if (menuTitle === "Exams") {
      handleExamsClick(childText);
    } else if (menuTitle === "Subjects") {
      handleSubjectsClick(childText);
    } else {
      console.log("Unknown Menu Title:", menuTitle);
    }
  };

  // Students ke sub-items ke liye ek hi function
  const handleStudentsClick = (childText) => {
    if (childText === "Student Add/Edit Screen") {
      console.log("Student Add/Edit Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Student List Screen") {
      console.log("Student List Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Transfer Student Screen") {
      console.log("Transfer Student Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else {
      console.log("Unknown Student Screen clicked");
    }
  };

  // Teacher ke sub-items ke liye ek hi function
  const handleTeacherClick = (childText) => {
    if (childText === "Teacher Add/Edit Screen") {
      console.log("Teacher Add/Edit Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Teacher List Screen") {
      console.log("Teacher List Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Teacher Allocation Screen") {
      console.log("Teacher Allocation Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else {
      console.log("Unknown Teacher Screen clicked");
    }
  };

  // Fees ke sub-items ke liye ek hi function
  const handleFeesClick = (childText) => {
    if (childText === "Fee Structure Screen") {
      console.log("Fee Structure Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Fee Submission Screen") {
      console.log("Fee Submission Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Fee Voucher Screen") {
      console.log("Fee Voucher Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else {
      console.log("Unknown Fee Screen clicked");
    }
  };

  // Exams ke sub-items ke liye ek hi function
  const handleExamsClick = (childText) => {
    if (childText === "Exam Schedule Screen") {
      console.log("Exam Schedule Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Exam Result Screen") {
      console.log("Exam Result Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else {
      console.log("Unknown Exam Screen clicked");
    }
  };

  // Subjects ke sub-items ke liye ek hi function
  const handleSubjectsClick = (childText) => {
    if (childText === "Subject Add/Edit Screen") {
      console.log("Subject Add/Edit Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else if (childText === "Subject List Screen") {
      console.log("Subject List Screen clicked");
      // Yahan tum koi aur action perform kar sakte ho
    } else {
      console.log("Unknown Subject Screen clicked");
    }
  };

  return (
    <div style={{ width: "25vw", height: "100vh", display: "flex" }}>
      <List
        sx={{
          width: "100%",
          maxWidth: 300,
          bgcolor: "#111827",
          color: "white",
          padding: 3,
          margin: 0,
          height: "100vh",
          overflowY: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {menuItems.map((item, index) => (
          <div key={index}>
            {/* Menu ka title aur expand/collapse button */}
            <ListItemButton
              onClick={() => toggleMenu(item.title)}
              sx={{ pl: 0 }}
            >
              <ListItemText primary={item.title} />
              {openMenus[item.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Collapsible content (children) */}
            <Collapse in={openMenus[item.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 0 }}>
                {item.children.map((child, idx) => (
                  <ListItemButton
                    key={idx}
                    sx={{ pl: 2 }}
                    onClick={() => handleSubItemClick(item.title, child)} // Sub-item ka click handle karega
                  >
                    <ListItemIcon>
                      <FiberManualRecordIcon sx={{ fontSize: 8, color: "green" }} />
                    </ListItemIcon>
                    <ListItemText primary={child} />
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