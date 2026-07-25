import { useNavigate } from "react-router-dom";
import { Box, Tab, Tabs, Container, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
// import logoHome from "../assets/logoHome.jpg";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from '@mui/material/Badge';
// import LoginHeader from "./Login/LoginHeader";

export default function HeaderPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // console.log(user)

  const open = Boolean(anchorEl);

  const handleTabChange = (
    _: React.SyntheticEvent,
    newValue: string
  ) => {
    if (newValue !== "place") {
      setValue(newValue);
      navigate(newValue);
    }
  };

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#001A40",
          boxShadow: "0 4px 12px rgba(0,0,0,.15)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              height: 89,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              {/* <img
                src={logoHome}
                alt="Logo"
                style={{
                  width: 77,
                  height: 77,
                  borderRadius: "100%",
                  objectFit: "cover",
                  filter: "brightness(0) invert(1)", // nếu cần chuyển sang trắng
                }}
              /> */}
            </Box>

            {/* Menu */}
            <Tabs
              value={value}
              onChange={handleTabChange}
              sx={{
                "& .MuiTab-root": {
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  minWidth: 110,
                  transition: "0.3s",
                },

                "& .MuiTab-root:hover": {
                  color: "#FCB620",
                },

                "& .Mui-selected": {
                  color: "#FCB620 !important",
                  fontWeight: 700,
                },

                "& .MuiTabs-indicator": {
                  backgroundColor: "#FCB620",
                  height: 3,
                  borderRadius: 10,
                },
              }}
            >
              <Tab value="/" label="Trang chủ" />
              <Tab label="Giới thiệu" />
               <Tab
                value="place"
                label={
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Điểm đến
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: 18, ml: 0.5 }}
                    />
                  </span>
                }
                onClick={handleOpenMenu}
              />
              <Tab value="/tour" label="Tour" />
              <Tab value="/transport" label="Thuê tàu - xe" />
              <Tab value="/news" label="Tin tức" />
              <Tab value="/contact" label="Liên hệ" />
            </Tabs>

            {/* Đăng nhập */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <IconButton aria-label="show new notifications" sx={{mr: 4}}> 
                    <Badge badgeContent={4} color="error">
                        <ShoppingBagIcon sx={{width: '33px', height: '31.26px', color: '#FFFFFF'}}/>
                    </Badge>
              </IconButton>
              
              {/* <LoginHeader/> */}

            </Box>
          </Box>
        </Container>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          slotProps={{
            list: {
              onMouseLeave: handleCloseMenu,
            },
            paper: {
              sx: {
                minWidth: 220,
                borderRadius: 2,
                mt: 1,
              },
            },
          }}
        >
          <MenuItem
            onClick={() => {
              navigate("/place/tourism");
              handleCloseMenu();
            }}
          >
            Du lịch
          </MenuItem>

          <MenuItem
            onClick={() => {
              navigate("/place/homestay");
              handleCloseMenu();
            }}
          >
            Nơi cư trú
          </MenuItem>

        </Menu>
      </Box>
    </>
  );
}